"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _components = require("../../components");

var _types = require("../../types");

var _checkmark = require("../../images/checkmark.svg");

require("./selectOption.scss");

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SelectOption = function SelectOption(_ref) {
  var item = _ref.item,
      _onClick = _ref.onClick,
      selectType = _ref.selectType,
      selectedId = _ref.selectedId,
      withSelectedIcon = _ref.withSelectedIcon;
  var selectClassName = (0, _classnames.default)('select__item', item.hidden && 'hidden', item.disabled && 'disabled');

  if (selectType === 'checkbox') {
    return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      "data-testid": "select-checkbox",
      className: "select__item",
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_components.FormCheckBox, {
        item: item,
        selectedId: selectedId,
        onChange: _onClick,
        children: [item.status && /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
          className: "state-".concat(item.status, "-job status")
        }), item.label]
      })
    });
  }

  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    "data-testid": "select-option",
    className: selectClassName,
    onClick: function onClick() {
      !item.disabled && _onClick(item.id);
    },
    children: [item.icon && /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
      "data-testid": "select-icon",
      className: "select__icon",
      children: item.icon
    }), item.status && /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
      className: "state-".concat(item.status, "-job status")
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "data-ellipsis label-row",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Tooltip, {
        template: /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.TextTooltipTemplate, {
          text: item.label
        }),
        children: item.label
      }), withSelectedIcon && item.id === selectedId && /*#__PURE__*/(0, _jsxRuntime.jsx)(_checkmark.ReactComponent, {
        className: "checkmark"
      })]
    }), item.subLabel && /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Tooltip, {
      className: "sub-label",
      template: /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.TextTooltipTemplate, {
        text: item.subLabel
      }),
      children: item.subLabel
    })]
  });
};

SelectOption.defaultProps = {
  onClick: function onClick() {},
  selectType: '',
  withSelectedIcon: true
};
SelectOption.propTypes = {
  disabled: _propTypes.default.bool,
  item: _types.SELECT_OPTION.isRequired,
  onClick: _propTypes.default.func,
  selectType: _propTypes.default.string,
  selectedId: _propTypes.default.string,
  withSelectedIcon: _propTypes.default.bool
};
var _default = SelectOption;
exports.default = _default;