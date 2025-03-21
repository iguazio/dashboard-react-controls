import { jsx } from "react/jsx-runtime";
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
  return /* @__PURE__ */ jsx("div", { className: tooltipClassNames, children: /* @__PURE__ */ jsx("span", { ref: textRef, children: text }) });
};
TextTooltipTemplate.propTypes = {
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.element, PropTypes.number]),
  warning: PropTypes.bool
};
export {
  TextTooltipTemplate as default
};
//# sourceMappingURL=TextTooltipTemplate.mjs.map
