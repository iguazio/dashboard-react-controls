import { jsx, jsxs } from "react/jsx-runtime";
import React__default, { useState, useRef, useLayoutEffect, useEffect } from "react";
import classnames from "classnames";
import PropTypes from "prop-types";
import { useField, Field } from "react-final-form";
import TextTooltipTemplate from "../TooltipTemplate/TextTooltipTemplate.mjs";
import Tip from "../Tip/Tip.mjs";
import Tooltip from "../Tooltip/Tooltip.mjs";
import SvgExclamationMark from "../../images/exclamation-mark.svg.mjs";
/* empty css                   */
const FormTextarea = React__default.forwardRef(
  ({
    className = "",
    disabled = false,
    focused = false,
    iconClass = "",
    invalidText = "This field is invalid",
    label = "",
    maxLength = null,
    name,
    onBlur = () => {
    },
    onChange = () => {
    },
    required = false,
    rows = 3,
    textAreaIcon,
    tip = "",
    withoutBorder = false,
    ...textareaProps
  }, ref) => {
    const { input, meta } = useField(name);
    const [isInvalid, setIsInvalid] = useState(false);
    const [textAreaCount, setTextAreaCount] = useState(input.value.length);
    const textAreaRef = useRef();
    const formFieldClassNames = classnames("form-field-textarea", className);
    const labelClassNames = classnames(
      "form-field__label",
      disabled && "form-field__label-disabled"
    );
    const textAreaClassNames = classnames(
      "form-field__wrapper",
      disabled && "form-field__wrapper-disabled",
      isInvalid && "form-field__wrapper-invalid",
      withoutBorder && "without-border"
    );
    useLayoutEffect(() => {
      setTextAreaCount(input.value.length);
    }, [input.value.length]);
    useEffect(() => {
      if (focused) {
        textAreaRef.current.focus();
      }
    }, [focused, textAreaRef]);
    useEffect(() => {
      setIsInvalid(
        meta.invalid && (meta.validating || meta.modified || meta.submitFailed && meta.touched)
      );
    }, [meta.invalid, meta.modified, meta.submitFailed, meta.touched, meta.validating]);
    const handleInputBlur = (event) => {
      input.onBlur(event);
      onBlur && onBlur(event);
    };
    const handleInputChange = (event) => {
      input.onChange(event);
      onChange && onChange(event.target.value);
    };
    const handleInputFocus = (event) => {
      input.onFocus(event);
    };
    const validateField = (value) => {
      const valueToValidate = value ?? "";
      let validationError = null;
      if (valueToValidate.startsWith(" ")) {
        validationError = { name: "empty", label: invalidText };
      } else if (required && valueToValidate.trim().length === 0) {
        validationError = { name: "required", label: "This field is required" };
      }
      return validationError;
    };
    return /* @__PURE__ */ jsx(Field, { validate: validateField, name, children: ({ input: input2, meta: meta2 }) => {
      var _a;
      return /* @__PURE__ */ jsxs("div", { ref, className: formFieldClassNames, children: [
        /* @__PURE__ */ jsx("div", { className: labelClassNames, children: label && /* @__PURE__ */ jsxs("label", { "data-testid": "label", htmlFor: input2.name, children: [
          label,
          required && /* @__PURE__ */ jsx("span", { className: "form-field__label-mandatory", children: " *" })
        ] }) }),
        /* @__PURE__ */ jsxs("div", { className: textAreaClassNames, children: [
          /* @__PURE__ */ jsx("div", { className: "form-field__control", children: /* @__PURE__ */ jsx(
            "textarea",
            {
              "data-testid": "textarea",
              id: input2.name,
              maxLength,
              ref: textAreaRef,
              required: isInvalid || required,
              ...{
                disabled,
                rows,
                ...textareaProps,
                ...input2
              },
              onBlur: handleInputBlur,
              onChange: handleInputChange,
              onFocus: handleInputFocus
            }
          ) }),
          /* @__PURE__ */ jsxs("div", { className: "form-field__icons", children: [
            isInvalid && /* @__PURE__ */ jsx(
              Tooltip,
              {
                className: "form-field__warning",
                template: /* @__PURE__ */ jsx(TextTooltipTemplate, { text: ((_a = meta2.error) == null ? void 0 : _a.label) ?? invalidText, warning: true }),
                children: /* @__PURE__ */ jsx(SvgExclamationMark, {})
              }
            ),
            tip && !required && /* @__PURE__ */ jsx(Tip, { text: tip, className: "form-field__tip" }),
            textAreaIcon && /* @__PURE__ */ jsx("span", { "data-testid": "textarea__icon", className: iconClass, children: textAreaIcon })
          ] })
        ] }),
        maxLength && /* @__PURE__ */ jsx("div", { className: "form-field__counter", children: `${maxLength - textAreaCount} ${maxLength - textAreaCount !== 1 ? "characters" : "character"} left` })
      ] });
    } });
  }
);
FormTextarea.displayName = "FormTextarea";
FormTextarea.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  focused: PropTypes.bool,
  iconClass: PropTypes.string,
  invalidText: PropTypes.string,
  label: PropTypes.string,
  maxLength: PropTypes.number,
  name: PropTypes.string.isRequired,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  required: PropTypes.bool,
  rows: PropTypes.number,
  textAreaIcon: PropTypes.element,
  tip: PropTypes.string,
  withoutBorder: PropTypes.bool
};
const FormTextarea$1 = React__default.memo(FormTextarea);
export {
  FormTextarea$1 as default
};
//# sourceMappingURL=FormTextarea.mjs.map
