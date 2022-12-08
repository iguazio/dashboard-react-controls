"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.openPopUp = exports.openConfirmPopUp = exports.isEveryObjectValueEmpty = exports.areArraysEqual = void 0;

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

var isEveryObjectValueEmpty = function isEveryObjectValueEmpty(obj) {
  return Object.values(obj).every(function (item) {
    return !item || item.length === 0;
  });
}; // Checks, whether two arrays of objects are equal, can omit some keys if their comparison is not necessary


exports.isEveryObjectValueEmpty = isEveryObjectValueEmpty;

var areArraysEqual = function areArraysEqual(firstArray, secondArray) {
  var omitBy = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  if (firstArray.length !== secondArray.length) return false;
  return (0, _lodash.isEmpty)((0, _lodash.differenceWith)(firstArray, secondArray, function (a, b) {
    return (0, _lodash.isEqual)((0, _lodash.omit)(a, omitBy), (0, _lodash.omit)(b, omitBy));
  }));
};

exports.areArraysEqual = areArraysEqual;