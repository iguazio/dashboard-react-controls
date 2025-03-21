import { jsxs, jsx } from "react/jsx-runtime";
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
    return /* @__PURE__ */ jsxs("button", { ...restProps, className: buttonClassName, ref, "data-testid": id, children: [
      icon && iconPosition === "left" && icon,
      tooltip ? /* @__PURE__ */ jsx(Tooltip, { template: /* @__PURE__ */ jsx(TextTooltipTemplate, { text: tooltip }), children: label && /* @__PURE__ */ jsx("span", { children: label }) }) : label && /* @__PURE__ */ jsx("span", { children: label }),
      icon && iconPosition === "right" && icon
    ] });
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
