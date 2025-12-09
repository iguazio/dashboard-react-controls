const a = (t, o) => {
  if (typeof window < "u")
    try {
      const e = localStorage.getItem(t);
      return e !== null ? e : o;
    } catch (e) {
      console.log(e);
    }
}, l = (t, o) => {
  localStorage.setItem(t, o);
};
export {
  a as getStorageValue,
  l as setStorageValue
};
//# sourceMappingURL=localStorageService.util.mjs.map
