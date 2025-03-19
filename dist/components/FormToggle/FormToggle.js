"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _classnames = _interopRequireDefault(require("classnames"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _reactFinalForm = require("react-final-form");
require("./formToggle.scss");
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

const FormToggle = _ref => {
  let {
    className = '',
    density,
    label = '',
    name,
    onChange = () => {},
    ...inputProps
  } = _ref;
  const toggleWrapperClassNames = (0, _classnames.default)('form-field__wrapper', density && `form-field__wrapper-${density}`);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactFinalForm.Field, {
    name: name,
    value: inputProps.value,
    type: "checkbox",
    children: _ref2 => {
      let {
        input
      } = _ref2;
      return /*#__PURE__*/(0, _jsxRuntime.jsxs)("label", {
        className: "form-field-toggle",
        "data-testid": name ? `${name}-form-field-toggle` : 'form-field-toggle',
        children: [label && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "form-field__label",
          children: label
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
          "data-testid": name ? `${name}-form-toggle` : 'form-toggle',
          id: name,
          ...input,
          ...inputProps,
          onChange: event => {
            onChange && onChange(event);
            input.onChange(event);
          },
          type: "checkbox"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: toggleWrapperClassNames,
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
            className: "form-field-toggle__switch"
          })
        })]
      });
    }
  });
};
FormToggle.propTypes = {
  className: _propTypes.default.string,
  density: _propTypes.default.string,
  label: _propTypes.default.string,
  name: _propTypes.default.string.isRequired,
  onChange: _propTypes.default.func
};
var _default = exports.default = FormToggle;