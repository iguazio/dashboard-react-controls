import { jsxs as u, jsx as m } from "react/jsx-runtime";
import { forwardRef as N } from "react";
import t from "prop-types";
import g from "classnames";
import y from "../Tooltip/Tooltip.mjs";
import c from "../TooltipTemplate/TextTooltipTemplate.mjs";
import { BUTTON_VARIANTS as h, DENSITY as x } from "../../types.mjs";
import { TERTIARY_BUTTON as B } from "../../constants.mjs";
/* empty css             */
let o = ({
  className: i = "",
  density: p = "normal",
  icon: e = null,
  iconPosition: n = "left",
  id: a = "btn",
  label: r = "Button",
  tooltip: s = "",
  variant: l = B,
  ...f
}, T) => {
  const d = g("btn", `btn-${l}`, `btn-${p}`, i);
  return /* @__PURE__ */ u("button", { ...f, className: d, ref: T, "data-testid": a, children: [
    e && n === "left" && e,
    (s || r) && /* @__PURE__ */ m(y, { template: /* @__PURE__ */ m(c, { text: s || r }), children: r && /* @__PURE__ */ m("span", { children: r }) }),
    e && n === "right" && e
  ] });
};
o = N(o);
o.displayName = "Button";
o.propTypes = {
  className: t.string,
  density: x,
  icon: t.element,
  iconPosition: t.oneOf(["left", "right"]),
  id: t.string,
  label: t.oneOfType([t.string, t.element]),
  tooltip: t.oneOfType([t.string, t.element]),
  variant: h
};
export {
  o as default
};
//# sourceMappingURL=Button.mjs.map
