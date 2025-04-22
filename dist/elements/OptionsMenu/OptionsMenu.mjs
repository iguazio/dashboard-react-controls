import { jsx as e } from "react/jsx-runtime";
import { forwardRef as d } from "react";
import i from "prop-types";
import { CSSTransition as l } from "react-transition-group";
import u from "../../components/PopUpDialog/PopUpDialog.mjs";
/* empty css                  */
let t = ({ children: r = [], show: m, timeout: n = 300 }, { refInputContainer: o, validationRulesRef: s }) => {
  const { width: p } = o != null && o.current ? o.current.getBoundingClientRect() : {};
  return /* @__PURE__ */ e(
    l,
    {
      nodeRef: s,
      in: m,
      timeout: n,
      classNames: "options-menu-transition",
      unmountOnExit: !0,
      children: /* @__PURE__ */ e(
        u,
        {
          ref: s,
          headerIsHidden: !0,
          className: "options-menu",
          customPosition: {
            element: o,
            position: "bottom-right",
            autoVerticalPosition: !0,
            autoHorizontalPosition: !0
          },
          style: { minWidth: `${p}px` },
          children: /* @__PURE__ */ e("ul", { className: "options-menu__body", children: r })
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
const b = t;
export {
  b as default
};
//# sourceMappingURL=OptionsMenu.mjs.map
