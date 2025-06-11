import { isNil as n, isObject as s } from "lodash";
const c = (r = "") => r.length > 7 ? `...${r.slice(-7)}` : r, l = (r, t = ",") => n(r) ? "" : Array.isArray(r) ? r.join(t) : s(r) ? Object.values(r).join(t) : r.toString(), m = (r) => r.replace(/[&<>"'()\][]/g, ""), p = (r, t) => {
  const e = (r ?? "").trim();
  return e ? e.split(t) : [];
}, u = (r, t) => r.split(t).map((i) => i.trim());
export {
  m as deleteUnsafeHtml,
  l as joinDataOfArrayOrObject,
  u as splitTrim,
  p as trimSplit,
  c as truncateUid
};
//# sourceMappingURL=string.util.mjs.map
