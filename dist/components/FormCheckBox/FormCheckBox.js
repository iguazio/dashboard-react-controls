"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactFinalForm = require("react-final-form");

var _classnames = _interopRequireDefault(require("classnames"));

require("./formCheckBox.scss");

var _jsxRuntime = require("react/jsx-runtime");

var _excluded = ["children", "className", "highlightLabel", "label", "name"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var FormCheckBox = function FormCheckBox(_ref) {
  var _children = _ref.children,
      className = _ref.className,
      highlightLabel = _ref.highlightLabel,
      label = _ref.label,
      name = _ref.name,
      inputProps = _objectWithoutProperties(_ref, _excluded);

  var formFieldClassNames = (0, _classnames.default)('form-field-checkbox', className);
  var labelClassNames = (0, _classnames.default)(highlightLabel && 'highlighted');
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactFinalForm.Field, {
    name: name,
    value: inputProps.value,
    type: "checkbox",
    children: function children(_ref2) {
      var _inputProps$value, _inputProps$value2;

      var input = _ref2.input;
      return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: formFieldClassNames,
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("input", _objectSpread(_objectSpread({}, _objectSpread(_objectSpread({}, input), inputProps)), {}, {
          id: (_inputProps$value = inputProps.value) !== null && _inputProps$value !== void 0 ? _inputProps$value : name
        })), /*#__PURE__*/(0, _jsxRuntime.jsxs)("label", {
          htmlFor: (_inputProps$value2 = inputProps.value) !== null && _inputProps$value2 !== void 0 ? _inputProps$value2 : name,
          className: labelClassNames,
          children: [label ? label : '', _children]
        })]
      });
    }
  });
};

FormCheckBox.defaultProps = {
  className: '',
  highlightLabel: false,
  label: ''
};
FormCheckBox.propTypes = {
  className: _propTypes.default.string,
  highlightLabel: _propTypes.default.bool,
  name: _propTypes.default.string.isRequired,
  label: _propTypes.default.string
};

var _default = /*#__PURE__*/_react.default.memo(FormCheckBox);

exports.default = _default;