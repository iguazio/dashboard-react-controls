import { create as g } from "react-modal-promise";
import { isEmpty as u, isNumber as E, differenceWith as w, isEqual as T, omit as a, get as s } from "lodash";
import d from "../components/ConfirmDialog/ConfirmDialog.mjs";
import { PRIMARY_BUTTON as b, TERTIARY_BUTTON as m, DANGER_BUTTON as h, FORBIDDEN_ERROR_STATUS_CODE as v, VIEW_SEARCH_PARAMETER as y } from "../constants.mjs";
import { setFiltersWasHandled as C, showWarning as R } from "../reducers/commonDetailsReducer.mjs";
import { setNotification as N } from "../reducers/notificationReducer.mjs";
import { showErrorNotification as l } from "./notification.util.mjs";
const p = (e, t) => g(e)(t), S = (e, t) => p(d, {
  cancelButton: {
    label: "Cancel",
    variant: m
  },
  confirmButton: {
    label: "OK",
    variant: b,
    handler: t
  },
  header: "Are you sure?",
  message: e
}), _ = (e, t, n) => p(d, {
  cancelButton: {
    label: "Cancel",
    variant: m
  },
  confirmButton: {
    label: "Delete",
    variant: h,
    handler: n
  },
  header: e,
  message: t
}), F = (e) => Object.values(e).every(
  (t) => !t || (t == null ? void 0 : t.length) === 0 || !E(t) && u(t)
), V = (e, t, n = []) => e.length !== t.length ? !1 : u(
  w(e, t, (r, i) => T(a(r, n), a(i, n)))
), c = {
  [v]: "You do not have a permission to view this data"
}, D = (e) => {
  const t = s(e, "response.data.detail", null);
  return typeof t == "string" ? t : s(t, "reason", "");
}, W = (e, t) => {
  const r = D(e) || e.message;
  return (!r || r === "Not Found" || r.startsWith("Request failed with status code")) && t ? t : c[e.status] ? c[e.status] : r || "";
}, x = () => {
  const e = {
    transition: "transitionend",
    OTransition: "oTransitionEnd",
    MozTransition: "transitionend",
    WebkitTransition: "webkitTransitionEnd"
  };
  let t = document.body.style;
  for (let n in e)
    if (t[n] !== void 0)
      return e[n];
}, I = (e) => getComputedStyle(document.documentElement).getPropertyValue(e).trim(), q = (e) => {
  var t;
  return (t = new URLSearchParams(e).get(y)) == null ? void 0 : t.toLowerCase();
}, H = async (e, t, n = !1) => {
  let r = Promise.resolve(!0);
  return e.counter > 0 && (r = await new Promise((i) => {
    const o = (f) => {
      window.removeEventListener("discardChanges", o), window.removeEventListener("cancelLeave", o), i(f);
    };
    window.addEventListener("discardChanges", () => o(!0)), window.addEventListener("cancelLeave", () => o(!1)), t(C(n)), t(R(!0));
  })), r;
}, Y = (e, t) => {
  var n;
  if (!((n = navigator.clipboard) != null && n.writeText))
    return l(
      t,
      null,
      "",
      "Copy to clipboard failed due to unsecured connection"
    );
  navigator.clipboard.writeText(e).then(() => {
    t(
      N({
        status: 200,
        id: Math.random(),
        message: "Copied to clipboard successfully"
      })
    );
  }).catch((r) => {
    l(t, r, "", "Copy to clipboard failed");
  });
}, j = (e, t) => {
  if ((typeof e == "string" && e.trim() !== "" || typeof e == "number") && !isNaN(e)) {
    const n = parseFloat(e);
    return n % 1 === 0 ? n : +n.toFixed(t ?? 2);
  }
  return e;
}, k = (e) => new URL(e, window.location.origin).toString();
export {
  V as areArraysEqual,
  Y as copyToClipboard,
  k as generateUrlFromRouterPath,
  D as getErrorDetail,
  W as getErrorMsg,
  I as getScssVariableValue,
  x as getTransitionEndEventName,
  q as getViewMode,
  F as isEveryObjectValueEmpty,
  S as openConfirmPopUp,
  _ as openDeleteConfirmPopUp,
  p as openPopUp,
  H as performDetailsActionHelper,
  j as roundFloats
};
//# sourceMappingURL=common.util.mjs.map
