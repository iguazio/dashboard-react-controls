"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _classnames = _interopRequireDefault(require("classnames"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _reactFinalForm = require("react-final-form");
var _TextTooltipTemplate = _interopRequireDefault(require("../TooltipTemplate/TextTooltipTemplate"));
var _Tip = _interopRequireDefault(require("../Tip/Tip"));
var _Tooltip = _interopRequireDefault(require("../Tooltip/Tooltip"));
var _exclamationMark = require("../../images/exclamation-mark.svg");
require("./formTextarea.scss");
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

const FormTextarea = /*#__PURE__*/_react.default.forwardRef((_ref, ref) => {
  let {
    className = '',
    disabled = false,
    focused = false,
    iconClass = '',
    invalidText = 'This field is invalid',
    label = '',
    maxLength = null,
    name,
    onBlur = () => {},
    onChange = () => {},
    required = false,
    rows = 3,
    textAreaIcon,
    tip = '',
    withoutBorder,
    ...textareaProps
  } = _ref;
  const {
    input,
    meta
  } = (0, _reactFinalForm.useField)(name);
  const [isInvalid, setIsInvalid] = (0, _react.useState)(false);
  const [textAreaCount, setTextAreaCount] = (0, _react.useState)(input.value.length);
  const textAreaRef = (0, _react.useRef)();
  const formFieldClassNames = (0, _classnames.default)('form-field-textarea', className);
  const labelClassNames = (0, _classnames.default)('form-field__label', disabled && 'form-field__label-disabled');
  const textAreaClassNames = (0, _classnames.default)('form-field__wrapper', disabled && 'form-field__wrapper-disabled', isInvalid && 'form-field__wrapper-invalid', withoutBorder && 'without-border');
  (0, _react.useLayoutEffect)(() => {
    setTextAreaCount(input.value.length);
  }, [input.value.length]);
  (0, _react.useEffect)(() => {
    if (focused) {
      textAreaRef.current.focus();
    }
  }, [focused, textAreaRef]);
  (0, _react.useEffect)(() => {
    setIsInvalid(meta.invalid && (meta.validating || meta.modified || meta.submitFailed && meta.touched));
  }, [meta.invalid, meta.modified, meta.submitFailed, meta.touched, meta.validating]);
  const handleInputBlur = event => {
    input.onBlur(event);
    onBlur && onBlur(event);
  };
  const handleInputChange = event => {
    input.onChange(event);
    onChange && onChange(event.target.value);
  };
  const handleInputFocus = event => {
    input.onFocus(event);
  };
  const validateField = value => {
    const valueToValidate = value ?? '';
    let validationError = null;
    if (valueToValidate.startsWith(' ')) {
      validationError = {
        name: 'empty',
        label: invalidText
      };
    } else if (required && valueToValidate.trim().length === 0) {
      validationError = {
        name: 'required',
        label: 'This field is required'
      };
    }
    return validationError;
  };
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactFinalForm.Field, {
    validate: validateField,
    name: name,
    children: _ref2 => {
      let {
        input,
        meta
      } = _ref2;
      return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        ref: ref,
        className: formFieldClassNames,
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: labelClassNames,
          children: label && /*#__PURE__*/(0, _jsxRuntime.jsxs)("label", {
            "data-testid": "label",
            htmlFor: input.name,
            children: [label, required && /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
              className: "form-field__label-mandatory",
              children: " *"
            })]
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: textAreaClassNames,
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: "form-field__control",
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)("textarea", {
              "data-testid": "textarea",
              id: input.name,
              maxLength: maxLength,
              ref: textAreaRef,
              required: isInvalid || required,
              disabled,
              rows,
              ...textareaProps,
              ...input,
              onBlur: handleInputBlur,
              onChange: handleInputChange,
              onFocus: handleInputFocus
            })
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            className: "form-field__icons",
            children: [isInvalid && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Tooltip.default, {
              className: "form-field__warning",
              template: /*#__PURE__*/(0, _jsxRuntime.jsx)(_TextTooltipTemplate.default, {
                text: meta.error?.label ?? invalidText,
                warning: true
              }),
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_exclamationMark.ReactComponent, {})
            }), tip && !required && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Tip.default, {
              text: tip,
              className: "form-field__tip"
            }), textAreaIcon && /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
              "data-testid": "textarea__icon",
              className: iconClass,
              children: textAreaIcon
            })]
          })]
        }), maxLength && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "form-field__counter",
          children: `${maxLength - textAreaCount} ${maxLength - textAreaCount !== 1 ? 'characters' : 'character'} left`
        })]
      });
    }
  });
});
FormTextarea.propTypes = {
  className: _propTypes.default.string,
  disabled: _propTypes.default.bool,
  focused: _propTypes.default.bool,
  iconClass: _propTypes.default.string,
  textAreaIcon: _propTypes.default.element,
  invalidText: _propTypes.default.string,
  label: _propTypes.default.string,
  maxLength: _propTypes.default.number,
  name: _propTypes.default.string.isRequired,
  onBlur: _propTypes.default.func,
  onChange: _propTypes.default.func,
  required: _propTypes.default.bool,
  tip: _propTypes.default.string
};
var _default = exports.default = /*#__PURE__*/_react.default.memo(FormTextarea);