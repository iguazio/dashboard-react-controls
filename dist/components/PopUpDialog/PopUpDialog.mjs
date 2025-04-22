import { jsx as n, jsxs as _ } from "react/jsx-runtime";
import { useState as I, useRef as $, useCallback as C, useLayoutEffect as B, useEffect as D, forwardRef as F } from "react";
import l from "prop-types";
import L from "classnames";
import { createPortal as j } from "react-dom";
import { throttle as M } from "lodash";
import k from "../RoundedIcon/RoundedIcon.mjs";
import W from "../Tooltip/Tooltip.mjs";
import q from "../TooltipTemplate/TextTooltipTemplate.mjs";
import { POP_UP_CUSTOM_POSITION as V } from "../../types.mjs";
import A from "../../images/close.svg.mjs";
/* empty css                  */
let h = ({
  children: R,
  className: x = "",
  closePopUp: f = () => {
  },
  customPosition: i = {},
  headerIsHidden: E = !1,
  headerText: w = "",
  showPopUpDialog: T = !0,
  style: m = {},
  tooltipText: y = ""
}, o) => {
  const [v, N] = I(T ?? !0), S = $(null);
  o ?? (o = S);
  const O = L(
    x,
    "pop-up-dialog__overlay",
    i.element && "custom-position"
  ), z = C(() => {
    f && f(), N(!1);
  }, [f]), u = C(() => {
    var r;
    if ((r = i == null ? void 0 : i.element) != null && r.current && (o != null && o.current)) {
      const e = i.element.current.getBoundingClientRect(), t = o.current.getBoundingClientRect(), [b, H] = i.position.split("-"), p = 15, s = 5, g = e.right >= t.width + p, d = window.innerWidth - e.left >= t.width + p, P = e.top > t.height + p + s, U = e.bottom + t.height + p + s <= window.innerHeight;
      let a = H === "left" ? e.right - t.width : e.left, c;
      b === "top" ? c = P ? e.top - t.height - s : p : c = U ? e.bottom + s : window.innerHeight - t.height - p, i.autoVerticalPosition && (b === "top" ? !P && U && (c = e.bottom + s) : P && !U && (c = e.top - t.height - s)), i.autoHorizontalPosition && (b === "left" ? !g && d ? a = e.left : !g && !d && (a = p) : g && !d ? a = e.right - t.width : !g && !d && (a = window.innerWidth - t.width - p)), o.current.style.top = `${c}px`, m.left && !(i.autoHorizontalPosition && d) ? o.current.style.left = `calc(${a}px + ${m.left})` : o.current.style.left = `${a}px`;
    }
  }, [i, m.left, o]);
  return B(() => {
    u();
  }, [u]), D(() => {
    if (v) {
      const r = M(u, 100, {
        trailing: !0,
        leading: !0
      }), e = new ResizeObserver(r), t = o.current;
      return e.observe(t), window.addEventListener("resize", r), () => {
        e.unobserve(t), window.removeEventListener("resize", r);
      };
    }
  }, [u, o, v]), v ? j(
    /* @__PURE__ */ n("div", { ref: o, className: O, style: m, children: /* @__PURE__ */ _("div", { "data-testid": "pop-up-dialog", className: "pop-up-dialog", children: [
      !E && /* @__PURE__ */ _("div", { className: "pop-up-dialog__header", children: [
        w && /* @__PURE__ */ n("div", { "data-testid": "pop-up-dialog-header", className: "pop-up-dialog__header-text", children: /* @__PURE__ */ n(W, { template: /* @__PURE__ */ n(q, { text: y || w }), children: /* @__PURE__ */ n("span", { children: w }) }) }),
        /* @__PURE__ */ n(
          k,
          {
            className: "pop-up-dialog__btn_close",
            onClick: z,
            tooltipText: "Close",
            "data-testid": "pop-up-close-btn",
            children: /* @__PURE__ */ n(A, {})
          }
        )
      ] }),
      R
    ] }) }),
    document.getElementById("overlay_container")
  ) : null;
};
h = F(h);
h.displayName = "PopUpDialog";
h.propTypes = {
  children: l.node.isRequired,
  className: l.string,
  closePopUp: l.func,
  customPosition: V,
  headerIsHidden: l.bool,
  headerText: l.string,
  showPopUpDialog: l.bool,
  style: l.object,
  tooltipText: l.string
};
const le = h;
export {
  le as default
};
//# sourceMappingURL=PopUpDialog.mjs.map
