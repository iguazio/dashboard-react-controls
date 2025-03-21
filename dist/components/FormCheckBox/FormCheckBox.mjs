import { jsx, jsxs } from "react/jsx-runtime";
import React__default, { useRef } from "react";
import PropTypes from "prop-types";
import { Field } from "react-final-form";
import classnames from "classnames";
/* empty css                   */
const FormCheckBox = ({
  children,
  className = "",
  highlightLabel = false,
  label = "",
  name,
  readOnly = false,
  ...inputProps
}) => {
  const formFieldClassNames = classnames(
    "form-field-checkbox",
    readOnly && "form-field-checkbox_readonly",
    className
  );
  const labelClassNames = classnames(highlightLabel && "highlighted");
  const inputRef = useRef(null);
  return /* @__PURE__ */ jsx(Field, { name, value: inputProps.value, type: "checkbox", children: ({ input }) => {
    return /* @__PURE__ */ jsxs("div", { className: formFieldClassNames, "data-testid": "form-field-checkbox", children: [
      /* @__PURE__ */ jsx(
        "input",
        {
          ref: inputRef,
          className: classnames(input.checked ? "checked" : "unchecked"),
          type: "checkbox",
          "data-testid": name ? `${name}-form-checkbox` : "form-checkbox",
          id: inputProps.value ?? name,
          ...{ ...input, ...inputProps },
          value: String(input.checked)
        }
      ),
      /* @__PURE__ */ jsxs("label", { htmlFor: inputProps.value ?? name, className: labelClassNames, children: [
        label ? label : "",
        children
      ] })
    ] });
  } });
};
FormCheckBox.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  highlightLabel: PropTypes.bool,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  name: PropTypes.string.isRequired,
  readOnly: PropTypes.bool
};
const FormCheckBox$1 = React__default.memo(FormCheckBox);
export {
  FormCheckBox$1 as default
};
//# sourceMappingURL=FormCheckBox.mjs.map
