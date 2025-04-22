import { useRef as n, useCallback as i } from "react";
const a = () => {
  const t = n(null), c = n(null), r = n(null);
  return i((s, o) => (e) => new Promise((u) => {
    if (t.current && t.current(), e !== c.current) {
      const l = setTimeout(() => {
        c.current = e, r.current = s(e), u(r.current);
      }, o);
      t.current = () => {
        clearTimeout(l), u(!0);
      };
    } else
      u(r.current);
  }), []);
};
export {
  a as useDebounce
};
//# sourceMappingURL=useDebounce.hook.mjs.map
