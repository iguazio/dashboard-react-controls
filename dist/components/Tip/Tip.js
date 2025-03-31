"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _reactTransitionGroup = require("react-transition-group");
var _classnames = _interopRequireDefault(require("classnames"));
var _reactDom = require("react-dom");
var _questionMark = require("../../images/question-mark.svg");
var _exclamationMark = require("../../images/exclamation-mark.svg");
var _tip = _interopRequireDefault(require("./tip.scss"));
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

const arrowOffset = parseInt(_tip.default.arrowoffset);
const arrowLength = parseInt(_tip.default.arrowlength);
const iconLength = parseInt(_tip.default.iconlength);
const minTextLength = 40;
const Tip = _ref => {
  let {
    className = '',
    text,
    withExclamationMark
  } = _ref;
  const [isShow, setIsShow] = (0, _react.useState)(false);
  const [tipClassName, setTipClassName] = (0, _react.useState)('tip_top tip_left');
  const iconRef = (0, _react.useRef)();
  const tipBodyRef = (0, _react.useRef)();
  const tipContainerClassNames = (0, _classnames.default)(className, 'tip-container');
  const tipClassNames = (0, _classnames.default)('tip', tipClassName, text.length <= minTextLength ? 'tip_small' : 'tip_big');
  const handleMouseEnter = (0, _react.useCallback)(event => {
    setIsShow(true);
  }, []);
  (0, _react.useEffect)(() => {
    if (isShow) {
      const iconRect = iconRef.current.getBoundingClientRect();
      const tipRect = tipBodyRef.current.getBoundingClientRect();
      const widthPosition = iconRect.left > tipRect.width - arrowOffset ? 'tip_left' : 'tip_right';
      const heightPosition = iconRect.top > tipRect.height + arrowLength ? 'tip_top' : 'tip_bottom';
      setTipClassName(`${heightPosition} ${widthPosition}`);
      if (widthPosition === 'tip_left') {
        const computedArrowOffset = arrowOffset + (iconLength + arrowLength) / 2;
        tipBodyRef.current.style.left = `${iconRect.left - (tipRect.width - computedArrowOffset)}px`;
      } else {
        const computedArrowOffset = arrowOffset - (iconLength - arrowLength) / 2;
        tipBodyRef.current.style.left = `${iconRect.left - computedArrowOffset}px`;
      }
      tipBodyRef.current.style.top = heightPosition === 'tip_top' ? `${iconRect.top - tipRect.height - arrowLength}px` : `${iconRect.bottom + arrowLength}px`;
    }
  }, [isShow]);
  const handleMouseLeave = () => {
    setIsShow(false);
  };
  (0, _react.useEffect)(() => {
    const node = iconRef.current;
    if (iconRef.current) {
      node.addEventListener('mouseenter', handleMouseEnter);
      node.addEventListener('mouseleave', handleMouseLeave);
      return () => {
        node.removeEventListener('mouseenter', handleMouseEnter);
        node.removeEventListener('mouseleave', handleMouseLeave);
      };
    }
  }, [handleMouseEnter, isShow]);
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    "data-testid": "tip",
    className: tipContainerClassNames,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      ref: iconRef,
      className: "tip-wrapper",
      children: withExclamationMark ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_exclamationMark.ReactComponent, {
        "data-testid": "tip-icon"
      }) : /*#__PURE__*/(0, _jsxRuntime.jsx)(_questionMark.ReactComponent, {
        "data-testid": "tip-icon"
      })
    }), /*#__PURE__*/(0, _reactDom.createPortal)(/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactTransitionGroup.CSSTransition, {
      nodeRef: tipBodyRef,
      in: isShow,
      timeout: 200,
      classNames: "fade",
      unmountOnExit: true,
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        ref: tipBodyRef,
        "data-testid": "tip-text",
        className: tipClassNames,
        children: text
      })
    }), document.getElementById('overlay_container'))]
  });
};
Tip.propTypes = {
  className: _propTypes.default.string,
  text: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.element]).isRequired
};
var _default = exports.default = Tip;