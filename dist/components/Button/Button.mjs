import { jsxs as u, jsx as n } from "react/jsx-runtime";
import { forwardRef as N } from "react";
import t from "prop-types";
import c from "classnames";
import g from "../Tooltip/Tooltip.mjs";
import y from "../TooltipTemplate/TextTooltipTemplate.mjs";
import { BUTTON_VARIANTS as B, DENSITY as h } from "../../types.mjs";
import { TERTIARY_BUTTON as x } from "../../constants.mjs";
/* empty css             */
let e = ({
  className: i = "",
  density: p = "normal",
  icon: o = null,
  iconPosition: m = "left",
  id: a = "btn",
  label: r = "Button",
  tooltip: s = "",
  variant: l = x,
  ...f
}, T) => {
  const d = c("btn", `btn-${l}`, `btn-${p}`, i);
  return /* @__PURE__ */ u("button", { ...f, className: d, ref: T, "data-testid": a, children: [
    o && m === "left" && o,
    (s || r) && /* @__PURE__ */ n(g, { template: /* @__PURE__ */ n(y, { text: s || r }), children: r && /* @__PURE__ */ n("span", { children: r }) }),
    o && m === "right" && o
  ] });
};
e = N(e);
e.displayName = "Button";
e.propTypes = {
  className: t.string,
  density: h,
  icon: t.element,
  iconPosition: t.oneOf(["left", "right"]),
  id: t.string,
  label: t.oneOfType([t.string, t.element]),
  tooltip: t.oneOfType([t.string, t.element]),
  variant: B
};
const U = e;
export {
  U as default
};
//# sourceMappingURL=Button.mjs.map
