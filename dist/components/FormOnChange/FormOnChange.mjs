import { jsx } from "react/jsx-runtime";
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
  inputValue: PropTypes.any.isRequired,
  handler: PropTypes.func.isRequired
};
const FormOnChange = ({ handler, name }) => {
  return /* @__PURE__ */ jsx(
    Field,
    {
      name,
      subscription: {
        value: true
      },
      allowNull: true,
      render: ({ input }) => /* @__PURE__ */ jsx(OnChangeState, { inputValue: input.value, handler })
    }
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
