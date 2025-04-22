import { jsx as i } from "react/jsx-runtime";
import { forwardRef as f } from "react";
import n from "prop-types";
import { useField as h, Field as m } from "react-final-form";
let e = ({ name: t, onChange: u, onFocus: r, ...s }, a) => {
  const { input: p } = h(t), d = (o) => {
    p.onChange(o), u(o);
  }, c = (o) => {
    p.onFocus(o), r(o);
  };
  return /* @__PURE__ */ i(m, { name: t, children: ({ input: o }) => /* @__PURE__ */ i(
    "input",
    {
      autoComplete: "off",
      "data-testid": "input",
      ref: a,
      type: "text",
      ...s,
      ...o,
      onChange: d,
      onFocus: c
    }
  ) });
};
e = f(e);
e.displayName = "NewChipInput";
e.propTypes = {
  name: n.string.isRequired,
  onChange: n.func.isRequired,
  onFocus: n.func.isRequired
};
const I = e;
export {
  I as default
};
//# sourceMappingURL=NewChipInput.mjs.map
