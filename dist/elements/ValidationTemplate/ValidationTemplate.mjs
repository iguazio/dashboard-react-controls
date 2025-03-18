import { j as jsxDevRuntimeExports } from "../../_virtual/jsx-dev-runtime.mjs";
import "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import SvgSuccessDone from "../../images/success_done.svg.mjs";
import SvgClose from "../../images/close.svg.mjs";
/* empty css                         */
const ValidationTemplate = ({ valid, validationMessage }) => {
  const validationClasses = classnames("validation-option", valid && "text-muted");
  return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("li", { className: validationClasses, children: [
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("i", { className: "validation-option__icon", children: valid ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(SvgSuccessDone, { className: "validation-option__icon_valid" }, void 0, false, {
      fileName: "/Users/Ilan_Kader/Development/dashboard-react-controls/src/lib/elements/ValidationTemplate/ValidationTemplate.jsx",
      lineNumber: 33,
      columnNumber: 11
    }, void 0) : /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(SvgClose, { className: "validation-option__icon_invalid" }, void 0, false, {
      fileName: "/Users/Ilan_Kader/Development/dashboard-react-controls/src/lib/elements/ValidationTemplate/ValidationTemplate.jsx",
      lineNumber: 35,
      columnNumber: 11
    }, void 0) }, void 0, false, {
      fileName: "/Users/Ilan_Kader/Development/dashboard-react-controls/src/lib/elements/ValidationTemplate/ValidationTemplate.jsx",
      lineNumber: 31,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { children: validationMessage }, void 0, false, {
      fileName: "/Users/Ilan_Kader/Development/dashboard-react-controls/src/lib/elements/ValidationTemplate/ValidationTemplate.jsx",
      lineNumber: 38,
      columnNumber: 7
    }, void 0)
  ] }, void 0, true, {
    fileName: "/Users/Ilan_Kader/Development/dashboard-react-controls/src/lib/elements/ValidationTemplate/ValidationTemplate.jsx",
    lineNumber: 30,
    columnNumber: 5
  }, void 0);
};
ValidationTemplate.propTypes = {
  valid: PropTypes.bool.isRequired,
  validationMessage: PropTypes.string.isRequired
};
export {
  ValidationTemplate as default
};
//# sourceMappingURL=ValidationTemplate.mjs.map
