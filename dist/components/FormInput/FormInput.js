"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _classnames = _interopRequireDefault(require("classnames"));
var _lodash = require("lodash");
var _reactFinalForm = require("react-final-form");
var _InputNumberButtons = _interopRequireDefault(require("./InputNumberButtons/InputNumberButtons"));
var _OptionsMenu = _interopRequireDefault(require("../../elements/OptionsMenu/OptionsMenu"));
var _ValidationTemplate = _interopRequireDefault(require("../../elements/ValidationTemplate/ValidationTemplate"));
var _components = require("../../components");
var _types = require("../../types");
var _validation = require("../../utils/validation.util");
var _hooks = require("../../hooks");
var _constants = require("../../constants");
var _exclamationMark = require("../../images/exclamation-mark.svg");
var _popout = require("../../images/popout.svg");
var _warning = require("../../images/warning.svg");
require("./formInput.scss");
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

const defaultProps = {
  iconClick: () => {},
  link: {
    show: '',
    value: ''
  },
  onBlur: () => {},
  onChange: () => {},
  onKeyDown: () => {},
  onValidationError: () => {},
  validator: () => {},
  rules: []
};
const FormInput = /*#__PURE__*/_react.default.forwardRef((_ref, ref) => {
  let {
    async = false,
    className = '',
    customRequiredLabel = '',
    density = 'normal',
    disabled = false,
    focused = false,
    iconClass = '',
    iconClick = defaultProps.iconClick,
    inputIcon = null,
    invalidText = 'This field is invalid',
    label = '',
    link = defaultProps.link,
    name,
    onBlur = defaultProps.onBlur,
    onChange = defaultProps.onChange,
    onFocus,
    onKeyDown = defaultProps.onKeyDown,
    pattern = null,
    required = false,
    onValidationError = defaultProps.onValidationError,
    suggestionList = [],
    step = '1',
    tip = '',
    type = 'text',
    validationRules: rules = defaultProps.rules,
    validator = defaultProps.validator,
    withoutBorder = false,
    ...inputProps
  } = _ref;
  const {
    input,
    meta
  } = (0, _reactFinalForm.useField)(name);
  const [isInvalid, setIsInvalid] = (0, _react.useState)(false);
  const [isFocused, setIsFocused] = (0, _react.useState)(false);
  const [typedValue, setTypedValue] = (0, _react.useState)('');
  const [validationPattern] = (0, _react.useState)(RegExp(pattern));
  const [validationRules, setValidationRules] = (0, _react.useState)(rules);
  const [showValidationRules, setShowValidationRules] = (0, _react.useState)(false);
  const wrapperRef = (0, _react.useRef)();
  ref ??= wrapperRef;
  const inputRef = (0, _react.useRef)();
  const errorsRef = (0, _react.useRef)();
  const isRequiredRulePresentRef = (0, _react.useRef)(false);
  (0, _hooks.useDetectOutsideClick)(ref, () => setShowValidationRules(false));
  const debounceAsync = (0, _hooks.useDebounce)();
  const formFieldClassNames = (0, _classnames.default)('form-field-input', className);
  const inputWrapperClassNames = (0, _classnames.default)('form-field__wrapper', `form-field__wrapper-${density}`, disabled && 'form-field__wrapper-disabled', isInvalid && 'form-field__wrapper-invalid', withoutBorder && 'without-border');
  const labelClassNames = (0, _classnames.default)('form-field__label', disabled && 'form-field__label-disabled');
  (0, _react.useEffect)(() => {
    setTypedValue(String(input.value)); // convert from number to string
  }, [input.value]);
  (0, _react.useEffect)(() => {
    const isInputInvalid = errorsRef.current && meta.invalid && (meta.validating || meta.modified || meta.submitFailed && meta.touched);
    setIsInvalid(isInputInvalid);
    onValidationError(isInputInvalid);
  }, [meta.invalid, meta.modified, meta.submitFailed, meta.touched, meta.validating, onValidationError]);
  (0, _react.useEffect)(() => {
    if (!errorsRef.current) {
      if (meta.valid && showValidationRules) {
        setShowValidationRules(false);
      }
    }
  }, [errorsRef.current, meta.valid, showValidationRules]);
  (0, _react.useEffect)(() => {
    if (showValidationRules) {
      window.addEventListener('scroll', handleScroll, true);
    }
    return () => {
      window.removeEventListener('scroll', handleScroll, true);
    };
  }, [showValidationRules]);
  (0, _react.useEffect)(() => {
    if (focused) {
      inputRef.current.focus();
    }
  }, [focused]);
  (0, _react.useEffect)(() => {
    setValidationRules(() => {
      isRequiredRulePresentRef.current = false;
      return rules.map(rule => {
        if (rule.name === _constants.validation.REQUIRED.NAME) {
          isRequiredRulePresentRef.current = true;
        }
        return {
          ...rule,
          isValid: !errorsRef.current || !Array.isArray(errorsRef.current) ? true : !errorsRef.current.some(err => err.name === rule.name)
        };
      });
    });
  }, [rules]);
  const getValidationRules = () => {
    return validationRules.map(_ref2 => {
      let {
        isValid = false,
        label,
        name
      } = _ref2;
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_ValidationTemplate.default, {
        valid: isValid,
        validationMessage: label
      }, name);
    });
  };
  const isValueEmptyAndValid = value => {
    return !value && !required || disabled;
  };
  const handleInputBlur = event => {
    input.onBlur && input.onBlur(event);
    if (!event.relatedTarget || !event.relatedTarget?.closest('.form-field__suggestion-list')) {
      setIsFocused(false);
      onBlur && onBlur(event);
    }
  };
  const handleInputFocus = event => {
    input.onFocus && input.onFocus(event);
    onFocus && onFocus(event);
    setIsFocused(true);
  };
  const handleInputKeyDown = event => {
    input.onKeyDown && input.onKeyDown(event);
    onKeyDown && onKeyDown(event);
  };
  const handleScroll = event => {
    if (inputRef.current && inputRef.current.contains(event.target)) return;
    if (!event.target.closest('.options-menu') && !event.target.classList.contains('form-field-input')) {
      setShowValidationRules(false);
    }
  };
  const handleSuggestionClick = item => {
    input.onChange && input.onChange(item);
    setIsFocused(false);
    onBlur();
  };
  const toggleValidationRulesMenu = () => {
    inputRef.current.focus();
    setShowValidationRules(state => !state);
  };
  const validateField = (value, allValues) => {
    let valueToValidate = (0, _lodash.isNil)(value) ? '' : String(value);
    if (isValueEmptyAndValid(valueToValidate)) return;
    let validationError = null;
    if (required && valueToValidate.trim().length === 0 && !isRequiredRulePresentRef.current) {
      validationError = {
        name: 'required',
        label: customRequiredLabel || 'This field is required'
      };
    } else if (!(0, _lodash.isEmpty)(rules) && !async) {
      const [newRules, isValidField] = (0, _validation.checkPatternsValidity)(rules, valueToValidate);
      const invalidRules = newRules.filter(rule => !rule.isValid);
      if (!isValidField) {
        validationError = invalidRules.map(rule => ({
          name: rule.name,
          label: rule.label
        }));
      }
    }
    if ((0, _lodash.isEmpty)(validationError)) {
      if (type === 'number') {
        if (inputProps.max && +valueToValidate > +inputProps.max) {
          validationError = {
            name: 'maxValue',
            label: `The maximum value must be ${inputProps.max}`
          };
        }
        if (inputProps.min && +valueToValidate < +inputProps.min) {
          validationError = {
            name: 'minValue',
            label: `The minimum value must be ${inputProps.min}`
          };
        }
      }
      if (pattern && !validationPattern.test(valueToValidate)) {
        validationError = {
          name: 'pattern',
          label: invalidText
        };
      } else if (valueToValidate.startsWith(' ')) {
        validationError = {
          name: 'empty',
          label: invalidText
        };
      }
    }
    if (!validationError && validator) {
      validationError = validator(value, allValues);
    }
    errorsRef.current = validationError;
    return validationError;
  };
  const validateFieldAsync = debounceAsync(async (value, allValues) => {
    let valueToValidate = (0, _lodash.isNil)(value) ? '' : String(value);
    if (isValueEmptyAndValid(valueToValidate)) return;
    let validationError = validateField(valueToValidate, allValues);
    if (!(0, _lodash.isEmpty)(rules)) {
      const [newRules, isValidField] = await (0, _validation.checkPatternsValidityAsync)(rules, valueToValidate);
      const invalidRules = newRules.filter(rule => !rule.isValid);
      if (!isValidField) {
        validationError = invalidRules.map(rule => ({
          name: rule.name,
          label: rule.label
        }));
      }
    }
    errorsRef.current = validationError;
    return validationError;
  }, 400);
  const parseField = val => {
    return type === 'number' && val ? parseFloat(val) || val : val;
  };
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactFinalForm.Field, {
    validate: async ? validateFieldAsync : validateField,
    name: name,
    parse: parseField,
    children: _ref3 => {
      let {
        input
      } = _ref3;
      return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        ref: ref,
        className: formFieldClassNames,
        "data-testid": name ? `${name}-form-field-input` : 'form-field-input',
        children: [label && /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: labelClassNames,
          children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("label", {
            "data-testid": name ? `${name}-form-label` : 'form-label',
            htmlFor: input.name,
            children: [label, (required || validationRules.find(rule => rule.name === 'required')) && /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
              className: "form-field__label-mandatory",
              children: " *"
            })]
          }), link && link.show && typedValue.trim() && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: "form-field__label-icon",
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Tooltip, {
              template: /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.TextTooltipTemplate, {
                text: link.url || typedValue
              }),
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)("a", {
                href: link.url || typedValue,
                onClick: event => event.stopPropagation(),
                target: "_blank",
                rel: "noreferrer",
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_popout.ReactComponent, {})
              })
            })
          })]
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: inputWrapperClassNames,
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: "form-field__control",
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
              "data-testid": name ? `${name}-form-input` : 'form-input',
              id: input.name,
              ref: inputRef,
              required: isInvalid || required,
              disabled,
              pattern,
              type,
              ...inputProps,
              ...input,
              autoComplete: inputProps.autocomplete ?? 'off',
              onBlur: handleInputBlur,
              onKeyDown: handleInputKeyDown,
              onFocus: handleInputFocus
            })
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            className: "form-field__icons",
            children: [isInvalid && !Array.isArray(errorsRef.current) && /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Tooltip, {
              className: "form-field__warning",
              template: /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.TextTooltipTemplate, {
                text: errorsRef.current?.label ?? invalidText,
                warning: true
              }),
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_exclamationMark.ReactComponent, {})
            }), isInvalid && Array.isArray(errorsRef.current) && /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
              className: "form-field__warning",
              onClick: toggleValidationRulesMenu,
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_warning.ReactComponent, {})
            }), tip && /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Tip, {
              text: tip,
              className: "form-field__tip"
            }), inputIcon && /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
              "data-testid": "input-icon",
              className: iconClass,
              onClick: iconClick,
              children: inputIcon
            })]
          }), type === 'number' && /*#__PURE__*/(0, _jsxRuntime.jsx)(_InputNumberButtons.default, {
            ...inputProps,
            step: +step,
            ...input,
            disabled
          })]
        }), suggestionList?.length > 0 && isFocused && /*#__PURE__*/(0, _jsxRuntime.jsx)("ul", {
          className: "form-field__suggestion-list",
          children: suggestionList.map((item, index) => {
            return /*#__PURE__*/(0, _jsxRuntime.jsx)("li", {
              className: "suggestion-item",
              onClick: () => {
                handleSuggestionClick(item);
              },
              tabIndex: index,
              dangerouslySetInnerHTML: {
                __html: item.replace(new RegExp(typedValue, 'gi'), match => match ? `<b>${match}</b>` : match)
              }
            }, `${item}${index}`);
          })
        }), !(0, _lodash.isEmpty)(validationRules) && isInvalid && Array.isArray(errorsRef.current) && /*#__PURE__*/(0, _jsxRuntime.jsx)(_OptionsMenu.default, {
          show: showValidationRules,
          ref: ref,
          children: getValidationRules()
        })]
      });
    }
  });
});
FormInput.propTypes = {
  async: _propTypes.default.bool,
  className: _propTypes.default.string,
  customRequiredLabel: _propTypes.default.string,
  density: _propTypes.default.oneOf(['dense', 'normal', 'medium', 'chunky']),
  disabled: _propTypes.default.bool,
  focused: _propTypes.default.bool,
  iconClass: _propTypes.default.string,
  iconClick: _propTypes.default.func,
  inputIcon: _propTypes.default.element,
  invalidText: _propTypes.default.string,
  label: _propTypes.default.string,
  link: _types.INPUT_LINK,
  min: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),
  max: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),
  name: _propTypes.default.string.isRequired,
  onBlur: _propTypes.default.func,
  onChange: _propTypes.default.func,
  onFocus: _propTypes.default.func,
  onKeyDown: _propTypes.default.func,
  pattern: _propTypes.default.string,
  placeholder: _propTypes.default.string,
  required: _propTypes.default.bool,
  step: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),
  suggestionList: _propTypes.default.arrayOf(_propTypes.default.string),
  tip: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.element]),
  type: _propTypes.default.string,
  validationRules: _types.INPUT_VALIDATION_RULES,
  validator: _propTypes.default.func,
  value: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),
  withoutBorder: _propTypes.default.bool
};
var _default = exports.default = /*#__PURE__*/_react.default.memo(FormInput);