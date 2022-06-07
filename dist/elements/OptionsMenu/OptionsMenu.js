"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactTransitionGroup = require("react-transition-group");

var _components = require("../../components");

require("./optionsMenu.scss");

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var OptionsMenu = /*#__PURE__*/_react.default.forwardRef(function (_ref, ref) {
  var children = _ref.children,
      show = _ref.show,
      timeout = _ref.timeout;

  var _ref2 = ref.current ? ref.current.getBoundingClientRect() : {},
      dropdownWidth = _ref2.width;

  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactTransitionGroup.CSSTransition, {
    in: show,
    timeout: timeout,
    classNames: "options-menu-transition",
    unmountOnExit: true,
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.PopUpDialog, {
      className: "options-menu",
      customPosition: {
        element: ref,
        position: 'bottom-right'
      },
      style: {
        width: "".concat(dropdownWidth, "px")
      },
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)("ul", {
        className: "options-menu__body",
        children: children
      })
    })
  });
});

OptionsMenu.defaultProps = {
  children: [],
  show: false,
  timeout: 300
};
OptionsMenu.propTypes = {
  children: _propTypes.default.arrayOf(_propTypes.default.element),
  show: _propTypes.default.bool.isRequired,
  timout: _propTypes.default.number
};
var _default = OptionsMenu;
exports.default = _default;