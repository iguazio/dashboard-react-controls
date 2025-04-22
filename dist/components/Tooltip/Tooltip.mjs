import { jsxs as A, Fragment as F, jsx as p } from "react/jsx-runtime";
import V, { useState as j, useRef as k, useCallback as B, useEffect as m } from "react";
import { createPortal as G } from "react-dom";
import i from "prop-types";
import { CSSTransition as J } from "react-transition-group";
import K from "classnames";
import { debounce as Q } from "lodash";
import { isEveryObjectValueEmpty as U } from "../../utils/common.util.mjs";
/* empty css              */
let v = ({
  children: T = "",
  className: M = "",
  hidden: a = !1,
  id: l = "",
  renderChildAsHtml: $ = !1,
  template: z,
  textShow: N = !1
}) => {
  const [s, u] = j(!1), [f, h] = j({}), g = K("data-ellipsis", "tooltip-wrapper", M), I = 200, t = k(), r = k(), o = 10, y = () => {
    u(!1);
  }, n = B(
    (e) => {
      (!r.current || a || r.current && !r.current.contains(e.relatedTarget) && t.current && !t.current.contains(e.relatedTarget)) && u(!1);
    },
    [a]
  ), c = B(
    (e) => {
      var L, _, x, C;
      if (!s) {
        const [d] = t.current.childNodes;
        let S = !a && (N ? !0 : d ? d.nodeType !== Node.TEXT_NODE && ((_ = (L = d.childNodes) == null ? void 0 : L[0]) == null ? void 0 : _.nodeType) !== Node.TEXT_NODE || /*
          If the child node is a text node and the text of the child node inside the container is greater than the width of the container, then show tooltip.
        */
        (d.nodeType === Node.TEXT_NODE || ((C = (x = d.childNodes) == null ? void 0 : x[0]) == null ? void 0 : C.nodeType) === Node.TEXT_NODE) && t.current.scrollWidth > t.current.offsetWidth : !1);
        u(S), setTimeout(() => {
          var b, O;
          if (S) {
            let { height: E, top: R, bottom: q } = ((b = t == null ? void 0 : t.current) == null ? void 0 : b.getBoundingClientRect()) ?? {};
            const { height: W, width: D } = ((O = r.current) == null ? void 0 : O.getBoundingClientRect()) ?? {
              height: 0,
              width: 0
            }, H = e.x - (e.x + D - window.innerWidth + o), P = e.x + D + o > window.innerWidth ? H > o ? H : o : e.x + o;
            if (R + E + o + W >= window.innerHeight) {
              const X = q - E - o - W;
              h({
                top: X > 0 ? X : o,
                left: P
              });
            } else
              h({
                top: R + E + o,
                left: P
              });
          }
        }, 0);
      }
    },
    [a, N, s]
  ), w = Q(() => {
    U(f) || h({});
  }, 100);
  return m(() => {
    const e = t.current;
    if (e)
      return e.addEventListener("mouseenter", c), e.addEventListener("mouseleave", n), () => {
        e.removeEventListener("mouseenter", c), e.removeEventListener("mouseleave", n);
      };
  }, [t, c, n]), m(() => {
    const e = r.current;
    if (e && s)
      return e.addEventListener("mouseleave", n), () => {
        e.removeEventListener("mouseleave", n);
      };
  }, [r, c, n, s]), m(() => (s && window.addEventListener("scroll", y, !0), () => window.removeEventListener("scroll", y, !0)), [s]), m(() => (window.addEventListener("resize", w), () => {
    window.removeEventListener("resize", w);
  }), [w, f]), /* @__PURE__ */ A(F, { children: [
    $ ? /* @__PURE__ */ p(
      "div",
      {
        "data-testid": l ? `${l}-tooltip-wrapper` : "tooltip-wrapper",
        ref: t,
        className: g,
        dangerouslySetInnerHTML: { __html: T },
        onClick: n
      }
    ) : /* @__PURE__ */ p(
      "div",
      {
        "data-testid": l ? `${l}-tooltip-wrapper` : "tooltip-wrapper",
        ref: t,
        className: g,
        onClick: n,
        children: T
      }
    ),
    !a && G(
      /* @__PURE__ */ p(
        J,
        {
          nodeRef: r,
          classNames: "fade",
          in: s,
          timeout: I,
          unmountOnExit: !0,
          children: /* @__PURE__ */ p(
            "div",
            {
              "data-testid": l ? `${l}-tooltip` : "tooltip",
              ref: r,
              style: {
                ...f
              },
              className: "tooltip",
              children: z
            }
          )
        }
      ),
      document.getElementById("overlay_container")
    )
  ] });
};
v.propTypes = {
  children: i.any,
  className: i.string,
  hidden: i.bool,
  id: i.string,
  renderChildAsHtml: i.bool,
  template: i.element.isRequired,
  textShow: i.bool
};
v = V.memo(v);
export {
  v as default
};
//# sourceMappingURL=Tooltip.mjs.map
