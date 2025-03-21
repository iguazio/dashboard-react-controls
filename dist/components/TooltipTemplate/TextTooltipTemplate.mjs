import { jsxDEV } from "react/jsx-dev-runtime";
import { useRef } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
/* empty css                          */
const TextTooltipTemplate = ({ text = "", warning = false }) => {
  const textRef = useRef();
  const tooltipClassNames = classnames(
    "tooltip-template",
    "tooltip__text",
    warning && "tooltip__warning"
  );
  return /* @__PURE__ */ jsxDEV("div", { className: tooltipClassNames, children: /* @__PURE__ */ jsxDEV("span", { ref: textRef, children: text }, void 0, false, {
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
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.element, PropTypes.number]),
  warning: PropTypes.bool
};
export {
  TextTooltipTemplate as default
};
//# sourceMappingURL=TextTooltipTemplate.mjs.map
