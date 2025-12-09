import { jsxs as t, jsx as a } from "react/jsx-runtime";
import u from "react";
import { useLocation as b, NavLink as f } from "react-router-dom";
import h from "classnames";
import n from "prop-types";
import N from "../../images/arrow.svg.mjs";
/* empty css                 */
const _ = ({
  externalLink: p = !1,
  icon: s = null,
  index: e = null,
  label: l,
  link: c = "",
  selectedIndex: o = null,
  setSelectedIndex: i,
  ...r
}) => {
  const { pathname: d } = b(), [, , k] = d.split("/").slice(1, 4), v = h(
    "nav-link__button btn nav-link__parent",
    r.screens && r.screens.includes(k) && "active",
    e === o && "expanded"
  ), m = () => {
    i && i(e !== o ? e : null);
  };
  return p ? /* @__PURE__ */ t("a", { href: c, target: "_top", className: "nav-link__button btn", children: [
    /* @__PURE__ */ a("span", { className: "nav-link__icon", children: s }),
    /* @__PURE__ */ a("span", { className: "nav-link__label", children: l })
  ] }) : r.nestedLinks ? /* @__PURE__ */ t("div", { onClick: m, className: v, children: [
    /* @__PURE__ */ a("span", { className: "nav-link__icon", children: s }),
    /* @__PURE__ */ a("span", { className: "nav-link__label", children: l }),
    /* @__PURE__ */ a("span", { className: "nav-link__arrow", children: /* @__PURE__ */ a(N, {}) })
  ] }) : /* @__PURE__ */ t(
    f,
    {
      to: c,
      onClick: m,
      className: "nav-link__button btn",
      activeclassname: "active",
      children: [
        /* @__PURE__ */ a("span", { className: "nav-link__icon", children: s }),
        /* @__PURE__ */ a("span", { className: "nav-link__label", children: l })
      ]
    }
  );
};
_.propTypes = {
  externalLink: n.bool,
  icon: n.object,
  id: n.string,
  index: n.number,
  label: n.string.isRequired,
  link: n.string,
  nestedLinks: n.array,
  screens: n.array,
  selectedIndex: n.number,
  setSelectedIndex: n.func
};
const R = u.memo(_);
export {
  R as default
};
//# sourceMappingURL=NavbarLink.mjs.map
