"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _success_done = require("../../images/success_done.svg");

var _close = require("../../images/close.svg");

require("./ValidationTemplate.scss");

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ValidationTemplate = function ValidationTemplate(_ref) {
  var valid = _ref.valid,
      validationMessage = _ref.validationMessage;
  var validationClasses = (0, _classnames.default)('validation-option', valid && 'text-muted');
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("li", {
    className: validationClasses,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("i", {
      className: "validation-option__icon",
      children: valid ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_success_done.ReactComponent, {
        className: "validation-option__icon_valid"
      }) : /*#__PURE__*/(0, _jsxRuntime.jsx)(_close.ReactComponent, {
        className: "validation-option__icon_invalid"
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
      children: validationMessage
    })]
  });
};

ValidationTemplate.propTypes = {
  valid: _propTypes.default.bool.isRequired,
  validationMessage: _propTypes.default.string.isRequired
};
var _default = ValidationTemplate;
exports.default = _default;