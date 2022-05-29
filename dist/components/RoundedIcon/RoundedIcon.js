"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Tooltip = _interopRequireDefault(require("../Tooltip/Tooltip"));

var _TextTooltipTemplate = _interopRequireDefault(require("../TooltipTemplate/TextTooltipTemplate"));

require("./roundedIcon.scss");

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RoundedIcon = /*#__PURE__*/_react.default.forwardRef(function (_ref, ref) {
  var children = _ref.children,
      className = _ref.className,
      disabled = _ref.disabled,
      id = _ref.id,
      isActive = _ref.isActive,
      onClick = _ref.onClick,
      tooltipText = _ref.tooltipText;
  var wrapperClassNames = (0, _classnames.default)('round-icon-cp', className);
  var IconClassNames = (0, _classnames.default)('round-icon-cp__circle', isActive && 'round-icon-cp__circle-active');
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    className: wrapperClassNames,
    ref: ref,
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Tooltip.default, {
      hidden: !tooltipText,
      template: /*#__PURE__*/(0, _jsxRuntime.jsx)(_TextTooltipTemplate.default, {
        text: tooltipText
      }),
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
        onClick: onClick,
        disabled: disabled,
        id: id,
        className: IconClassNames,
        children: children
      })
    })
  });
});

RoundedIcon.defaultProps = {
  className: '',
  disabled: false,
  id: '',
  isActive: false,
  onClick: function onClick() {},
  tooltipText: ''
};
RoundedIcon.propTypes = {
  children: _propTypes.default.node.isRequired,
  className: _propTypes.default.string,
  disabled: _propTypes.default.bool,
  id: _propTypes.default.string,
  isActive: _propTypes.default.bool,
  onClick: _propTypes.default.func,
  tooltipText: _propTypes.default.string
};

var _default = /*#__PURE__*/_react.default.memo(RoundedIcon);

exports.default = _default;