import { jsx as r } from "react/jsx-runtime";
import u, { forwardRef as _ } from "react";
import o from "prop-types";
import s from "classnames";
import N from "../Tooltip/Tooltip.mjs";
import R from "../TooltipTemplate/TextTooltipTemplate.mjs";
/* empty css                  */
let e = ({
  children: n,
  className: a = "",
  disabled: t = !1,
  id: c = "",
  isActive: d = !1,
  onClick: l = () => {
  },
  tooltipText: i = ""
}, m) => {
  const p = s("round-icon-cp", a), f = s(
    "round-icon-cp__circle",
    d && "round-icon-cp__circle-active",
    t && "round-icon-cp__circle-disabled"
  );
  return /* @__PURE__ */ r("div", { className: p, ref: m, "data-testid": c, children: /* @__PURE__ */ r(N, { hidden: !i, id: c, template: /* @__PURE__ */ r(R, { text: i }), children: /* @__PURE__ */ r("button", { onClick: l, disabled: t, className: f, children: n }) }) });
};
e = u.memo(_(e));
e.displayName = "RoundedIcon";
e.propTypes = {
  children: o.node.isRequired,
  className: o.string,
  disabled: o.bool,
  id: o.string,
  isActive: o.bool,
  onClick: o.func,
  tooltipText: o.string
};
const y = e;
export {
  y as default
};
//# sourceMappingURL=RoundedIcon.mjs.map
