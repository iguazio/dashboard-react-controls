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
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
/*
Copyright 2022 Iguazio Systems Ltd.
Licensed under the Apache License, Version 2.0 (the "License") with
an addition restriction as set forth herein. You may not use this
file except in compliance with the License. You may obtain a copy of
the License at http://www.apache.org/licenses/LICENSE-2.0.
Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or
implied. See the License for the specific language governing
permissions and limitations under the License.
In addition, you may not use the software for any purposes that are
illegal under applicable law, and the grant of the foregoing license
under the Apache 2.0 license is conditioned upon your compliance with
such restriction.
*/

const SelectOption = _ref => {
  let {
    item,
    name,
    onClick = () => {},
    multiple = false,
    selectedId,
    withSelectedIcon = true
  } = _ref;
  const selectClassName = (0, _classnames.default)('select__item', multiple && 'multiple', item.hidden && 'hidden', item.disabled && 'disabled');
  if (multiple) {
    return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      "data-testid": "select-checkbox",
      className: selectClassName,
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.FormCheckBox, {
        name: name,
        value: item.id,
        label: item.label,
        disabled: item.disabled || false,
        children: item.status && /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
          className: `state-${item.status}-job status`
        })
      })
    });
  }
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("li", {
    "data-testid": "select-option",
    className: selectClassName,
    onClick: () => {
      !item.disabled && onClick(item.id);
    },
    "data-custom-id": item.id,
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "label-row",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "data-ellipsis select__item-label",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "select__item-main-label",
          children: [item.icon && /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
            "data-testid": "select-icon",
            className: "select__item-icon",
            children: item.icon
          }), item.status && /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
            className: `state-${item.status}-job status`
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Tooltip, {
            renderChildAsHtml: item.labelHtml?.length > 0,
            template: /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.TextTooltipTemplate, {
              text: item.label
            }),
            children: item.labelHtml ? item.labelHtml : item.label
          })]
        }), item.subLabel && /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Tooltip, {
          className: "select__item-sub-label",
          template: /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.TextTooltipTemplate, {
            text: item.subLabel
          }),
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
            children: item.subLabel
          })
        })]
      }), withSelectedIcon && item.id === selectedId && /*#__PURE__*/(0, _jsxRuntime.jsx)(_checkmark.ReactComponent, {
        className: "checkmark"
      })]
    })
  });
};
SelectOption.propTypes = {
  name: _propTypes.default.string.isRequired,
  item: _types.SELECT_OPTION.isRequired,
  onClick: _propTypes.default.func,
  multiple: _propTypes.default.bool,
  selectedId: _propTypes.default.string,
  withSelectedIcon: _propTypes.default.bool
};
var _default = exports.default = SelectOption;