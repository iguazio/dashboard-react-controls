import { jsx as a } from "react/jsx-runtime";
import d from "react";
import m from "classnames";
import o from "prop-types";
/* empty css             */
const e = ({ secondary: r = !1, section: s = !1, small: l = !1 }) => {
  const t = m(
    "loader-wrapper",
    s && "section-loader",
    l && "small-loader",
    r && "secondary-loader"
  );
  return /* @__PURE__ */ a("div", { className: t, "data-testid": "loader", children: /* @__PURE__ */ a("div", { className: "loader" }) });
};
e.propTypes = {
  secondary: o.bool,
  section: o.bool,
  small: o.bool
};
const y = d.memo(e);
export {
  y as default
};
//# sourceMappingURL=Loader.mjs.map
