import { useState as u, useMemo as v, useCallback as E, useEffect as g } from "react";
import y from "classnames";
import { getTransitionEndEventName as H } from "../utils/common.util.mjs";
const T = (r, t) => {
  const [f, i] = u(!1), [x, b] = u(!1), [w, M] = u(!1), a = v(() => H(), []), k = y(
    "chip-block-hidden",
    f ? "chip-block-hidden_top" : "chip-block-hidden_bottom",
    x ? "chip-block-hidden_left" : "chip-block-hidden_right",
    w && "chip-block-hidden_visible"
  ), c = E(() => {
    if (t != null && t.current && (r != null && r.current)) {
      const e = r.current.getBoundingClientRect(), o = Math.floor(window.innerWidth - e.left - e.width), n = Math.floor(
        window.innerHeight - e.top - e.height
      );
      let l = !1, s = !1;
      if (t.current.style.maxWidth = "100%", t.current.style.maxHeight = "100%", e.left > t.current.clientWidth)
        l = !0;
      else if (o > t.current.clientWidth)
        l = !1;
      else {
        l = e.left > o;
        const m = Math.max(e.left, o);
        t.current.style.maxWidth = `${m}px`;
      }
      if (t.current.style.right = l ? `${o}px` : "unset", t.current.style.left = l ? "unset" : `${e.left}px`, e.top > t.current.clientHeight + 10 + 20)
        s = !0;
      else if (n > t.current.clientHeight + 10 + 20)
        s = !1;
      else {
        s = e.top > n + 10;
        const m = Math.max(e.top, n) - 10 - 20;
        t.current.style.maxHeight = `${m}px`;
      }
      t.current.style.bottom = s ? `${n + e.height + 10}px` : "unset", t.current.style.top = s ? "unset" : `${e.bottom + 10}px`, i(s), b(l), M(!0);
    }
  }, [r, t]);
  return g(() => {
    if (t != null && t.current && (r != null && r.current))
      return window.addEventListener("resize", c), window.addEventListener(a, c), () => {
        window.removeEventListener("resize", c), window.removeEventListener(a, c);
      };
  }, [t, r, c, a]), g(() => {
    c();
  }, [c]), {
    hiddenChipsBlockClassNames: k
  };
};
export {
  T as useHiddenChipsBlock
};
//# sourceMappingURL=useHiddenChipsBlock.hook.mjs.map
