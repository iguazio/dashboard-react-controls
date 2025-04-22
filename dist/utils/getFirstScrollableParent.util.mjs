const l = /(auto|scroll|hidden)/, e = (t, o) => getComputedStyle(t, null).getPropertyValue(o), r = (t) => l.test(e(t, "overflow") + e(t, "overflow-y") + e(t, "overflow-x")), c = (t) => !t || t === document.body ? document.body : r(t) ? t : c(t.parentNode);
export {
  c as getFirstScrollableParent
};
//# sourceMappingURL=getFirstScrollableParent.util.mjs.map
