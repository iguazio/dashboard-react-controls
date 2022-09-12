"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactFinalForm = require("react-final-form");

var _jsxRuntime = require("react/jsx-runtime");

var _excluded = ["name", "onChange", "onFocus"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var NewChipInput = /*#__PURE__*/_react.default.forwardRef(function (_ref, ref) {
  var name = _ref.name,
      onChange = _ref.onChange,
      onFocus = _ref.onFocus,
      inputProps = _objectWithoutProperties(_ref, _excluded);

  var _useField = (0, _reactFinalForm.useField)(name),
      input = _useField.input;

  var handleInputChange = function handleInputChange(event) {
    input.onChange(event);
    onChange(event);
  };

  var handleInputFocus = function handleInputFocus(event) {
    input.onFocus(event);
    onFocus(event);
  };

  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactFinalForm.Field, {
    name: name,
    children: function children(_ref2) {
      var input = _ref2.input;
      return /*#__PURE__*/(0, _jsxRuntime.jsx)("input", _objectSpread(_objectSpread({
        autoComplete: "off",
        "data-testid": "input",
        ref: ref,
        type: "text",
        id: input.name
      }, _objectSpread(_objectSpread({}, inputProps), input)), {}, {
        onChange: handleInputChange,
        onFocus: handleInputFocus
      }));
    }
  });
});

NewChipInput.propTypes = {
  name: _propTypes.default.string.isRequired,
  onChange: _propTypes.default.func.isRequired,
  onFocus: _propTypes.default.func.isRequired
};
var _default = NewChipInput;
exports.default = _default;