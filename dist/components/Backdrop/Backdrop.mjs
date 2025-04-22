import { jsx as n } from "react/jsx-runtime";
import { useRef as i } from "react";
import o from "prop-types";
import { CSSTransition as m } from "react-transition-group";
/* empty css               */
const p = ({ duration: t = 300, show: e = !1, onClose: s = null }) => {
  const r = i(null);
  return /* @__PURE__ */ n(
    m,
    {
      nodeRef: r,
      in: e,
      timeout: t,
      classNames: "backdrop-transition",
      mountOnEnter: !0,
      unmountOnExit: !0,
      children: /* @__PURE__ */ n("div", { className: "backdrop", onClick: s, ref: r })
    }
  );
};
p.propTypes = {
  duration: o.number,
  onClose: o.func,
  show: o.bool
};
export {
  p as default
};
//# sourceMappingURL=Backdrop.mjs.map
