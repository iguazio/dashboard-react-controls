import { useState as w, useMemo as S, useRef as g, useCallback as C, useEffect as v, useLayoutEffect as H } from "react";
import { throttle as P } from "lodash";
import { getScssVariableValue as I, getTransitionEndEventName as N, isEveryObjectValueEmpty as W } from "../utils/common.util.mjs";
import { getFirstScrollableParent as x } from "../utils/getFirstScrollableParent.util.mjs";
const A = (s, b) => {
  const [o, l] = w(!1), [c, k] = w({}), [z, B] = w(!1), [j, y] = w(8), E = S(
    () => parseInt(I("--chipBlockMarginRight")),
    []
  ), m = S(() => N(), []), L = g(), O = g(), a = g(), n = g(), f = C(
    (e) => {
      var u, i;
      (!s || s && b) && ((u = a.current) != null && u.contains(e.target) && !o ? l(!0) : l(!1)), e && ((i = a.current) != null && i.contains(e.target)) && e.stopPropagation();
    },
    [s, o, b]
  );
  v(() => (o && window.addEventListener("click", f, !0), () => window.removeEventListener("click", f, !0)), [o, f]);
  const p = C(
    (e) => {
      e.target.parentElement !== (n == null ? void 0 : n.current) && l(!1);
    },
    [n]
  );
  v(() => (o && window.addEventListener("scroll", p, !0), () => window.removeEventListener("scroll", p, !0)), [p, o]);
  const h = C(() => {
    var e, u;
    if (n != null && n.current) {
      const r = x(a.current.offsetParent).getBoundingClientRect(), t = (e = a.current) == null ? void 0 : e.getBoundingClientRect();
      (t.left < r.left || t.top < r.top || t.right > r.right || t.bottom > r.bottom || t.right > window.innerWidth || t.bottom > window.innerHeight) && l(!1);
    }
    if (!s && !W(c)) {
      const i = (u = L.current) == null ? void 0 : u.getBoundingClientRect().width;
      let r = 0, t = 0;
      const V = 65;
      Object.values(c).every((d, R) => r + d > i || Object.values(c).length > 1 && r + d + E + V > i ? (t = R, !1) : (r += d, R === Object.values(c).length - 1 && (t = 8), !0)), y(t), B(!0);
    }
  }, [E, c, s]);
  return H(() => {
    h();
  }, [h]), v(() => {
    const e = P(h, 500);
    if (!s)
      return window.addEventListener("resize", e), window.addEventListener(m, e), () => {
        window.removeEventListener("resize", e), window.removeEventListener(m, e);
      };
  }, [h, s, m]), {
    chipsCellRef: L,
    chipsWrapperRef: O,
    handleShowElements: f,
    hiddenChipsCounterRef: a,
    hiddenChipsPopUpRef: n,
    setChipsSizes: k,
    setShowHiddenChips: l,
    showChips: z,
    showHiddenChips: o,
    visibleChipsCount: j
  };
};
export {
  A as useChipCell
};
//# sourceMappingURL=useChipCell.hook.mjs.map
