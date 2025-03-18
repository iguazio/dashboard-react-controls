import { j as jsxDevRuntimeExports } from "../../../_virtual/jsx-dev-runtime.mjs";
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
  return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Field, { name, children: ({ input: input2 }) => /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
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
    },
    void 0,
    false,
    {
      fileName: "/Users/Ilan_Kader/Development/dashboard-react-controls/src/lib/components/FormChipCell/NewChipInput/NewChipInput.jsx",
      lineNumber: 37,
      columnNumber: 9
    },
    void 0
  ) }, void 0, false, {
    fileName: "/Users/Ilan_Kader/Development/dashboard-react-controls/src/lib/components/FormChipCell/NewChipInput/NewChipInput.jsx",
    lineNumber: 35,
    columnNumber: 5
  }, void 0);
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
