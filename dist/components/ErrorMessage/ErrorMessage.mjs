import { jsxs as o, jsx as r } from "react/jsx-runtime";
import "react";
import s from "prop-types";
import i from "../Tooltip/Tooltip.mjs";
import m from "../TooltipTemplate/TextTooltipTemplate.mjs";
import a from "../../images/unsuccess_alert.svg.mjs";
import l from "../../images/close.svg.mjs";
/* empty css                   */
const p = ({ closeError: e = null, message: t }) => /* @__PURE__ */ o("div", { "data-testid": "error-message", className: "error", children: [
  /* @__PURE__ */ o("div", { className: "error__data", children: [
    /* @__PURE__ */ r("div", { children: /* @__PURE__ */ r(a, { className: "error__icon" }) }),
    /* @__PURE__ */ r("div", { className: "error__message", children: t })
  ] }),
  e && /* @__PURE__ */ r("button", { "data-testid": "close", onClick: e, children: /* @__PURE__ */ r(i, { template: /* @__PURE__ */ r(m, { text: "Close" }), children: /* @__PURE__ */ r(l, {}) }) })
] });
p.propTypes = {
  closeError: s.func,
  message: s.string.isRequired
};
export {
  p as default
};
//# sourceMappingURL=ErrorMessage.mjs.map
