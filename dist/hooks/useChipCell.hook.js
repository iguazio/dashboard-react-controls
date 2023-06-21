"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useChipCell = void 0;
var _react = require("react");
var _lodash = require("lodash");
var _common = require("../utils/common.util");
var _getFirstScrollableParent = require("../utils/getFirstScrollableParent.util");
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
var useChipCell = function useChipCell(isEditMode, visibleChipsMaxLength) {
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    showHiddenChips = _useState2[0],
    setShowHiddenChips = _useState2[1];
  var _useState3 = (0, _react.useState)({}),
    _useState4 = _slicedToArray(_useState3, 2),
    chipsSizes = _useState4[0],
    setChipsSizes = _useState4[1];
  var _useState5 = (0, _react.useState)(false),
    _useState6 = _slicedToArray(_useState5, 2),
    showChips = _useState6[0],
    setShowChips = _useState6[1];
  var _useState7 = (0, _react.useState)(8),
    _useState8 = _slicedToArray(_useState7, 2),
    visibleChipsCount = _useState8[0],
    setVisibleChipsCount = _useState8[1];
  var transitionEndEventName = (0, _react.useMemo)(function () {
    return (0, _common.getTransitionEndEventName)();
  }, []);
  var chipsCellRef = (0, _react.useRef)();
  var chipsWrapperRef = (0, _react.useRef)();
  var hiddenChipsCounterRef = (0, _react.useRef)();
  var hiddenChipsPopUpRef = (0, _react.useRef)();
  var handleShowElements = (0, _react.useCallback)(function () {
    if (!isEditMode || isEditMode && visibleChipsMaxLength) {
      setShowHiddenChips(function (state) {
        return !state;
      });
    }
  }, [isEditMode, visibleChipsMaxLength]);
  (0, _react.useEffect)(function () {
    if (showHiddenChips) {
      window.addEventListener('click', handleShowElements);
      return function () {
        return window.removeEventListener('click', handleShowElements);
      };
    }
  }, [showHiddenChips, handleShowElements]);
  var handleScroll = (0, _react.useCallback)(function (event) {
    if (event.target.parentElement !== (hiddenChipsPopUpRef === null || hiddenChipsPopUpRef === void 0 ? void 0 : hiddenChipsPopUpRef.current)) {
      setShowHiddenChips(false);
    }
  }, [hiddenChipsPopUpRef]);
  (0, _react.useEffect)(function () {
    if (showHiddenChips) {
      window.addEventListener('scroll', handleScroll, true);
    }
    return function () {
      return window.removeEventListener('scroll', handleScroll, true);
    };
  }, [handleScroll, showHiddenChips]);
  var resizeChipCell = (0, _react.useCallback)(function () {
    if (hiddenChipsPopUpRef !== null && hiddenChipsPopUpRef !== void 0 && hiddenChipsPopUpRef.current) {
      var _hiddenChipsCounterRe;
      var scrollableParent = (0, _getFirstScrollableParent.getFirstScrollableParent)(hiddenChipsCounterRef.current.offsetParent);
      var scrollableParentRect = scrollableParent.getBoundingClientRect();
      var hiddenChipsCounterRect = (_hiddenChipsCounterRe = hiddenChipsCounterRef.current) === null || _hiddenChipsCounterRe === void 0 ? void 0 : _hiddenChipsCounterRe.getBoundingClientRect();

      // Check if the hiddenChipsCounterRect is outside the boundaries of the scrollableParentRect or the window
      if (hiddenChipsCounterRect.left < scrollableParentRect.left || hiddenChipsCounterRect.top < scrollableParentRect.top || hiddenChipsCounterRect.right > scrollableParentRect.right || hiddenChipsCounterRect.bottom > scrollableParentRect.bottom || hiddenChipsCounterRect.right > window.innerWidth || hiddenChipsCounterRect.bottom > window.innerHeight) {
        setShowHiddenChips(false);
      }
    }
    if (!isEditMode && !(0, _common.isEveryObjectValueEmpty)(chipsSizes)) {
      var _chipsCellRef$current;
      var parentSize = (_chipsCellRef$current = chipsCellRef.current) === null || _chipsCellRef$current === void 0 ? void 0 : _chipsCellRef$current.getBoundingClientRect().width;
      var maxLength = 0;
      var chipIndex = 0;
      var padding = 65;
      Object.values(chipsSizes).every(function (chipSize, index) {
        // Check if adding chipSize to maxLength exceeds parentSize
        // or if adding chipSize and padding exceeds parentSize when there are multiple chips
        if (maxLength + chipSize > parentSize || Object.values(chipsSizes).length > 1 && maxLength + chipSize + padding > parentSize) {
          chipIndex = index;
          return false;
        } else {
          maxLength += chipSize;
          if (index === Object.values(chipsSizes).length - 1) {
            chipIndex = 8;
          }
          return true;
        }
      });
      setVisibleChipsCount(chipIndex);
      setShowChips(true);
    }
  }, [chipsSizes, isEditMode]);
  (0, _react.useEffect)(function () {
    resizeChipCell();
  }, [resizeChipCell]);
  (0, _react.useEffect)(function () {
    var resizeChipCellDebounced = (0, _lodash.throttle)(resizeChipCell, 500);
    if (!isEditMode) {
      window.addEventListener('resize', resizeChipCellDebounced);
      window.addEventListener(transitionEndEventName, resizeChipCellDebounced);
      return function () {
        window.removeEventListener('resize', resizeChipCellDebounced);
        window.removeEventListener(transitionEndEventName, resizeChipCellDebounced);
      };
    }
  }, [resizeChipCell, isEditMode, transitionEndEventName]);
  return {
    chipsCellRef: chipsCellRef,
    chipsWrapperRef: chipsWrapperRef,
    handleShowElements: handleShowElements,
    hiddenChipsCounterRef: hiddenChipsCounterRef,
    hiddenChipsPopUpRef: hiddenChipsPopUpRef,
    setChipsSizes: setChipsSizes,
    setShowHiddenChips: setShowHiddenChips,
    showChips: showChips,
    showHiddenChips: showHiddenChips,
    visibleChipsCount: visibleChipsCount
  };
};
exports.useChipCell = useChipCell;