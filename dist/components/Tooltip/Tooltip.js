"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactDom = require("react-dom");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _reactTransitionGroup = require("react-transition-group");
var _classnames = _interopRequireDefault(require("classnames"));
var _lodash = require("lodash");
var _common = require("../../utils/common.util");
require("./tooltip.scss");
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

const Tooltip = _ref => {
  let {
    children,
    className,
    hidden = false,
    id = '',
    renderChildAsHtml = false,
    template,
    textShow = false
  } = _ref;
  const [show, setShow] = (0, _react.useState)(false);
  const [style, setStyle] = (0, _react.useState)({});
  const tooltipClassNames = (0, _classnames.default)('data-ellipsis', 'tooltip-wrapper', className);
  const duration = 200;
  const parentRef = (0, _react.useRef)();
  const tooltipRef = (0, _react.useRef)();
  const offset = 10;
  const handleScroll = () => {
    setShow(false);
  };
  const handleMouseLeave = (0, _react.useCallback)(event => {
    if (!tooltipRef.current || hidden || tooltipRef.current && !tooltipRef.current.contains(event.relatedTarget) && parentRef.current && !parentRef.current.contains(event.relatedTarget)) {
      setShow(false);
    }
  }, [hidden]);
  const handleMouseEnter = (0, _react.useCallback)(event => {
    if (!show) {
      const [child] = parentRef.current.childNodes;
      let show = !hidden && (textShow ? true : !child ? false : child.nodeType !== Node.TEXT_NODE && child.childNodes?.[0]?.nodeType !== Node.TEXT_NODE || (
      /*
      If the child node is a text node and the text of the child node inside the container is greater than the width of the container, then show tooltip.
      */
      (child.nodeType === Node.TEXT_NODE || child.childNodes?.[0]?.nodeType === Node.TEXT_NODE) && parentRef.current.scrollWidth > parentRef.current.offsetWidth));
      setShow(show);
      setTimeout(() => {
        if (show) {
          let {
            height,
            top,
            bottom
          } = parentRef?.current?.getBoundingClientRect() ?? {};
          const {
            height: tooltipHeight,
            width: tooltipWidth
          } = tooltipRef.current?.getBoundingClientRect() ?? {
            height: 0,
            width: 0
          };
          const leftPosition = event.x - (event.x + tooltipWidth - window.innerWidth + offset);
          const left = event.x + tooltipWidth + offset > window.innerWidth ? leftPosition > offset ? leftPosition : offset : event.x + offset;
          if (top + height + offset + tooltipHeight >= window.innerHeight) {
            const topPosition = bottom - height - offset - tooltipHeight;
            setStyle({
              top: topPosition > 0 ? topPosition : offset,
              left
            });
          } else {
            setStyle({
              top: top + height + offset,
              left
            });
          }
        }
      }, 0);
    }
  }, [hidden, textShow, show]);
  const clearStyles = (0, _lodash.debounce)(() => {
    if (!(0, _common.isEveryObjectValueEmpty)(style)) {
      setStyle({});
    }
  }, 100);
  (0, _react.useEffect)(() => {
    const parentNode = parentRef.current;
    if (parentNode) {
      parentNode.addEventListener('mouseenter', handleMouseEnter);
      parentNode.addEventListener('mouseleave', handleMouseLeave);
      return () => {
        parentNode.removeEventListener('mouseenter', handleMouseEnter);
        parentNode.removeEventListener('mouseleave', handleMouseLeave);
      };
    }
  }, [parentRef, handleMouseEnter, handleMouseLeave]);
  (0, _react.useEffect)(() => {
    const tooltipNode = tooltipRef.current;
    if (tooltipNode && show) {
      tooltipNode.addEventListener('mouseleave', handleMouseLeave);
      return () => {
        tooltipNode.removeEventListener('mouseleave', handleMouseLeave);
      };
    }
  }, [tooltipRef, handleMouseEnter, handleMouseLeave, show]);
  (0, _react.useEffect)(() => {
    if (show) {
      window.addEventListener('scroll', handleScroll, true);
    }
    return () => window.removeEventListener('scroll', handleScroll, true);
  }, [show]);
  (0, _react.useEffect)(() => {
    window.addEventListener('resize', clearStyles);
    return () => {
      window.removeEventListener('resize', clearStyles);
    };
  }, [clearStyles, style]);
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
    children: [renderChildAsHtml ? /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      "data-testid": id ? `${id}-tooltip-wrapper` : 'tooltip-wrapper',
      ref: parentRef,
      className: tooltipClassNames,
      dangerouslySetInnerHTML: {
        __html: children
      },
      onClick: handleMouseLeave
    }) : /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      "data-testid": id ? `${id}-tooltip-wrapper` : 'tooltip-wrapper',
      ref: parentRef,
      className: tooltipClassNames,
      onClick: handleMouseLeave,
      children: children
    }), !hidden && /*#__PURE__*/(0, _reactDom.createPortal)(/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactTransitionGroup.CSSTransition, {
      classNames: "fade",
      in: show,
      timeout: duration,
      unmountOnExit: true,
      nodeRef: tooltipRef,
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        "data-testid": id ? `${id}-tooltip` : 'tooltip',
        ref: tooltipRef,
        style: {
          ...style
        },
        className: "tooltip",
        children: template
      })
    }), document.getElementById('overlay_container'))]
  });
};
Tooltip.propTypes = {
  className: _propTypes.default.string,
  hidden: _propTypes.default.bool,
  id: _propTypes.default.string,
  renderChildAsHtml: _propTypes.default.bool,
  template: _propTypes.default.element.isRequired,
  textShow: _propTypes.default.bool
};
var _default = exports.default = /*#__PURE__*/_react.default.memo(Tooltip);