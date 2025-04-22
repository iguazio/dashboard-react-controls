import { jsxs as n, Fragment as c, jsx as e } from "react/jsx-runtime";
import { forwardRef as u } from "react";
import o from "prop-types";
import b from "../../images/plus.svg.mjs";
let r = ({
  disabled: s = !1,
  fields: d,
  fieldsPath: t,
  hidden: a = !1,
  id: i = "",
  label: l = "Add new item",
  onClick: m
}, f) => /* @__PURE__ */ n(c, { children: [
  !a && /* @__PURE__ */ e("div", { className: "form-table__row form-table__action-row no-hover", children: /* @__PURE__ */ n(
    "button",
    {
      "data-testid": i || `${t}-add-btn`,
      onClick: (p) => m(p, d, t),
      disabled: s,
      children: [
        /* @__PURE__ */ e(b, {}),
        l
      ]
    }
  ) }),
  /* @__PURE__ */ e("span", { ref: f })
] });
r = u(r);
r.displayName = "FormActionButton";
r.propTypes = {
  disabled: o.bool,
  fields: o.shape({}).isRequired,
  fieldsPath: o.string.isRequired,
  hidden: o.bool,
  id: o.string,
  label: o.string,
  onClick: o.func.isRequired
};
const F = r;
export {
  F as default
};
//# sourceMappingURL=FormActionButton.mjs.map
