import { j as jsxDevRuntimeExports } from "../../_virtual/jsx-dev-runtime.mjs";
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
    return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: wrapperClassNames, ref, "data-testid": id, children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
      Tooltip,
      {
        hidden: !tooltipText,
        id,
        template: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(TextTooltipTemplate, { text: tooltipText }, void 0, false, {
          fileName: "/Users/Ilan_Kader/Development/dashboard-react-controls/src/lib/components/RoundedIcon/RoundedIcon.jsx",
          lineNumber: 51,
          columnNumber: 21
        }, void 0),
        children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("button", { onClick, disabled, className: IconClassNames, children }, void 0, false, {
          fileName: "/Users/Ilan_Kader/Development/dashboard-react-controls/src/lib/components/RoundedIcon/RoundedIcon.jsx",
          lineNumber: 53,
          columnNumber: 11
        }, void 0)
      },
      void 0,
      false,
      {
        fileName: "/Users/Ilan_Kader/Development/dashboard-react-controls/src/lib/components/RoundedIcon/RoundedIcon.jsx",
        lineNumber: 48,
        columnNumber: 9
      },
      void 0
    ) }, void 0, false, {
      fileName: "/Users/Ilan_Kader/Development/dashboard-react-controls/src/lib/components/RoundedIcon/RoundedIcon.jsx",
      lineNumber: 47,
      columnNumber: 7
    }, void 0);
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
