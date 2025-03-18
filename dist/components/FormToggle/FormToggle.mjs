import { j as jsxDevRuntimeExports } from "../../_virtual/jsx-dev-runtime.mjs";
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
  return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Field, { name, value: inputProps.value, type: "checkbox", children: ({ input }) => {
    return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
      "label",
      {
        className: "form-field-toggle",
        "data-testid": name ? `${name}-form-field-toggle` : "form-field-toggle",
        children: [
          label && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "form-field__label", children: label }, void 0, false, {
            fileName: "/Users/Ilan_Kader/Development/dashboard-react-controls/src/lib/components/FormToggle/FormToggle.jsx",
            lineNumber: 38,
            columnNumber: 23
          }, void 0),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
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
            },
            void 0,
            false,
            {
              fileName: "/Users/Ilan_Kader/Development/dashboard-react-controls/src/lib/components/FormToggle/FormToggle.jsx",
              lineNumber: 39,
              columnNumber: 13
            },
            void 0
          ),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: toggleWrapperClassNames, children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "form-field-toggle__switch" }, void 0, false, {
            fileName: "/Users/Ilan_Kader/Development/dashboard-react-controls/src/lib/components/FormToggle/FormToggle.jsx",
            lineNumber: 50,
            columnNumber: 15
          }, void 0) }, void 0, false, {
            fileName: "/Users/Ilan_Kader/Development/dashboard-react-controls/src/lib/components/FormToggle/FormToggle.jsx",
            lineNumber: 49,
            columnNumber: 13
          }, void 0)
        ]
      },
      void 0,
      true,
      {
        fileName: "/Users/Ilan_Kader/Development/dashboard-react-controls/src/lib/components/FormToggle/FormToggle.jsx",
        lineNumber: 34,
        columnNumber: 11
      },
      void 0
    );
  } }, void 0, false, {
    fileName: "/Users/Ilan_Kader/Development/dashboard-react-controls/src/lib/components/FormToggle/FormToggle.jsx",
    lineNumber: 31,
    columnNumber: 5
  }, void 0);
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
