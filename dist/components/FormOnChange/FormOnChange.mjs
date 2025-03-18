import { j as jsxDevRuntimeExports } from "../../_virtual/jsx-dev-runtime.mjs";
import { useState, useEffect } from "react";
import { Field } from "react-final-form";
import PropTypes from "prop-types";
const OnChangeState = ({ inputValue, handler }) => {
  const [previousValue, setPreviousValue] = useState(inputValue);
  useEffect(() => {
    if (inputValue !== previousValue) {
      setPreviousValue(inputValue);
      handler(inputValue, previousValue);
    }
  }, [handler, inputValue, previousValue]);
  return null;
};
OnChangeState.propTypes = {
  inputValue: PropTypes.string.isRequired,
  handler: PropTypes.func.isRequired
};
const FormOnChange = ({ handler, name }) => {
  return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
    Field,
    {
      name,
      subscription: {
        value: true
      },
      allowNull: true,
      render: ({ input }) => /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(OnChangeState, { inputValue: input.value, handler }, void 0, false, {
        fileName: "/Users/Ilan_Kader/Development/dashboard-react-controls/src/lib/components/FormOnChange/FormOnChange.jsx",
        lineNumber: 50,
        columnNumber: 30
      }, void 0)
    },
    void 0,
    false,
    {
      fileName: "/Users/Ilan_Kader/Development/dashboard-react-controls/src/lib/components/FormOnChange/FormOnChange.jsx",
      lineNumber: 44,
      columnNumber: 5
    },
    void 0
  );
};
FormOnChange.propTypes = {
  handler: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired
};
export {
  FormOnChange as default
};
//# sourceMappingURL=FormOnChange.mjs.map
