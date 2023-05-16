"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
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
var _tip = _interopRequireDefault(require("./tip.scss"));
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
var arrowOffset = parseInt(_tip.default.arrowoffset);
var arrowLength = parseInt(_tip.default.arrowlength);
var iconLength = parseInt(_tip.default.iconlength);
var minTextLength = 40;
var Tip = function Tip(_ref) {
  var className = _ref.className,
    text = _ref.text;
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isShow = _useState2[0],
    setIsShow = _useState2[1];
  var _useState3 = (0, _react.useState)('tip_top tip_left'),
    _useState4 = _slicedToArray(_useState3, 2),
    tipClassName = _useState4[0],
    setTipClassName = _useState4[1];
  var iconRef = (0, _react.useRef)();
  var tipBodyRef = (0, _react.useRef)();
  var tipContainerClassNames = (0, _classnames.default)(className, 'tip-container');
  var tipClassNames = (0, _classnames.default)('tip', tipClassName, text.length <= minTextLength ? 'tip_small' : 'tip_big');
  var handleMouseEnter = (0, _react.useCallback)(function (event) {
    setIsShow(true);
    var iconRect = iconRef.current.getBoundingClientRect();
    var tipRect = tipBodyRef.current.getBoundingClientRect();
    var widthPosition = iconRect.left > tipRect.width - arrowOffset ? 'tip_left' : 'tip_right';
    var heightPosition = iconRect.top > tipRect.height + arrowLength ? 'tip_top' : 'tip_bottom';
    setTipClassName("".concat(heightPosition, " ").concat(widthPosition));
    if (widthPosition === 'tip_left') {
      var computedArrowOffset = arrowOffset + (iconLength + arrowLength) / 2;
      tipBodyRef.current.style.left = "".concat(iconRect.left - (tipRect.width - computedArrowOffset), "px");
    } else {
      var _computedArrowOffset = arrowOffset - (iconLength - arrowLength) / 2;
      tipBodyRef.current.style.left = "".concat(iconRect.left - _computedArrowOffset, "px");
    }
    tipBodyRef.current.style.top = heightPosition === 'tip_top' ? "".concat(iconRect.top - tipRect.height - arrowLength, "px") : "".concat(iconRect.bottom + arrowLength, "px");
  }, []);
  var handleMouseLeave = function handleMouseLeave() {
    setIsShow(false);
  };
  (0, _react.useEffect)(function () {
    var node = iconRef.current;
    if (iconRef.current) {
      node.addEventListener('mouseenter', handleMouseEnter);
      node.addEventListener('mouseleave', handleMouseLeave);
      return function () {
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
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_questionMark.ReactComponent, {
        "data-testid": "tip-icon"
      })
    }), /*#__PURE__*/(0, _reactDom.createPortal)( /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactTransitionGroup.CSSTransition, {
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
Tip.defaultProps = {
  className: ''
};
Tip.propTypes = {
  className: _propTypes.default.string,
  text: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.element]).isRequired
};
var _default = Tip;
exports.default = _default;