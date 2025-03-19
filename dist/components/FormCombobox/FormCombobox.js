"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactFinalForm = require("react-final-form");
var _lodash = require("lodash");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _classnames = _interopRequireDefault(require("classnames"));
var _elements = require("../../elements");
var _PopUpDialog = _interopRequireDefault(require("../PopUpDialog/PopUpDialog"));
var _TextTooltipTemplate = _interopRequireDefault(require("../TooltipTemplate/TextTooltipTemplate"));
var _Tooltip = _interopRequireDefault(require("../Tooltip/Tooltip"));
var _validation = require("../../utils/validation.util");
var _hooks = require("../../hooks");
var _types = require("../../types");
var _arrow = require("../../images/arrow.svg");
var _search = require("../../images/search.svg");
var _warning = require("../../images/warning.svg");
var _exclamationMark = require("../../images/exclamation-mark.svg");
require("./formCombobox.scss");
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

const FormCombobox = _ref => {
  let {
    comboboxClassName = '',
    density = 'normal',
    disabled = false,
    hideSearchInput = false,
    inputDefaultValue = '',
    inputPlaceholder = '',
    invalidText,
    label = '',
    maxSuggestedMatches = 1,
    name,
    onBlur = null,
    onChange = null,
    onFocus = null,
    required = false,
    rules = [],
    selectDefaultValue = {
      label: '',
      id: '',
      className: ''
    },
    selectOptions,
    selectPlaceholder = '',
    suggestionList = [],
    validator = null,
    withoutBorder = false
  } = _ref;
  const {
    input,
    meta
  } = (0, _reactFinalForm.useField)(name);
  const [inputValue, setInputValue] = (0, _react.useState)(inputDefaultValue);
  const [selectValue, setSelectValue] = (0, _react.useState)(selectDefaultValue);
  const [dropdownStyle, setDropdownStyle] = (0, _react.useState)({
    left: '0px'
  });
  const [showSelectDropdown, setShowSelectDropdown] = (0, _react.useState)(false);
  const [showSuggestionList, setShowSuggestionList] = (0, _react.useState)(false);
  const [dropdownList, setDropdownList] = (0, _react.useState)(suggestionList);
  const [searchIsFocused, setSearchIsFocused] = (0, _react.useState)(false);
  const [isInvalid, setIsInvalid] = (0, _react.useState)(false);
  const [validationRules, setValidationRules] = (0, _react.useState)(rules);
  const [showValidationRules, setShowValidationRules] = (0, _react.useState)(false);
  const comboboxRef = (0, _react.useRef)();
  const selectRef = (0, _react.useRef)();
  const inputRef = (0, _react.useRef)();
  const suggestionListRef = (0, _react.useRef)();
  (0, _hooks.useDetectOutsideClick)(comboboxRef, () => setShowValidationRules(false));
  const labelClassNames = (0, _classnames.default)('form-field__label', disabled && 'form-field__label-disabled');
  const inputClassNames = (0, _classnames.default)('form-field-combobox__input', selectValue.id.length === 0 && 'form-field-combobox__input_hidden');
  (0, _react.useEffect)(() => {
    setValidationRules(prevState => prevState.map(rule => ({
      ...rule,
      isValid: !meta.error || !Array.isArray(meta.error) ? true : !meta.error.some(err => err.name === rule.name)
    })));
  }, [meta.error]);
  (0, _react.useEffect)(() => {
    if (!searchIsFocused) {
      if (JSON.stringify(dropdownList) !== JSON.stringify(suggestionList)) {
        setDropdownList(suggestionList);
      }
    }
  }, [dropdownList, suggestionList, searchIsFocused]);
  (0, _react.useEffect)(() => {
    setIsInvalid(meta.invalid && (meta.validating || meta.modified || meta.submitFailed && meta.touched));
  }, [meta.invalid, meta.modified, meta.submitFailed, meta.touched, meta.validating]);
  const handleOutsideClick = (0, _react.useCallback)(event => {
    if (comboboxRef.current && !comboboxRef.current.contains(event.target) && suggestionListRef.current && !suggestionListRef.current.contains(event.target)) {
      setSearchIsFocused(false);
      setShowSelectDropdown(false);
      setShowSuggestionList(false);
      input.onBlur(new Event('blur'));
      onBlur && onBlur(input.value);
    }
  }, [input, onBlur]);
  const handleScroll = event => {
    if (comboboxRef.current && comboboxRef.current.contains(event.target)) return;
    if (!event.target.closest('.pop-up-dialog') && !event.target.classList.contains('form-field-combobox')) {
      setShowValidationRules(false);
      setShowSelectDropdown(false);
      setShowSuggestionList(false);
      inputRef.current.blur();
    }
  };
  (0, _react.useEffect)(() => {
    window.addEventListener('click', handleOutsideClick);
    return () => {
      window.removeEventListener('click', handleOutsideClick);
    };
  }, [handleOutsideClick]);
  (0, _react.useEffect)(() => {
    if (showValidationRules || showSelectDropdown || showSuggestionList) {
      window.addEventListener('scroll', handleScroll, true);
    }
    return () => {
      window.removeEventListener('scroll', handleScroll, true);
    };
  }, [showSelectDropdown, showSuggestionList, showValidationRules]);
  const getValidationRules = () => {
    return validationRules.map(_ref2 => {
      let {
        isValid = false,
        label,
        name
      } = _ref2;
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_elements.ValidationTemplate, {
        valid: isValid,
        validationMessage: label
      }, name);
    });
  };
  const handleInputChange = event => {
    const target = event.target;
    setDropdownStyle({
      left: `${target.selectionStart < 30 ? target.selectionStart : 30}ch`
    });
    if (searchIsFocused) {
      setSearchIsFocused(false);
    }
    setInputValue(target.value);
    input.onChange(`${selectValue.id}${target.value}`);
    onChange && onChange(selectValue.id, target.value);
    if (dropdownList.length > 0) {
      setShowSuggestionList(true);
    }
  };
  const handleSelectOptionClick = (selectedOption, option) => {
    if (selectedOption.id !== selectValue.id) {
      setSelectValue(selectedOption);
      input.onChange(selectedOption.id);
      setInputValue('');
      onChange && onChange(selectedOption.id);
      setShowSelectDropdown(false);
      inputRef.current.disabled = false;
      inputRef.current.focus();
    }
  };
  const handleSuggestionListOptionClick = option => {
    const inputValueItems = inputValue.split('/');
    const valueIndex = inputValueItems.length - 1;
    let formattedValue = option.customDelimiter ? inputValueItems[valueIndex].replace(new RegExp(`${option.customDelimiter}.*`), '') + option.id : option.id;
    if (inputValueItems.length <= maxSuggestedMatches - 1) formattedValue += '/';
    inputValueItems[valueIndex] = formattedValue;
    if (searchIsFocused) {
      setSearchIsFocused(false);
    }
    if (inputValueItems.join('/') !== inputValue) {
      setInputValue(inputValueItems.join('/'));
      input.onChange(`${selectValue.id}${inputValueItems.join('/')}`);
      onChange && onChange(selectValue.id, inputValueItems.join('/'));
    }
    setShowSuggestionList(false);
    inputRef.current.focus();
    setDropdownStyle({
      left: `${inputRef.current.selectionStart < 30 ? inputRef.current.selectionStart : 30}ch`
    });
  };
  const inputOnFocus = () => {
    onFocus && onFocus();
    input.onFocus(new Event('focus'));
    if (showSelectDropdown) {
      setShowSelectDropdown(false);
    }
    setShowSuggestionList(true);
  };
  const suggestionListSearchChange = event => {
    event.persist();
    setDropdownList(() => suggestionList.filter(option => {
      return option.id.startsWith(event.target.value);
    }));
  };
  const toggleSelect = (0, _react.useCallback)(() => {
    if (showSelectDropdown) {
      setShowSelectDropdown(false);
      input.onBlur(new Event('blur'));
      onBlur && onBlur(input.value);
    } else {
      setShowSuggestionList(false);
      setShowValidationRules(false);
      setDropdownStyle({
        left: '0px'
      });
      setShowSelectDropdown(true);
      input.onFocus(new Event('focus'));
      onFocus && onFocus(input.value);
    }
  }, [input, onBlur, onFocus, showSelectDropdown]);
  const validateField = function () {
    let value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    let allValues = arguments.length > 1 ? arguments[1] : undefined;
    const valueToValidate = value.startsWith(selectValue.id) ? value.substring(selectValue.id.length) : value ?? '';
    let validationError = null;
    if (!(0, _lodash.isEmpty)(validationRules)) {
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
    }
    if (!validationError && validator) {
      validationError = validator(value, allValues);
    }
    return validationError;
  };
  const warningIconClick = () => {
    setShowValidationRules(state => !state);
    setShowSelectDropdown(false);
  };
  const comboboxClassNames = (0, _classnames.default)(comboboxClassName, 'form-field-combobox', 'form-field', isInvalid && 'form-field-combobox_invalid');
  const iconClassNames = (0, _classnames.default)(showSelectDropdown && 'form-field-combobox__icon_open', 'form-field-combobox__icon');
  const selectValueClassNames = (0, _classnames.default)(selectValue.className);
  const wrapperClassNames = (0, _classnames.default)('form-field__wrapper', `form-field__wrapper-${density}`, disabled && 'form-field__wrapper-disabled', isInvalid && 'form-field__wrapper-invalid', withoutBorder && 'without-border');
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactFinalForm.Field, {
    name: name,
    validate: validateField,
    children: _ref3 => {
      let {
        input,
        meta
      } = _ref3;
      return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: comboboxClassNames,
        ref: comboboxRef,
        "data-testid": name ? `${name}-form-combobox` : 'form-combobox',
        children: [label && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: labelClassNames,
          children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("label", {
            "data-testid": "label",
            htmlFor: input.name,
            children: [label, (required || validationRules.find(rule => rule.name === 'required')) && /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
              className: "form-field__label-mandatory",
              children: " *"
            })]
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: wrapperClassNames,
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: "form-field__icons",
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_arrow.ReactComponent, {
              className: iconClassNames,
              onClick: toggleSelect
            })
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            className: "form-field-combobox__select form-field__control",
            ref: selectRef,
            children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
              className: "form-field-combobox__select-header",
              onClick: toggleSelect,
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                className: selectValueClassNames,
                children: selectValue.id
              }), selectValue.id.length === 0 && selectPlaceholder && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                className: "form-field-combobox__placeholder",
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)("label", {
                  children: selectPlaceholder
                })
              })]
            }), showSelectDropdown && /*#__PURE__*/(0, _jsxRuntime.jsx)(_PopUpDialog.default, {
              headerIsHidden: true,
              customPosition: {
                element: selectRef,
                position: 'bottom-right'
              },
              className: "form-field-combobox__dropdown form-field-combobox__dropdown-select",
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)("ul", {
                className: "form-field-combobox__dropdown-list",
                children: selectOptions.map(option => {
                  if (!option.hidden) {
                    const selectOptionClassNames = (0, _classnames.default)('form-field-combobox__dropdown-list-option', option.className);
                    return /*#__PURE__*/(0, _jsxRuntime.jsx)("li", {
                      className: selectOptionClassNames,
                      onClick: () => handleSelectOptionClick(option),
                      children: option.label
                    }, option.id);
                  }
                })
              })
            })]
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
            className: inputClassNames,
            "data-testid": name ? `${name}-form-combobox-input` : 'form-combobox-input',
            id: input.name,
            onChange: handleInputChange,
            onFocus: inputOnFocus,
            placeholder: inputPlaceholder,
            ref: inputRef,
            required: required,
            type: "text",
            value: inputValue
          }), showSuggestionList && (dropdownList.length > 0 || searchIsFocused) && /*#__PURE__*/(0, _jsxRuntime.jsx)(_PopUpDialog.default, {
            headerIsHidden: true,
            customPosition: {
              element: selectRef,
              position: 'bottom-right'
            },
            className: "form-field-combobox__dropdown form-field-combobox__dropdown-suggestions",
            style: {
              ...dropdownStyle
            },
            children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
              ref: suggestionListRef,
              children: [!hideSearchInput && /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                className: "form-field-combobox__search-wrapper",
                children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
                  "data-testid": name ? `${name}-form-combobox-search` : 'form-combobox-search',
                  className: "form-field-combobox__search form-field__control",
                  onChange: suggestionListSearchChange,
                  onFocus: () => setSearchIsFocused(true),
                  placeholder: "Type to search",
                  type: "text"
                }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_search.ReactComponent, {})]
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)("ul", {
                className: "form-field-combobox__dropdown-list",
                children: searchIsFocused && dropdownList.length === 0 ? /*#__PURE__*/(0, _jsxRuntime.jsx)("li", {
                  className: "form-field-combobox__dropdown-list-option",
                  children: "No data"
                }, "no data") : dropdownList.map(value => /*#__PURE__*/(0, _jsxRuntime.jsx)("li", {
                  className: "form-field-combobox__dropdown-list-option",
                  onClick: () => handleSuggestionListOptionClick(value),
                  children: value.label
                }, value.id))
              })]
            })
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            className: "form-field__icons",
            children: [isInvalid && !Array.isArray(meta.error) && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Tooltip.default, {
              className: "form-field__warning",
              template: /*#__PURE__*/(0, _jsxRuntime.jsx)(_TextTooltipTemplate.default, {
                text: meta.error?.label ?? invalidText,
                warning: true
              }),
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_exclamationMark.ReactComponent, {})
            }), isInvalid && Array.isArray(meta.error) && /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
              className: "form-field__warning",
              onClick: warningIconClick,
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_warning.ReactComponent, {})
            })]
          }), !(0, _lodash.isEmpty)(validationRules) && /*#__PURE__*/(0, _jsxRuntime.jsx)(_elements.OptionsMenu, {
            show: showValidationRules,
            ref: comboboxRef,
            children: getValidationRules()
          })]
        })]
      });
    }
  });
};
FormCombobox.propTypes = {
  comboboxClassName: _propTypes.default.string,
  density: _propTypes.default.oneOf(['dense', 'normal', 'medium', 'chunky']),
  disabled: _propTypes.default.bool,
  hideSearchInput: _propTypes.default.bool,
  inputDefaultValue: _propTypes.default.string,
  inputPlaceholder: _propTypes.default.string,
  invalidText: _propTypes.default.string,
  label: _propTypes.default.string,
  maxSuggestedMatches: _propTypes.default.number,
  name: _propTypes.default.string.isRequired,
  onBlur: _propTypes.default.func,
  onChange: _propTypes.default.func,
  onFocus: _propTypes.default.func,
  required: _propTypes.default.bool,
  rules: _propTypes.default.array,
  selectDefaultValue: _propTypes.default.shape({}),
  selectOptions: _types.COMBOBOX_SELECT_OPTIONS.isRequired,
  selectPlaceholder: _propTypes.default.string,
  suggestionList: _types.COMBOBOX_SUGGESTION_LIST,
  validator: _propTypes.default.func,
  withoutBorder: _propTypes.default.bool
};
var _default = exports.default = FormCombobox;