import { useEffect } from "react";
const useDetectOutsideClick = (ref, handler) => {
  useEffect(() => {
    const onClick = (e) => {
      e.stopPropagation();
      if (ref.current !== null && !ref.current.contains(e.target)) {
        handler(e);
      }
    };
    window.addEventListener("click", onClick);
    return () => {
      window.removeEventListener("click", onClick);
    };
  }, [ref, handler]);
};
export {
  useDetectOutsideClick
};
//# sourceMappingURL=useDetectOutsideClick.hook.mjs.map
