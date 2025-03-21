import { jsx, jsxs } from "react/jsx-runtime";
import "react";
import classnames from "classnames";
import PropTypes from "prop-types";
import { Field } from "react-final-form";
/* empty css                 */
const FormToggle = ({ density, label = "", name, onChange = () => {
}, ...inputProps }) => {
  const toggleWrapperClassNames = classnames(
    "form-field__wrapper",
    density && `form-field__wrapper-${density}`
  );
  return /* @__PURE__ */ jsx(Field, { name, value: inputProps.value, type: "checkbox", children: ({ input }) => {
    return /* @__PURE__ */ jsxs(
      "label",
      {
        className: "form-field-toggle",
        "data-testid": name ? `${name}-form-field-toggle` : "form-field-toggle",
        children: [
          label && /* @__PURE__ */ jsx("div", { className: "form-field__label", children: label }),
          /* @__PURE__ */ jsx(
            "input",
            {
              "data-testid": name ? `${name}-form-toggle` : "form-toggle",
              id: name,
              ...{ ...input, ...inputProps },
              onChange: (event) => {
                onChange && onChange(event);
                input.onChange(event);
              },
              type: "checkbox"
            }
          ),
          /* @__PURE__ */ jsx("div", { className: toggleWrapperClassNames, children: /* @__PURE__ */ jsx("span", { className: "form-field-toggle__switch" }) })
        ]
      }
    );
  } });
};
FormToggle.propTypes = {
  density: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func
};
export {
  FormToggle as default
};
//# sourceMappingURL=FormToggle.mjs.map
