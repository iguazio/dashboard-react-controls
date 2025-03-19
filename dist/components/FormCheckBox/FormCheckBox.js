"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _reactFinalForm = require("react-final-form");
var _classnames = _interopRequireDefault(require("classnames"));
require("./formCheckBox.scss");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
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

const FormCheckBox = _ref => {
  let {
    children,
    className = '',
    highlightLabel = false,
    label = '',
    name,
    readOnly = false,
    ...inputProps
  } = _ref;
  const formFieldClassNames = (0, _classnames.default)('form-field-checkbox', readOnly && 'form-field-checkbox_readonly', className);
  const labelClassNames = (0, _classnames.default)(highlightLabel && 'highlighted');
  const inputRef = (0, _react.useRef)();
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactFinalForm.Field, {
    name: name,
    value: inputProps.value,
    type: "checkbox",
    children: _ref2 => {
      let {
        input
      } = _ref2;
      return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: formFieldClassNames,
        "data-testid": "form-field-checkbox",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
          ref: inputRef,
          className: (0, _classnames.default)(input.checked ? 'checked' : 'unchecked'),
          type: "checkbox",
          "data-testid": name ? `${name}-form-checkbox` : 'form-checkbox',
          id: inputProps.value ?? name,
          ...input,
          ...inputProps,
          value: String(input.checked)
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("label", {
          htmlFor: inputProps.value ?? name,
          className: labelClassNames,
          children: [label ? label : '', children]
        })]
      });
    }
  });
};
FormCheckBox.propTypes = {
  className: _propTypes.default.string,
  highlightLabel: _propTypes.default.bool,
  name: _propTypes.default.string.isRequired,
  label: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.element]),
  readOnly: _propTypes.default.bool
};
var _default = exports.default = /*#__PURE__*/_react.default.memo(FormCheckBox);