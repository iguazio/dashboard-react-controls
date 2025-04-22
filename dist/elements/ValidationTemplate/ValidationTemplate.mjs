import { jsxs as e, jsx as i } from "react/jsx-runtime";
import "react";
import a from "prop-types";
import n from "classnames";
import l from "../../images/success_done.svg.mjs";
import r from "../../images/close.svg.mjs";
/* empty css                         */
const m = ({ valid: o, validationMessage: s }) => {
  const t = n("validation-option", o && "text-muted");
  return /* @__PURE__ */ e("li", { className: t, children: [
    /* @__PURE__ */ i("i", { className: "validation-option__icon", children: o ? /* @__PURE__ */ i(l, { className: "validation-option__icon_valid" }) : /* @__PURE__ */ i(r, { className: "validation-option__icon_invalid" }) }),
    /* @__PURE__ */ i("span", { children: s })
  ] });
};
m.propTypes = {
  valid: a.bool.isRequired,
  validationMessage: a.string.isRequired
};
export {
  m as default
};
//# sourceMappingURL=ValidationTemplate.mjs.map
