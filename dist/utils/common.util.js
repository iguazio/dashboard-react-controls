"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.openPopUp = exports.openDeleteConfirmPopUp = exports.openConfirmPopUp = exports.isEveryObjectValueEmpty = exports.getTransitionEndEventName = exports.getErrorMsg = exports.getErrorDetail = exports.areArraysEqual = void 0;
var _reactModalPromise = require("react-modal-promise");
var _lodash = require("lodash");
var _components = require("../components");
var _constants = require("../constants");
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

var openPopUp = function openPopUp(element, props) {
  return (0, _reactModalPromise.create)(element)(props);
};
exports.openPopUp = openPopUp;
var openConfirmPopUp = function openConfirmPopUp(confirmHandler, message) {
  return openPopUp(_components.ConfirmDialog, {
    cancelButton: {
      label: 'Cancel',
      variant: _constants.TERTIARY_BUTTON
    },
    confirmButton: {
      label: 'OK',
      variant: _constants.SECONDARY_BUTTON,
      handler: confirmHandler
    },
    header: 'Are you sure?',
    message: message
  });
};
exports.openConfirmPopUp = openConfirmPopUp;
var openDeleteConfirmPopUp = function openDeleteConfirmPopUp(header, message, confirmHandler) {
  return openPopUp(_components.ConfirmDialog, {
    cancelButton: {
      label: 'Cancel',
      variant: _constants.TERTIARY_BUTTON
    },
    confirmButton: {
      label: 'Delete',
      variant: _constants.DANGER_BUTTON,
      handler: confirmHandler
    },
    header: header,
    message: message
  });
};
exports.openDeleteConfirmPopUp = openDeleteConfirmPopUp;
var isEveryObjectValueEmpty = function isEveryObjectValueEmpty(obj) {
  return Object.values(obj).every(function (item) {
    return !item || item.length === 0;
  });
};

// Checks, whether two arrays of objects are equal, can omit some keys if their comparison is not necessary
exports.isEveryObjectValueEmpty = isEveryObjectValueEmpty;
var areArraysEqual = function areArraysEqual(firstArray, secondArray) {
  var omitBy = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  if (firstArray.length !== secondArray.length) return false;
  return (0, _lodash.isEmpty)((0, _lodash.differenceWith)(firstArray, secondArray, function (a, b) {
    return (0, _lodash.isEqual)((0, _lodash.omit)(a, omitBy), (0, _lodash.omit)(b, omitBy));
  }));
};

/**
 * Get error information from the error object.
 *
 * @param {Error} error - The error object.
 * @returns {string} - The detailed error information.
 */
exports.areArraysEqual = areArraysEqual;
var getErrorDetail = function getErrorDetail(error) {
  var errorDetail = (0, _lodash.get)(error, 'response.data.detail', null);
  if (typeof errorDetail === 'string') {
    return errorDetail;
  } else {
    return (0, _lodash.get)(errorDetail, 'reason', '');
  }
};

/**
 * Get the error message from the error object or a default error message.
 *
 * @param {Error} error - The error object.
 * @param {string} defaultError - The default error message.
 * @returns {string} - The error message.
 */
exports.getErrorDetail = getErrorDetail;
var getErrorMsg = function getErrorMsg(error, defaultError) {
  var errorDetail = getErrorDetail(error);
  var errorMsg = errorDetail || error.message;
  if ((!errorMsg || errorMsg === 'Not Found' || errorMsg.startsWith('Request failed with status code')) && defaultError) {
    return defaultError;
  } else {
    return errorMsg || '';
  }
};

/**
 * Retrieves the appropriate transition end event name based on the browser.
 *
 * @returns {string} The transition end event name.
 */
exports.getErrorMsg = getErrorMsg;
var getTransitionEndEventName = function getTransitionEndEventName() {
  var transitions = {
    transition: 'transitionend',
    OTransition: 'oTransitionEnd',
    MozTransition: 'transitionend',
    WebkitTransition: 'webkitTransitionEnd'
  };
  var bodyStyle = document.body.style;
  for (var transition in transitions) {
    if (bodyStyle[transition] !== undefined) {
      return transitions[transition];
    }
  }
};
exports.getTransitionEndEventName = getTransitionEndEventName;