"use strict";

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
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
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

const PopUpDialog = /*#__PURE__*/_react.default.forwardRef((_ref, ref) => {
  let {
    children,
    className = '',
    closePopUp = () => {},
    customPosition = {},
    headerIsHidden = false,
    headerText = '',
    showPopUpDialog = true,
    style = {},
    tooltipText = ''
  } = _ref;
  const [showPopUp, setShowPopUp] = (0, _react.useState)(showPopUpDialog ?? true);
  const popUpOverlayRef = (0, _react.useRef)(null);
  ref ??= popUpOverlayRef;
  const popUpClassNames = (0, _classnames.default)(className, 'pop-up-dialog__overlay', customPosition.element && 'custom-position');
  const handleClosePopUp = (0, _react.useCallback)(() => {
    closePopUp && closePopUp();
    setShowPopUp(false);
  }, [closePopUp]);
  const calculateCustomPopUpPosition = (0, _react.useCallback)(() => {
    if (customPosition?.element?.current && ref?.current) {
      const elementRect = customPosition.element.current.getBoundingClientRect();
      const popUpRect = ref.current.getBoundingClientRect();
      const [verticalPosition, horizontalPosition] = customPosition.position.split('-');
      const popupMargin = 15;
      const elementMargin = 5;
      const isEnoughSpaceFromLeft = elementRect.right >= popUpRect.width + popupMargin;
      const isEnoughSpaceFromRight = window.innerWidth - elementRect.left >= popUpRect.width + popupMargin;
      const isEnoughSpaceFromTop = elementRect.top > popUpRect.height + popupMargin + elementMargin;
      const isEnoughSpaceFromBottom = elementRect.bottom + popUpRect.height + popupMargin + elementMargin <= window.innerHeight;
      let leftPosition = horizontalPosition === 'left' ? elementRect.right - popUpRect.width : elementRect.left;
      let topPosition;
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
      ref.current.style.top = `${topPosition}px`;
      if (style.left && !(customPosition.autoHorizontalPosition && isEnoughSpaceFromRight)) {
        ref.current.style.left = `calc(${leftPosition}px + ${style.left})`;
      } else {
        ref.current.style.left = `${leftPosition}px`;
      }
    }
  }, [customPosition, style.left, ref]);
  (0, _react.useLayoutEffect)(() => {
    calculateCustomPopUpPosition();
  }, [calculateCustomPopUpPosition]);
  (0, _react.useEffect)(() => {
    if (showPopUp) {
      const throttledCalculatedCustomPopUpPosition = (0, _lodash.throttle)(calculateCustomPopUpPosition, 100, {
        trailing: true,
        leading: true
      });
      const popupObserver = new ResizeObserver(throttledCalculatedCustomPopUpPosition);
      const popupElement = ref.current;
      popupObserver.observe(popupElement);
      window.addEventListener('resize', throttledCalculatedCustomPopUpPosition);
      return () => {
        popupObserver.unobserve(popupElement);
        window.removeEventListener('resize', throttledCalculatedCustomPopUpPosition);
      };
    }
  }, [calculateCustomPopUpPosition, ref, showPopUp]);
  return showPopUp ? /*#__PURE__*/(0, _reactDom.createPortal)(/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
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
var _default = exports.default = PopUpDialog;