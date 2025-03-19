"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _reactFinalForm = require("react-final-form");
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

const NewChipInput = /*#__PURE__*/_react.default.forwardRef((_ref, ref) => {
  let {
    name,
    onChange,
    onFocus,
    ...inputProps
  } = _ref;
  const {
    input
  } = (0, _reactFinalForm.useField)(name);
  const handleInputChange = event => {
    input.onChange(event);
    onChange(event);
  };
  const handleInputFocus = event => {
    input.onFocus(event);
    onFocus(event);
  };
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactFinalForm.Field, {
    name: name,
    children: _ref2 => {
      let {
        input
      } = _ref2;
      return /*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
        autoComplete: "off",
        "data-testid": "input",
        ref: ref,
        type: "text",
        ...inputProps,
        ...input,
        onChange: handleInputChange,
        onFocus: handleInputFocus
      });
    }
  });
});
NewChipInput.propTypes = {
  name: _propTypes.default.string.isRequired,
  onChange: _propTypes.default.func.isRequired,
  onFocus: _propTypes.default.func.isRequired
};
var _default = exports.default = NewChipInput;