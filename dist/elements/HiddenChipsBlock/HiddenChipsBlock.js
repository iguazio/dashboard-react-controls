"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _classnames = _interopRequireDefault(require("classnames"));
var _Tooltip = _interopRequireDefault(require("../../components/Tooltip/Tooltip"));
var _TextTooltipTemplate = _interopRequireDefault(require("../../components/TooltipTemplate/TextTooltipTemplate"));
var _types = require("../../types");
var _getFirstScrollableParent = require("../../utils/getFirstScrollableParent.util");
require("./hiddenChipsBlock.scss");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
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
var HiddenChipsBlock = /*#__PURE__*/_react.default.forwardRef(function (_ref, ref) {
  var chipClassNames = _ref.chipClassNames,
    chipOptions = _ref.chipOptions,
    chips = _ref.chips,
    handleShowElements = _ref.handleShowElements,
    textOverflowEllipsis = _ref.textOverflowEllipsis;
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isTop = _useState2[0],
    setIsTop = _useState2[1];
  var _useState3 = (0, _react.useState)(true),
    _useState4 = _slicedToArray(_useState3, 2),
    isRight = _useState4[0],
    setIsRight = _useState4[1];
  var _useState5 = (0, _react.useState)(false),
    _useState6 = _slicedToArray(_useState5, 2),
    isVisible = _useState6[0],
    setIsVisible = _useState6[1];
  var _useState7 = (0, _react.useState)(window.innerWidth / 2),
    _useState8 = _slicedToArray(_useState7, 2),
    windowHalfWidth = _useState8[0],
    setWindowHalfWidth = _useState8[1];
  var hiddenRef = (0, _react.useRef)();
  var offset = 28;
  var hiddenChipsBlockClassNames = (0, _classnames.default)('chip-block-hidden', isTop ? 'chip-block-hidden_top' : 'chip-block-hidden_bottom', isRight ? 'chip-block-hidden_right' : 'chip-block-hidden_left', isVisible && 'chip-block-hidden_visible');
  var chipLabelClassNames = (0, _classnames.default)('chip__label', textOverflowEllipsis && 'data-ellipsis');
  var chipValueClassNames = (0, _classnames.default)('chip__value', textOverflowEllipsis && 'data-ellipsis', chipOptions.boldValue && 'chip-value_bold');
  var handleResize = (0, _react.useCallback)(function () {
    if (hiddenRef !== null && hiddenRef !== void 0 && hiddenRef.current) {
      setWindowHalfWidth(parseInt(window.innerWidth / 2));
    }
  }, [hiddenRef]);
  var generateChipData = function generateChipData(chip) {
    return chip.isKeyOnly ? chip.key : "".concat(chip.key).concat(chip.delimiter ? chip.delimiter : ':', " ").concat(chip.value);
  };
  (0, _react.useEffect)(function () {
    handleResize();
  }, [handleResize]);
  (0, _react.useEffect)(function () {
    if (hiddenRef !== null && hiddenRef !== void 0 && hiddenRef.current) {
      window.addEventListener('resize', handleResize);
      return function () {
        return window.removeEventListener('resize', handleResize);
      };
    }
  }, [handleResize, hiddenRef]);
  (0, _react.useEffect)(function () {
    if (hiddenRef !== null && hiddenRef !== void 0 && hiddenRef.current) {
      var scrollableParent = (0, _getFirstScrollableParent.getFirstScrollableParentUtil)(hiddenRef.current.offsetParent);
      var _hiddenRef$current$ge = hiddenRef.current.getBoundingClientRect(),
        height = _hiddenRef$current$ge.height,
        top = _hiddenRef$current$ge.top;
      var _ref$current$getBound = ref.current.getBoundingClientRect(),
        right = _ref$current$getBound.right;
      if (hiddenRef.current.offsetParent.getBoundingClientRect().top - hiddenRef.current.offsetParent.clientHeight - height - offset < 0 || scrollableParent.getBoundingClientRect().top > top) {
        setIsTop(true);
      }
      setIsRight(right <= windowHalfWidth);
      setIsVisible(true);
    }
  }, [hiddenRef, isRight, offset, ref, windowHalfWidth]);
  (0, _react.useEffect)(function () {
    if (chips.length === 0) {
      handleShowElements();
    }
  });
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    ref: hiddenRef,
    className: hiddenChipsBlockClassNames,
    children: chips === null || chips === void 0 ? void 0 : chips.map(function (element) {
      var _element$delimiter;
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Tooltip.default, {
        template: /*#__PURE__*/(0, _jsxRuntime.jsx)(_TextTooltipTemplate.default, {
          text: element.delimiter ? /*#__PURE__*/(0, _jsxRuntime.jsxs)("span", {
            className: "chip__content",
            children: [element.key, !element.isKeyOnly && /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                className: "chip__delimiter",
                children: element.delimiter
              }), element.value]
            })]
          }) : generateChipData(element)
        }),
        children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: chipClassNames,
          children: [element.key && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: chipLabelClassNames,
            children: element.key
          }), element.value && /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
              className: "chip__delimiter",
              children: (_element$delimiter = element.delimiter) !== null && _element$delimiter !== void 0 ? _element$delimiter : ':'
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
              className: chipValueClassNames,
              children: element.value
            })]
          })]
        })
      }, element.id);
    })
  });
});
HiddenChipsBlock.defaultProps = {
  textOverflowEllipsis: false
};
HiddenChipsBlock.propTypes = {
  chipClassNames: _propTypes.default.string.isRequired,
  chipOptions: _types.CHIP_OPTIONS.isRequired,
  chips: _propTypes.default.array.isRequired,
  handleShowElements: _propTypes.default.func.isRequired,
  textOverflowEllipsis: _propTypes.default.bool
};
var _default = HiddenChipsBlock;
exports.default = _default;