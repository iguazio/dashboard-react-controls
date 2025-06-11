import { jsxs as l, jsx as i, Fragment as q } from "react/jsx-runtime";
import { useRef as L, useCallback as M } from "react";
import e from "prop-types";
import { useSelector as B } from "react-redux";
import { Link as O, useParams as F, useNavigate as H, useLocation as P } from "react-router-dom";
import U from "../components/ActionsMenu/ActionsMenu.mjs";
import x from "../components/Button/Button.mjs";
import z from "../components/LoadButton/LoadButton.mjs";
import s from "../components/RoundedIcon/RoundedIcon.mjs";
import D from "../components/TooltipTemplate/TextTooltipTemplate.mjs";
import W from "../components/Tooltip/Tooltip.mjs";
import { ACTIONS_MENU as Y, ACTION_BUTTON as G } from "../types.mjs";
import { TERTIARY_BUTTON as J, FULL_VIEW_MODE as A, VIEW_SEARCH_PARAMETER as j } from "../constants.mjs";
import { getFilteredSearchParams as K } from "../utils/filter.util.mjs";
import { getViewMode as Q } from "../utils/common.util.mjs";
import E from "../images/close.svg.mjs";
import X from "../images/ml-enlarge.svg.mjs";
import Z from "../images/history.svg.mjs";
import ee from "../images/ml-minimize.svg.mjs";
import ie from "../images/refresh.svg.mjs";
const y = ({
  actionButton: t = null,
  actionsMenu: a,
  applyChanges: c,
  applyChangesRef: g,
  cancelChanges: r,
  commonDetailsStore: o,
  getCloseDetailsLink: d = null,
  getDefaultCloseDetailsLink: b,
  handleCancelClick: m,
  handleRefresh: u = null,
  headerRef: R,
  isDetailsPopUp: n = !1,
  isDetailsScreen: v,
  location: h,
  navigate: p,
  pageData: f,
  params: $,
  renderCustomElements: C = null,
  renderStatus: w = null,
  renderTitle: _,
  selectedItem: T,
  showAllVersions: k = null,
  tab: S = "",
  viewMode: N = "",
  withActionMenu: V = !0,
  withToggleViewBtn: I = !1
}) => /* @__PURE__ */ l("div", { className: "item-header", ref: R, children: [
  /* @__PURE__ */ l("div", { className: "item-header__data", children: [
    /* @__PURE__ */ i("h3", { className: "item-header__title", children: _ && _() }),
    /* @__PURE__ */ i("div", { className: "item-header__status", children: w && w() })
  ] }),
  /* @__PURE__ */ i("div", { className: "item-header__custom-elements", children: C && C() }),
  /* @__PURE__ */ l("div", { className: "item-header__buttons", children: [
    o.changes.counter > 0 && !n && /* @__PURE__ */ l(q, { children: [
      /* @__PURE__ */ i(
        x,
        {
          variant: J,
          label: "Cancel",
          onClick: r,
          disabled: o.changes.counter === 0 || o.editMode
        }
      ),
      /* @__PURE__ */ i(
        W,
        {
          template: /* @__PURE__ */ i(
            D,
            {
              text: `${o.changes.counter} ${o.changes.counter === 1 ? "change pending" : "changes pending"}`
            }
          ),
          children: /* @__PURE__ */ i(
            z,
            {
              ref: g,
              variant: "primary",
              label: "Apply Changes",
              className: "btn_apply-changes",
              onClick: c,
              disabled: o.changes.counter === 0 || o.editMode
            }
          )
        }
      )
    ] }),
    t && !t.hidden && /* @__PURE__ */ i(
      x,
      {
        disabled: t.disabled,
        label: t.label,
        onClick: t.onClick,
        tooltip: t.tooltip,
        variant: t.variant
      }
    ),
    k && /* @__PURE__ */ i(
      s,
      {
        id: "showAllVersions",
        onClick: () => k(),
        tooltipText: "Show all versions",
        children: /* @__PURE__ */ i(Z, {})
      }
    ),
    v && u && /* @__PURE__ */ i(
      s,
      {
        id: "refresh",
        onClick: () => u(T),
        tooltipText: "Refresh",
        children: /* @__PURE__ */ i(ie, {})
      }
    ),
    V && /* @__PURE__ */ i(U, { dataItem: T, menu: a, time: 500 }),
    /* @__PURE__ */ l("div", { className: "item-header__navigation-buttons", children: [
      I && !n && /* @__PURE__ */ l(q, { children: [
        N !== A && /* @__PURE__ */ i(
          s,
          {
            onClick: () => {
              p(
                `${h.pathname}${window.location.search}${window.location.search ? "&" : "?"}${j}=full`
              );
            },
            id: "full-view",
            tooltipText: "Full view",
            children: /* @__PURE__ */ i(X, {})
          }
        ),
        N === A && /* @__PURE__ */ i(
          s,
          {
            onClick: () => {
              p(
                `${h.pathname}${K(window.location.search, [j])}`
              );
            },
            id: "table-view",
            tooltipText: "Table view",
            children: /* @__PURE__ */ i(ee, {})
          }
        )
      ] }),
      !f.details.hideBackBtn && (n ? /* @__PURE__ */ i(
        "div",
        {
          className: "details-close-btn",
          "data-testid": "details-close-btn",
          onClick: m,
          children: /* @__PURE__ */ i(s, { tooltipText: "Close", id: "details-close", children: /* @__PURE__ */ i(E, {}) })
        }
      ) : /* @__PURE__ */ i(
        O,
        {
          className: "details-close-btn",
          "data-testid": "details-close-btn",
          to: d ? d(T.name) : b($, f.page, S),
          onClick: m,
          children: /* @__PURE__ */ i(s, { tooltipText: "Close", id: "details-close", children: /* @__PURE__ */ i(E, {}) })
        }
      ))
    ] })
  ] })
] });
y.propTypes = {
  actionButton: G,
  actionsMenu: Y.isRequired,
  applyChanges: e.func.isRequired,
  applyChangesRef: e.object.isRequired,
  cancelChanges: e.func.isRequired,
  commonDetailsStore: e.object.isRequired,
  getCloseDetailsLink: e.func,
  getDefaultCloseDetailsLink: e.func.isRequired,
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
const we = ({ handleCancel: t, handleShowWarning: a, isDetailsPopUp: c, pageData: g }) => {
  const r = B((f) => f.commonDetailsStore), o = F(), d = H(), b = Q(window.location.search), { actionButton: m, withToggleViewBtn: u, showAllVersions: R } = g.details, n = L(), v = P(), h = M(() => {
    r.changes.counter > 0 ? a(!0) : t && t();
  }, [r.changes.counter, t, a]), p = M(() => {
    t && (r.changes.counter === 0 || c) && t();
  }, [r.changes.counter, t, c]);
  return {
    DetailsHeaderContainer: y,
    actionButton: m,
    commonDetailsStore: r,
    handleBackClick: h,
    handleCancelClick: p,
    headerRef: n,
    location: v,
    navigate: d,
    params: o,
    showAllVersions: R,
    viewMode: b,
    withToggleViewBtn: u
  };
};
export {
  we as useDetailsHeader
};
//# sourceMappingURL=useDetailsHeader.hook.mjs.map
