import { set as u, isEqual as l, mapValues as d, some as m, get as c, isNil as o, isEmpty as f } from "lodash";
const p = (e, t) => {
  let r = e[0], i = e[1], n = t.fields[r];
  if (n)
    for (let s in i)
      u(n, s, i[s]);
}, b = (e, t) => {
  const r = (i, n) => {
    if (n !== "")
      return n;
  };
  return !l(
    JSON.stringify(a(e), r),
    JSON.stringify(a(t), r)
  );
}, O = (e = []) => e.reduce((t, r) => (t[r.data.key] = r.data.value, t), {}), g = (e = {}) => Object.entries(e).map(([t, r]) => ({
  data: {
    key: t,
    value: r
  }
})), F = (e) => e.submitting || e.invalid && e.submitFailed, a = (e = {}) => d(e, (t) => Array.isArray(t) ? t.filter((r) => m(c(r, "data", r), (i) => !o(i) && !f(i))) : t);
export {
  b as areFormValuesChanged,
  O as generateObjectFromKeyValue,
  F as isSubmitDisabled,
  g as parseObjectToKeyValue,
  p as setFieldState
};
//# sourceMappingURL=form.util.mjs.map
