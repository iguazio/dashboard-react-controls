import { useState as h, useMemo as y, useRef as m, useCallback as R, useEffect as a } from "react";
import { throttle as A } from "lodash";
import { getScssVariableValue as G, getTransitionEndEventName as J, isEveryObjectValueEmpty as K } from "../utils/common.util.mjs";
import { getFirstScrollableParent as Q } from "../utils/getFirstScrollableParent.util.mjs";
const $ = (i, z, B) => {
  const [o, u] = h(!1), [v, H] = h({}), [I, j] = h(!1), [W, x] = h(0), [N, O] = h(8), S = y(
    () => parseInt(G("--chipBlockMarginRight")),
    []
  ), b = y(() => J(), []), d = m(), P = m(), c = m(), n = m(), g = R(
    (e) => {
      var s, r;
      (!i || i && z) && ((s = c.current) != null && s.contains(e.target) && !o ? u(!0) : u(!1)), e && ((r = c.current) != null && r.contains(e.target)) && e.stopPropagation();
    },
    [i, o, z]
  );
  a(() => (o && window.addEventListener("click", g, !0), () => window.removeEventListener("click", g, !0)), [o, g]), a(() => {
    var e;
    (e = d.current) != null && e.getBoundingClientRect().width && x((s) => {
      var r;
      if (!s)
        return (r = d.current) == null ? void 0 : r.getBoundingClientRect().width;
    });
  }, []);
  const E = R(
    (e) => {
      e.target.parentElement !== (n == null ? void 0 : n.current) && u(!1);
    },
    [n]
  );
  a(() => (o && window.addEventListener("scroll", E, !0), () => window.removeEventListener("scroll", E, !0)), [E, o]);
  const C = R(() => {
    var e, s, r;
    if (n != null && n.current) {
      const l = Q(c.current.offsetParent).getBoundingClientRect(), t = (e = c.current) == null ? void 0 : e.getBoundingClientRect();
      (t.left < l.left || t.top < l.top || t.right > l.right || t.bottom > l.bottom || t.right > window.innerWidth || t.bottom > window.innerHeight) && u(!1);
    }
    if (!i && !K(v)) {
      const L = B ? W : (s = d.current) == null ? void 0 : s.getBoundingClientRect().width, l = (((r = c.current) == null ? void 0 : r.getBoundingClientRect().width) ?? 0) + S;
      let t = 0, f = 0;
      const p = Object.values(v);
      p.every((D, k) => {
        const F = D + S, V = k === p.length - 1, w = t + F, T = w + l > L, q = w > L;
        return T ? V && !q ? (t = w, f = p.length, !0) : (f = k, !1) : (t = w, V && (f = p.length), !0);
      }), O(f), j(!0);
    }
  }, [S, W, v, i, B]);
  return a(() => {
    C();
  }, [C]), a(() => {
    const e = A(C, 500);
    if (!i)
      return window.addEventListener("resize", e), window.addEventListener(b, e), () => {
        window.removeEventListener("resize", e), window.removeEventListener(b, e);
      };
  }, [C, i, b]), {
    chipsCellRef: d,
    chipsWrapperRef: P,
    handleShowElements: g,
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
  $ as useChipCell
};
//# sourceMappingURL=useChipCell.hook.mjs.map
