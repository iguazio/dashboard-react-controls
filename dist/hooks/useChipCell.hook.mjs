import { useState as h, useMemo as B, useRef as m, useCallback as p, useEffect as v, useLayoutEffect as H } from "react";
import { throttle as P } from "lodash";
import { getTransitionEndEventName as N, isEveryObjectValueEmpty as V } from "../utils/common.util.mjs";
import { getFirstScrollableParent as W } from "../utils/getFirstScrollableParent.util.mjs";
const T = (s, b) => {
  const [o, l] = h(!1), [c, S] = h({}), [R, z] = h(!1), [j, y] = h(8), d = B(() => N(), []), E = m(), O = m(), a = m(), n = m(), f = p(
    (e) => {
      var u, i;
      (!s || s && b) && ((u = a.current) != null && u.contains(e.target) && !o ? l(!0) : l(!1)), e && ((i = a.current) != null && i.contains(e.target)) && e.stopPropagation();
    },
    [s, o, b]
  );
  v(() => (o && window.addEventListener("click", f, !0), () => window.removeEventListener("click", f, !0)), [o, f]);
  const C = p(
    (e) => {
      e.target.parentElement !== (n == null ? void 0 : n.current) && l(!1);
    },
    [n]
  );
  v(() => (o && window.addEventListener("scroll", C, !0), () => window.removeEventListener("scroll", C, !0)), [C, o]);
  const w = p(() => {
    var e, u;
    if (n != null && n.current) {
      const r = W(a.current.offsetParent).getBoundingClientRect(), t = (e = a.current) == null ? void 0 : e.getBoundingClientRect();
      (t.left < r.left || t.top < r.top || t.right > r.right || t.bottom > r.bottom || t.right > window.innerWidth || t.bottom > window.innerHeight) && l(!1);
    }
    if (!s && !V(c)) {
      const i = (u = E.current) == null ? void 0 : u.getBoundingClientRect().width;
      let r = 0, t = 0;
      const k = 65;
      Object.values(c).every((g, L) => r + g > i || Object.values(c).length > 1 && r + g + k > i ? (t = L, !1) : (r += g, L === Object.values(c).length - 1 && (t = 8), !0)), y(t), z(!0);
    }
  }, [c, s]);
  return H(() => {
    w();
  }, [w]), v(() => {
    const e = P(w, 500);
    if (!s)
      return window.addEventListener("resize", e), window.addEventListener(d, e), () => {
        window.removeEventListener("resize", e), window.removeEventListener(d, e);
      };
  }, [w, s, d]), {
    chipsCellRef: E,
    chipsWrapperRef: O,
    handleShowElements: f,
    hiddenChipsCounterRef: a,
    hiddenChipsPopUpRef: n,
    setChipsSizes: S,
    setShowHiddenChips: l,
    showChips: R,
    showHiddenChips: o,
    visibleChipsCount: j
  };
};
export {
  T as useChipCell
};
//# sourceMappingURL=useChipCell.hook.mjs.map
