import { jsxs as a, Fragment as N, jsx as o } from "react/jsx-runtime";
import { useRef as v } from "react";
import e from "prop-types";
import { CSSTransition as g } from "react-transition-group";
import b from "classnames";
import x from "../Backdrop/Backdrop.mjs";
import y from "../RoundedIcon/RoundedIcon.mjs";
import { MODAL_MD as C } from "../../constants.mjs";
import { MODAL_SIZES as R } from "../../types.mjs";
import S from "../../images/close.svg.mjs";
/* empty css            */
const T = ({
  actions: r = [],
  children: n,
  className: c = "",
  noHeader: p = !1,
  onClose: l,
  previewText: i = "",
  show: s = !1,
  size: t = C,
  subTitle: d = null,
  title: h = ""
}) => {
  const m = v(null), f = b("modal", c, t && `modal-${t}`);
  return /* @__PURE__ */ a(N, { children: [
    /* @__PURE__ */ o(x, { onClose: l, show: s }),
    /* @__PURE__ */ o(
      g,
      {
        nodeRef: m,
        in: s,
        timeout: 300,
        classNames: "modal-transition",
        unmountOnExit: !0,
        children: /* @__PURE__ */ a("div", { className: f, "data-testid": "modal", ref: m, children: [
          /* @__PURE__ */ o("div", { className: "modal__header-button", children: /* @__PURE__ */ o(y, { "data-testid": "pop-up-close-btn", onClick: l, tooltipText: "Close", children: /* @__PURE__ */ o(S, {}) }) }),
          /* @__PURE__ */ a("div", { className: "modal__content", children: [
            !p && /* @__PURE__ */ a("div", { className: "modal__header", children: [
              i && /* @__PURE__ */ o("div", { className: "modal__header-preview-text", children: i }),
              /* @__PURE__ */ o("h5", { className: "modal__header-title", children: h }),
              d && /* @__PURE__ */ o("h6", { className: "modal__header-sub-title", children: d })
            ] }),
            /* @__PURE__ */ o("div", { className: "modal__body", children: n }),
            r && r.length > 0 && /* @__PURE__ */ o("div", { className: "modal__footer", children: /* @__PURE__ */ o("div", { className: "modal__footer-actions", children: r.map((_, u) => /* @__PURE__ */ o("div", { children: _ }, u)) }) })
          ] })
        ] })
      }
    )
  ] });
};
T.propTypes = {
  actions: e.array,
  children: e.oneOfType([
    e.element,
    e.object,
    e.node,
    e.string
  ]).isRequired,
  className: e.string,
  noHeader: e.bool,
  onClose: e.func.isRequired,
  previewText: e.string,
  show: e.bool,
  size: R,
  subTitle: e.string,
  title: e.string
};
export {
  T as default
};
//# sourceMappingURL=Modal.mjs.map
