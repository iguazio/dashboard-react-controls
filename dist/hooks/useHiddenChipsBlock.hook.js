"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useHiddenChipsBlock = void 0;
var _react = require("react");
var _classnames = _interopRequireDefault(require("classnames"));
var _common = require("../utils/common.util");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; } /*
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
var useHiddenChipsBlock = function useHiddenChipsBlock(hiddenChipsCounterRef, hiddenChipsPopUpRef) {
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isTop = _useState2[0],
    setIsTop = _useState2[1];
  var _useState3 = (0, _react.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    isLeft = _useState4[0],
    setIsLeft = _useState4[1];
  var _useState5 = (0, _react.useState)(false),
    _useState6 = _slicedToArray(_useState5, 2),
    isVisible = _useState6[0],
    setIsVisible = _useState6[1];
  var transitionEndEventName = (0, _react.useMemo)(function () {
    return (0, _common.getTransitionEndEventName)();
  }, []);
  var hiddenChipsBlockClassNames = (0, _classnames.default)('chip-block-hidden', isTop ? 'chip-block-hidden_top' : 'chip-block-hidden_bottom', isLeft ? 'chip-block-hidden_left' : 'chip-block-hidden_right', isVisible && 'chip-block-hidden_visible');
  var resizePopUp = (0, _react.useCallback)(function () {
    if (hiddenChipsPopUpRef !== null && hiddenChipsPopUpRef !== void 0 && hiddenChipsPopUpRef.current && hiddenChipsCounterRef !== null && hiddenChipsCounterRef !== void 0 && hiddenChipsCounterRef.current) {
      var offset = 10;
      var offsetMargin = 20;
      var elementRect = hiddenChipsCounterRef.current.getBoundingClientRect();

      // Calculate the distance from the right edge of the window to the element's right edge
      var elementRectRight = Math.floor(window.innerWidth - elementRect.left - elementRect.width);

      // Calculate the distance from the bottom edge of the window to the element's bottom edge
      var elementRectBottom = Math.floor(window.innerHeight - elementRect.top - elementRect.height);
      var isLeftPosition = false;
      var isTopPosition = false;
      hiddenChipsPopUpRef.current.style.maxWidth = '100%';
      hiddenChipsPopUpRef.current.style.maxHeight = '100%';

      // Determine if the left position is preferred based on the element's position and available width
      if (elementRect.left > hiddenChipsPopUpRef.current.clientWidth) {
        isLeftPosition = true;
      } else if (elementRectRight > hiddenChipsPopUpRef.current.clientWidth) {
        isLeftPosition = false;
      } else {
        // Compare elementRect.left and elementRectRight to choose the larger value as the max width
        isLeftPosition = elementRect.left > elementRectRight;
        var popUpMaxWidth = Math.max(elementRect.left, elementRectRight);
        hiddenChipsPopUpRef.current.style.maxWidth = "".concat(popUpMaxWidth, "px");
      }
      hiddenChipsPopUpRef.current.style.right = isLeftPosition ? "".concat(elementRectRight, "px") : 'unset';
      hiddenChipsPopUpRef.current.style.left = isLeftPosition ? 'unset' : "".concat(elementRect.left, "px");

      // Determine if the top position is preferred based on the element's position and available height
      if (elementRect.top > hiddenChipsPopUpRef.current.clientHeight + offset + offsetMargin) {
        isTopPosition = true;
      } else if (elementRectBottom > hiddenChipsPopUpRef.current.clientHeight + offset + offsetMargin) {
        isTopPosition = false;
      } else {
        // Compare elementRect.top and elementRectBottom to choose the larger value as the max height
        isTopPosition = elementRect.top > elementRectBottom + offset;
        var popUpMaxHeight = Math.max(elementRect.top, elementRectBottom) - offset - offsetMargin;
        hiddenChipsPopUpRef.current.style.maxHeight = "".concat(popUpMaxHeight, "px");
      }
      hiddenChipsPopUpRef.current.style.bottom = isTopPosition ? "".concat(elementRectBottom + elementRect.height + offset, "px") : 'unset';
      hiddenChipsPopUpRef.current.style.top = isTopPosition ? 'unset' : "".concat(elementRect.bottom + offset, "px");
      setIsTop(isTopPosition);
      setIsLeft(isLeftPosition);
      setIsVisible(true);
    }
  }, [hiddenChipsCounterRef, hiddenChipsPopUpRef]);
  (0, _react.useEffect)(function () {
    if (hiddenChipsPopUpRef !== null && hiddenChipsPopUpRef !== void 0 && hiddenChipsPopUpRef.current && hiddenChipsCounterRef !== null && hiddenChipsCounterRef !== void 0 && hiddenChipsCounterRef.current) {
      window.addEventListener('resize', resizePopUp);
      window.addEventListener(transitionEndEventName, resizePopUp);
      return function () {
        window.removeEventListener('resize', resizePopUp);
        window.removeEventListener(transitionEndEventName, resizePopUp);
      };
    }
  }, [hiddenChipsPopUpRef, hiddenChipsCounterRef, resizePopUp, transitionEndEventName]);
  (0, _react.useEffect)(function () {
    resizePopUp();
  }, [resizePopUp]);
  return {
    hiddenChipsBlockClassNames: hiddenChipsBlockClassNames
  };
};
exports.useHiddenChipsBlock = useHiddenChipsBlock;