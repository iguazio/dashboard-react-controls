import { jsx as i } from "react/jsx-runtime";
import o, { useLayoutEffect as r } from "react";
import s from "./Loader.mjs";
const l = () => (r(() => {
  const e = document.getElementById("overlay_container"), t = e ? e.style.visibility : "visible";
  return e && (e.style.visibility = "hidden"), () => {
    e && (e.style.visibility = t);
  };
}, []), /* @__PURE__ */ i(s, {})), c = o.memo(l);
export {
  c as default
};
//# sourceMappingURL=LoaderForSuspenseFallback.mjs.map
