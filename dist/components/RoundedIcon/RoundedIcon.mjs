import { jsx } from "react/jsx-runtime";
import React__default from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import Tooltip from "../Tooltip/Tooltip.mjs";
import TextTooltipTemplate from "../TooltipTemplate/TextTooltipTemplate.mjs";
/* empty css                  */
const RoundedIcon = React__default.forwardRef(
  ({
    children,
    className = "",
    disabled = false,
    id = "",
    isActive = false,
    onClick = () => {
    },
    tooltipText = ""
  }, ref) => {
    const wrapperClassNames = classnames("round-icon-cp", className);
    const IconClassNames = classnames(
      "round-icon-cp__circle",
      isActive && "round-icon-cp__circle-active",
      disabled && "round-icon-cp__circle-disabled"
    );
    return /* @__PURE__ */ jsx("div", { className: wrapperClassNames, ref, "data-testid": id, children: /* @__PURE__ */ jsx(
      Tooltip,
      {
        hidden: !tooltipText,
        id,
        template: /* @__PURE__ */ jsx(TextTooltipTemplate, { text: tooltipText }),
        children: /* @__PURE__ */ jsx("button", { onClick, disabled, className: IconClassNames, children })
      }
    ) });
  }
);
RoundedIcon.displayName = "RoundedIcon";
RoundedIcon.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  id: PropTypes.string,
  isActive: PropTypes.bool,
  onClick: PropTypes.func,
  tooltipText: PropTypes.string
};
const RoundedIcon$1 = React__default.memo(RoundedIcon);
export {
  RoundedIcon$1 as default
};
//# sourceMappingURL=RoundedIcon.mjs.map
