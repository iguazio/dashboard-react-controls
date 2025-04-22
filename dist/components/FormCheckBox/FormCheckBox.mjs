import { jsx as t, jsxs as m } from "react/jsx-runtime";
import x, { useRef as u } from "react";
import e from "prop-types";
import { Field as p } from "react-final-form";
import s from "classnames";
/* empty css                   */
let c = ({
  children: d = null,
  className: i = "",
  highlightLabel: h = !1,
  label: a = "",
  name: l,
  readOnly: f = !1,
  ...o
}) => {
  const n = s(
    "form-field-checkbox",
    f && "form-field-checkbox_readonly",
    i
  ), k = s(h && "highlighted"), b = u(null);
  return /* @__PURE__ */ t(p, { name: l, value: o.value, type: "checkbox", children: ({ input: r }) => /* @__PURE__ */ m("div", { className: n, "data-testid": "form-field-checkbox", children: [
    /* @__PURE__ */ t(
      "input",
      {
        ref: b,
        className: s(r.checked ? "checked" : "unchecked"),
        type: "checkbox",
        "data-testid": l ? `${l}-form-checkbox` : "form-checkbox",
        id: o.value ?? l,
        ...r,
        ...o,
        value: String(r.checked)
      }
    ),
    /* @__PURE__ */ m("label", { htmlFor: o.value ?? l, className: k, children: [
      a || "",
      d
    ] })
  ] }) });
};
c.propTypes = {
  children: e.node,
  className: e.string,
  highlightLabel: e.bool,
  label: e.oneOfType([e.string, e.element]),
  name: e.string.isRequired,
  readOnly: e.bool
};
c = x.memo(c);
const R = c;
export {
  R as default
};
//# sourceMappingURL=FormCheckBox.mjs.map
