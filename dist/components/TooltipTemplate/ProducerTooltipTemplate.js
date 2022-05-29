"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

require("./producerTooltipTemplate.scss");

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ProducerTooltipTemplate = function ProducerTooltipTemplate(_ref) {
  var kind = _ref.kind,
      owner = _ref.owner;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: "tooltip-container",
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "tooltip-container__kind",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
        children: "Kind:"
      }), " ", kind]
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "tooltip-container__owner",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
        children: "Owner:"
      }), " ", owner]
    })]
  });
};

ProducerTooltipTemplate.defaultProps = {
  kind: '',
  owner: ''
};
ProducerTooltipTemplate.propTypes = {
  kind: _propTypes.default.string.isRequired,
  owner: _propTypes.default.string.isRequired
};
var _default = ProducerTooltipTemplate;
exports.default = _default;