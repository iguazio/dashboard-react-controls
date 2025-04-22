import { set as a, isEqual as u } from "lodash";
const d = (e, r) => {
  let t = e[0], n = e[1], i = r.fields[t];
  if (i)
    for (let s in n)
      a(i, s, n[s]);
}, o = (e, r) => {
  const t = (n, i) => {
    if (i !== "")
      return i;
  };
  return !u(JSON.stringify(e, t), JSON.stringify(r, t));
}, c = (e = []) => e.reduce((r, t) => (r[t.data.key] = t.data.value, r), {}), f = (e = {}) => Object.entries(e).map(([r, t]) => ({
  data: {
    key: r,
    value: t
  }
})), m = (e) => e.submitting || e.invalid && e.submitFailed;
export {
  o as areFormValuesChanged,
  c as generateObjectFromKeyValue,
  m as isSubmitDisabled,
  f as parseObjectToKeyValue,
  d as setFieldState
};
//# sourceMappingURL=form.util.mjs.map
