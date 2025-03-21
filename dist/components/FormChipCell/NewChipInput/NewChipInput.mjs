import { jsx } from "react/jsx-runtime";
import React__default from "react";
import PropTypes from "prop-types";
import { useField, Field } from "react-final-form";
const NewChipInput = React__default.forwardRef(({ name, onChange, onFocus, ...inputProps }, ref) => {
  const { input } = useField(name);
  const handleInputChange = (event) => {
    input.onChange(event);
    onChange(event);
  };
  const handleInputFocus = (event) => {
    input.onFocus(event);
    onFocus(event);
  };
  return /* @__PURE__ */ jsx(Field, { name, children: ({ input: input2 }) => /* @__PURE__ */ jsx(
    "input",
    {
      autoComplete: "off",
      "data-testid": "input",
      ref,
      type: "text",
      ...{
        ...inputProps,
        ...input2
      },
      onChange: handleInputChange,
      onFocus: handleInputFocus
    }
  ) });
});
NewChipInput.displayName = "NewChipInput";
NewChipInput.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onFocus: PropTypes.func.isRequired
};
export {
  NewChipInput as default
};
//# sourceMappingURL=NewChipInput.mjs.map
