import { jsxs as r, jsx as i, Fragment as M } from "react/jsx-runtime";
import { useRef as H, useCallback as x } from "react";
import e from "prop-types";
import { useSelector as O, useDispatch as F } from "react-redux";
import { Link as P, useParams as D, useNavigate as U, useLocation as z } from "react-router-dom";
import W from "../components/ActionsMenu/ActionsMenu.mjs";
import j from "../components/Button/Button.mjs";
import Y from "../components/LoadButton/LoadButton.mjs";
import s from "../components/RoundedIcon/RoundedIcon.mjs";
import G from "../components/TooltipTemplate/TextTooltipTemplate.mjs";
import J from "../components/Tooltip/Tooltip.mjs";
import { ACTIONS_MENU as K, ACTION_BUTTON as Q } from "../types.mjs";
import { TERTIARY_BUTTON as X, FULL_VIEW_MODE as y, VIEW_SEARCH_PARAMETER as E } from "../constants.mjs";
import { getFilteredSearchParams as Z } from "../utils/filter.util.mjs";
import { getViewMode as ee, performDetailsActionHelper as ie } from "../utils/common.util.mjs";
import $ from "../images/close.svg.mjs";
import te from "../images/ml-enlarge.svg.mjs";
import oe from "../images/history.svg.mjs";
import ne from "../images/ml-minimize.svg.mjs";
import re from "../images/refresh.svg.mjs";
const B = ({
  actionButton: t = null,
  actionsMenu: c,
  applyChanges: d,
  applyChangesRef: R,
  cancelChanges: n,
  commonDetailsStore: o,
  getCloseDetailsLink: m = null,
  getDefaultCloseDetailsLink: C,
  handleActionClick: v,
  handleCancelClick: u,
  handleRefresh: h = null,
  headerRef: T,
  isDetailsPopUp: a = !1,
  isDetailsScreen: w,
  location: p,
  navigate: f,
  pageData: g,
  params: l,
  renderCustomElements: b = null,
  renderStatus: _ = null,
  renderTitle: q,
  selectedItem: k,
  showAllVersions: N = null,
  tab: S = "",
  viewMode: A = "",
  withActionMenu: V = !0,
  withToggleViewBtn: I = !1
}) => /* @__PURE__ */ r("div", { className: "item-header", ref: T, children: [
  /* @__PURE__ */ r("div", { className: "item-header__data", children: [
    /* @__PURE__ */ i("h3", { className: "item-header__title", children: q && q() }),
    /* @__PURE__ */ i("div", { className: "item-header__status", children: _ && _() })
  ] }),
  /* @__PURE__ */ i("div", { className: "item-header__custom-elements", children: b && b() }),
  /* @__PURE__ */ r("div", { className: "item-header__buttons", children: [
    o.changes.counter > 0 && !a && /* @__PURE__ */ r(M, { children: [
      /* @__PURE__ */ i(
        j,
        {
          variant: X,
          label: "Cancel",
          onClick: n,
          disabled: o.changes.counter === 0 || o.editMode
        }
      ),
      /* @__PURE__ */ i(
        J,
        {
          template: /* @__PURE__ */ i(
            G,
            {
              text: `${o.changes.counter} ${o.changes.counter === 1 ? "change pending" : "changes pending"}`
            }
          ),
          children: /* @__PURE__ */ i(
            Y,
            {
              ref: R,
              variant: "primary",
              label: "Apply Changes",
              className: "btn_apply-changes",
              onClick: d,
              disabled: o.changes.counter === 0 || o.editMode
            }
          )
        }
      )
    ] }),
    t && !t.hidden && /* @__PURE__ */ i(
      j,
      {
        disabled: t.disabled,
        label: t.label,
        onClick: (L) => {
          v(L, t.onClick);
        },
        tooltip: t.tooltip,
        variant: t.variant
      }
    ),
    N && /* @__PURE__ */ i(
      s,
      {
        id: "showAllVersions",
        onClick: () => N(),
        tooltipText: "Show all versions",
        children: /* @__PURE__ */ i(oe, {})
      }
    ),
    w && h && /* @__PURE__ */ i(
      s,
      {
        id: "refresh",
        onClick: () => h(k),
        tooltipText: "Refresh",
        children: /* @__PURE__ */ i(re, {})
      }
    ),
    V && /* @__PURE__ */ i(W, { dataItem: k, menu: c, time: 500 }),
    /* @__PURE__ */ r("div", { className: "item-header__navigation-buttons", children: [
      I && !a && /* @__PURE__ */ r(M, { children: [
        A !== y && /* @__PURE__ */ i(
          s,
          {
            onClick: () => {
              f(
                `${p.pathname}${window.location.search}${window.location.search ? "&" : "?"}${E}=full`
              );
            },
            id: "full-view",
            tooltipText: "Full view",
            children: /* @__PURE__ */ i(te, {})
          }
        ),
        A === y && /* @__PURE__ */ i(
          s,
          {
            onClick: () => {
              f(
                `${p.pathname}${Z(window.location.search, [E])}`
              );
            },
            id: "table-view",
            tooltipText: "Table view",
            children: /* @__PURE__ */ i(ne, {})
          }
        )
      ] }),
      !g.details.hideBackBtn && (a ? /* @__PURE__ */ i(
        "div",
        {
          className: "details-close-btn",
          "data-testid": "details-close-btn",
          onClick: u,
          children: /* @__PURE__ */ i(s, { tooltipText: "Close", id: "details-close", children: /* @__PURE__ */ i($, {}) })
        }
      ) : /* @__PURE__ */ i(
        P,
        {
          className: "details-close-btn",
          "data-testid": "details-close-btn",
          to: m ? m(k.name) : C(l, g.page, S),
          onClick: u,
          children: /* @__PURE__ */ i(s, { tooltipText: "Close", id: "details-close", children: /* @__PURE__ */ i($, {}) })
        }
      ))
    ] })
  ] })
] });
B.propTypes = {
  actionButton: Q,
  actionsMenu: K.isRequired,
  applyChanges: e.func.isRequired,
  applyChangesRef: e.object.isRequired,
  cancelChanges: e.func.isRequired,
  commonDetailsStore: e.object.isRequired,
  getCloseDetailsLink: e.func,
  getDefaultCloseDetailsLink: e.func.isRequired,
  handleActionClick: e.func.isRequired,
  handleCancelClick: e.func.isRequired,
  handleRefresh: e.func,
  headerRef: e.object.isRequired,
  isDetailsPopUp: e.bool,
  isDetailsScreen: e.bool.isRequired,
  location: e.object.isRequired,
  navigate: e.func.isRequired,
  pageData: e.object.isRequired,
  params: e.object.isRequired,
  renderCustomElements: e.func,
  renderStatus: e.func,
  renderTitle: e.func.isRequired,
  selectedItem: e.object.isRequired,
  showAllVersions: e.func,
  tab: e.string,
  viewMode: e.string,
  withActionMenu: e.bool,
  withToggleViewBtn: e.bool
};
const Ne = ({ handleCancel: t, handleShowWarning: c, isDetailsPopUp: d, pageData: R }) => {
  const n = O((l) => l.commonDetailsStore), o = F(), m = D(), C = U(), v = ee(window.location.search), { actionButton: u, withToggleViewBtn: h, showAllVersions: T } = R.details, a = H(), w = z(), p = async (l, b) => {
    await ie(
      n.changes,
      o
    ) && b(l);
  }, f = x(() => {
    n.changes.counter > 0 ? c(!0) : t && t();
  }, [n.changes.counter, t, c]), g = x(() => {
    t && (n.changes.counter === 0 || d) && t();
  }, [n.changes.counter, t, d]);
  return {
    DetailsHeaderContainer: B,
    actionButton: u,
    commonDetailsStore: n,
    handleActionClick: p,
    handleBackClick: f,
    handleCancelClick: g,
    headerRef: a,
    location: w,
    navigate: C,
    params: m,
    showAllVersions: T,
    viewMode: v,
    withToggleViewBtn: h
  };
};
export {
  Ne as useDetailsHeader
};
//# sourceMappingURL=useDetailsHeader.hook.mjs.map
