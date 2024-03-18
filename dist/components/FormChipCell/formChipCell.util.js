"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.uniquenessError = exports.getTextWidth = void 0;
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
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
var uniquenessError = {
  name: 'uniqueness',
  label: 'Key must be unique'
};
exports.uniquenessError = uniquenessError;
var getTextWidth = function getTextWidth(elementWithText) {
  var _hiddenElement$offset;
  if (!elementWithText) {
    return 0;
  }
  var hiddenElementId = 'chips-hidden-element';
  var hiddenElement = document.getElementById(hiddenElementId);
  if (!hiddenElement) {
    hiddenElement = document.createElement('span');
    var styles = {
      position: 'absolute',
      left: '-10000px',
      top: "auto",
      visibility: 'hidden'
    };
    for (var _i = 0, _Object$entries = Object.entries(styles); _i < _Object$entries.length; _i++) {
      var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
        styleName = _Object$entries$_i[0],
        styleValue = _Object$entries$_i[1];
      hiddenElement.style[styleName] = styleValue;
    }
    hiddenElement.style.font = window.getComputedStyle(elementWithText).font;
    hiddenElement.id = hiddenElementId;
    hiddenElement.tabIndex = -1;
    document.body.append(hiddenElement);
  }
  hiddenElement.textContent = elementWithText.value;
  return (_hiddenElement$offset = hiddenElement.offsetWidth) !== null && _hiddenElement$offset !== void 0 ? _hiddenElement$offset : 0;
};
exports.getTextWidth = getTextWidth;