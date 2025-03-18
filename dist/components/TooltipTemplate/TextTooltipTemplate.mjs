import { j as jsxDevRuntimeExports } from "../../_virtual/jsx-dev-runtime.mjs";
import { useRef } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
/* empty css                          */
const TextTooltipTemplate = ({ text, warning = false }) => {
  const textRef = useRef();
  const tooltipClassNames = classnames(
    "tooltip-template",
    "tooltip__text",
    warning && "tooltip__warning"
  );
  return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: tooltipClassNames, children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { ref: textRef, children: text }, void 0, false, {
    fileName: "/Users/Ilan_Kader/Development/dashboard-react-controls/src/lib/components/TooltipTemplate/TextTooltipTemplate.jsx",
    lineNumber: 34,
    columnNumber: 7
  }, void 0) }, void 0, false, {
    fileName: "/Users/Ilan_Kader/Development/dashboard-react-controls/src/lib/components/TooltipTemplate/TextTooltipTemplate.jsx",
    lineNumber: 33,
    columnNumber: 5
  }, void 0);
};
TextTooltipTemplate.propTypes = {
  text: ""
};
TextTooltipTemplate.propTypes = {
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.element, PropTypes.number]).isRequired,
  warning: PropTypes.bool
};
export {
  TextTooltipTemplate as default
};
//# sourceMappingURL=TextTooltipTemplate.mjs.map
