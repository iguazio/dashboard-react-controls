import { jsxs as v, jsx as a } from "react/jsx-runtime";
import b, { useState as f, useRef as u, useEffect as N } from "react";
import e from "prop-types";
import y from "classnames";
import _ from "../Tooltip/Tooltip.mjs";
import T from "../TooltipTemplate/TextTooltipTemplate.mjs";
import { NAVBAR_WIDTH_OPENED as h } from "../../constants.mjs";
import "../../utils/index.mjs";
import S from "../../images/navbar/navbar-closed-icon.svg.mjs";
import g from "../../images/navbar/navbar-opened-icon.svg.mjs";
/* empty css             */
import { getStorageValue as x, setStorageValue as P } from "../../utils/localStorageService.util.mjs";
const i = ({ children: t, id: s = "navbar", setNavbarIsPinned: n }) => {
  const [r, d] = f(
    x("isNavbarStatic", !1) === "true"
  ), l = u(null), m = y("navbar", r && "navbar_pinned"), p = {
    maxWidth: r && h
  }, c = () => {
    d((o) => (P("isNavbarStatic", !o), !o));
  };
  return N(() => {
    n(r);
  }, [r, n]), /* @__PURE__ */ v("nav", { className: m, "data-testid": s, style: p, ref: l, children: [
    /* @__PURE__ */ a("div", { className: "navbar__pin-icon", children: /* @__PURE__ */ a("div", { id: "navbar-pin", onClick: c, children: /* @__PURE__ */ a(_, { template: /* @__PURE__ */ a(T, { text: `${r ? "Unpin" : "Pin"} Menu` }), children: r ? /* @__PURE__ */ a(g, {}) : /* @__PURE__ */ a(S, {}) }) }) }),
    b.cloneElement(t, { navbarIsPinned: r })
  ] });
};
i.Body = ({ children: t }) => /* @__PURE__ */ a("div", { className: "navbar__body", "data-testid": "navbar-body", children: t });
i.Body.displayName = "Navbar.Body";
i.Divider = () => /* @__PURE__ */ a("div", { className: "navbar__divider" });
i.Divider.displayName = "Navbar.Divider";
i.Body.propTypes = {
  children: e.node.isRequired
};
i.propTypes = {
  children: e.oneOfType([
    e.element,
    e.object,
    e.node,
    e.string
  ]).isRequired,
  id: e.string,
  setNavbarIsPinned: e.func
};
export {
  i as default
};
//# sourceMappingURL=Navbar.mjs.map
