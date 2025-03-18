import { j as jsxDevRuntimeExports } from "../../_virtual/jsx-dev-runtime.mjs";
import React__default, { useState, useRef, useCallback, useMemo, useEffect } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import { useField, Field } from "react-final-form";
import ConfirmDialog from "../ConfirmDialog/ConfirmDialog.mjs";
import PopUpDialog from "../PopUpDialog/PopUpDialog.mjs";
import SelectOption from "../../elements/SelectOption/SelectOption.mjs";
import TextTooltipTemplate from "../TooltipTemplate/TextTooltipTemplate.mjs";
import Tooltip from "../Tooltip/Tooltip.mjs";
import { SELECT_OPTIONS } from "../../types.mjs";
import { TERTIARY_BUTTON } from "../../constants.mjs";
import SvgDropdown from "../../images/dropdown.svg.mjs";
/* empty css                 */
const FormSelect = ({
  className = "",
  density = "normal",
  disabled = false,
  hideSelectedOption = false,
  label = "",
  multiple = false,
  name,
  onChange = null,
  options,
  preventWidthOverflow = false,
  required = false,
  scrollToView = true,
  search = false,
  selectedItemAction = null,
  tooltip = "",
  withSelectedIcon = true,
  withoutBorder = false
}) => {
  var _a;
  const { input, meta } = useField(name);
  const [isInvalid, setIsInvalid] = useState(false);
  const [isConfirmDialogOpen, setConfirmDialogOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const optionsListRef = useRef();
  const popUpRef = useRef();
  const selectRef = useRef();
  const searchRef = useRef();
  const { width: selectWidth } = ((_a = selectRef == null ? void 0 : selectRef.current) == null ? void 0 : _a.getBoundingClientRect()) || {};
  const selectWrapperClassNames = classnames(
    "form-field__wrapper",
    `form-field__wrapper-${density}`,
    disabled && "form-field__wrapper-disabled",
    isOpen && "form-field__wrapper-active",
    isInvalid && "form-field__wrapper-invalid",
    withoutBorder && "without-border"
  );
  const selectLabelClassName = classnames(
    "form-field__label",
    disabled && "form-field__label-disabled"
  );
  const selectValueClassName = classnames(
    "form-field__select-value",
    !input.value && "form-field__select-placeholder"
  );
  const selectedOption = options.find((option) => option.id === input.value);
  const getFilteredOptions = useCallback(
    (options2) => {
      return options2.filter((option) => {
        return !search || option.label.toLowerCase().includes(searchValue.toLowerCase());
      });
    },
    [search, searchValue]
  );
  const sortedOptionsList = useMemo(() => {
    if (scrollToView) {
      return getFilteredOptions(options);
    }
    const optionsList = [...options];
    const selectedOption2 = optionsList.filter((option, idx, arr) => {
      if (option.id === input.value) {
        arr.splice(idx, 1);
        return true;
      }
      return false;
    });
    return getFilteredOptions([...selectedOption2, ...optionsList]);
  }, [input.value, getFilteredOptions, options, scrollToView]);
  const getSelectValue = () => {
    if (!input.value || !input.value.length) {
      return `Select Option${multiple ? "s" : ""}`;
    }
    const multipleValue = multiple && input.value.includes("all") && input.value.length > 1 ? options.filter((option) => option.id !== "all").filter((option) => input.value.includes(option.id)).map((option) => option.label).join(", ") : options.filter((option) => input.value.includes(option.id)).map((option) => option.label).join(", ");
    return !multiple ? selectedOption == null ? void 0 : selectedOption.label : input.value.length <= 2 ? multipleValue : `${input.value.length} items selected`;
  };
  useEffect(() => {
    setIsInvalid(
      meta.invalid && (meta.validating || meta.modified || meta.submitFailed && meta.touched)
    );
  }, [meta.invalid, meta.modified, meta.submitFailed, meta.touched, meta.validating]);
  const openMenu = useCallback(() => {
    if (!isOpen) {
      setIsOpen(true);
      input.onFocus(new Event("focus"));
    }
  }, [input, isOpen]);
  const closeMenu = useCallback(() => {
    if (isOpen) {
      setIsOpen(false);
      input.onBlur(new Event("blur"));
    }
  }, [input, isOpen]);
  const clickHandler = useCallback(
    (event) => {
      if (selectRef.current !== event.target.closest(".form-field-select")) {
        closeMenu();
      }
    },
    [closeMenu]
  );
  const handleScroll = useCallback(
    (event) => {
      if (!event.target.closest(".options-list__body")) {
        closeMenu();
      }
    },
    [closeMenu]
  );
  useEffect(() => {
    if (isOpen) {
      window.addEventListener("scroll", handleScroll, true);
    }
    window.addEventListener("click", clickHandler);
    return () => {
      window.removeEventListener("click", clickHandler);
      window.removeEventListener("scroll", handleScroll, true);
    };
  }, [clickHandler, handleScroll, isOpen]);
  const scrollOptionToView = useCallback(() => {
    const selectedOptionEl = optionsListRef.current.querySelector(
      `[data-custom-id="${input.value}"]`
    );
    if (!selectedOptionEl) return;
    searchValue ? optionsListRef.current.scrollTo({ top: 0, left: 0, behavior: "smooth" }) : setTimeout(() => {
      selectedOptionEl.scrollIntoView({
        behavior: "smooth",
        block: "center"
      });
    }, 0);
  }, [input.value, searchValue]);
  useEffect(() => {
    if (isOpen && optionsListRef.current && scrollToView) {
      scrollOptionToView();
    }
  }, [isOpen, scrollOptionToView, scrollToView]);
  useEffect(() => {
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
  const handleCloseSelectBody = useCallback(
    (event) => {
      event.stopPropagation();
      if (multiple) return;
      if (!event.target.classList.contains("disabled") && !event.target.closest(".options-list__search")) {
        closeMenu();
        setSearchValue("");
      }
    },
    [closeMenu, multiple]
  );
  const handleSelectOptionClick = (selectedOption2, option) => {
    if (selectedOption2 !== input.value) {
      option.handler && option.handler();
      onChange && onChange(selectedOption2);
      setTimeout(() => {
        input.onChange(selectedOption2);
      });
    }
  };
  const validateField = (value) => {
    if (required) {
      return value ? void 0 : "Required";
    }
  };
  return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Field, { name, validate: validateField, children: ({ input: input2, meta: meta2 }) => /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
    Tooltip,
    {
      className: "select-tooltip",
      template: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(TextTooltipTemplate, { text: tooltip }, void 0, false, {
        fileName: "/Users/Ilan_Kader/Development/dashboard-react-controls/src/lib/components/FormSelect/FormSelect.jsx",
        lineNumber: 263,
        columnNumber: 21
      }, void 0),
      hidden: !tooltip,
      children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
        "div",
        {
          "data-testid": name ? `${name}-form-field-select` : "form-field-select",
          ref: selectRef,
          className: `form-field-select ${className}`,
          onClick: toggleOpen,
          children: [
            label && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: selectLabelClassName, children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("label", { "data-testid": name ? `${name}-form-select-label` : "form-select-label", children: [
              label,
              meta2.error && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "form-field__label-mandatory", children: " *" }, void 0, false, {
                fileName: "/Users/Ilan_Kader/Development/dashboard-react-controls/src/lib/components/FormSelect/FormSelect.jsx",
                lineNumber: 276,
                columnNumber: 34
              }, void 0)
            ] }, void 0, true, {
              fileName: "/Users/Ilan_Kader/Development/dashboard-react-controls/src/lib/components/FormSelect/FormSelect.jsx",
              lineNumber: 274,
              columnNumber: 17
            }, void 0) }, void 0, false, {
              fileName: "/Users/Ilan_Kader/Development/dashboard-react-controls/src/lib/components/FormSelect/FormSelect.jsx",
              lineNumber: 273,
              columnNumber: 15
            }, void 0),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { "data-testid": "select-header", className: selectWrapperClassNames, children: [
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "form-field__control", children: !hideSelectedOption && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { "data-testid": "selected-option", className: "form-field__select", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: selectValueClassName, children: getSelectValue() }, void 0, false, {
                fileName: "/Users/Ilan_Kader/Development/dashboard-react-controls/src/lib/components/FormSelect/FormSelect.jsx",
                lineNumber: 284,
                columnNumber: 21
              }, void 0) }, void 0, false, {
                fileName: "/Users/Ilan_Kader/Development/dashboard-react-controls/src/lib/components/FormSelect/FormSelect.jsx",
                lineNumber: 283,
                columnNumber: 19
              }, void 0) }, void 0, false, {
                fileName: "/Users/Ilan_Kader/Development/dashboard-react-controls/src/lib/components/FormSelect/FormSelect.jsx",
                lineNumber: 281,
                columnNumber: 15
              }, void 0),
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "form-field__icons", children: [
                input2.value && selectedItemAction && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(jsxDevRuntimeExports.Fragment, { children: selectedItemAction.handler ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Tooltip, { template: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(TextTooltipTemplate, { text: selectedItemAction.tooltip }, void 0, false, {
                  fileName: "/Users/Ilan_Kader/Development/dashboard-react-controls/src/lib/components/FormSelect/FormSelect.jsx",
                  lineNumber: 292,
                  columnNumber: 42
                }, void 0), children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
                  "button",
                  {
                    onClick: (event) => {
                      if (selectedItemAction.confirm) {
                        setConfirmDialogOpen(true);
                      } else {
                        selectedItemAction.handler(input2.value);
                      }
                      event.stopPropagation();
                    },
                    children: selectedItemAction.icon
                  },
                  void 0,
                  false,
                  {
                    fileName: "/Users/Ilan_Kader/Development/dashboard-react-controls/src/lib/components/FormSelect/FormSelect.jsx",
                    lineNumber: 293,
                    columnNumber: 25
                  },
                  void 0
                ) }, void 0, false, {
                  fileName: "/Users/Ilan_Kader/Development/dashboard-react-controls/src/lib/components/FormSelect/FormSelect.jsx",
                  lineNumber: 292,
                  columnNumber: 23
                }, void 0) : /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { children: selectedItemAction.icon }, void 0, false, {
                  fileName: "/Users/Ilan_Kader/Development/dashboard-react-controls/src/lib/components/FormSelect/FormSelect.jsx",
                  lineNumber: 308,
                  columnNumber: 23
                }, void 0) }, void 0, false, {
                  fileName: "/Users/Ilan_Kader/Development/dashboard-react-controls/src/lib/components/FormSelect/FormSelect.jsx",
                  lineNumber: 290,
                  columnNumber: 19
                }, void 0),
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(SvgDropdown, { className: "form-field__caret" }, void 0, false, {
                  fileName: "/Users/Ilan_Kader/Development/dashboard-react-controls/src/lib/components/FormSelect/FormSelect.jsx",
                  lineNumber: 313,
                  columnNumber: 19
                }, void 0) }, void 0, false, {
                  fileName: "/Users/Ilan_Kader/Development/dashboard-react-controls/src/lib/components/FormSelect/FormSelect.jsx",
                  lineNumber: 312,
                  columnNumber: 17
                }, void 0)
              ] }, void 0, true, {
                fileName: "/Users/Ilan_Kader/Development/dashboard-react-controls/src/lib/components/FormSelect/FormSelect.jsx",
                lineNumber: 288,
                columnNumber: 15
              }, void 0)
            ] }, void 0, true, {
              fileName: "/Users/Ilan_Kader/Development/dashboard-react-controls/src/lib/components/FormSelect/FormSelect.jsx",
              lineNumber: 280,
              columnNumber: 13
            }, void 0),
            isConfirmDialogOpen && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
              ConfirmDialog,
              {
                cancelButton: {
                  handler: () => {
                    setConfirmDialogOpen(false);
                  },
                  label: "Cancel",
                  variant: TERTIARY_BUTTON
                },
                closePopUp: () => {
                  setConfirmDialogOpen(false);
                },
                confirmButton: {
                  handler: () => {
                    selectedItemAction.handler(input2.value);
                    setConfirmDialogOpen(false);
                  },
                  label: selectedItemAction.confirm.btnConfirmLabel,
                  variant: selectedItemAction.confirm.btnConfirmType
                },
                header: selectedItemAction.confirm.title,
                isOpen: isConfirmDialogOpen,
                message: selectedItemAction.confirm.message
              },
              void 0,
              false,
              {
                fileName: "/Users/Ilan_Kader/Development/dashboard-react-controls/src/lib/components/FormSelect/FormSelect.jsx",
                lineNumber: 318,
                columnNumber: 15
              },
              void 0
            ),
            isOpen && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
              PopUpDialog,
              {
                className: "form-field form-field-select__options-list",
                headerIsHidden: true,
                ref: popUpRef,
                customPosition: {
                  element: selectRef,
                  position: "bottom-right",
                  autoHorizontalPosition: true
                },
                style: {
                  maxWidth: `${selectWidth < 500 && !preventWidthOverflow ? 500 : selectWidth}px`,
                  minWidth: `${selectWidth}px`
                },
                children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
                  "div",
                  {
                    "data-testid": "select-body",
                    className: "options-list__body",
                    onClick: handleCloseSelectBody,
                    children: [
                      search && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "options-list__search", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
                        "input",
                        {
                          type: "text",
                          placeholder: "Search...",
                          value: searchValue,
                          onChange: (event) => setSearchValue(event.target.value),
                          ref: searchRef,
                          autoFocus: true
                        },
                        void 0,
                        false,
                        {
                          fileName: "/Users/Ilan_Kader/Development/dashboard-react-controls/src/lib/components/FormSelect/FormSelect.jsx",
                          lineNumber: 364,
                          columnNumber: 23
                        },
                        void 0
                      ) }, void 0, false, {
                        fileName: "/Users/Ilan_Kader/Development/dashboard-react-controls/src/lib/components/FormSelect/FormSelect.jsx",
                        lineNumber: 363,
                        columnNumber: 21
                      }, void 0),
                      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("ul", { className: "options-list", ref: optionsListRef, children: sortedOptionsList.map((option) => {
                        return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
                          SelectOption,
                          {
                            item: option,
                            name,
                            onClick: (selectedOption2) => {
                              handleSelectOptionClick(selectedOption2, option);
                            },
                            multiple,
                            selectedId: !multiple ? input2.value : "",
                            withSelectedIcon
                          },
                          option.id,
                          false,
                          {
                            fileName: "/Users/Ilan_Kader/Development/dashboard-react-controls/src/lib/components/FormSelect/FormSelect.jsx",
                            lineNumber: 377,
                            columnNumber: 25
                          },
                          void 0
                        );
                      }) }, void 0, false, {
                        fileName: "/Users/Ilan_Kader/Development/dashboard-react-controls/src/lib/components/FormSelect/FormSelect.jsx",
                        lineNumber: 374,
                        columnNumber: 19
                      }, void 0)
                    ]
                  },
                  void 0,
                  true,
                  {
                    fileName: "/Users/Ilan_Kader/Development/dashboard-react-controls/src/lib/components/FormSelect/FormSelect.jsx",
                    lineNumber: 357,
                    columnNumber: 17
                  },
                  void 0
                )
              },
              void 0,
              false,
              {
                fileName: "/Users/Ilan_Kader/Development/dashboard-react-controls/src/lib/components/FormSelect/FormSelect.jsx",
                lineNumber: 343,
                columnNumber: 15
              },
              void 0
            ),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("input", { ...input2, type: "hidden" }, void 0, false, {
              fileName: "/Users/Ilan_Kader/Development/dashboard-react-controls/src/lib/components/FormSelect/FormSelect.jsx",
              lineNumber: 394,
              columnNumber: 13
            }, void 0)
          ]
        },
        void 0,
        true,
        {
          fileName: "/Users/Ilan_Kader/Development/dashboard-react-controls/src/lib/components/FormSelect/FormSelect.jsx",
          lineNumber: 266,
          columnNumber: 11
        },
        void 0
      )
    },
    void 0,
    false,
    {
      fileName: "/Users/Ilan_Kader/Development/dashboard-react-controls/src/lib/components/FormSelect/FormSelect.jsx",
      lineNumber: 261,
      columnNumber: 9
    },
    void 0
  ) }, void 0, false, {
    fileName: "/Users/Ilan_Kader/Development/dashboard-react-controls/src/lib/components/FormSelect/FormSelect.jsx",
    lineNumber: 259,
    columnNumber: 5
  }, void 0);
};
FormSelect.propTypes = {
  className: PropTypes.string,
  density: PropTypes.oneOf(["dense", "normal", "medium", "chunky"]),
  disabled: PropTypes.bool,
  hideSelectedOption: PropTypes.bool,
  label: PropTypes.string,
  multiple: PropTypes.bool,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  options: SELECT_OPTIONS.isRequired,
  preventWidthOverflow: PropTypes.bool,
  required: PropTypes.bool,
  scrollToView: PropTypes.bool,
  search: PropTypes.bool,
  selectedItemAction: PropTypes.object,
  tooltip: PropTypes.string,
  withSelectedIcon: PropTypes.bool,
  withoutBorder: PropTypes.bool
};
const FormSelect$1 = React__default.memo(FormSelect);
export {
  FormSelect$1 as default
};
//# sourceMappingURL=FormSelect.mjs.map
