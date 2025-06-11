import { jsx as p } from "react/jsx-runtime";
import i from "react";
import t from "prop-types";
import d from "classnames";
import { TERTIARY_BUTTON as a, PRIMARY_BUTTON as f, SECONDARY_BUTTON as T } from "../../constants.mjs";
/* empty css                 */
let o = ({ className: e = "", label: r = "Load button", variant: n = a, ...s }, m) => {
  const l = d("btn-load", `btn-load-${n}`, e);
  return /* @__PURE__ */ p("button", { ref: m, ...s, className: l, children: r });
};
o = i.forwardRef(o);
o.displayName = "LoadButton";
o.propTypes = {
  className: t.string,
  label: t.oneOfType([t.string, t.element]),
  variant: t.oneOf([f, T, a]).isRequired
};
const O = o;
export {
  O as default
};
//# sourceMappingURL=LoadButton.mjs.map
