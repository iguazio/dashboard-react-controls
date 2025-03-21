import { jsx, jsxs } from "react/jsx-runtime";
import React__default from "react";
import PropTypes from "prop-types";
import { Field } from "react-final-form";
import classnames from "classnames";
import Tooltip from "../Tooltip/Tooltip.mjs";
import TextTooltipTemplate from "../TooltipTemplate/TextTooltipTemplate.mjs";
/* empty css                */
const FormRadio = ({
  className = "",
  name,
  label,
  readOnly = false,
  tooltip = "",
  ...inputProps
}) => {
  const formFieldClassNames = classnames(
    "form-field-radio",
    readOnly && "form-field-radio_readonly",
    className
  );
  return /* @__PURE__ */ jsx(Field, { name, value: inputProps.value, type: "radio", children: ({ input }) => /* @__PURE__ */ jsxs(
    "div",
    {
      className: formFieldClassNames,
      "data-testid": name ? `${name}-${inputProps.value}-form-radio` : "form-field-radio",
      children: [
        /* @__PURE__ */ jsx(
          "input",
          {
            className: classnames(input.checked ? "checked" : "unchecked"),
            type: "radio",
            "data-testid": name ? `${name}-${inputProps.value}-radio` : "form-radio",
            ...{
              ...input,
              ...inputProps
            },
            checked: input.checked,
            id: name + inputProps.value
          }
        ),
        tooltip ? /* @__PURE__ */ jsx(Tooltip, { className: "label", template: /* @__PURE__ */ jsx(TextTooltipTemplate, { text: tooltip }), children: /* @__PURE__ */ jsx("label", { htmlFor: name + inputProps.value, children: label }) }) : /* @__PURE__ */ jsx("label", { htmlFor: name + inputProps.value, children: label })
      ]
    }
  ) });
};
FormRadio.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  readOnly: PropTypes.bool,
  tooltip: PropTypes.string
};
const FormRadio$1 = React__default.memo(FormRadio);
export {
  FormRadio$1 as default
};
//# sourceMappingURL=FormRadio.mjs.map
