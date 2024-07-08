"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validation = exports.TERTIARY_BUTTON = exports.TAB_SHIFT = exports.TAB = exports.SERVICE_UNAVAILABLE_ERROR_STATUS_CODE = exports.SECONDARY_BUTTON = exports.PRIMARY_BUTTON = exports.NOTFOUND_ERROR_STATUS_CODE = exports.MODAL_SM = exports.MODAL_MIN = exports.MODAL_MD = exports.MODAL_MAX = exports.MODAL_LG = exports.LABEL_BUTTON = exports.INTERNAL_SERVER_ERROR_STATUS_CODE = exports.GATEWAY_TIMEOUT_STATUS_CODE = exports.FORBIDDEN_ERROR_STATUS_CODE = exports.DELETE = exports.DANGER_BUTTON = exports.CONFLICT_ERROR_STATUS_CODE = exports.CLICK = exports.BAD_GATEWAY_ERROR_STATUS_CODE = exports.BADREQUEST_ERROR_STATUS_CODE = exports.BACKSPACE = void 0;
/*
Copyright 2022 Iguazio Systems Ltd.
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
/*=========== EVENT KEYS =============*/
const BACKSPACE = exports.BACKSPACE = 'Backspace';
const CLICK = exports.CLICK = 'Click';
const DELETE = exports.DELETE = 'Delete';
const TAB = exports.TAB = 'Tab';
const TAB_SHIFT = exports.TAB_SHIFT = 'Tab+Shift';

/*=========== BUTTONS =============*/

const PRIMARY_BUTTON = exports.PRIMARY_BUTTON = 'primary';
const SECONDARY_BUTTON = exports.SECONDARY_BUTTON = 'secondary';
const TERTIARY_BUTTON = exports.TERTIARY_BUTTON = 'tertiary';
const DANGER_BUTTON = exports.DANGER_BUTTON = 'danger';
const LABEL_BUTTON = exports.LABEL_BUTTON = 'label';

/*=========== VALITATION =============*/

const validation = exports.validation = {
  BEGIN_END_NOT_WITH: {
    LABEL: 'Must not begin and end with',
    NAME: 'beginEndNot'
  },
  BEGIN_END_WITH: {
    LABEL: 'Must begin and end with',
    NAME: 'beginEnd'
  },
  BEGIN_NOT_WITH: {
    LABEL: 'Must not begin with',
    NAME: 'beginNot'
  },
  BEGIN_WITH: {
    LABEL: 'Must begin with',
    NAME: 'begin'
  },
  END_NOT_WITH: {
    LABEL: 'Must not end with',
    NAME: 'endNot'
  },
  END_WITH: {
    LABEL: 'Must end with',
    NAME: 'end'
  },
  MUST_CONTAIN_EXACTLY_ONE: {
    LABEL: 'Must contain exactly one',
    NAME: 'exactlyOne'
  },
  MUST_HAVE_DOT_AFTER_AT: {
    LABEL: 'Must have at least one . after @',
    NAME: 'dotAfterAt'
  },
  MUST_NOT_BE: {
    LABEL: 'Must not be',
    NAME: 'mustNotBe'
  },
  NO_CONSECUTIVE_CHARACTER: {
    LABEL: 'No consecutive characters',
    NAME: 'noConsecutiveCharacters'
  },
  NOT_CONTAIN: {
    LABEL: 'Must not contain',
    NAME: 'notContainCharacters'
  },
  ONLY_AT_THE_BEGINNING: {
    LABEL: 'Only at the beginning',
    NAME: 'onlyAtTheBeginning'
  },
  REQUIRED: {
    LABEL: 'This field is required',
    NAME: 'required'
  },
  VALID_CHARACTERS_WITH_REFIX: {
    LABEL: 'Valid characters',
    NAME: 'validCharactersWithPrefix'
  },
  VALID_CHARACTERS: {
    LABEL: 'Valid characters',
    NAME: 'validCharacters'
  }
};

/*=========== STATUS CODES =============*/

const BADREQUEST_ERROR_STATUS_CODE = exports.BADREQUEST_ERROR_STATUS_CODE = 400;
const FORBIDDEN_ERROR_STATUS_CODE = exports.FORBIDDEN_ERROR_STATUS_CODE = 403;
const NOTFOUND_ERROR_STATUS_CODE = exports.NOTFOUND_ERROR_STATUS_CODE = 404;
const CONFLICT_ERROR_STATUS_CODE = exports.CONFLICT_ERROR_STATUS_CODE = 409;
const INTERNAL_SERVER_ERROR_STATUS_CODE = exports.INTERNAL_SERVER_ERROR_STATUS_CODE = 500;
const BAD_GATEWAY_ERROR_STATUS_CODE = exports.BAD_GATEWAY_ERROR_STATUS_CODE = 502;
const SERVICE_UNAVAILABLE_ERROR_STATUS_CODE = exports.SERVICE_UNAVAILABLE_ERROR_STATUS_CODE = 503;
const GATEWAY_TIMEOUT_STATUS_CODE = exports.GATEWAY_TIMEOUT_STATUS_CODE = 504;

/*=========== MODAL =============*/

const MODAL_SM = exports.MODAL_SM = 'sm';
const MODAL_MD = exports.MODAL_MD = 'md';
const MODAL_LG = exports.MODAL_LG = 'lg';
const MODAL_MIN = exports.MODAL_MIN = 'min';
const MODAL_MAX = exports.MODAL_MAX = 'max';