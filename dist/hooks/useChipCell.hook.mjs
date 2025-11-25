import { useState as h, useMemo as V, useRef as w, useCallback as R, useEffect as m, useLayoutEffect as A } from "react";
import { throttle as G } from "lodash";
import { getScssVariableValue as J, getTransitionEndEventName as K, isEveryObjectValueEmpty as Q } from "../utils/common.util.mjs";
import { getFirstScrollableParent as X } from "../utils/getFirstScrollableParent.util.mjs";
const M = (i, z, B) => {
  const [o, u] = h(!1), [v, H] = h({}), [I, j] = h(!1), [W, x] = h(0), [N, O] = h(8), E = V(
    () => parseInt(J("--chipBlockMarginRight")),
    []
  ), S = V(() => K(), []), a = w(), P = w(), c = w(), n = w(), f = R(
    (e) => {
      var s, r;
      (!i || i && z) && ((s = c.current) != null && s.contains(e.target) && !o ? u(!0) : u(!1)), e && ((r = c.current) != null && r.contains(e.target)) && e.stopPropagation();
    },
    [i, o, z]
  );
  m(() => (o && window.addEventListener("click", f, !0), () => window.removeEventListener("click", f, !0)), [o, f]), m(() => {
    var e;
    (e = a.current) != null && e.getBoundingClientRect().width && x((s) => {
      var r;
      if (!s)
        return (r = a.current) == null ? void 0 : r.getBoundingClientRect().width;
    });
  }, []);
  const b = R(
    (e) => {
      e.target.parentElement !== (n == null ? void 0 : n.current) && u(!1);
    },
    [n]
  );
  m(() => (o && window.addEventListener("scroll", b, !0), () => window.removeEventListener("scroll", b, !0)), [b, o]);
  const d = R(() => {
    var e, s, r;
    if (n != null && n.current) {
      const l = X(c.current.offsetParent).getBoundingClientRect(), t = (e = c.current) == null ? void 0 : e.getBoundingClientRect();
      (t.left < l.left || t.top < l.top || t.right > l.right || t.bottom > l.bottom || t.right > window.innerWidth || t.bottom > window.innerHeight) && u(!1);
    }
    if (!i && !Q(v)) {
      const L = B ? W : (s = a.current) == null ? void 0 : s.getBoundingClientRect().width, l = (((r = c.current) == null ? void 0 : r.getBoundingClientRect().width) ?? 0) + E;
      let t = 0, g = 0;
      const C = Object.values(v);
      C.every((D, k) => {
        const F = D + E, y = k === C.length - 1, p = t + F, T = p + l > L, q = p > L;
        return T ? y && !q ? (t = p, g = C.length, !0) : (g = k, !1) : (t = p, y && (g = C.length), !0);
      }), O(g), j(!0);
    }
  }, [E, W, v, i, B]);
  return A(() => {
    d();
  }, [d]), m(() => {
    const e = G(d, 500);
    if (!i)
      return window.addEventListener("resize", e), window.addEventListener(S, e), () => {
        window.removeEventListener("resize", e), window.removeEventListener(S, e);
      };
  }, [d, i, S]), {
    chipsCellRef: a,
    chipsWrapperRef: P,
    handleShowElements: f,
    hiddenChipsCounterRef: c,
    hiddenChipsPopUpRef: n,
    setChipsSizes: H,
    setShowHiddenChips: u,
    showChips: I,
    showHiddenChips: o,
    visibleChipsCount: N
  };
};
export {
  M as useChipCell
};
//# sourceMappingURL=useChipCell.hook.mjs.map
