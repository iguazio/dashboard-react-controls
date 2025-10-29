import { jsxs as z, jsx as i } from "react/jsx-runtime";
import { useState as S, useRef as H, useCallback as g, useEffect as w } from "react";
import { useLocation as M, useParams as U, Link as X } from "react-router-dom";
import W from "prop-types";
import C from "classnames";
import G from "../Tip/Tip.mjs";
import { SLIDER_TABS as J } from "../../types.mjs";
import { generateUrlFromRouterPath as K } from "../../utils/common.util.mjs";
import N from "../../images/arrow.svg.mjs";
const Q = ({
  fontSize: P = "sm",
  initialTab: q = "",
  isDetailsPopUp: k = !1,
  onClick: L = () => {
  },
  skipLink: D = !1,
  tabsList: b
}) => {
  const [d, $] = S(q), [R, O] = S(!0), [f, c] = S(0), [A, l] = S(!1), s = H(), n = H(), j = M(), v = U(), m = 2, I = 1.5, B = C(
    "tabs-slider__arrow",
    "tabs-slider__arrow_left",
    R && "tabs-slider__arrow_hidden",
    f === 0 && "tabs-slider__arrow_disabled"
  ), F = C(
    "tabs-slider__arrow",
    "tabs-slider__arrow_right",
    R && "tabs-slider__arrow_hidden",
    A && "tabs-slider__arrow_disabled"
  ), x = (e) => {
    var r, o, a, _, p, y;
    let t;
    e ? ((r = n.current) == null ? void 0 : r.scrollWidth) < ((o = s.current) == null ? void 0 : o.offsetWidth) * I + f ? (t = ((a = n.current) == null ? void 0 : a.scrollWidth) - ((_ = s.current) == null ? void 0 : _.offsetWidth), l(!0)) : t = f + ((p = s.current) == null ? void 0 : p.offsetWidth) / m : (t = Math.max(
      0,
      f - ((y = s.current) == null ? void 0 : y.offsetWidth) / m
    ), l(!1)), c(t);
  }, u = g(() => {
    var t, r, o, a;
    const e = ((t = n.current) == null ? void 0 : t.offsetWidth) === ((r = n.current) == null ? void 0 : r.scrollWidth);
    O(e), A && c(((o = n.current) == null ? void 0 : o.scrollWidth) - ((a = s.current) == null ? void 0 : a.offsetWidth)), e && (c(0), l(!1));
  }, [A, n, s]), h = g(() => {
    var r, o, a, _, p;
    const e = document.querySelector(`[data-tab='${d}']`), t = (e == null ? void 0 : e.offsetLeft) - ((r = s.current) == null ? void 0 : r.offsetWidth) / m + (e == null ? void 0 : e.offsetWidth) / m;
    t <= 0 ? (c(0), l(!1)) : ((o = n.current) == null ? void 0 : o.scrollWidth) < ((a = s.current) == null ? void 0 : a.offsetWidth) / m + (e == null ? void 0 : e.offsetLeft) + (e == null ? void 0 : e.offsetWidth) ? (c(((_ = n.current) == null ? void 0 : _.scrollWidth) - ((p = s.current) == null ? void 0 : p.offsetWidth)), l(!0)) : (c(t), l(!1));
  }, [d]), E = (e) => {
    $(e), L && L(e);
  };
  w(() => (window.addEventListener("resize", u), () => window.removeEventListener("resize", u)), [u]), w(() => (window.addEventListener("resize", h), () => window.removeEventListener("resize", h)), [h]), w(() => {
    u();
  }, [b, u]), w(() => {
    h();
  }, [h]), w(() => {
    var e;
    v.tab && v.tab !== d && !k && $((e = b.find((t) => t.id === v.tab)) == null ? void 0 : e.id);
  }, [k, v.tab, d, b]);
  const T = g((e) => /* @__PURE__ */ z(
    "span",
    {
      className: e.icon && "content-menu__tab-icon" || e.tip && "content-menu__tab-tip",
      children: [
        e.icon && /* @__PURE__ */ i("div", { children: e.icon }),
        e.label,
        e.tip && /* @__PURE__ */ i(G, { text: e.tip })
      ]
    }
  ), []);
  return /* @__PURE__ */ z("div", { className: "content-menu", children: [
    /* @__PURE__ */ i(
      "div",
      {
        className: B,
        onClick: () => {
          x(!1);
        },
        children: /* @__PURE__ */ i(N, {})
      }
    ),
    /* @__PURE__ */ i("div", { className: "content-menu__tabs-wrapper", ref: s, children: /* @__PURE__ */ i(
      "div",
      {
        ref: n,
        className: "content-menu__tabs",
        style: {
          transform: `translateX(${-f}px)`
        },
        children: b.map((e) => {
          var r;
          const t = C(
            "content-menu__tab",
            `content-menu__tab-${P}`,
            d === e.id && "content-menu__tab_active"
          );
          return !e.hidden && (D ? /* @__PURE__ */ i(
            "div",
            {
              className: t,
              "data-tab": e.id,
              onClick: () => E(e.id),
              children: T(e)
            },
            e.id
          ) : /* @__PURE__ */ i(
            X,
            {
              to: K(
                `${(r = window.location.pathname) == null ? void 0 : r.replace(/^$|([^/]+$)/, e.id)}${j.search ?? ""}${e.query ?? ""}`
              ),
              className: t,
              "data-tab": e.id,
              onClick: () => E(e.id),
              children: T(e)
            },
            e.id
          ));
        })
      }
    ) }),
    /* @__PURE__ */ i("div", { className: F, onClick: () => x(!0), children: /* @__PURE__ */ i(N, {}) })
  ] });
};
Q.propTypes = {
  fontSize: W.oneOf(["sm", "md", "lg"]),
  initialTab: W.string,
  isDetailsPopUp: W.bool,
  onClick: W.func,
  skipLink: W.bool,
  tabsList: J.isRequired
};
export {
  Q as default
};
//# sourceMappingURL=TabsSlider.mjs.map
