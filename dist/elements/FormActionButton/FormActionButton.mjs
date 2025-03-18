import { j as jsxDevRuntimeExports } from "../../_virtual/jsx-dev-runtime.mjs";
import React__default from "react";
import PropTypes from "prop-types";
import SvgPlus from "../../images/plus.svg.mjs";
const FormActionButton = React__default.forwardRef(
  ({
    disabled = false,
    fields,
    fieldsPath,
    hidden = false,
    id = "",
    label = "Add new item",
    onClick
  }, ref) => {
    return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(jsxDevRuntimeExports.Fragment, { children: [
      !hidden && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "form-table__row form-table__action-row no-hover", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
        "button",
        {
          "data-testid": id ? id : `${fieldsPath}-add-btn`,
          onClick: (event) => onClick(event, fields, fieldsPath),
          disabled,
          children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(SvgPlus, {}, void 0, false, {
              fileName: "/Users/Ilan_Kader/Development/dashboard-react-controls/src/lib/elements/FormActionButton/FormActionButton.jsx",
              lineNumber: 47,
              columnNumber: 15
            }, void 0),
            label
          ]
        },
        void 0,
        true,
        {
          fileName: "/Users/Ilan_Kader/Development/dashboard-react-controls/src/lib/elements/FormActionButton/FormActionButton.jsx",
          lineNumber: 42,
          columnNumber: 13
        },
        void 0
      ) }, void 0, false, {
        fileName: "/Users/Ilan_Kader/Development/dashboard-react-controls/src/lib/elements/FormActionButton/FormActionButton.jsx",
        lineNumber: 41,
        columnNumber: 11
      }, void 0),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { ref }, void 0, false, {
        fileName: "/Users/Ilan_Kader/Development/dashboard-react-controls/src/lib/elements/FormActionButton/FormActionButton.jsx",
        lineNumber: 53,
        columnNumber: 9
      }, void 0)
    ] }, void 0, true, {
      fileName: "/Users/Ilan_Kader/Development/dashboard-react-controls/src/lib/elements/FormActionButton/FormActionButton.jsx",
      lineNumber: 39,
      columnNumber: 7
    }, void 0);
  }
);
FormActionButton.displayName = "FormActionButton";
FormActionButton.propTypes = {
  disabled: PropTypes.bool,
  fields: PropTypes.shape({}).isRequired,
  fieldsPath: PropTypes.string.isRequired,
  hidden: PropTypes.bool,
  id: PropTypes.string,
  label: PropTypes.string,
  onClick: PropTypes.func.isRequired
};
export {
  FormActionButton as default
};
//# sourceMappingURL=FormActionButton.mjs.map
