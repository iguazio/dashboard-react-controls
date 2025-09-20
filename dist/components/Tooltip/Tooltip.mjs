import { jsxs as G, Fragment as J, jsx as p } from "react/jsx-runtime";
import K, { useState as X, useRef as j, useCallback as k, useEffect as m } from "react";
import { createPortal as Q } from "react-dom";
import s from "prop-types";
import { CSSTransition as U } from "react-transition-group";
import M from "classnames";
import { debounce as Y } from "lodash";
import { isEveryObjectValueEmpty as Z } from "../../utils/common.util.mjs";
/* empty css              */
let v = ({
  children: N = "",
  className: $ = "",
  tooltipBodyClassName: z = "",
  hidden: a = !1,
  id: l = "",
  renderChildAsHtml: I = !1,
  template: q,
  textShow: T = !1
}) => {
  const [i, u] = X(!1), [f, h] = X({}), y = M("data-ellipsis", "tooltip-wrapper", $), A = M("tooltip", z), F = 200, t = j(), r = j(), o = 10, g = () => {
    u(!1);
  }, n = k(
    (e) => {
      (!r.current || a || r.current && !r.current.contains(e.relatedTarget) && t.current && !t.current.contains(e.relatedTarget)) && u(!1);
    },
    [a]
  ), c = k(
    (e) => {
      var L, C, _, x;
      if (!i) {
        const [d] = t.current.childNodes;
        let S = !a && (T ? !0 : d ? d.nodeType !== Node.TEXT_NODE && ((C = (L = d.childNodes) == null ? void 0 : L[0]) == null ? void 0 : C.nodeType) !== Node.TEXT_NODE || /*
          If the child node is a text node and the text of the child node inside the container is greater than the width of the container, then show tooltip.
        */
        (d.nodeType === Node.TEXT_NODE || ((x = (_ = d.childNodes) == null ? void 0 : _[0]) == null ? void 0 : x.nodeType) === Node.TEXT_NODE) && t.current.scrollWidth > t.current.offsetWidth : !1);
        u(S), setTimeout(() => {
          var b, O;
          if (S) {
            let { height: E, top: R, bottom: V } = ((b = t == null ? void 0 : t.current) == null ? void 0 : b.getBoundingClientRect()) ?? {};
            const { height: W, width: B } = ((O = r.current) == null ? void 0 : O.getBoundingClientRect()) ?? {
              height: 0,
              width: 0
            }, D = e.x - (e.x + B - window.innerWidth + o), H = e.x + B + o > window.innerWidth ? D > o ? D : o : e.x + o;
            if (R + E + o + W >= window.innerHeight) {
              const P = V - E - o - W;
              h({
                top: P > 0 ? P : o,
                left: H
              });
            } else
              h({
                top: R + E + o,
                left: H
              });
          }
        }, 0);
      }
    },
    [a, T, i]
  ), w = Y(() => {
    Z(f) || h({});
  }, 100);
  return m(() => {
    const e = t.current;
    if (e)
      return e.addEventListener("mouseenter", c), e.addEventListener("mouseleave", n), () => {
        e.removeEventListener("mouseenter", c), e.removeEventListener("mouseleave", n);
      };
  }, [t, c, n]), m(() => {
    const e = r.current;
    if (e && i)
      return e.addEventListener("mouseleave", n), () => {
        e.removeEventListener("mouseleave", n);
      };
  }, [r, c, n, i]), m(() => (i && window.addEventListener("scroll", g, !0), () => window.removeEventListener("scroll", g, !0)), [i]), m(() => (window.addEventListener("resize", w), () => {
    window.removeEventListener("resize", w);
  }), [w, f]), /* @__PURE__ */ G(J, { children: [
    I ? /* @__PURE__ */ p(
      "div",
      {
        "data-testid": l ? `${l}-tooltip-wrapper` : "tooltip-wrapper",
        ref: t,
        className: y,
        dangerouslySetInnerHTML: { __html: N },
        onClick: n
      }
    ) : /* @__PURE__ */ p(
      "div",
      {
        "data-testid": l ? `${l}-tooltip-wrapper` : "tooltip-wrapper",
        ref: t,
        className: y,
        onClick: n,
        children: N
      }
    ),
    !a && Q(
      /* @__PURE__ */ p(
        U,
        {
          nodeRef: r,
          classNames: "fade",
          in: i,
          timeout: F,
          unmountOnExit: !0,
          children: /* @__PURE__ */ p(
            "div",
            {
              "data-testid": l ? `${l}-tooltip` : "tooltip",
              ref: r,
              style: {
                ...f
              },
              className: A,
              children: q
            }
          )
        }
      ),
      document.getElementById("overlay_container")
    )
  ] });
};
v.propTypes = {
  children: s.any,
  className: s.string,
  tooltipBodyClassName: s.string,
  hidden: s.bool,
  id: s.string,
  renderChildAsHtml: s.bool,
  template: s.element.isRequired,
  textShow: s.bool
};
v = K.memo(v);
export {
  v as default
};
//# sourceMappingURL=Tooltip.mjs.map
