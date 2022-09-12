"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactFinalForm = require("react-final-form");

var _classnames = _interopRequireDefault(require("classnames"));

require("./FormRadio.scss");

var _jsxRuntime = require("react/jsx-runtime");

var _excluded = ["className", "name", "label"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var FormRadio = function FormRadio(_ref) {
  var className = _ref.className,
      name = _ref.name,
      label = _ref.label,
      inputProps = _objectWithoutProperties(_ref, _excluded);

  var formFieldClassNames = (0, _classnames.default)('form-field-radio', className);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactFinalForm.Field, {
    name: name,
    value: inputProps.value,
    type: "radio",
    children: function children(_ref2) {
      var input = _ref2.input;
      return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: formFieldClassNames,
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("input", _objectSpread(_objectSpread({}, _objectSpread(_objectSpread({}, input), inputProps)), {}, {
          id: inputProps.value
        })), /*#__PURE__*/(0, _jsxRuntime.jsx)("label", {
          htmlFor: inputProps.value,
          children: label
        })]
      });
    }
  });
};

FormRadio.defaultProps = {
  className: '',
  label: ''
};
FormRadio.propTypes = {
  className: _propTypes.default.string,
  name: _propTypes.default.string.isRequired,
  label: _propTypes.default.string.isRequired
};

var _default = /*#__PURE__*/_react.default.memo(FormRadio);

exports.default = _default;