import { jsx as e } from "react/jsx-runtime";
import { useRef as i } from "react";
import t from "prop-types";
import l from "classnames";
/* empty css                          */
const m = ({ text: o = "", warning: r = !1 }) => {
  const p = i(), s = l(
    "tooltip-template",
    "tooltip__text",
    r && "tooltip__warning"
  );
  return /* @__PURE__ */ e("div", { className: s, children: /* @__PURE__ */ e("span", { ref: p, children: o }) });
};
m.propTypes = {
  text: t.oneOfType([t.string, t.element, t.number]),
  warning: t.bool
};
export {
  m as default
};
//# sourceMappingURL=TextTooltipTemplate.mjs.map
