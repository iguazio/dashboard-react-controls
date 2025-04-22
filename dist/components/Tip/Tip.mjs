import { jsxs as I, jsx as s } from "react/jsx-runtime";
import { useState as x, useMemo as f, useRef as _, useCallback as M, useEffect as E } from "react";
import i from "prop-types";
import { CSSTransition as O } from "react-transition-group";
import L from "classnames";
import { createPortal as $ } from "react-dom";
import { getScssVariableValue as d } from "../../utils/common.util.mjs";
import k from "../../images/question-mark.svg.mjs";
import A from "../../images/exclamation-mark.svg.mjs";
/* empty css          */
const B = ({ className: y = "", text: u, withExclamationMark: C = !1 }) => {
  const [n, h] = x(!1), [N, R] = x("tip_top tip_left"), e = f(() => parseInt(d("--tipArrowLength")), []), r = f(() => parseInt(d("--tipArrowOffset")), []), c = f(() => parseInt(d("--tipIconLength")), []), S = 40, a = _(), o = _(), T = L(y, "tip-container"), b = L(
    "tip",
    N,
    u.length <= S ? "tip_small" : "tip_big"
  ), l = M(() => {
    h(!0);
  }, []);
  E(() => {
    if (n) {
      const t = a.current.getBoundingClientRect(), p = o.current.getBoundingClientRect(), v = t.left > p.width - r ? "tip_left" : "tip_right", w = t.top > p.height + e ? "tip_top" : "tip_bottom";
      if (R(`${w} ${v}`), v === "tip_left") {
        const m = r + (c + e) / 2;
        o.current.style.left = `${t.left - (p.width - m)}px`;
      } else {
        const m = r - (c - e) / 2;
        o.current.style.left = `${t.left - m}px`;
      }
      o.current.style.top = w === "tip_top" ? `${t.top - p.height - e}px` : `${t.bottom + e}px`;
    }
  }, [e, r, c, n]);
  const g = () => {
    h(!1);
  };
  return E(() => {
    const t = a.current;
    if (a.current)
      return t.addEventListener("mouseenter", l), t.addEventListener("mouseleave", g), () => {
        t.removeEventListener("mouseenter", l), t.removeEventListener("mouseleave", g);
      };
  }, [l, n]), /* @__PURE__ */ I("div", { "data-testid": "tip", className: T, children: [
    /* @__PURE__ */ s("div", { ref: a, className: "tip-wrapper", children: C ? /* @__PURE__ */ s(A, { "data-testid": "tip-icon" }) : /* @__PURE__ */ s(k, { "data-testid": "tip-icon" }) }),
    $(
      /* @__PURE__ */ s(
        O,
        {
          nodeRef: o,
          in: n,
          timeout: 200,
          classNames: "fade",
          unmountOnExit: !0,
          children: /* @__PURE__ */ s("div", { ref: o, "data-testid": "tip-text", className: b, children: u })
        }
      ),
      document.getElementById("overlay_container")
    )
  ] });
};
B.propTypes = {
  className: i.string,
  text: i.oneOfType([i.string, i.element]).isRequired,
  withExclamationMark: i.bool
};
export {
  B as default
};
//# sourceMappingURL=Tip.mjs.map
