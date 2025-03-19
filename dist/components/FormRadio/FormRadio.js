"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _reactFinalForm = require("react-final-form");
var _classnames = _interopRequireDefault(require("classnames"));
var _Tooltip = _interopRequireDefault(require("../Tooltip/Tooltip"));
var _TextTooltipTemplate = _interopRequireDefault(require("../TooltipTemplate/TextTooltipTemplate"));
require("./FormRadio.scss");
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

const FormRadio = _ref => {
  let {
    className = '',
    name,
    label,
    readOnly = false,
    tooltip,
    ...inputProps
  } = _ref;
  const formFieldClassNames = (0, _classnames.default)('form-field-radio', readOnly && 'form-field-radio_readonly', className);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactFinalForm.Field, {
    name: name,
    value: inputProps.value,
    type: "radio",
    children: _ref2 => {
      let {
        input
      } = _ref2;
      return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: formFieldClassNames,
        "data-testid": name ? `${name}-${inputProps.value}-form-radio` : 'form-field-radio',
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
          className: (0, _classnames.default)(input.checked ? 'checked' : 'unchecked'),
          type: "radio",
          "data-testid": name ? `${name}-${inputProps.value}-radio` : 'form-radio',
          ...input,
          ...inputProps,
          checked: input.checked,
          id: name + inputProps.value
        }), tooltip ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_Tooltip.default, {
          className: "label",
          template: /*#__PURE__*/(0, _jsxRuntime.jsx)(_TextTooltipTemplate.default, {
            text: tooltip
          }),
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)("label", {
            htmlFor: name + inputProps.value,
            children: label
          })
        }) : /*#__PURE__*/(0, _jsxRuntime.jsx)("label", {
          htmlFor: name + inputProps.value,
          children: label
        })]
      });
    }
  });
};
FormRadio.propTypes = {
  className: _propTypes.default.string,
  label: _propTypes.default.string.isRequired,
  name: _propTypes.default.string.isRequired,
  readOnly: _propTypes.default.bool
};
var _default = exports.default = /*#__PURE__*/_react.default.memo(FormRadio);