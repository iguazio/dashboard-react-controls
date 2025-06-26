import { jsxs as M, jsx as n } from "react/jsx-runtime";
import { useState as f, useRef as a, useCallback as g, useEffect as p } from "react";
import s from "prop-types";
import { isEmpty as D } from "lodash";
import L from "classnames";
import P from "../../elements/ActionsMenuItem/ActionsMenuItem.mjs";
import j from "../PopUpDialog/PopUpDialog.mjs";
import k from "../RoundedIcon/RoundedIcon.mjs";
import { ACTIONS_MENU as q } from "../../types.mjs";
import H from "../../images/elipsis.svg.mjs";
/* empty css                  */
const I = ({
  dataItem: i = {},
  menu: c,
  menuPosition: h = "",
  time: y = 100,
  withQuickActions: _ = !1
}) => {
  const [[o, b], N] = f(c), [T, E] = f(!1), [r, t] = f(!1), x = a(), v = a(), C = a(), w = a();
  let d = null;
  const R = L(
    "actions-menu__container",
    _ && (o.length > 0 || b.length > 1) && "actions-menu__container_extended",
    r && "actions-menu__container-active"
  ), u = g(
    (e) => {
      e.target.closest(".actions-menu-button") || t(!1);
    },
    [t]
  ), m = g(
    (e) => {
      e.target.closest(".actions-menu__body") || t(!1);
    },
    [t]
  ), O = () => {
    r && (d = setTimeout(() => {
      t(!1);
    }, y));
  }, S = (e) => {
    var l;
    (l = w.current) != null && l.contains(e.target) && t(!1), d && clearTimeout(d);
  };
  return p(() => {
    D(i) || N(typeof c == "function" ? c(i, h) : c);
  }, [i, c, h]), p(() => {
    E(o == null ? void 0 : o.some((e) => e.icon));
  }, [o]), p(() => (window.addEventListener("click", u), window.addEventListener("scroll", m, !0), () => {
    window.removeEventListener("click", u), window.removeEventListener("scroll", m, !0);
  }), [u, m]), /* @__PURE__ */ M(
    "div",
    {
      className: R,
      onMouseOut: O,
      onMouseOver: S,
      ref: x,
      children: [
        _ && /* @__PURE__ */ n("div", { className: "actions-menu__main-actions-wrapper", ref: w, children: b.map(
          (e) => !e.hidden && /* @__PURE__ */ n(
            k,
            {
              disabled: e.disabled,
              id: `quick-link-${e.id}`,
              onClick: () => e.onClick(i),
              tooltipText: e.label,
              children: e.icon
            },
            e.label
          )
        ) }),
        o.length > 0 && /* @__PURE__ */ M("div", { className: "actions-menu", "data-testid": "actions-menu", children: [
          /* @__PURE__ */ n(
            k,
            {
              className: "actions-menu-button",
              isActive: r,
              id: "actions-menu-button",
              onClick: () => {
                t((e) => !e);
              },
              ref: v,
              tooltipText: "More actions",
              children: /* @__PURE__ */ n(H, {})
            }
          ),
          r && /* @__PURE__ */ n(
            j,
            {
              className: "actions-menu__body",
              customPosition: {
                element: v,
                position: "bottom-left",
                autoVerticalPosition: !0
              },
              headerIsHidden: !0,
              ref: C,
              children: /* @__PURE__ */ n("ul", { "data-testid": "actions-drop-down-menu", className: "actions-menu__list", children: o.map(
                (e, l) => !e.hidden && /* @__PURE__ */ n(
                  P,
                  {
                    dataItem: i,
                    index: l,
                    isIconDisplayed: T,
                    menuItem: e
                  },
                  e.label
                )
              ) })
            }
          )
        ] })
      ]
    }
  );
};
I.propTypes = {
  dataItem: s.oneOfType([s.object, s.string]),
  menu: q.isRequired,
  menuPosition: s.string,
  time: s.number,
  withQuickActions: s.bool
};
export {
  I as default
};
//# sourceMappingURL=ActionsMenu.mjs.map
