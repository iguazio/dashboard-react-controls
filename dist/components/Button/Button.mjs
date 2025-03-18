import { j as jsxDevRuntimeExports } from "../../_virtual/jsx-dev-runtime.mjs";
import { forwardRef } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import Tooltip from "../Tooltip/Tooltip.mjs";
import TextTooltipTemplate from "../TooltipTemplate/TextTooltipTemplate.mjs";
import { BUTTON_VARIANTS } from "../../types.mjs";
import { TERTIARY_BUTTON } from "../../constants.mjs";
/* empty css             */
const Button = forwardRef(
  ({
    className = "",
    density = "normal",
    icon = null,
    iconPosition = "left",
    id = "btn",
    label = "Button",
    tooltip = "",
    variant = TERTIARY_BUTTON,
    ...restProps
  }, ref) => {
    const buttonClassName = classnames("btn", `btn-${variant}`, `btn-${density}`, className);
    return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("button", { ...restProps, className: buttonClassName, ref, "data-testid": id, children: [
      icon && iconPosition === "left" && icon,
      tooltip ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Tooltip, { template: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(TextTooltipTemplate, { text: tooltip }, void 0, false, {
        fileName: "/Users/Ilan_Kader/Development/dashboard-react-controls/src/lib/components/Button/Button.jsx",
        lineNumber: 50,
        columnNumber: 30
      }, void 0), children: label && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { children: label }, void 0, false, {
        fileName: "/Users/Ilan_Kader/Development/dashboard-react-controls/src/lib/components/Button/Button.jsx",
        lineNumber: 51,
        columnNumber: 23
      }, void 0) }, void 0, false, {
        fileName: "/Users/Ilan_Kader/Development/dashboard-react-controls/src/lib/components/Button/Button.jsx",
        lineNumber: 50,
        columnNumber: 11
      }, void 0) : label && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { children: label }, void 0, false, {
        fileName: "/Users/Ilan_Kader/Development/dashboard-react-controls/src/lib/components/Button/Button.jsx",
        lineNumber: 54,
        columnNumber: 20
      }, void 0),
      icon && iconPosition === "right" && icon
    ] }, void 0, true, {
      fileName: "/Users/Ilan_Kader/Development/dashboard-react-controls/src/lib/components/Button/Button.jsx",
      lineNumber: 47,
      columnNumber: 7
    }, void 0);
  }
);
Button.displayName = "Button";
Button.propTypes = {
  className: PropTypes.string,
  density: PropTypes.oneOf(["dense", "normal", "medium", "chunky"]),
  icon: PropTypes.element,
  iconPosition: PropTypes.oneOf(["left", "right"]),
  id: PropTypes.string,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  tooltip: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  variant: BUTTON_VARIANTS
};
export {
  Button as default
};
//# sourceMappingURL=Button.mjs.map
