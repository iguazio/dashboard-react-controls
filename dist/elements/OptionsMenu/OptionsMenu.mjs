import { jsx as s } from "react/jsx-runtime";
import { useRef as u, forwardRef as d } from "react";
import i from "prop-types";
import { CSSTransition as a } from "react-transition-group";
import c from "../../components/PopUpDialog/PopUpDialog.mjs";
/* empty css                  */
let t = ({ children: r = [], show: n, timeout: m = 300 }, { refInputContainer: o, validationRulesRef: e }) => {
  const { width: l } = o != null && o.current ? o.current.getBoundingClientRect() : {}, p = u(null);
  return e ?? (e = p), /* @__PURE__ */ s(
    a,
    {
      nodeRef: e,
      in: n,
      timeout: m,
      classNames: "options-menu-transition",
      unmountOnExit: !0,
      children: /* @__PURE__ */ s(
        c,
        {
          ref: e,
          headerIsHidden: !0,
          className: "options-menu",
          customPosition: {
            element: o,
            position: "bottom-right",
            autoVerticalPosition: !0,
            autoHorizontalPosition: !0
          },
          style: { minWidth: `${l}px` },
          children: /* @__PURE__ */ s("ul", { className: "options-menu__body", children: r })
        }
      )
    }
  );
};
t = d(t);
t.displayName = "OptionsMenu";
t.propTypes = {
  children: i.arrayOf(i.element),
  show: i.bool,
  timeout: i.number
};
const g = t;
export {
  g as default
};
//# sourceMappingURL=OptionsMenu.mjs.map
