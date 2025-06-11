import { jsx as d, jsxs as W } from "react/jsx-runtime";
import { useState as G, useRef as w, useMemo as J, useEffect as C, useCallback as l } from "react";
import r from "prop-types";
import K from "final-form-arrays";
import Q from "classnames";
import { Form as X } from "react-final-form";
import { isEqual as Z, pickBy as y, cloneDeep as U } from "lodash";
import { createForm as V } from "final-form";
import { useDispatch as ee, useSelector as te } from "react-redux";
import { useParams as ne, useLocation as re } from "react-router-dom";
import se from "../components/BlockerSpy/BlockerSpy.mjs";
import oe from "../components/ErrorMessage/ErrorMessage.mjs";
import ae from "../components/Loader/Loader.mjs";
import ie from "../components/TabsSlider/TabsSlider.mjs";
import ce from "../components/ConfirmDialog/ConfirmDialog.mjs";
import { setDetailsPopUpInfoContent as me, removeDetailsPopUpInfoContent as ue, setInfoContent as de, removeInfoContent as le, resetChanges as j, showWarning as A, setFiltersWasHandled as D, setEditMode as he } from "../reducers/commonDetailsReducer.mjs";
import { PRIMARY_BUTTON as fe, TERTIARY_BUTTON as pe, VIEW_SEARCH_PARAMETER as x } from "../constants.mjs";
import { DETAILS_MENU as ge } from "../types.mjs";
import { setFieldState as Re } from "../utils/form.util.mjs";
const H = ({
  blocker: p,
  detailsMenu: g,
  detailsPanelClassNames: o,
  detailsPopUpSelectedTab: a = "",
  detailsRef: E,
  detailsStore: h,
  commonDetailsStore: s,
  doNotLeavePage: R,
  formRef: q,
  isDetailsPopUp: t = null,
  leavePage: T,
  params: f,
  renderHeader: n,
  renderTabsContent: c,
  setBlocker: S,
  setDetailsPopUpSelectedTab: b = null,
  shouldDetailsBlock: v,
  withActionMenu: k = !0
}) => /* @__PURE__ */ d(X, { form: q.current, onSubmit: () => {
}, children: (i) => /* @__PURE__ */ W("div", { className: o, ref: E, "data-testid": "detailsPanel", children: [
  h.loadingCounter > 0 && /* @__PURE__ */ d(ae, {}),
  h.error && /* @__PURE__ */ d(oe, { message: h.error.message }),
  /* @__PURE__ */ W("div", { className: "item-header-wrapper", children: [
    n(),
    k && /* @__PURE__ */ d(
      ie,
      {
        initialTab: t ? a : f.tab,
        isDetailsPopUp: t,
        onClick: (u) => b && b(u),
        skipLink: t,
        tabsList: g
      }
    )
  ] }),
  /* @__PURE__ */ d("div", { className: "item-info", children: c(i) }),
  (p.state === "blocked" || s.showWarning) && /* @__PURE__ */ d(
    ce,
    {
      cancelButton: {
        handler: R,
        label: "Cancel",
        variant: pe
      },
      closePopUp: R,
      confirmButton: {
        handler: T,
        label: "Yes",
        variant: fe
      },
      header: "You have unsaved changes.",
      isOpen: p.state === "blocked" || s.showWarning,
      message: "Do you want to discard the changes?"
    }
  ),
  !t && /* @__PURE__ */ d(se, { setBlocker: S, shouldBlock: v })
] }) });
H.propTypes = {
  blocker: r.object.isRequired,
  detailsMenu: ge.isRequired,
  detailsPanelClassNames: r.string.isRequired,
  detailsPopUpSelectedTab: r.string,
  detailsRef: r.object.isRequired,
  detailsStore: r.object.isRequired,
  commonDetailsStore: r.object.isRequired,
  doNotLeavePage: r.func.isRequired,
  formRef: r.object.isRequired,
  isDetailsPopUp: r.bool,
  leavePage: r.func.isRequired,
  params: r.object.isRequired,
  renderHeader: r.func.isRequired,
  renderTabsContent: r.func.isRequired,
  setBlocker: r.func.isRequired,
  setDetailsPopUpSelectedTab: r.func,
  shouldDetailsBlock: r.func.isRequired,
  withActionMenu: r.bool
};
const De = ({
  applyDetailsChanges: p,
  applyDetailsChangesCallback: g,
  formInitialValues: o,
  isDetailsPopUp: a,
  isDetailsScreen: E,
  selectedItem: h
}) => {
  const [s, R] = G({}), q = w(), t = ee(), T = w(), f = ne(), n = te((e) => e.commonDetailsStore), c = re(), [S, b] = J(() => a ? [me, ue] : [de, le], [a]), v = w(
    c.pathname.substring(0, c.pathname.lastIndexOf(f.tab))
  ), k = Q(
    "table__item",
    n.showWarning && "pop-up-dialog-opened",
    E && "table__item_big",
    a && "table__item-popup"
  ), i = w(
    V({
      initialValues: o,
      mutators: { ...K, setFieldState: Re },
      onSubmit: () => {
      }
    })
  );
  C(() => () => {
    a || t(j());
  }, [t, a]);
  const u = l(
    (e) => {
      t(A(e));
    },
    [t]
  ), B = l(
    (e) => {
      var m;
      n.changes.counter > 0 && ((m = document.getElementById("refresh")) != null && m.contains(e.target)) && (u(!0), t(D(!0)));
    },
    [n.changes.counter, t, u]
  );
  C(() => (window.addEventListener("click", B), () => {
    window.removeEventListener("click", B);
  }), [B]);
  const I = l(
    ({ currentLocation: e, nextLocation: m }) => {
      var M, N;
      const $ = (M = e.search.split(`${x}=`)) == null ? void 0 : M[1], z = (N = m.search.split(`${x}=`)) == null ? void 0 : N[1], P = e.pathname.split("/"), L = m.pathname.split("/");
      return P.pop(), L.pop(), n.changes.counter > 0 && (P.join("/") !== L.join("/") || $ !== z);
    },
    [n.changes.counter]
  );
  C(() => {
    var e, m;
    i.current && n.changes.counter === 0 && !Z(y(o), y((e = i.current.getState()) == null ? void 0 : e.values)) && !((m = i.current.getState()) != null && m.active) && i.current.restart(o);
  }, [o, n.changes.counter]), C(() => {
    const e = c.pathname.substring(
      0,
      c.pathname.lastIndexOf(f.tab)
    );
    v.current !== e && !a && (i.current.restart(o), t(he(!1)), v.current = e);
  }, [t, o, a, c.pathname, f.tab]);
  const O = l(() => {
    p(n.changes).then(() => {
      t(j());
      const e = U(n.changes);
      setTimeout(() => {
        g(e, h);
      });
    });
  }, [
    p,
    g,
    n.changes,
    t,
    h
  ]), _ = l(() => {
    n.changes.counter > 0 && (t(j()), i.current.reset(o));
  }, [n.changes.counter, t, o]), F = l(() => {
    var e;
    _(), u(!1), n.filtersWasHandled ? t(D(!1)) : (e = s.proceed) == null || e.call(s), window.dispatchEvent(new CustomEvent("discardChanges"));
  }, [s, _, n.filtersWasHandled, t, u]), Y = l(() => {
    var e;
    (e = s.reset) == null || e.call(s), t(A(!1)), window.dispatchEvent(new CustomEvent("cancelLeave"));
  }, [s, t]);
  return {
    DetailsContainer: H,
    applyChanges: O,
    applyChangesRef: q,
    blocker: s,
    cancelChanges: _,
    detailsPanelClassNames: k,
    detailsRef: T,
    commonDetailsStore: n,
    doNotLeavePage: Y,
    formRef: i,
    handleShowWarning: u,
    leavePage: F,
    location: c,
    params: f,
    removeDetailsInfo: b,
    setBlocker: R,
    setDetailsInfo: S,
    shouldDetailsBlock: I
  };
};
export {
  De as useDetails
};
//# sourceMappingURL=useDetails.hook.mjs.map
