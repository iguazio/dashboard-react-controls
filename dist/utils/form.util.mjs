import { set as u, isEqual as l, mapValues as m, some as c, get as d, isNil as o, isEmpty as y } from "lodash";
const b = (e, t) => {
  let r = e[0], i = e[1], n = t.fields[r];
  if (n)
    for (let s in i)
      u(n, s, i[s]);
}, O = (e, t) => {
  const r = (i, n) => {
    if (n !== "")
      return n;
  };
  return !l(
    JSON.stringify(a(e), r),
    JSON.stringify(a(t), r)
  );
}, F = (e = []) => e.reduce((t, r) => (t[r.data.key] = r.data.value, t), {}), g = (e = {}) => Object.entries(e).map(([t, r]) => ({
  data: {
    key: t,
    value: r
  }
})), E = (e) => e.submitting || e.invalid && e.submitFailed, a = (e = {}) => m(e, (t) => Array.isArray(t) ? f(t) : t), f = (e = []) => e.filter((t) => c(d(t, "data", t), (r) => !o(r) && !y(r)));
export {
  O as areFormValuesChanged,
  f as clearArrayFromEmptyObjectElements,
  F as generateObjectFromKeyValue,
  E as isSubmitDisabled,
  g as parseObjectToKeyValue,
  b as setFieldState
};
//# sourceMappingURL=form.util.mjs.map
