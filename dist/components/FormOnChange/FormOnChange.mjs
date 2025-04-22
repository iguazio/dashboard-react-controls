import { jsx as t } from "react/jsx-runtime";
import { useState as n, useEffect as p } from "react";
import { Field as a } from "react-final-form";
import s from "prop-types";
const u = ({ inputValue: e, handler: o }) => {
  const [r, i] = n(e);
  return p(() => {
    e !== r && (i(e), o(e, r));
  }, [o, e, r]), null;
};
u.propTypes = {
  inputValue: s.any.isRequired,
  handler: s.func.isRequired
};
const l = ({ handler: e, name: o }) => /* @__PURE__ */ t(
  a,
  {
    name: o,
    subscription: {
      value: !0
    },
    allowNull: !0,
    render: ({ input: r }) => /* @__PURE__ */ t(u, { inputValue: r.value, handler: e })
  }
);
l.propTypes = {
  handler: s.func.isRequired,
  name: s.string.isRequired
};
export {
  l as default
};
//# sourceMappingURL=FormOnChange.mjs.map
