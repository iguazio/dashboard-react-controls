/*
Copyright 2019 Iguazio Systems Ltd.

Licensed under the Apache License, Version 2.0 (the "License") with
an addition restriction as set forth herein. You may not use this
file except in compliance with the License. You may obtain a copy of
the License at http://www.apache.org/licenses/LICENSE-2.0.

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or
implied. See the License for the specific language governing
permissions and limitations under the License.

In addition, you may not use the software for any purposes that are
illegal under applicable law, and the grant of the foregoing license
under the Apache 2.0 license is conditioned upon your compliance with
such restriction.
*/
const fs = require('fs')
const { execSync } = require('child_process')

const targetBranch = process.argv[2]

const getCurrentBranch = () => {
  try {
    return execSync('git rev-parse --abbrev-ref HEAD').toString().trim()
  } catch (err) {
    console.error('Error getting current branch:', err)
    process.exit(1)
  }
}

const currentBranch = getCurrentBranch()

const getVersionFromBranch = branch => {
  try {
    execSync(`git checkout ${branch} -- 'package.json'`)
    const packageJson = fs.readFileSync('package.json', 'utf8')
    const packageJsonParsed = JSON.parse(packageJson)
    return packageJsonParsed.version
  } catch (error) {
    console.error(`Error getting version from branch ${branch}:`, error)
    process.exit(1)
  }
}

const currentBranchVersion = getVersionFromBranch(currentBranch)
const targetBranchVersion = getVersionFromBranch(`remotes/origin/${targetBranch}`)

console.info(`Version in branch ${currentBranch}: ${currentBranchVersion}`)
console.info(`Version in branch ${targetBranch}: ${targetBranchVersion}`)

const isVersionGreater = (targetBranchVersion, currentBranchVersion) => {
  const parseVersion = version => version.split('.').map(Number)

  const [oldMajor, oldMinor, oldPatch] = parseVersion(targetBranchVersion)
  const [newMajor, newMinor, newPatch] = parseVersion(currentBranchVersion)

  if (newMajor > oldMajor) return true
  if (newMajor === oldMajor && newMinor > oldMinor) return true
  if (newMajor === oldMajor && newMinor === oldMinor && newPatch > oldPatch) return true

  return false
}

if (isVersionGreater(targetBranchVersion, currentBranchVersion)) {
  console.info(
    `\x1b[32mCurrent version (${currentBranchVersion}) is greater than the target version (${targetBranchVersion}).\x1b[0m`
  )
  process.exit(0)
} else {
  console.error(
    `\x1b[31mCurrent version (${currentBranchVersion}) is not greater than the target version (${targetBranchVersion}).\x1b[0m`
  )
  process.exit(1)
}
