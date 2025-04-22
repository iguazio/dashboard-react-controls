import { create as c } from "react-modal-promise";
import { isEmpty as m, differenceWith as d, isEqual as p, omit as o, get as i } from "lodash";
import a from "../components/ConfirmDialog/ConfirmDialog.mjs";
import { PRIMARY_BUTTON as f, TERTIARY_BUTTON as s, DANGER_BUTTON as g } from "../constants.mjs";
const l = (t, e) => c(t)(e), v = (t, e) => l(a, {
  cancelButton: {
    label: "Cancel",
    variant: s
  },
  confirmButton: {
    label: "OK",
    variant: f,
    handler: e
  },
  header: "Are you sure?",
  message: t
}), D = (t, e, n) => l(a, {
  cancelButton: {
    label: "Cancel",
    variant: s
  },
  confirmButton: {
    label: "Delete",
    variant: g,
    handler: n
  },
  header: t,
  message: e
}), O = (t) => Object.values(t).every((e) => !e || e.length === 0), B = (t, e, n = []) => t.length !== e.length ? !1 : m(
  d(t, e, (r, u) => p(o(r, n), o(u, n)))
), T = (t) => {
  const e = i(t, "response.data.detail", null);
  return typeof e == "string" ? e : i(e, "reason", "");
}, C = (t, e) => {
  const r = T(t) || t.message;
  return (!r || r === "Not Found" || r.startsWith("Request failed with status code")) && e ? e : r || "";
}, N = () => {
  const t = {
    transition: "transitionend",
    OTransition: "oTransitionEnd",
    MozTransition: "transitionend",
    WebkitTransition: "webkitTransitionEnd"
  };
  let e = document.body.style;
  for (let n in t)
    if (e[n] !== void 0)
      return t[n];
}, R = (t) => getComputedStyle(document.documentElement).getPropertyValue(t).trim();
export {
  B as areArraysEqual,
  T as getErrorDetail,
  C as getErrorMsg,
  R as getScssVariableValue,
  N as getTransitionEndEventName,
  O as isEveryObjectValueEmpty,
  v as openConfirmPopUp,
  D as openDeleteConfirmPopUp,
  l as openPopUp
};
//# sourceMappingURL=common.util.mjs.map
