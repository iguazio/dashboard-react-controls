import { jsx as p, jsxs as U } from "react/jsx-runtime";
import { useRef as H, useCallback as x, useLayoutEffect as I, useEffect as $, forwardRef as B } from "react";
import l from "prop-types";
import D from "classnames";
import { createPortal as F } from "react-dom";
import { throttle as L } from "lodash";
import j from "../RoundedIcon/RoundedIcon.mjs";
import M from "../Tooltip/Tooltip.mjs";
import k from "../TooltipTemplate/TextTooltipTemplate.mjs";
import { POP_UP_CUSTOM_POSITION as W } from "../../types.mjs";
import q from "../../images/close.svg.mjs";
/* empty css                  */
let m = ({
  children: E,
  className: R = "",
  closePopUp: f = null,
  customPosition: i = {},
  headerIsHidden: T = !1,
  headerText: w = "",
  isOpen: v = !0,
  onResolve: b = null,
  style: u = {},
  tooltipText: y = ""
}, o) => {
  const N = H(null);
  o ?? (o = N);
  const S = D(
    R,
    "pop-up-dialog__overlay",
    i.element && "custom-position"
  ), z = x(() => {
    f && f(), b && b();
  }, [f, b]), h = x(() => {
    var r;
    if ((r = i == null ? void 0 : i.element) != null && r.current && (o != null && o.current)) {
      const e = i.element.current.getBoundingClientRect(), t = o.current.getBoundingClientRect(), [_, O] = i.position.split("-"), n = 15, a = 5, g = e.right >= t.width + n, d = window.innerWidth - e.left >= t.width + n, C = e.top > t.height + n + a, P = e.bottom + t.height + n + a <= window.innerHeight;
      let s = O === "left" ? e.right - t.width : e.left, c;
      _ === "top" ? c = C ? e.top - t.height - a : n : c = P ? e.bottom + a : window.innerHeight - t.height - n, i.autoVerticalPosition && (_ === "top" ? !C && P && (c = e.bottom + a) : C && !P && (c = e.top - t.height - a)), i.autoHorizontalPosition && (_ === "left" ? !g && d ? s = e.left : !g && !d && (s = n) : g && !d ? s = e.right - t.width : !g && !d && (s = window.innerWidth - t.width - n)), o.current.style.top = `${c}px`, u.left && !(i.autoHorizontalPosition && d) ? o.current.style.left = `calc(${s}px + ${u.left})` : o.current.style.left = `${s}px`;
    }
  }, [i, u.left, o]);
  return I(() => {
    h();
  }, [h]), $(() => {
    if (v) {
      const r = L(h, 100, {
        trailing: !0,
        leading: !0
      }), e = new ResizeObserver(r), t = o.current;
      return e.observe(t), window.addEventListener("resize", r), () => {
        e.unobserve(t), window.removeEventListener("resize", r);
      };
    }
  }, [h, o, v]), v ? F(
    /* @__PURE__ */ p("div", { ref: o, className: S, style: u, children: /* @__PURE__ */ U("div", { "data-testid": "pop-up-dialog", className: "pop-up-dialog", children: [
      !T && /* @__PURE__ */ U("div", { className: "pop-up-dialog__header", children: [
        w && /* @__PURE__ */ p("div", { "data-testid": "pop-up-dialog-header", className: "pop-up-dialog__header-text", children: /* @__PURE__ */ p(M, { template: /* @__PURE__ */ p(k, { text: y || w }), children: /* @__PURE__ */ p("span", { children: w }) }) }),
        /* @__PURE__ */ p(
          j,
          {
            className: "pop-up-dialog__btn_close",
            onClick: z,
            tooltipText: "Close",
            "data-testid": "pop-up-close-btn",
            children: /* @__PURE__ */ p(q, {})
          }
        )
      ] }),
      E
    ] }) }),
    document.getElementById("overlay_container")
  ) : null;
};
m = B(m);
m.displayName = "PopUpDialog";
m.propTypes = {
  children: l.node.isRequired,
  className: l.string,
  closePopUp: l.func,
  customPosition: W,
  isOpen: l.bool,
  headerIsHidden: l.bool,
  headerText: l.string,
  onResolve: l.func,
  showPopUpDialog: l.bool,
  style: l.object,
  tooltipText: l.string
};
const ie = m;
export {
  ie as default
};
//# sourceMappingURL=PopUpDialog.mjs.map
