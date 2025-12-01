import { jsxs as g, jsx as s } from "react/jsx-runtime";
import { useState as S, useRef as y, useCallback as z, useEffect as w } from "react";
import { useLocation as M, useParams as U, Link as X } from "react-router-dom";
import W from "prop-types";
import k from "classnames";
import H from "../Tip/Tip.mjs";
import { SLIDER_TABS as G } from "../../types.mjs";
import { generateUrlFromRouterPath as J } from "../../utils/common.util.mjs";
import T from "../../images/arrow.svg.mjs";
const K = ({
  fontSize: P = "sm",
  initialTab: q = "",
  isDetailsPopUp: C = !1,
  onClick: L = () => {
  },
  skipLink: D = !1,
  tabsList: v
}) => {
  const [d, $] = S(q), [x, O] = S(!0), [f, a] = S(0), [A, l] = S(!1), i = y(), n = y(), j = M(), b = U(), m = 2, I = 1.5, B = k(
    "tabs-slider__arrow",
    "tabs-slider__arrow_left",
    x && "tabs-slider__arrow_hidden",
    f === 0 && "tabs-slider__arrow_disabled"
  ), F = k(
    "tabs-slider__arrow",
    "tabs-slider__arrow_right",
    x && "tabs-slider__arrow_hidden",
    A && "tabs-slider__arrow_disabled"
  ), R = (e) => {
    var r, o, c, _, p, N;
    let t;
    e ? ((r = n.current) == null ? void 0 : r.scrollWidth) < ((o = i.current) == null ? void 0 : o.offsetWidth) * I + f ? (t = ((c = n.current) == null ? void 0 : c.scrollWidth) - ((_ = i.current) == null ? void 0 : _.offsetWidth), l(!0)) : t = f + ((p = i.current) == null ? void 0 : p.offsetWidth) / m : (t = Math.max(
      0,
      f - ((N = i.current) == null ? void 0 : N.offsetWidth) / m
    ), l(!1)), a(t);
  }, u = z(() => {
    var t, r, o, c;
    const e = ((t = n.current) == null ? void 0 : t.offsetWidth) === ((r = n.current) == null ? void 0 : r.scrollWidth);
    O(e), A && a(((o = n.current) == null ? void 0 : o.scrollWidth) - ((c = i.current) == null ? void 0 : c.offsetWidth)), e && (a(0), l(!1));
  }, [A, n, i]), h = z(() => {
    var r, o, c, _, p;
    const e = document.querySelector(`[data-tab='${d}']`), t = (e == null ? void 0 : e.offsetLeft) - ((r = i.current) == null ? void 0 : r.offsetWidth) / m + (e == null ? void 0 : e.offsetWidth) / m;
    t <= 0 ? (a(0), l(!1)) : ((o = n.current) == null ? void 0 : o.scrollWidth) < ((c = i.current) == null ? void 0 : c.offsetWidth) / m + (e == null ? void 0 : e.offsetLeft) + (e == null ? void 0 : e.offsetWidth) ? (a(((_ = n.current) == null ? void 0 : _.scrollWidth) - ((p = i.current) == null ? void 0 : p.offsetWidth)), l(!0)) : (a(t), l(!1));
  }, [d]), E = (e) => {
    $(e), L && L(e);
  };
  return w(() => (window.addEventListener("resize", u), () => window.removeEventListener("resize", u)), [u]), w(() => (window.addEventListener("resize", h), () => window.removeEventListener("resize", h)), [h]), w(() => {
    u();
  }, [v, u]), w(() => {
    h();
  }, [h]), w(() => {
    var e;
    b.tab && b.tab !== d && !C && $((e = v.find((t) => t.id === b.tab)) == null ? void 0 : e.id);
  }, [C, b.tab, d, v]), /* @__PURE__ */ g("div", { className: "content-menu", children: [
    /* @__PURE__ */ s(
      "div",
      {
        className: B,
        onClick: () => {
          R(!1);
        },
        children: /* @__PURE__ */ s(T, {})
      }
    ),
    /* @__PURE__ */ s("div", { className: "content-menu__tabs-wrapper", ref: i, children: /* @__PURE__ */ s(
      "div",
      {
        ref: n,
        className: "content-menu__tabs",
        style: {
          transform: `translateX(${-f}px)`
        },
        children: v.map((e) => {
          var r;
          const t = k(
            "content-menu__tab",
            `content-menu__tab-${P}`,
            d === e.id && "content-menu__tab_active"
          );
          return !e.hidden && (D ? /* @__PURE__ */ g(
            "div",
            {
              className: t,
              "data-tab": e.id,
              onClick: () => E(e.id),
              children: [
                e.icon && /* @__PURE__ */ s("div", { className: "content-menu_tab-icon", children: e.icon }),
                e.label,
                e.tip && /* @__PURE__ */ s(H, { className: "content-menu__tab-tip", text: e.tip })
              ]
            },
            e.id
          ) : /* @__PURE__ */ s(
            X,
            {
              to: J(
                `${(r = window.location.pathname) == null ? void 0 : r.replace(/^$|([^/]+$)/, e.id)}${j.search ?? ""}${e.query ?? ""}`
              ),
              className: t,
              children: /* @__PURE__ */ g(
                "span",
                {
                  className: e.icon && "content-menu__tab-icon" || e.tip && "content-menu__tab-tip",
                  "data-tab": e.id,
                  onClick: () => E(e),
                  children: [
                    e.icon && /* @__PURE__ */ s("div", { children: e.icon }),
                    e.label,
                    e.tip && /* @__PURE__ */ s(H, { text: e.tip })
                  ]
                }
              )
            },
            e.id
          ));
        })
      }
    ) }),
    /* @__PURE__ */ s("div", { className: F, onClick: () => R(!0), children: /* @__PURE__ */ s(T, {}) })
  ] });
};
K.propTypes = {
  fontSize: W.oneOf(["sm", "md", "lg"]),
  initialTab: W.string,
  isDetailsPopUp: W.bool,
  onClick: W.func,
  skipLink: W.bool,
  tabsList: G.isRequired
};
export {
  K as default
};
//# sourceMappingURL=TabsSlider.mjs.map
