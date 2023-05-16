"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setFieldState = exports.parseObjectToKeyValue = exports.generateObjectFromKeyValue = exports.areFormValuesChanged = void 0;
var _lodash = require("lodash");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; } /*
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
var setFieldState = function setFieldState(args, state) {
  var fieldName = args[0];
  var states = args[1];
  var field = state.fields[fieldName];
  if (field) {
    for (var stateName in states) {
      (0, _lodash.set)(field, stateName, states[stateName]);
    }
  }
};
exports.setFieldState = setFieldState;
var areFormValuesChanged = function areFormValuesChanged(initialValues, values) {
  var replacer = function replacer(key, value) {
    if (value === '') {
      return undefined;
    }
    return value;
  };
  return !(0, _lodash.isEqual)(JSON.stringify(initialValues, replacer), JSON.stringify(values, replacer));
};
exports.areFormValuesChanged = areFormValuesChanged;
var generateObjectFromKeyValue = function generateObjectFromKeyValue() {
  var keyValueList = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  return keyValueList.reduce(function (acc, keyValue) {
    acc[keyValue.data.key] = keyValue.data.value;
    return acc;
  }, {});
};
exports.generateObjectFromKeyValue = generateObjectFromKeyValue;
var parseObjectToKeyValue = function parseObjectToKeyValue() {
  var object = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return Object.entries(object).map(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
      key = _ref2[0],
      value = _ref2[1];
    return {
      data: {
        key: key,
        value: value
      }
    };
  });
};
exports.parseObjectToKeyValue = parseObjectToKeyValue;