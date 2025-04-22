import { useEffect as i } from "react";
const r = (t, e) => {
  i(() => {
    const c = (n) => {
      n.stopPropagation(), t.current !== null && !t.current.contains(n.target) && e(n);
    };
    return window.addEventListener("click", c), () => {
      window.removeEventListener("click", c);
    };
  }, [t, e]);
};
export {
  r as useDetectOutsideClick
};
//# sourceMappingURL=useDetectOutsideClick.hook.mjs.map
