import { jsxs as v, jsx as t } from "react/jsx-runtime";
import { useState as f, useRef as l, useCallback as w, useEffect as p } from "react";
import s from "prop-types";
import { isEmpty as S } from "lodash";
import D from "classnames";
import L from "../../elements/ActionsMenuItem/ActionsMenuItem.mjs";
import P from "../PopUpDialog/PopUpDialog.mjs";
import k from "../RoundedIcon/RoundedIcon.mjs";
import { ACTIONS_MENU as j } from "../../types.mjs";
import H from "../../images/elipsis.svg.mjs";
/* empty css                  */
const I = ({
  dataItem: i = {},
  menu: c,
  menuPosition: _ = "",
  time: y = 100,
  withQuickActions: b = !1
}) => {
  const [r, N] = f(c), [T, g] = f(!1), [a, o] = f(!1), E = l(), M = l(), x = l(), h = l();
  let d = null;
  const R = D(
    "actions-menu__container",
    b && "actions-menu__container_extended",
    a && "actions-menu__container-active"
  ), u = w(
    (e) => {
      e.target.closest(".actions-menu-button") || o(!1);
    },
    [o]
  ), m = w(
    (e) => {
      e.target.closest(".actions-menu__body") || o(!1);
    },
    [o]
  ), C = () => {
    a && (d = setTimeout(() => {
      o(!1);
    }, y));
  }, O = (e) => {
    var n;
    (n = h.current) != null && n.contains(e.target) && o(!1), d && clearTimeout(d);
  };
  return p(() => {
    S(i) || N(typeof c == "function" ? c(i, _) : c);
  }, [i, c, _]), p(() => {
    var e;
    g((e = r[0]) == null ? void 0 : e.some((n) => n.icon));
  }, [r]), p(() => (window.addEventListener("click", u), window.addEventListener("scroll", m, !0), () => {
    window.removeEventListener("click", u), window.removeEventListener("scroll", m, !0);
  }), [u, m]), /* @__PURE__ */ v(
    "div",
    {
      className: R,
      onMouseOut: C,
      onMouseOver: O,
      ref: E,
      children: [
        b && /* @__PURE__ */ t("div", { className: "actions-menu__main-actions-wrapper", ref: h, children: r[1].map(
          (e) => !e.hidden && /* @__PURE__ */ t(
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
        r[0].length > 0 && /* @__PURE__ */ v("div", { className: "actions-menu", "data-testid": "actions-menu", children: [
          /* @__PURE__ */ t(
            k,
            {
              className: "actions-menu-button",
              isActive: a,
              id: "actions-menu-button",
              onClick: () => {
                o((e) => !e);
              },
              ref: M,
              tooltipText: "More actions",
              children: /* @__PURE__ */ t(H, {})
            }
          ),
          a && /* @__PURE__ */ t(
            P,
            {
              className: "actions-menu__body",
              customPosition: {
                element: M,
                position: "bottom-left",
                autoVerticalPosition: !0
              },
              headerIsHidden: !0,
              ref: x,
              children: /* @__PURE__ */ t("ul", { "data-testid": "actions-drop-down-menu", className: "actions-menu__list", children: r[0].map(
                (e, n) => !e.hidden && /* @__PURE__ */ t(
                  L,
                  {
                    dataItem: i,
                    index: n,
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
  menu: j.isRequired,
  menuPosition: s.string,
  time: s.number,
  withQuickActions: s.bool
};
export {
  I as default
};
//# sourceMappingURL=ActionsMenu.mjs.map
