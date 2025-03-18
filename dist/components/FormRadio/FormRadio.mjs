import { j as jsxDevRuntimeExports } from "../../_virtual/jsx-dev-runtime.mjs";
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
  return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Field, { name, value: inputProps.value, type: "radio", children: ({ input }) => /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
    "div",
    {
      className: formFieldClassNames,
      "data-testid": name ? `${name}-${inputProps.value}-form-radio` : "form-field-radio",
      children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
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
          },
          void 0,
          false,
          {
            fileName: "/Users/Ilan_Kader/Development/dashboard-react-controls/src/lib/components/FormRadio/FormRadio.jsx",
            lineNumber: 48,
            columnNumber: 11
          },
          void 0
        ),
        tooltip ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Tooltip, { className: "label", template: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(TextTooltipTemplate, { text: tooltip }, void 0, false, {
          fileName: "/Users/Ilan_Kader/Development/dashboard-react-controls/src/lib/components/FormRadio/FormRadio.jsx",
          lineNumber: 60,
          columnNumber: 50
        }, void 0), children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("label", { htmlFor: name + inputProps.value, children: label }, void 0, false, {
          fileName: "/Users/Ilan_Kader/Development/dashboard-react-controls/src/lib/components/FormRadio/FormRadio.jsx",
          lineNumber: 61,
          columnNumber: 15
        }, void 0) }, void 0, false, {
          fileName: "/Users/Ilan_Kader/Development/dashboard-react-controls/src/lib/components/FormRadio/FormRadio.jsx",
          lineNumber: 60,
          columnNumber: 13
        }, void 0) : /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("label", { htmlFor: name + inputProps.value, children: label }, void 0, false, {
          fileName: "/Users/Ilan_Kader/Development/dashboard-react-controls/src/lib/components/FormRadio/FormRadio.jsx",
          lineNumber: 64,
          columnNumber: 13
        }, void 0)
      ]
    },
    void 0,
    true,
    {
      fileName: "/Users/Ilan_Kader/Development/dashboard-react-controls/src/lib/components/FormRadio/FormRadio.jsx",
      lineNumber: 44,
      columnNumber: 9
    },
    void 0
  ) }, void 0, false, {
    fileName: "/Users/Ilan_Kader/Development/dashboard-react-controls/src/lib/components/FormRadio/FormRadio.jsx",
    lineNumber: 42,
    columnNumber: 5
  }, void 0);
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
