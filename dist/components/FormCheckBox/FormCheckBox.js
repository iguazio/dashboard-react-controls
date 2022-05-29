"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _checkboxUnchecked = require("../../images/checkbox-unchecked.svg");

var _checkboxChecked = require("../../images/checkbox-checked.svg");

require("./formCheckBox.scss");

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FormCheckBox = function FormCheckBox(_ref) {
  var children = _ref.children,
      className = _ref.className,
      item = _ref.item,
      onChange = _ref.onChange,
      selectedId = _ref.selectedId;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("span", {
    className: "checkbox ".concat(className),
    onClick: function onClick() {
      onChange(item.id);
    },
    children: [item.id === selectedId ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_checkboxChecked.ReactComponent, {
      className: "checked"
    }) : /*#__PURE__*/(0, _jsxRuntime.jsx)(_checkboxUnchecked.ReactComponent, {
      className: "unchecked"
    }), children || item.label]
  });
};

FormCheckBox.defaultProps = {
  className: '',
  selectedId: ''
};
FormCheckBox.propTypes = {
  className: _propTypes.default.string,
  item: _propTypes.default.shape({
    id: _propTypes.default.string.isRequired,
    label: _propTypes.default.string
  }).isRequired,
  onChange: _propTypes.default.func.isRequired,
  selectedId: _propTypes.default.string
};

var _default = /*#__PURE__*/_react.default.memo(FormCheckBox);

exports.default = _default;