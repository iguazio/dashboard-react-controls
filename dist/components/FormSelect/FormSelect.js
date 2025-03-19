"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _classnames = _interopRequireDefault(require("classnames"));
var _reactFinalForm = require("react-final-form");
var _ConfirmDialog = _interopRequireDefault(require("../ConfirmDialog/ConfirmDialog"));
var _PopUpDialog = _interopRequireDefault(require("../PopUpDialog/PopUpDialog"));
var _SelectOption = _interopRequireDefault(require("../../elements/SelectOption/SelectOption"));
var _TextTooltipTemplate = _interopRequireDefault(require("../TooltipTemplate/TextTooltipTemplate"));
var _Tooltip = _interopRequireDefault(require("../Tooltip/Tooltip"));
var _types = require("../../types");
var _constants = require("../../constants");
var _dropdown = require("../../images/dropdown.svg");
require("./formSelect.scss");
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

const FormSelect = _ref => {
  let {
    className = '',
    density = 'normal',
    disabled = false,
    hideSelectedOption = false,
    label = '',
    multiple = false,
    name,
    onChange,
    options,
    preventWidthOverflow = false,
    required,
    scrollToView = true,
    search = false,
    selectedItemAction,
    tooltip = '',
    withoutBorder = false,
    withSelectedIcon = true
  } = _ref;
  const {
    input,
    meta
  } = (0, _reactFinalForm.useField)(name);
  const [isInvalid, setIsInvalid] = (0, _react.useState)(false);
  const [isConfirmDialogOpen, setConfirmDialogOpen] = (0, _react.useState)(false);
  const [isOpen, setIsOpen] = (0, _react.useState)(false);
  const [searchValue, setSearchValue] = (0, _react.useState)('');
  const optionsListRef = (0, _react.useRef)();
  const popUpRef = (0, _react.useRef)();
  const selectRef = (0, _react.useRef)();
  const searchRef = (0, _react.useRef)();
  const {
    width: selectWidth
  } = selectRef?.current?.getBoundingClientRect() || {};
  const selectWrapperClassNames = (0, _classnames.default)('form-field__wrapper', `form-field__wrapper-${density}`, disabled && 'form-field__wrapper-disabled', isOpen && 'form-field__wrapper-active', isInvalid && 'form-field__wrapper-invalid', withoutBorder && 'without-border');
  const selectLabelClassName = (0, _classnames.default)('form-field__label', disabled && 'form-field__label-disabled');
  const selectValueClassName = (0, _classnames.default)('form-field__select-value', !input.value && 'form-field__select-placeholder');
  const selectedOption = options.find(option => option.id === input.value);
  const getFilteredOptions = (0, _react.useCallback)(options => {
    return options.filter(option => {
      return !search || option.label.toLowerCase().includes(searchValue.toLowerCase());
    });
  }, [search, searchValue]);
  const sortedOptionsList = (0, _react.useMemo)(() => {
    if (scrollToView) {
      return getFilteredOptions(options);
    }
    const optionsList = [...options];
    const selectedOption = optionsList.filter((option, idx, arr) => {
      if (option.id === input.value) {
        arr.splice(idx, 1);
        return true;
      }
      return false;
    });
    return getFilteredOptions([...selectedOption, ...optionsList]);
  }, [input.value, getFilteredOptions, options, scrollToView]);
  const getSelectValue = () => {
    if (!input.value || !input.value.length) {
      return `Select Option${multiple ? 's' : ''}`;
    }
    const multipleValue = multiple && input.value.includes('all') && input.value.length > 1 ? options.filter(option => option.id !== 'all').filter(option => input.value.includes(option.id)).map(option => option.label).join(', ') : options.filter(option => input.value.includes(option.id)).map(option => option.label).join(', ');
    return !multiple ? selectedOption?.label : input.value.length <= 2 ? multipleValue : `${input.value.length} items selected`;
  };
  (0, _react.useEffect)(() => {
    setIsInvalid(meta.invalid && (meta.validating || meta.modified || meta.submitFailed && meta.touched));
  }, [meta.invalid, meta.modified, meta.submitFailed, meta.touched, meta.validating]);
  const openMenu = (0, _react.useCallback)(() => {
    if (!isOpen) {
      setIsOpen(true);
      input.onFocus(new Event('focus'));
    }
  }, [input, isOpen]);
  const closeMenu = (0, _react.useCallback)(() => {
    if (isOpen) {
      setIsOpen(false);
      input.onBlur(new Event('blur'));
    }
  }, [input, isOpen]);
  const clickHandler = (0, _react.useCallback)(event => {
    if (selectRef.current !== event.target.closest('.form-field-select')) {
      closeMenu();
    }
  }, [closeMenu]);
  const handleScroll = (0, _react.useCallback)(event => {
    if (!event.target.closest('.options-list__body')) {
      closeMenu();
    }
  }, [closeMenu]);
  (0, _react.useEffect)(() => {
    if (isOpen) {
      window.addEventListener('scroll', handleScroll, true);
    }
    window.addEventListener('click', clickHandler);
    return () => {
      window.removeEventListener('click', clickHandler);
      window.removeEventListener('scroll', handleScroll, true);
    };
  }, [clickHandler, handleScroll, isOpen]);
  const scrollOptionToView = (0, _react.useCallback)(() => {
    const selectedOptionEl = optionsListRef.current.querySelector(`[data-custom-id="${input.value}"]`);
    if (!selectedOptionEl) return;
    searchValue ? optionsListRef.current.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    }) : setTimeout(() => {
      selectedOptionEl.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
      });
    }, 0);
  }, [input.value, searchValue]);
  (0, _react.useEffect)(() => {
    if (isOpen && optionsListRef.current && scrollToView) {
      scrollOptionToView();
    }
  }, [isOpen, scrollOptionToView, scrollToView]);
  (0, _react.useEffect)(() => {
    if (isOpen && search && searchRef.current) {
      searchRef.current.focus();
    }
  }, [isOpen, search]);
  const toggleOpen = () => {
    if (isOpen) {
      closeMenu();
    } else {
      !disabled && openMenu();
    }
  };
  const handleCloseSelectBody = (0, _react.useCallback)(event => {
    event.stopPropagation();
    if (multiple) return;
    if (!event.target.classList.contains('disabled') && !event.target.closest('.options-list__search')) {
      closeMenu();
      setSearchValue('');
    }
  }, [closeMenu, multiple]);
  const handleSelectOptionClick = (selectedOption, option) => {
    if (selectedOption !== input.value) {
      option.handler && option.handler();
      onChange && onChange(selectedOption);
      setTimeout(() => {
        input.onChange(selectedOption);
      });
    }
  };
  const validateField = value => {
    if (required) {
      return value ? undefined : 'Required';
    }
  };
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactFinalForm.Field, {
    name: name,
    validate: validateField,
    children: _ref2 => {
      let {
        input,
        meta
      } = _ref2;
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Tooltip.default, {
        className: "select-tooltip",
        template: /*#__PURE__*/(0, _jsxRuntime.jsx)(_TextTooltipTemplate.default, {
          text: tooltip
        }),
        hidden: !tooltip,
        children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          "data-testid": name ? `${name}-form-field-select` : 'form-field-select',
          ref: selectRef,
          className: `form-field-select ${className}`,
          onClick: toggleOpen,
          children: [label && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: selectLabelClassName,
            children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("label", {
              "data-testid": name ? `${name}-form-select-label` : 'form-select-label',
              children: [label, meta.error && /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                className: "form-field__label-mandatory",
                children: " *"
              })]
            })
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            "data-testid": "select-header",
            className: selectWrapperClassNames,
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
              className: "form-field__control",
              children: !hideSelectedOption && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                "data-testid": "selected-option",
                className: "form-field__select",
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                  className: selectValueClassName,
                  children: getSelectValue()
                })
              })
            }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
              className: "form-field__icons",
              children: [input.value && selectedItemAction && /*#__PURE__*/(0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
                children: selectedItemAction.handler ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_Tooltip.default, {
                  template: /*#__PURE__*/(0, _jsxRuntime.jsx)(_TextTooltipTemplate.default, {
                    text: selectedItemAction.tooltip
                  }),
                  children: /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
                    onClick: event => {
                      if (selectedItemAction.confirm) {
                        setConfirmDialogOpen(true);
                      } else {
                        selectedItemAction.handler(input.value);
                      }
                      event.stopPropagation();
                    },
                    children: selectedItemAction.icon
                  })
                }) : /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                  children: selectedItemAction.icon
                })
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_dropdown.ReactComponent, {
                  className: "form-field__caret"
                })
              })]
            })]
          }), isConfirmDialogOpen && /*#__PURE__*/(0, _jsxRuntime.jsx)(_ConfirmDialog.default, {
            cancelButton: {
              handler: () => {
                setConfirmDialogOpen(false);
              },
              label: 'Cancel',
              variant: _constants.TERTIARY_BUTTON
            },
            closePopUp: () => {
              setConfirmDialogOpen(false);
            },
            confirmButton: {
              handler: () => {
                selectedItemAction.handler(input.value);
                setConfirmDialogOpen(false);
              },
              label: selectedItemAction.confirm.btnConfirmLabel,
              variant: selectedItemAction.confirm.btnConfirmType
            },
            header: selectedItemAction.confirm.title,
            isOpen: isConfirmDialogOpen,
            message: selectedItemAction.confirm.message
          }), isOpen && /*#__PURE__*/(0, _jsxRuntime.jsx)(_PopUpDialog.default, {
            className: "form-field form-field-select__options-list",
            headerIsHidden: true,
            ref: popUpRef,
            customPosition: {
              element: selectRef,
              position: 'bottom-right',
              autoHorizontalPosition: true
            },
            style: {
              maxWidth: `${selectWidth < 500 && !preventWidthOverflow ? 500 : selectWidth}px`,
              minWidth: `${selectWidth}px`
            },
            children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
              "data-testid": "select-body",
              className: "options-list__body",
              onClick: handleCloseSelectBody,
              children: [search && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                className: "options-list__search",
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
                  type: "text",
                  placeholder: "Search...",
                  value: searchValue,
                  onChange: event => setSearchValue(event.target.value),
                  ref: searchRef,
                  autoFocus: true
                })
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)("ul", {
                className: "options-list",
                ref: optionsListRef,
                children: sortedOptionsList.map(option => {
                  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_SelectOption.default, {
                    item: option,
                    name: name,
                    onClick: selectedOption => {
                      handleSelectOptionClick(selectedOption, option);
                    },
                    multiple: multiple,
                    selectedId: !multiple ? input.value : '',
                    withSelectedIcon: withSelectedIcon
                  }, option.id);
                })
              })]
            })
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
            ...input,
            type: "hidden"
          })]
        })
      });
    }
  });
};
FormSelect.propTypes = {
  className: _propTypes.default.string,
  density: _propTypes.default.oneOf(['dense', 'normal', 'medium', 'chunky']),
  disabled: _propTypes.default.bool,
  hideSelectedOption: _propTypes.default.bool,
  label: _propTypes.default.string,
  multiple: _propTypes.default.bool,
  name: _propTypes.default.string.isRequired,
  options: _types.SELECT_OPTIONS.isRequired,
  preventWidthOverflow: _propTypes.default.bool,
  scrollToView: _propTypes.default.bool,
  search: _propTypes.default.bool,
  tooltip: _propTypes.default.string,
  withoutBorder: _propTypes.default.bool,
  withSelectedIcon: _propTypes.default.bool
};
var _default = exports.default = /*#__PURE__*/_react.default.memo(FormSelect);