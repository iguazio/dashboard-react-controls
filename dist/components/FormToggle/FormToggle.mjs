import { jsx as r, jsxs as d } from "react/jsx-runtime";
import "react";
import g from "classnames";
import o from "prop-types";
import { Field as p } from "react-final-form";
import { DENSITY as c } from "../../types.mjs";
/* empty css                 */
const n = ({ density: l = "", label: t = "", name: e, onChange: i = () => {
}, ...s }) => {
  const f = g(
    "form-field__wrapper",
    l && `form-field__wrapper-${l}`
  );
  return /* @__PURE__ */ r(p, { name: e, value: s.value, type: "checkbox", children: ({ input: a }) => /* @__PURE__ */ d(
    "label",
    {
      className: "form-field-toggle",
      "data-testid": e ? `${e}-form-field-toggle` : "form-field-toggle",
      children: [
        t && /* @__PURE__ */ r("div", { className: "form-field__label", children: t }),
        /* @__PURE__ */ r(
          "input",
          {
            "data-testid": e ? `${e}-form-toggle` : "form-toggle",
            id: e,
            ...a,
            ...s,
            onChange: (m) => {
              i && i(m), a.onChange(m);
            },
            type: "checkbox"
          }
        ),
        /* @__PURE__ */ r("div", { className: f, children: /* @__PURE__ */ r("span", { className: "form-field-toggle__switch" }) })
      ]
    }
  ) });
};
n.propTypes = {
  density: c,
  label: o.string,
  name: o.string.isRequired,
  onChange: o.func
};
export {
  n as default
};
//# sourceMappingURL=FormToggle.mjs.map
