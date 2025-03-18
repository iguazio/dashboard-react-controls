import { j as jsxDevRuntimeExports } from "../../_virtual/jsx-dev-runtime.mjs";
import { useState, useRef, useEffect, useCallback } from "react";
import { useField, Field } from "react-final-form";
import { isEmpty } from "lodash";
import PropTypes from "prop-types";
import classnames from "classnames";
import OptionsMenu from "../../elements/OptionsMenu/OptionsMenu.mjs";
import ValidationTemplate from "../../elements/ValidationTemplate/ValidationTemplate.mjs";
import PopUpDialog from "../PopUpDialog/PopUpDialog.mjs";
import TextTooltipTemplate from "../TooltipTemplate/TextTooltipTemplate.mjs";
import Tooltip from "../Tooltip/Tooltip.mjs";
import { checkPatternsValidity } from "../../utils/validation.util.mjs";
import "../../hooks/index.mjs";
import { COMBOBOX_SUGGESTION_LIST, COMBOBOX_SELECT_OPTIONS } from "../../types.mjs";
import SvgArrow from "../../images/arrow.svg.mjs";
import SvgSearch from "../../images/search.svg.mjs";
import SvgWarning from "../../images/warning.svg.mjs";
import SvgExclamationMark from "../../images/exclamation-mark.svg.mjs";
/* empty css                   */
import { useDetectOutsideClick } from "../../hooks/useDetectOutsideClick.hook.mjs";
const FormCombobox = ({
  comboboxClassName = "",
  density = "normal",
  disabled = false,
  hideSearchInput = false,
  inputDefaultValue = "",
  inputPlaceholder = "",
  invalidText = "Invalid",
  label = "",
  maxSuggestedMatches = 1,
  name,
  onBlur = null,
  onChange = null,
  onFocus = null,
  required = false,
  rules = [],
  selectDefaultValue = {
    label: "",
    id: "",
    className: ""
  },
  selectOptions,
  selectPlaceholder = "",
  suggestionList = [],
  validator = null,
  withoutBorder = false
}) => {
  const { input, meta } = useField(name);
  const [inputValue, setInputValue] = useState(inputDefaultValue);
  const [selectValue, setSelectValue] = useState(selectDefaultValue);
  const [dropdownStyle, setDropdownStyle] = useState({
    left: "0px"
  });
  const [showSelectDropdown, setShowSelectDropdown] = useState(false);
  const [showSuggestionList, setShowSuggestionList] = useState(false);
  const [dropdownList, setDropdownList] = useState(suggestionList);
  const [searchIsFocused, setSearchIsFocused] = useState(false);
  const [isInvalid, setIsInvalid] = useState(false);
  const [validationRules, setValidationRules] = useState(rules);
  const [showValidationRules, setShowValidationRules] = useState(false);
  const comboboxRef = useRef();
  const selectRef = useRef();
  const inputRef = useRef();
  const suggestionListRef = useRef();
  useDetectOutsideClick(comboboxRef, () => setShowValidationRules(false));
  const labelClassNames = classnames("form-field__label", disabled && "form-field__label-disabled");
  const inputClassNames = classnames(
    "form-field-combobox__input",
    selectValue.id.length === 0 && "form-field-combobox__input_hidden"
  );
  useEffect(() => {
    setValidationRules(
      (prevState) => prevState.map((rule) => ({
        ...rule,
        isValid: !meta.error || !Array.isArray(meta.error) ? true : !meta.error.some((err) => err.name === rule.name)
      }))
    );
  }, [meta.error]);
  useEffect(() => {
    if (!searchIsFocused) {
      if (JSON.stringify(dropdownList) !== JSON.stringify(suggestionList)) {
        setDropdownList(suggestionList);
      }
    }
  }, [dropdownList, suggestionList, searchIsFocused]);
  useEffect(() => {
    setIsInvalid(
      meta.invalid && (meta.validating || meta.modified || meta.submitFailed && meta.touched)
    );
  }, [meta.invalid, meta.modified, meta.submitFailed, meta.touched, meta.validating]);
  const handleOutsideClick = useCallback(
    (event) => {
      if (comboboxRef.current && !comboboxRef.current.contains(event.target) && suggestionListRef.current && !suggestionListRef.current.contains(event.target)) {
        setSearchIsFocused(false);
        setShowSelectDropdown(false);
        setShowSuggestionList(false);
        input.onBlur(new Event("blur"));
        onBlur && onBlur(input.value);
      }
    },
    [input, onBlur]
  );
  const handleScroll = (event) => {
    if (comboboxRef.current && comboboxRef.current.contains(event.target)) return;
    if (!event.target.closest(".pop-up-dialog") && !event.target.classList.contains("form-field-combobox")) {
      setShowValidationRules(false);
      setShowSelectDropdown(false);
      setShowSuggestionList(false);
      inputRef.current.blur();
    }
  };
  useEffect(() => {
    window.addEventListener("click", handleOutsideClick);
    return () => {
      window.removeEventListener("click", handleOutsideClick);
    };
  }, [handleOutsideClick]);
  useEffect(() => {
    if (showValidationRules || showSelectDropdown || showSuggestionList) {
      window.addEventListener("scroll", handleScroll, true);
    }
    return () => {
      window.removeEventListener("scroll", handleScroll, true);
    };
  }, [showSelectDropdown, showSuggestionList, showValidationRules]);
  const getValidationRules = () => {
    return validationRules.map(({ isValid = false, label: label2, name: name2 }) => {
      return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(ValidationTemplate, { valid: isValid, validationMessage: label2 }, name2, false, {
        fileName: "/Users/Ilan_Kader/Development/dashboard-react-controls/src/lib/components/FormCombobox/FormCombobox.jsx",
        lineNumber: 169,
        columnNumber: 14
      }, void 0);
    });
  };
  const handleInputChange = (event) => {
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
  const handleSelectOptionClick = (selectedOption) => {
    if (selectedOption.id !== selectValue.id) {
      setSelectValue(selectedOption);
      input.onChange(selectedOption.id);
      setInputValue("");
      onChange && onChange(selectedOption.id);
      setShowSelectDropdown(false);
      inputRef.current.disabled = false;
      inputRef.current.focus();
    }
  };
  const handleSuggestionListOptionClick = (option) => {
    const inputValueItems = inputValue.split("/");
    const valueIndex = inputValueItems.length - 1;
    let formattedValue = option.customDelimiter ? inputValueItems[valueIndex].replace(new RegExp(`${option.customDelimiter}.*`), "") + option.id : option.id;
    if (inputValueItems.length <= maxSuggestedMatches - 1) formattedValue += "/";
    inputValueItems[valueIndex] = formattedValue;
    if (searchIsFocused) {
      setSearchIsFocused(false);
    }
    if (inputValueItems.join("/") !== inputValue) {
      setInputValue(inputValueItems.join("/"));
      input.onChange(`${selectValue.id}${inputValueItems.join("/")}`);
      onChange && onChange(selectValue.id, inputValueItems.join("/"));
    }
    setShowSuggestionList(false);
    inputRef.current.focus();
    setDropdownStyle({
      left: `${inputRef.current.selectionStart < 30 ? inputRef.current.selectionStart : 30}ch`
    });
  };
  const inputOnFocus = () => {
    onFocus && onFocus();
    input.onFocus(new Event("focus"));
    if (showSelectDropdown) {
      setShowSelectDropdown(false);
    }
    setShowSuggestionList(true);
  };
  const suggestionListSearchChange = (event) => {
    event.persist();
    setDropdownList(
      () => suggestionList.filter((option) => {
        return option.id.startsWith(event.target.value);
      })
    );
  };
  const toggleSelect = useCallback(() => {
    if (showSelectDropdown) {
      setShowSelectDropdown(false);
      input.onBlur(new Event("blur"));
      onBlur && onBlur(input.value);
    } else {
      setShowSuggestionList(false);
      setShowValidationRules(false);
      setDropdownStyle({
        left: "0px"
      });
      setShowSelectDropdown(true);
      input.onFocus(new Event("focus"));
      onFocus && onFocus(input.value);
    }
  }, [input, onBlur, onFocus, showSelectDropdown]);
  const validateField = (value = "", allValues) => {
    const valueToValidate = value.startsWith(selectValue.id) ? value.substring(selectValue.id.length) : value ?? "";
    let validationError = null;
    if (!isEmpty(validationRules)) {
      const [newRules, isValidField] = checkPatternsValidity(rules, valueToValidate);
      const invalidRules = newRules.filter((rule) => !rule.isValid);
      if (!isValidField) {
        validationError = invalidRules.map((rule) => ({ name: rule.name, label: rule.label }));
      }
    }
    if (isEmpty(validationError)) {
      if (valueToValidate.startsWith(" ")) {
        validationError = { name: "empty", label: invalidText };
      } else if (required && valueToValidate.trim().length === 0) {
        validationError = { name: "required", label: "This field is required" };
      }
    }
    if (!validationError && validator) {
      validationError = validator(value, allValues);
    }
    return validationError;
  };
  const warningIconClick = () => {
    setShowValidationRules((state) => !state);
    setShowSelectDropdown(false);
  };
  const comboboxClassNames = classnames(
    comboboxClassName,
    "form-field-combobox",
    "form-field",
    isInvalid && "form-field-combobox_invalid"
  );
  const iconClassNames = classnames(
    showSelectDropdown && "form-field-combobox__icon_open",
    "form-field-combobox__icon"
  );
  const selectValueClassNames = classnames(selectValue.className);
  const wrapperClassNames = classnames(
    "form-field__wrapper",
    `form-field__wrapper-${density}`,
    disabled && "form-field__wrapper-disabled",
    isInvalid && "form-field__wrapper-invalid",
    withoutBorder && "without-border"
  );
  return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Field, { name, validate: validateField, children: ({ input: input2, meta: meta2 }) => {
    var _a;
    return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
      "div",
      {
        className: comboboxClassNames,
        ref: comboboxRef,
        "data-testid": name ? `${name}-form-combobox` : "form-combobox",
        children: [
          label && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: labelClassNames, children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("label", { "data-testid": "label", htmlFor: input2.name, children: [
            label,
            (required || validationRules.find((rule) => rule.name === "required")) && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "form-field__label-mandatory", children: " *" }, void 0, false, {
              fileName: "/Users/Ilan_Kader/Development/dashboard-react-controls/src/lib/components/FormCombobox/FormCombobox.jsx",
              lineNumber: 339,
              columnNumber: 19
            }, void 0)
          ] }, void 0, true, {
            fileName: "/Users/Ilan_Kader/Development/dashboard-react-controls/src/lib/components/FormCombobox/FormCombobox.jsx",
            lineNumber: 336,
            columnNumber: 15
          }, void 0) }, void 0, false, {
            fileName: "/Users/Ilan_Kader/Development/dashboard-react-controls/src/lib/components/FormCombobox/FormCombobox.jsx",
            lineNumber: 335,
            columnNumber: 13
          }, void 0),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: wrapperClassNames, children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "form-field__icons", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(SvgArrow, { className: iconClassNames, onClick: toggleSelect }, void 0, false, {
              fileName: "/Users/Ilan_Kader/Development/dashboard-react-controls/src/lib/components/FormCombobox/FormCombobox.jsx",
              lineNumber: 346,
              columnNumber: 15
            }, void 0) }, void 0, false, {
              fileName: "/Users/Ilan_Kader/Development/dashboard-react-controls/src/lib/components/FormCombobox/FormCombobox.jsx",
              lineNumber: 345,
              columnNumber: 13
            }, void 0),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "form-field-combobox__select form-field__control", ref: selectRef, children: [
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "form-field-combobox__select-header", onClick: toggleSelect, children: [
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: selectValueClassNames, children: selectValue.id }, void 0, false, {
                  fileName: "/Users/Ilan_Kader/Development/dashboard-react-controls/src/lib/components/FormCombobox/FormCombobox.jsx",
                  lineNumber: 350,
                  columnNumber: 17
                }, void 0),
                selectValue.id.length === 0 && selectPlaceholder && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "form-field-combobox__placeholder", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("label", { children: selectPlaceholder }, void 0, false, {
                  fileName: "/Users/Ilan_Kader/Development/dashboard-react-controls/src/lib/components/FormCombobox/FormCombobox.jsx",
                  lineNumber: 353,
                  columnNumber: 21
                }, void 0) }, void 0, false, {
                  fileName: "/Users/Ilan_Kader/Development/dashboard-react-controls/src/lib/components/FormCombobox/FormCombobox.jsx",
                  lineNumber: 352,
                  columnNumber: 19
                }, void 0)
              ] }, void 0, true, {
                fileName: "/Users/Ilan_Kader/Development/dashboard-react-controls/src/lib/components/FormCombobox/FormCombobox.jsx",
                lineNumber: 349,
                columnNumber: 15
              }, void 0),
              showSelectDropdown && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
                PopUpDialog,
                {
                  headerIsHidden: true,
                  customPosition: {
                    element: selectRef,
                    position: "bottom-right"
                  },
                  className: "form-field-combobox__dropdown form-field-combobox__dropdown-select",
                  children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("ul", { className: "form-field-combobox__dropdown-list", children: selectOptions.map((option) => {
                    if (!option.hidden) {
                      const selectOptionClassNames = classnames(
                        "form-field-combobox__dropdown-list-option",
                        option.className
                      );
                      return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
                        "li",
                        {
                          className: selectOptionClassNames,
                          onClick: () => handleSelectOptionClick(option),
                          children: option.label
                        },
                        option.id,
                        false,
                        {
                          fileName: "/Users/Ilan_Kader/Development/dashboard-react-controls/src/lib/components/FormCombobox/FormCombobox.jsx",
                          lineNumber: 375,
                          columnNumber: 27
                        },
                        void 0
                      );
                    }
                  }) }, void 0, false, {
                    fileName: "/Users/Ilan_Kader/Development/dashboard-react-controls/src/lib/components/FormCombobox/FormCombobox.jsx",
                    lineNumber: 366,
                    columnNumber: 19
                  }, void 0)
                },
                void 0,
                false,
                {
                  fileName: "/Users/Ilan_Kader/Development/dashboard-react-controls/src/lib/components/FormCombobox/FormCombobox.jsx",
                  lineNumber: 358,
                  columnNumber: 17
                },
                void 0
              )
            ] }, void 0, true, {
              fileName: "/Users/Ilan_Kader/Development/dashboard-react-controls/src/lib/components/FormCombobox/FormCombobox.jsx",
              lineNumber: 348,
              columnNumber: 13
            }, void 0),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
              "input",
              {
                className: inputClassNames,
                "data-testid": name ? `${name}-form-combobox-input` : "form-combobox-input",
                id: input2.name,
                onChange: handleInputChange,
                onFocus: inputOnFocus,
                placeholder: inputPlaceholder,
                ref: inputRef,
                required,
                type: "text",
                value: inputValue
              },
              void 0,
              false,
              {
                fileName: "/Users/Ilan_Kader/Development/dashboard-react-controls/src/lib/components/FormCombobox/FormCombobox.jsx",
                lineNumber: 389,
                columnNumber: 13
              },
              void 0
            ),
            showSuggestionList && (dropdownList.length > 0 || searchIsFocused) && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
              PopUpDialog,
              {
                headerIsHidden: true,
                customPosition: {
                  element: selectRef,
                  position: "bottom-right"
                },
                className: "form-field-combobox__dropdown form-field-combobox__dropdown-suggestions",
                style: {
                  ...dropdownStyle
                },
                children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { ref: suggestionListRef, children: [
                  !hideSearchInput && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "form-field-combobox__search-wrapper", children: [
                    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
                      "input",
                      {
                        "data-testid": name ? `${name}-form-combobox-search` : "form-combobox-search",
                        className: "form-field-combobox__search form-field__control",
                        onChange: suggestionListSearchChange,
                        onFocus: () => setSearchIsFocused(true),
                        placeholder: "Type to search",
                        type: "text"
                      },
                      void 0,
                      false,
                      {
                        fileName: "/Users/Ilan_Kader/Development/dashboard-react-controls/src/lib/components/FormCombobox/FormCombobox.jsx",
                        lineNumber: 416,
                        columnNumber: 23
                      },
                      void 0
                    ),
                    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(SvgSearch, {}, void 0, false, {
                      fileName: "/Users/Ilan_Kader/Development/dashboard-react-controls/src/lib/components/FormCombobox/FormCombobox.jsx",
                      lineNumber: 424,
                      columnNumber: 23
                    }, void 0)
                  ] }, void 0, true, {
                    fileName: "/Users/Ilan_Kader/Development/dashboard-react-controls/src/lib/components/FormCombobox/FormCombobox.jsx",
                    lineNumber: 415,
                    columnNumber: 21
                  }, void 0),
                  /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("ul", { className: "form-field-combobox__dropdown-list", children: searchIsFocused && dropdownList.length === 0 ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("li", { className: "form-field-combobox__dropdown-list-option", children: "No data" }, "no data", false, {
                    fileName: "/Users/Ilan_Kader/Development/dashboard-react-controls/src/lib/components/FormCombobox/FormCombobox.jsx",
                    lineNumber: 429,
                    columnNumber: 23
                  }, void 0) : dropdownList.map((value) => /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
                    "li",
                    {
                      className: "form-field-combobox__dropdown-list-option",
                      onClick: () => handleSuggestionListOptionClick(value),
                      children: value.label
                    },
                    value.id,
                    false,
                    {
                      fileName: "/Users/Ilan_Kader/Development/dashboard-react-controls/src/lib/components/FormCombobox/FormCombobox.jsx",
                      lineNumber: 434,
                      columnNumber: 25
                    },
                    void 0
                  )) }, void 0, false, {
                    fileName: "/Users/Ilan_Kader/Development/dashboard-react-controls/src/lib/components/FormCombobox/FormCombobox.jsx",
                    lineNumber: 427,
                    columnNumber: 19
                  }, void 0)
                ] }, void 0, true, {
                  fileName: "/Users/Ilan_Kader/Development/dashboard-react-controls/src/lib/components/FormCombobox/FormCombobox.jsx",
                  lineNumber: 413,
                  columnNumber: 17
                }, void 0)
              },
              void 0,
              false,
              {
                fileName: "/Users/Ilan_Kader/Development/dashboard-react-controls/src/lib/components/FormCombobox/FormCombobox.jsx",
                lineNumber: 402,
                columnNumber: 15
              },
              void 0
            ),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "form-field__icons", children: [
              isInvalid && !Array.isArray(meta2.error) && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
                Tooltip,
                {
                  className: "form-field__warning",
                  template: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(TextTooltipTemplate, { text: ((_a = meta2.error) == null ? void 0 : _a.label) ?? invalidText, warning: true }, void 0, false, {
                    fileName: "/Users/Ilan_Kader/Development/dashboard-react-controls/src/lib/components/FormCombobox/FormCombobox.jsx",
                    lineNumber: 451,
                    columnNumber: 29
                  }, void 0),
                  children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(SvgExclamationMark, {}, void 0, false, {
                    fileName: "/Users/Ilan_Kader/Development/dashboard-react-controls/src/lib/components/FormCombobox/FormCombobox.jsx",
                    lineNumber: 453,
                    columnNumber: 19
                  }, void 0)
                },
                void 0,
                false,
                {
                  fileName: "/Users/Ilan_Kader/Development/dashboard-react-controls/src/lib/components/FormCombobox/FormCombobox.jsx",
                  lineNumber: 449,
                  columnNumber: 17
                },
                void 0
              ),
              isInvalid && Array.isArray(meta2.error) && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("button", { className: "form-field__warning", onClick: warningIconClick, children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(SvgWarning, {}, void 0, false, {
                fileName: "/Users/Ilan_Kader/Development/dashboard-react-controls/src/lib/components/FormCombobox/FormCombobox.jsx",
                lineNumber: 458,
                columnNumber: 19
              }, void 0) }, void 0, false, {
                fileName: "/Users/Ilan_Kader/Development/dashboard-react-controls/src/lib/components/FormCombobox/FormCombobox.jsx",
                lineNumber: 457,
                columnNumber: 17
              }, void 0)
            ] }, void 0, true, {
              fileName: "/Users/Ilan_Kader/Development/dashboard-react-controls/src/lib/components/FormCombobox/FormCombobox.jsx",
              lineNumber: 447,
              columnNumber: 13
            }, void 0),
            !isEmpty(validationRules) && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(OptionsMenu, { show: showValidationRules, ref: comboboxRef, children: getValidationRules() }, void 0, false, {
              fileName: "/Users/Ilan_Kader/Development/dashboard-react-controls/src/lib/components/FormCombobox/FormCombobox.jsx",
              lineNumber: 463,
              columnNumber: 15
            }, void 0)
          ] }, void 0, true, {
            fileName: "/Users/Ilan_Kader/Development/dashboard-react-controls/src/lib/components/FormCombobox/FormCombobox.jsx",
            lineNumber: 344,
            columnNumber: 11
          }, void 0)
        ]
      },
      void 0,
      true,
      {
        fileName: "/Users/Ilan_Kader/Development/dashboard-react-controls/src/lib/components/FormCombobox/FormCombobox.jsx",
        lineNumber: 329,
        columnNumber: 9
      },
      void 0
    );
  } }, void 0, false, {
    fileName: "/Users/Ilan_Kader/Development/dashboard-react-controls/src/lib/components/FormCombobox/FormCombobox.jsx",
    lineNumber: 327,
    columnNumber: 5
  }, void 0);
};
FormCombobox.propTypes = {
  comboboxClassName: PropTypes.string,
  density: PropTypes.oneOf(["dense", "normal", "medium", "chunky"]),
  disabled: PropTypes.bool,
  hideSearchInput: PropTypes.bool,
  inputDefaultValue: PropTypes.string,
  inputPlaceholder: PropTypes.string,
  invalidText: PropTypes.string,
  label: PropTypes.string,
  maxSuggestedMatches: PropTypes.number,
  name: PropTypes.string.isRequired,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  required: PropTypes.bool,
  rules: PropTypes.array,
  selectDefaultValue: PropTypes.shape({}),
  selectOptions: COMBOBOX_SELECT_OPTIONS.isRequired,
  selectPlaceholder: PropTypes.string,
  suggestionList: COMBOBOX_SUGGESTION_LIST,
  validator: PropTypes.func,
  withoutBorder: PropTypes.bool
};
export {
  FormCombobox as default
};
//# sourceMappingURL=FormCombobox.mjs.map
