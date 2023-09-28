"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
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
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
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
var Tooltip = function Tooltip(_ref) {
  var children = _ref.children,
    className = _ref.className,
    hidden = _ref.hidden,
    renderChildAsHtml = _ref.renderChildAsHtml,
    template = _ref.template,
    textShow = _ref.textShow;
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    show = _useState2[0],
    setShow = _useState2[1];
  var _useState3 = (0, _react.useState)({}),
    _useState4 = _slicedToArray(_useState3, 2),
    style = _useState4[0],
    setStyle = _useState4[1];
  var tooltipClassNames = (0, _classnames.default)('data-ellipsis', 'tooltip-wrapper', className);
  var duration = 200;
  var parentRef = (0, _react.useRef)();
  var tooltipRef = (0, _react.useRef)();
  var offset = 10;
  var handleScroll = function handleScroll() {
    setShow(false);
  };
  var handleMouseLeave = (0, _react.useCallback)(function (event) {
    if (tooltipRef.current && !tooltipRef.current.contains(event.relatedTarget) && parentRef.current && !parentRef.current.contains(event.relatedTarget)) {
      setShow(false);
    }
  }, []);
  var handleMouseEnter = (0, _react.useCallback)(function (event) {
    if (!show) {
      var _parentRef$current$ch = _slicedToArray(parentRef.current.childNodes, 1),
        child = _parentRef$current$ch[0];
      var _show = !hidden && (textShow ? true : !child ? false : child.nodeType !== Node.TEXT_NODE ||
      /*
      If the child node is a text node and the text of the child node inside the container is greater than the width of the container, then show tooltip.
      */
      child.nodeType === Node.TEXT_NODE && parentRef.current.scrollWidth > parentRef.current.offsetWidth);
      if (_show) {
        var _parentRef$current$ge, _parentRef$current, _tooltipRef$current$g, _tooltipRef$current;
        setShow(true);
        var _ref2 = (_parentRef$current$ge = parentRef === null || parentRef === void 0 ? void 0 : (_parentRef$current = parentRef.current) === null || _parentRef$current === void 0 ? void 0 : _parentRef$current.getBoundingClientRect()) !== null && _parentRef$current$ge !== void 0 ? _parentRef$current$ge : {},
          height = _ref2.height,
          top = _ref2.top,
          bottom = _ref2.bottom;
        var _ref3 = (_tooltipRef$current$g = (_tooltipRef$current = tooltipRef.current) === null || _tooltipRef$current === void 0 ? void 0 : _tooltipRef$current.getBoundingClientRect()) !== null && _tooltipRef$current$g !== void 0 ? _tooltipRef$current$g : {
            height: 0,
            width: 0
          },
          tooltipHeight = _ref3.height,
          tooltipWidth = _ref3.width;
        var leftPosition = event.x - (event.x + tooltipWidth - window.innerWidth + offset);
        var left = event.x + tooltipWidth + offset > window.innerWidth ? leftPosition > offset ? leftPosition : offset : event.x + offset;
        if (top + height + offset + tooltipHeight >= window.innerHeight) {
          var topPosition = bottom - height - offset - tooltipHeight;
          setStyle({
            top: topPosition > 0 ? topPosition : offset,
            left: left
          });
        } else {
          setStyle({
            top: top + height + offset,
            left: left
          });
        }
      }
    }
  }, [hidden, textShow, show]);
  var clearStyles = (0, _lodash.debounce)(function () {
    if (!(0, _common.isEveryObjectValueEmpty)(style)) {
      setStyle({});
    }
  }, 100);
  (0, _react.useEffect)(function () {
    var parentNode = parentRef.current;
    if (parentNode) {
      parentNode.addEventListener('mouseenter', handleMouseEnter);
      parentNode.addEventListener('mouseleave', handleMouseLeave);
      return function () {
        parentNode.removeEventListener('mouseenter', handleMouseEnter);
        parentNode.removeEventListener('mouseleave', handleMouseLeave);
      };
    }
  }, [parentRef, handleMouseEnter, handleMouseLeave]);
  (0, _react.useEffect)(function () {
    var tooltipNode = tooltipRef.current;
    if (tooltipNode && show) {
      tooltipNode.addEventListener('mouseleave', handleMouseLeave);
      return function () {
        tooltipNode.removeEventListener('mouseleave', handleMouseLeave);
      };
    }
  }, [tooltipRef, handleMouseEnter, handleMouseLeave, show]);
  (0, _react.useEffect)(function () {
    if (show) {
      window.addEventListener('scroll', handleScroll, true);
    }
    return function () {
      return window.removeEventListener('scroll', handleScroll, true);
    };
  }, [show]);
  (0, _react.useEffect)(function () {
    window.addEventListener('resize', clearStyles);
    return function () {
      window.removeEventListener('resize', clearStyles);
    };
  }, [clearStyles, style]);
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
    children: [renderChildAsHtml ? /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      "data-testid": "tooltip-wrapper",
      ref: parentRef,
      className: tooltipClassNames,
      dangerouslySetInnerHTML: {
        __html: children
      }
    }) : /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      "data-testid": "tooltip-wrapper",
      ref: parentRef,
      className: tooltipClassNames,
      children: children
    }), !hidden && /*#__PURE__*/(0, _reactDom.createPortal)( /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactTransitionGroup.CSSTransition, {
      classNames: "fade",
      in: show,
      timeout: duration,
      unmountOnExit: true,
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        "data-testid": "tooltip",
        ref: tooltipRef,
        style: _objectSpread({}, style),
        className: "tooltip",
        children: template
      })
    }), document.getElementById('overlay_container'))]
  });
};
Tooltip.defaultProps = {
  hidden: false,
  renderChildAsHtml: false,
  textShow: false
};
Tooltip.propTypes = {
  className: _propTypes.default.string,
  hidden: _propTypes.default.bool,
  renderChildAsHtml: _propTypes.default.bool,
  template: _propTypes.default.element.isRequired,
  textShow: _propTypes.default.bool
};
var _default = /*#__PURE__*/_react.default.memo(Tooltip);
exports.default = _default;