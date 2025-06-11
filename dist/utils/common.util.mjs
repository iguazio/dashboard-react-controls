import { create as f } from "react-modal-promise";
import { isEmpty as c, isNumber as g, differenceWith as w, isEqual as E, omit as a, get as s } from "lodash";
import d from "../components/ConfirmDialog/ConfirmDialog.mjs";
import { PRIMARY_BUTTON as b, TERTIARY_BUTTON as u, DANGER_BUTTON as T, VIEW_SEARCH_PARAMETER as y } from "../constants.mjs";
import { setFiltersWasHandled as h, showWarning as v } from "../reducers/commonDetailsReducer.mjs";
import { setNotification as C } from "../reducers/notificationReducer.mjs";
import { showErrorNotification as l } from "./notification.util.mjs";
const m = (t, e) => f(t)(e), M = (t, e) => m(d, {
  cancelButton: {
    label: "Cancel",
    variant: u
  },
  confirmButton: {
    label: "OK",
    variant: b,
    handler: e
  },
  header: "Are you sure?",
  message: t
}), O = (t, e, r) => m(d, {
  cancelButton: {
    label: "Cancel",
    variant: u
  },
  confirmButton: {
    label: "Delete",
    variant: T,
    handler: r
  },
  header: t,
  message: e
}), F = (t) => Object.values(t).every(
  (e) => !e || (e == null ? void 0 : e.length) === 0 || !g(e) && c(e)
), S = (t, e, r = []) => t.length !== e.length ? !1 : c(
  w(t, e, (n, i) => E(a(n, r), a(i, r)))
), N = (t) => {
  const e = s(t, "response.data.detail", null);
  return typeof e == "string" ? e : s(e, "reason", "");
}, V = (t, e) => {
  const n = N(t) || t.message;
  return (!n || n === "Not Found" || n.startsWith("Request failed with status code")) && e ? e : n || "";
}, W = () => {
  const t = {
    transition: "transitionend",
    OTransition: "oTransitionEnd",
    MozTransition: "transitionend",
    WebkitTransition: "webkitTransitionEnd"
  };
  let e = document.body.style;
  for (let r in t)
    if (e[r] !== void 0)
      return t[r];
}, _ = (t) => getComputedStyle(document.documentElement).getPropertyValue(t).trim(), x = (t) => {
  var e;
  return (e = new URLSearchParams(t).get(y)) == null ? void 0 : e.toLowerCase();
}, q = async (t, e, r = !1) => {
  let n = Promise.resolve(!0);
  return t.counter > 0 && (n = await new Promise((i) => {
    const o = (p) => {
      window.removeEventListener("discardChanges", o), window.removeEventListener("cancelLeave", o), i(p);
    };
    window.addEventListener("discardChanges", () => o(!0)), window.addEventListener("cancelLeave", () => o(!1)), e(h(r)), e(v(!0));
  })), n;
}, H = (t, e) => {
  var r;
  if (!((r = navigator.clipboard) != null && r.writeText))
    return l(
      e,
      null,
      "",
      "Copy to clipboard failed due to unsecured connection"
    );
  navigator.clipboard.writeText(t).then(() => {
    e(
      C({
        status: 200,
        id: Math.random(),
        message: "Copied to clipboard successfully"
      })
    );
  }).catch((n) => {
    l(e, n, "", "Copy to clipboard failed");
  });
}, I = (t, e) => {
  if ((typeof t == "string" && t.trim() !== "" || typeof t == "number") && !isNaN(t)) {
    const r = parseFloat(t);
    return r % 1 === 0 ? r : +r.toFixed(e ?? 2);
  }
  return t;
}, j = (t) => new URL(t, window.location.origin).toString();
export {
  S as areArraysEqual,
  H as copyToClipboard,
  j as generateUrlFromRouterPath,
  N as getErrorDetail,
  V as getErrorMsg,
  _ as getScssVariableValue,
  W as getTransitionEndEventName,
  x as getViewMode,
  F as isEveryObjectValueEmpty,
  M as openConfirmPopUp,
  O as openDeleteConfirmPopUp,
  m as openPopUp,
  q as performDetailsActionHelper,
  I as roundFloats
};
//# sourceMappingURL=common.util.mjs.map
