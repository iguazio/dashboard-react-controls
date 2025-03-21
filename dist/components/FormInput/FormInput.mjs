import { jsx, jsxs } from "react/jsx-runtime";
import React__default, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import { isNil, isEmpty } from "lodash";
import { useField, Field } from "react-final-form";
import InputNumberButtons from "./InputNumberButtons/InputNumberButtons.mjs";
import OptionsMenu from "../../elements/OptionsMenu/OptionsMenu.mjs";
import ValidationTemplate from "../../elements/ValidationTemplate/ValidationTemplate.mjs";
import TextTooltipTemplate from "../TooltipTemplate/TextTooltipTemplate.mjs";
import Tip from "../Tip/Tip.mjs";
import Tooltip from "../Tooltip/Tooltip.mjs";
import { INPUT_VALIDATION_RULES, INPUT_LINK } from "../../types.mjs";
import { checkPatternsValidity, checkPatternsValidityAsync } from "../../utils/validation.util.mjs";
import "../../hooks/index.mjs";
import { validation } from "../../constants.mjs";
import SvgExclamationMark from "../../images/exclamation-mark.svg.mjs";
import SvgPopout from "../../images/popout.svg.mjs";
import SvgWarning from "../../images/warning.svg.mjs";
/* empty css                */
import { useDetectOutsideClick } from "../../hooks/useDetectOutsideClick.hook.mjs";
import { useDebounce } from "../../hooks/useDebounce.hook.mjs";
const defaultProps = {
  iconClick: () => {
  },
  link: { show: "", value: "" },
  onBlur: () => {
  },
  onChange: () => {
  },
  onKeyDown: () => {
  },
  validator: () => {
  },
  rules: []
};
const FormInput = React__default.forwardRef(
  ({
    async = false,
    className = "",
    customRequiredLabel = "",
    density = "normal",
    disabled = false,
    focused = false,
    iconClass = "",
    iconClick = defaultProps.iconClick,
    inputIcon = null,
    invalidText = "This field is invalid",
    label = "",
    link = defaultProps.link,
    name,
    onBlur = defaultProps.onBlur,
    onFocus,
    onKeyDown = defaultProps.onKeyDown,
    pattern = null,
    required = false,
    suggestionList = [],
    step = "1",
    tip = "",
    type = "text",
    validationRules: rules = defaultProps.rules,
    validator = defaultProps.validator,
    withoutBorder = false,
    ...inputProps
  }, ref) => {
    const { input, meta } = useField(name);
    const [isInvalid, setIsInvalid] = useState(false);
    const [isFocused, setIsFocused] = useState(false);
    const [typedValue, setTypedValue] = useState("");
    const [validationPattern] = useState(RegExp(pattern));
    const [validationRules, setValidationRules] = useState(rules);
    const [showValidationRules, setShowValidationRules] = useState(false);
    const wrapperRef = useRef();
    ref ?? (ref = wrapperRef);
    const inputRef = useRef();
    const errorsRef = useRef();
    const isRequiredRulePresentRef = useRef(false);
    useDetectOutsideClick(ref, () => setShowValidationRules(false));
    const debounceAsync = useDebounce();
    const formFieldClassNames = classnames("form-field-input", className);
    const inputWrapperClassNames = classnames(
      "form-field__wrapper",
      `form-field__wrapper-${density}`,
      disabled && "form-field__wrapper-disabled",
      isInvalid && "form-field__wrapper-invalid",
      withoutBorder && "without-border"
    );
    const labelClassNames = classnames(
      "form-field__label",
      disabled && "form-field__label-disabled"
    );
    useEffect(() => {
      setTypedValue(String(input.value));
    }, [input.value]);
    useEffect(() => {
      setIsInvalid(
        errorsRef.current && meta.invalid && (meta.validating || meta.modified || meta.submitFailed && meta.touched)
      );
    }, [meta.invalid, meta.modified, meta.submitFailed, meta.touched, meta.validating]);
    useEffect(() => {
      if (!errorsRef.current) {
        if (meta.valid && showValidationRules) {
          setShowValidationRules(false);
        }
      }
    }, [meta.valid, showValidationRules]);
    useEffect(() => {
      if (showValidationRules) {
        window.addEventListener("scroll", handleScroll, true);
      }
      return () => {
        window.removeEventListener("scroll", handleScroll, true);
      };
    }, [showValidationRules]);
    useEffect(() => {
      if (focused) {
        inputRef.current.focus();
      }
    }, [focused]);
    useEffect(() => {
      setValidationRules(() => {
        isRequiredRulePresentRef.current = false;
        return rules.map((rule) => {
          if (rule.name === validation.REQUIRED.NAME) {
            isRequiredRulePresentRef.current = true;
          }
          return {
            ...rule,
            isValid: !errorsRef.current || !Array.isArray(errorsRef.current) ? true : !errorsRef.current.some((err) => err.name === rule.name)
          };
        });
      });
    }, [rules]);
    const getValidationRules = () => {
      return validationRules.map(({ isValid = false, label: label2, name: name2 }) => {
        return /* @__PURE__ */ jsx(ValidationTemplate, { valid: isValid, validationMessage: label2 }, name2);
      });
    };
    const isValueEmptyAndValid = (value) => {
      return !value && !required || disabled;
    };
    const handleInputBlur = (event) => {
      var _a;
      input.onBlur && input.onBlur(event);
      if (!event.relatedTarget || !((_a = event.relatedTarget) == null ? void 0 : _a.closest(".form-field__suggestion-list"))) {
        setIsFocused(false);
        onBlur && onBlur(event);
      }
    };
    const handleInputFocus = (event) => {
      input.onFocus && input.onFocus(event);
      onFocus && onFocus(event);
      setIsFocused(true);
    };
    const handleInputKeyDown = (event) => {
      input.onKeyDown && input.onKeyDown(event);
      onKeyDown && onKeyDown(event);
    };
    const handleScroll = (event) => {
      if (inputRef.current && inputRef.current.contains(event.target)) return;
      if (!event.target.closest(".options-menu") && !event.target.classList.contains("form-field-input")) {
        setShowValidationRules(false);
      }
    };
    const handleSuggestionClick = (item) => {
      input.onChange && input.onChange(item);
      setIsFocused(false);
      onBlur();
    };
    const toggleValidationRulesMenu = () => {
      inputRef.current.focus();
      setShowValidationRules((state) => !state);
    };
    const validateField = (value, allValues) => {
      let valueToValidate = isNil(value) ? "" : String(value);
      if (isValueEmptyAndValid(valueToValidate)) return;
      let validationError = null;
      if (required && valueToValidate.trim().length === 0 && !isRequiredRulePresentRef.current) {
        validationError = {
          name: "required",
          label: customRequiredLabel || "This field is required"
        };
      } else if (!isEmpty(rules) && !async) {
        const [newRules, isValidField] = checkPatternsValidity(rules, valueToValidate);
        const invalidRules = newRules.filter((rule) => !rule.isValid);
        if (!isValidField) {
          validationError = invalidRules.map((rule) => ({ name: rule.name, label: rule.label }));
        }
      }
      if (isEmpty(validationError)) {
        if (type === "number") {
          if (inputProps.max && +valueToValidate > +inputProps.max) {
            validationError = {
              name: "maxValue",
              label: `The maximum value must be ${inputProps.max}`
            };
          }
          if (inputProps.min && +valueToValidate < +inputProps.min) {
            validationError = {
              name: "minValue",
              label: `The minimum value must be ${inputProps.min}`
            };
          }
        }
        if (pattern && !validationPattern.test(valueToValidate)) {
          validationError = { name: "pattern", label: invalidText };
        } else if (valueToValidate.startsWith(" ")) {
          validationError = { name: "empty", label: invalidText };
        }
      }
      if (!validationError && validator) {
        validationError = validator(value, allValues);
      }
      errorsRef.current = validationError;
      return validationError;
    };
    const validateFieldAsync = debounceAsync(async (value, allValues) => {
      let valueToValidate = isNil(value) ? "" : String(value);
      if (isValueEmptyAndValid(valueToValidate)) return;
      let validationError = validateField(valueToValidate, allValues);
      if (!isEmpty(rules)) {
        const [newRules, isValidField] = await checkPatternsValidityAsync(rules, valueToValidate);
        const invalidRules = newRules.filter((rule) => !rule.isValid);
        if (!isValidField) {
          validationError = invalidRules.map((rule) => ({ name: rule.name, label: rule.label }));
        }
      }
      errorsRef.current = validationError;
      return validationError;
    }, 400);
    const parseField = (val) => {
      return type === "number" && val ? parseFloat(val) || val : val;
    };
    return /* @__PURE__ */ jsx(Field, { validate: async ? validateFieldAsync : validateField, name, parse: parseField, children: ({ input: input2 }) => {
      var _a;
      return /* @__PURE__ */ jsxs(
        "div",
        {
          ref,
          className: formFieldClassNames,
          "data-testid": name ? `${name}-form-field-input` : "form-field-input",
          children: [
            label && /* @__PURE__ */ jsxs("div", { className: labelClassNames, children: [
              /* @__PURE__ */ jsxs(
                "label",
                {
                  "data-testid": name ? `${name}-form-label` : "form-label",
                  htmlFor: input2.name,
                  children: [
                    label,
                    (required || validationRules.find((rule) => rule.name === "required")) && /* @__PURE__ */ jsx("span", { className: "form-field__label-mandatory", children: " *" })
                  ]
                }
              ),
              link && link.show && typedValue.trim() && /* @__PURE__ */ jsx("div", { className: "form-field__label-icon", children: /* @__PURE__ */ jsx(Tooltip, { template: /* @__PURE__ */ jsx(TextTooltipTemplate, { text: link.url || typedValue }), children: /* @__PURE__ */ jsx(
                "a",
                {
                  href: link.url || typedValue,
                  onClick: (event) => event.stopPropagation(),
                  target: "_blank",
                  rel: "noreferrer",
                  children: /* @__PURE__ */ jsx(SvgPopout, {})
                }
              ) }) })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: inputWrapperClassNames, children: [
              /* @__PURE__ */ jsx("div", { className: "form-field__control", children: /* @__PURE__ */ jsx(
                "input",
                {
                  "data-testid": name ? `${name}-form-input` : "form-input",
                  id: input2.name,
                  ref: inputRef,
                  required: isInvalid || required,
                  ...{
                    disabled,
                    pattern,
                    type,
                    ...inputProps,
                    ...input2
                  },
                  autoComplete: inputProps.autocomplete ?? "off",
                  onBlur: handleInputBlur,
                  onKeyDown: handleInputKeyDown,
                  onFocus: handleInputFocus
                }
              ) }),
              /* @__PURE__ */ jsxs("div", { className: "form-field__icons", children: [
                isInvalid && !Array.isArray(errorsRef.current) && /* @__PURE__ */ jsx(
                  Tooltip,
                  {
                    className: "form-field__warning",
                    template: /* @__PURE__ */ jsx(
                      TextTooltipTemplate,
                      {
                        text: ((_a = errorsRef.current) == null ? void 0 : _a.label) ?? invalidText,
                        warning: true
                      }
                    ),
                    children: /* @__PURE__ */ jsx(SvgExclamationMark, {})
                  }
                ),
                isInvalid && Array.isArray(errorsRef.current) && /* @__PURE__ */ jsx("button", { className: "form-field__warning", onClick: toggleValidationRulesMenu, children: /* @__PURE__ */ jsx(SvgWarning, {}) }),
                tip && /* @__PURE__ */ jsx(Tip, { text: tip, className: "form-field__tip" }),
                inputIcon && /* @__PURE__ */ jsx("span", { "data-testid": "input-icon", className: iconClass, onClick: iconClick, children: inputIcon })
              ] }),
              type === "number" && /* @__PURE__ */ jsx(InputNumberButtons, { ...{ ...inputProps, step: +step, ...input2, disabled } })
            ] }),
            (suggestionList == null ? void 0 : suggestionList.length) > 0 && isFocused && /* @__PURE__ */ jsx("ul", { className: "form-field__suggestion-list", children: suggestionList.map((item, index) => {
              return /* @__PURE__ */ jsx(
                "li",
                {
                  className: "suggestion-item",
                  onClick: () => {
                    handleSuggestionClick(item);
                  },
                  tabIndex: index,
                  dangerouslySetInnerHTML: {
                    __html: item.replace(
                      new RegExp(typedValue, "gi"),
                      (match) => match ? `<b>${match}</b>` : match
                    )
                  }
                },
                `${item}${index}`
              );
            }) }),
            !isEmpty(validationRules) && isInvalid && Array.isArray(errorsRef.current) && /* @__PURE__ */ jsx(OptionsMenu, { show: showValidationRules, ref, children: getValidationRules() })
          ]
        }
      );
    } });
  }
);
FormInput.displayName = "FormInput";
FormInput.propTypes = {
  async: PropTypes.bool,
  className: PropTypes.string,
  customRequiredLabel: PropTypes.string,
  density: PropTypes.oneOf(["dense", "normal", "medium", "chunky"]),
  disabled: PropTypes.bool,
  focused: PropTypes.bool,
  iconClass: PropTypes.string,
  iconClick: PropTypes.func,
  inputIcon: PropTypes.element,
  invalidText: PropTypes.string,
  label: PropTypes.string,
  link: INPUT_LINK,
  min: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  max: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  name: PropTypes.string.isRequired,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
  onKeyDown: PropTypes.func,
  pattern: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  step: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  suggestionList: PropTypes.arrayOf(PropTypes.string),
  tip: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  type: PropTypes.string,
  validationRules: INPUT_VALIDATION_RULES,
  validator: PropTypes.func,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  withoutBorder: PropTypes.bool
};
const FormInput$1 = React__default.memo(FormInput);
export {
  FormInput$1 as default
};
//# sourceMappingURL=FormInput.mjs.map
