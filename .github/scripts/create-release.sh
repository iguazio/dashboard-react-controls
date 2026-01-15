#!/bin/bash
# Copyright 2019 Iguazio
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
#
set -e

# This script:
# 1. Reads FINAL_VERSION from package.json bump
# 2. Generates branch-aware release tag (without double suffix)
# 3. Commits package.json changes
# 4. Tags commit
# 5. Pushes commit + tag

# Required env:
# BRANCH
# FINAL_VERSION

if [ -z "$BRANCH" ]; then
  echo "[!] Missing required env var: BRANCH"
  exit 1
fi

if [ -z "$FINAL_VERSION" ]; then
  echo "[!] Missing required env var: FINAL_VERSION"
  exit 1
fi

echo "---------------------------------------------------"
echo "[1] Branch: $BRANCH"
echo "[2] Version from bump script: $FINAL_VERSION"

# -----------------------
# Generate release tag safely
# -----------------------
# Strip numeric version from FINAL_VERSION (in case branch suffix already exists)
NUMERIC_VERSION=$(echo "$FINAL_VERSION" | grep -oE '^[0-9]+\.[0-9]+\.[0-9]+')

if [ "$BRANCH" = "development" ]; then
  RELEASE_TAG="v$NUMERIC_VERSION"
else
  SAFE_BRANCH=$(echo "$BRANCH" | tr '/' '-')
  RELEASE_TAG="v$NUMERIC_VERSION-$SAFE_BRANCH"
fi

echo "[3] Generated release tag: $RELEASE_TAG"
echo "RELEASE_TAG=$RELEASE_TAG" >> "$GITHUB_ENV"

# -----------------------
# Commit version bump
# -----------------------
git config user.name "github-actions[bot]"
git config user.email "github-actions[bot]@users.noreply.github.com"

git add package.json package-lock.json
git commit -m "chore(release): bump version to ${FINAL_VERSION}" || {
  echo "[4] No changes to commit"
}

# -----------------------
# Tag commit
# -----------------------
git tag "${RELEASE_TAG}"
echo "[5] Tagged commit with: ${RELEASE_TAG}"

# -----------------------
# Push commit + tag
# -----------------------
git push origin "$BRANCH"
git push origin "${RELEASE_TAG}"
echo "[6] Pushed commit and tag to origin"
echo "---------------------------------------------------"
