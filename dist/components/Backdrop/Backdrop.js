"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactTransitionGroup = require("react-transition-group");

require("./Backdrop.scss");

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Backdrop = function Backdrop(_ref) {
  var _ref$duration = _ref.duration,
      duration = _ref$duration === void 0 ? 300 : _ref$duration,
      show = _ref.show,
      onClose = _ref.onClose;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactTransitionGroup.CSSTransition, {
    in: show,
    timeout: duration,
    classNames: "backdrop-transition",
    mountOnEnter: true,
    unmountOnExit: true,
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "backdrop",
      onClick: onClose
    })
  });
};

Backdrop.defaultProps = {
  duration: 300,
  show: false
};
Backdrop.propTypes = {
  show: _propTypes.default.bool.isRequired
};
var _default = Backdrop;
exports.default = _default;