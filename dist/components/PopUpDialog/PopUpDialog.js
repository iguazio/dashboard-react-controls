"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _classnames = _interopRequireDefault(require("classnames"));
var _reactDom = require("react-dom");
var _lodash = require("lodash");
var _RoundedIcon = _interopRequireDefault(require("../RoundedIcon/RoundedIcon"));
var _Tooltip = _interopRequireDefault(require("../Tooltip/Tooltip"));
var _TextTooltipTemplate = _interopRequireDefault(require("../TooltipTemplate/TextTooltipTemplate"));
var _types = require("../../types");
var _close = require("../../images/close.svg");
require("./popUpDialog.scss");
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
var PopUpDialog = /*#__PURE__*/_react.default.forwardRef(function (_ref, ref) {
  var _ref2;
  var children = _ref.children,
    className = _ref.className,
    closePopUp = _ref.closePopUp,
    customPosition = _ref.customPosition,
    headerIsHidden = _ref.headerIsHidden,
    headerText = _ref.headerText,
    showPopUpDialog = _ref.showPopUpDialog,
    style = _ref.style,
    tooltipText = _ref.tooltipText;
  var _useState = (0, _react.useState)(showPopUpDialog !== null && showPopUpDialog !== void 0 ? showPopUpDialog : true),
    _useState2 = _slicedToArray(_useState, 2),
    showPopUp = _useState2[0],
    setShowPopUp = _useState2[1];
  var popUpOverlayRef = (0, _react.useRef)(null);
  (_ref2 = ref) !== null && _ref2 !== void 0 ? _ref2 : ref = popUpOverlayRef;
  var popUpClassNames = (0, _classnames.default)(className, 'pop-up-dialog__overlay', customPosition.element && 'custom-position');
  var handleClosePopUp = (0, _react.useCallback)(function () {
    closePopUp && closePopUp();
    setShowPopUp(false);
  }, [closePopUp]);
  var calculateCustomPopUpPosition = (0, _react.useCallback)(function () {
    var _customPosition$eleme, _ref3;
    if (customPosition !== null && customPosition !== void 0 && (_customPosition$eleme = customPosition.element) !== null && _customPosition$eleme !== void 0 && _customPosition$eleme.current && (_ref3 = ref) !== null && _ref3 !== void 0 && _ref3.current) {
      var elementRect = customPosition.element.current.getBoundingClientRect();
      var popUpRect = ref.current.getBoundingClientRect();
      var _customPosition$posit = customPosition.position.split('-'),
        _customPosition$posit2 = _slicedToArray(_customPosition$posit, 2),
        verticalPosition = _customPosition$posit2[0],
        horizontalPosition = _customPosition$posit2[1];
      var popupMargin = 15;
      var elementMargin = 5;
      var isEnoughSpaceFromLeft = elementRect.right >= popUpRect.width + popupMargin;
      var isEnoughSpaceFromRight = window.innerWidth - elementRect.left >= popUpRect.width + popupMargin;
      var isEnoughSpaceFromTop = elementRect.top > popUpRect.height + popupMargin + elementMargin;
      var isEnoughSpaceFromBottom = elementRect.bottom + popUpRect.height + popupMargin + elementMargin <= window.innerHeight;
      var leftPosition = horizontalPosition === 'left' ? elementRect.right - popUpRect.width : elementRect.left;
      var topPosition;
      if (verticalPosition === 'top') {
        topPosition = isEnoughSpaceFromTop ? elementRect.top - popUpRect.height - elementMargin : popupMargin;
      } else {
        topPosition = isEnoughSpaceFromBottom ? elementRect.bottom + elementMargin : window.innerHeight - popUpRect.height - popupMargin;
      }
      if (customPosition.autoVerticalPosition) {
        if (verticalPosition === 'top') {
          if (!isEnoughSpaceFromTop && isEnoughSpaceFromBottom) {
            topPosition = elementRect.bottom + elementMargin;
          }
        } else {
          if (isEnoughSpaceFromTop && !isEnoughSpaceFromBottom) {
            topPosition = elementRect.top - popUpRect.height - elementMargin;
          }
        }
      }
      if (customPosition.autoHorizontalPosition) {
        if (verticalPosition === 'left') {
          if (!isEnoughSpaceFromLeft && isEnoughSpaceFromRight) {
            leftPosition = elementRect.left;
          } else if (!isEnoughSpaceFromLeft && !isEnoughSpaceFromRight) {
            leftPosition = popupMargin;
          }
        } else {
          if (isEnoughSpaceFromLeft && !isEnoughSpaceFromRight) {
            leftPosition = elementRect.right - popUpRect.width;
          } else if (!isEnoughSpaceFromLeft && !isEnoughSpaceFromRight) {
            leftPosition = window.innerWidth - popUpRect.width - popupMargin;
          }
        }
      }
      ref.current.style.top = "".concat(topPosition, "px");
      if (style.left && !(customPosition.autoHorizontalPosition && isEnoughSpaceFromRight)) {
        ref.current.style.left = "calc(".concat(leftPosition, "px + ").concat(style.left, ")");
      } else {
        ref.current.style.left = "".concat(leftPosition, "px");
      }
    }
  }, [customPosition, style.left, ref]);
  (0, _react.useLayoutEffect)(function () {
    calculateCustomPopUpPosition();
  }, [calculateCustomPopUpPosition]);
  (0, _react.useEffect)(function () {
    var throttledCalculatedCustomPopUpPosition = (0, _lodash.throttle)(calculateCustomPopUpPosition, 100, {
      trailing: true,
      leading: true
    });
    window.addEventListener('resize', throttledCalculatedCustomPopUpPosition);
    return function () {
      window.removeEventListener('resize', throttledCalculatedCustomPopUpPosition);
    };
  });
  return showPopUp ? /*#__PURE__*/(0, _reactDom.createPortal)( /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    ref: ref,
    className: popUpClassNames,
    style: style,
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      "data-testid": "pop-up-dialog",
      className: "pop-up-dialog",
      children: [!headerIsHidden && /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "pop-up-dialog__header",
        children: [headerText && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          "data-testid": "pop-up-dialog-header",
          className: "pop-up-dialog__header-text",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Tooltip.default, {
            template: /*#__PURE__*/(0, _jsxRuntime.jsx)(_TextTooltipTemplate.default, {
              text: tooltipText || headerText
            }),
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
              children: headerText
            })
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_RoundedIcon.default, {
          className: "pop-up-dialog__btn_close",
          onClick: handleClosePopUp,
          tooltipText: "Close",
          "data-testid": "pop-up-close-btn",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_close.ReactComponent, {})
        })]
      }), children]
    })
  }), document.getElementById('overlay_container')) : null;
});
PopUpDialog.defaultProps = {
  className: '',
  closePopUp: function closePopUp() {},
  customPosition: {},
  headerIsHidden: false,
  headerText: '',
  showPopUpDialog: true,
  style: {},
  tooltipText: ''
};
PopUpDialog.propTypes = {
  className: _propTypes.default.string,
  closePopUp: _propTypes.default.func,
  customPosition: _types.POP_UP_CUSTOM_POSITION,
  headerIsHidden: _propTypes.default.bool,
  headerText: _propTypes.default.string,
  showPopUpDialog: _propTypes.default.bool,
  style: _propTypes.default.object,
  tooltipText: _propTypes.default.string
};
var _default = PopUpDialog;
exports.default = _default;