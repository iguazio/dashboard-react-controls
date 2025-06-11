const s = "savedParams", o = (r) => {
  var a;
  return atob(((a = new URLSearchParams(r)) == null ? void 0 : a.get(s)) ?? "") ?? "";
}, S = (r, a = !1, t = []) => {
  let e = "?";
  if (a) {
    const n = c(r, t);
    e = n ? `${n}&` : e;
  }
  return r ? `${e}${s}=${btoa(r)}` : "";
}, m = (r) => r ? `${s}=${btoa(r)}` : "", c = (r, a = []) => {
  const t = new URLSearchParams(r);
  a.forEach((n) => t.delete(n));
  const e = t.toString();
  return e ? `?${e}` : "";
};
export {
  c as getFilteredSearchParams,
  o as getSavedSearchParams,
  S as saveAndTransformSearchParams,
  m as transformSearchParams
};
//# sourceMappingURL=filter.util.mjs.map
