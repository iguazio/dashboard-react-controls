import { useState as h, useMemo as k, useRef as d, useCallback as b, useEffect as C, useLayoutEffect as N } from "react";
import { throttle as P } from "lodash";
import { getScssVariableValue as x, getTransitionEndEventName as D, isEveryObjectValueEmpty as F } from "../utils/common.util.mjs";
import { getFirstScrollableParent as T } from "../utils/getFirstScrollableParent.util.mjs";
const K = (s, E, R) => {
  const [o, c] = h(!1), [a, z] = h({}), [j, y] = h(!1), [L, O] = h(0), [V, H] = h(8), S = k(
    () => parseInt(x("--chipBlockMarginRight")),
    []
  ), p = k(() => D(), []), f = d(), I = d(), u = d(), r = d(), g = b(
    (e) => {
      var l, n;
      (!s || s && E) && ((l = u.current) != null && l.contains(e.target) && !o ? c(!0) : c(!1)), e && ((n = u.current) != null && n.contains(e.target)) && e.stopPropagation();
    },
    [s, o, E]
  );
  C(() => (o && window.addEventListener("click", g, !0), () => window.removeEventListener("click", g, !0)), [o, g]), C(() => {
    var e;
    (e = f.current) != null && e.getBoundingClientRect().width && O((l) => {
      var n;
      if (!l)
        return (n = f.current) == null ? void 0 : n.getBoundingClientRect().width;
    });
  }, []);
  const m = b(
    (e) => {
      e.target.parentElement !== (r == null ? void 0 : r.current) && c(!1);
    },
    [r]
  );
  C(() => (o && window.addEventListener("scroll", m, !0), () => window.removeEventListener("scroll", m, !0)), [m, o]);
  const w = b(() => {
    var e, l;
    if (r != null && r.current) {
      const i = T(u.current.offsetParent).getBoundingClientRect(), t = (e = u.current) == null ? void 0 : e.getBoundingClientRect();
      (t.left < i.left || t.top < i.top || t.right > i.right || t.bottom > i.bottom || t.right > window.innerWidth || t.bottom > window.innerHeight) && c(!1);
    }
    if (!s && !F(a)) {
      const n = R ? L : (l = f.current) == null ? void 0 : l.getBoundingClientRect().width;
      let i = 0, t = 0;
      const W = 65;
      Object.values(a).every((v, B) => i + v > n || Object.values(a).length > 1 && i + v + S + W > n ? (t = B, !1) : (i += v, B === Object.values(a).length - 1 && (t = 8), !0)), H(t), y(!0);
    }
  }, [S, L, a, s, R]);
  return N(() => {
    w();
  }, [w]), C(() => {
    const e = P(w, 500);
    if (!s)
      return window.addEventListener("resize", e), window.addEventListener(p, e), () => {
        window.removeEventListener("resize", e), window.removeEventListener(p, e);
      };
  }, [w, s, p]), {
    chipsCellRef: f,
    chipsWrapperRef: I,
    handleShowElements: g,
    hiddenChipsCounterRef: u,
    hiddenChipsPopUpRef: r,
    setChipsSizes: z,
    setShowHiddenChips: c,
    showChips: j,
    showHiddenChips: o,
    visibleChipsCount: V
  };
};
export {
  K as useChipCell
};
//# sourceMappingURL=useChipCell.hook.mjs.map
