import { jsx as W, jsxs as fe } from "react/jsx-runtime";
import T, { useState as $, useMemo as H, useCallback as I, useEffect as f, useLayoutEffect as se, forwardRef as we } from "react";
import a from "prop-types";
import j from "classnames";
import { isEmpty as h, get as z, throttle as Re, isNil as G } from "lodash";
import ne from "../NewChipInput/NewChipInput.mjs";
import ke from "../../../elements/OptionsMenu/OptionsMenu.mjs";
import be from "../../../elements/ValidationTemplate/ValidationTemplate.mjs";
import { CHIP_OPTIONS as We } from "../../../types.mjs";
import { CLICK as Ie, TAB as J, TAB_SHIFT as Ke } from "../../../constants.mjs";
import { getTextWidth as D } from "../formChipCell.util.mjs";
import { getTransitionEndEventName as Ve } from "../../../utils/common.util.mjs";
import _e from "../../../images/close.svg.mjs";
/* empty css                  */
const Ne = {
  rules: {}
};
let E = ({
  chip: d,
  chipIndex: i,
  chipOptions: ie,
  className: ue = "",
  editConfig: r,
  handleRemoveChip: le,
  isDeletable: Q,
  isEditable: u,
  keyName: N,
  meta: m,
  onChange: q,
  setChipSizeIsRecalculated: U,
  setEditConfig: O,
  validationRules: oe = Ne.rules,
  valueName: ce
}, w) => {
  const [l, A] = $({
    isKeyOnly: d.isKeyOnly,
    key: d.key,
    value: d.value,
    keyFieldWidth: 0,
    valueFieldWidth: 0
  }), [y, ae] = $("key"), [X, de] = $(oe), [p, B] = $(!1), { background: Y, borderColor: Z, borderRadius: C, density: g, font: ee } = ie, v = H(() => u ? 25 : 20, [u]), F = H(() => u ? 35 : 20, [u]), M = H(() => Ve(), []), o = T.useRef({}), c = T.useRef({}), S = T.useRef(), x = T.useRef(), me = j(
    ue,
    !r.isKeyFocused && "item_edited",
    !h(z(m, ["error", i, "key"], [])) && !h(l.key) && !d.disabled && u && "item_edited_invalid"
  ), pe = j(
    "edit-chip-container",
    Y && `edit-chip-container-background_${Y}`,
    Z && `edit-chip-container-border_${Z}`,
    ee && `edit-chip-container-font_${ee}`,
    g && `edit-chip-container-density_${g}`,
    C && `edit-chip-container-border_${C}`,
    (r.isEdit || r.isNewChip) && "edit-chip-container_edited",
    u && d.disabled && "edit-chip-container_disabled edit-chip-container-font_disabled"
  ), he = j(
    "input-label-value",
    !r.isValueFocused && "item_edited",
    !h(z(m, ["error", i, "value"], [])) && !h(l.value) && u && "item_edited_invalid"
  ), ye = j(
    "item-icon-close",
    !d.disabled && (r.chipIndex === i && u || !Q && !u) && "item-icon-close invisible",
    !u && !Q && "item-icon-close hidden"
  ), K = I(() => {
    var e;
    if (o.current) {
      const t = D(o.current) + 1, s = D(c.current) + 1, n = ((e = w.current) == null ? void 0 : e.clientWidth) - 50, _ = t >= n / 2, P = s >= n / 2;
      let R = null, k = null;
      if (_ && P)
        R = k = n / 2;
      else if (_) {
        k = l.value ? s : F;
        const b = n - k;
        R = b > t ? t : b;
      } else if (P) {
        R = l.key ? t : v;
        const b = n - R;
        k = b > s ? s : b;
      } else
        R = !l.key || t <= v ? v : t, k = !l.value || s <= F ? F : s;
      o.current.style.width = `${R}px`, h(c.current) || (c.current.style.width = `${k}px`), A((b) => ({
        ...b,
        keyFieldWidth: R,
        valueFieldWidth: k
      })), U(!0);
    }
  }, [
    l.key,
    l.value,
    v,
    F,
    w,
    U
  ]);
  f(() => {
    if (!w.current) return;
    const e = w.current, t = new ResizeObserver(K);
    return t.observe(e), () => t.unobserve(e);
  }, [w, K]), f(() => {
    const e = Re(K, 500);
    if (u)
      return window.addEventListener("resize", e), window.addEventListener(M, e), () => {
        window.removeEventListener("resize", e), window.removeEventListener(M, e);
      };
  }, [u, K, M]), se(() => {
    !l.keyFieldWidth && !l.valueFieldWidth && K();
  }, [l.keyFieldWidth, l.valueFieldWidth, K]);
  const L = I(
    (e, t) => {
      var s;
      r.chipIndex === i && (!(e.path ?? ((s = e.composedPath) == null ? void 0 : s.call(e))).includes(S.current) || t ? (q(e, Ie, !0), window.getSelection().removeAllRanges(), document.activeElement.blur()) : e.stopPropagation());
    },
    [q, S, i, r.chipIndex]
  ), V = I(
    (e) => {
      x != null && x.current && !x.current.contains(e.target) && (B(!1), L(e, !0));
    },
    [L]
  );
  f(() => (p && window.addEventListener("scroll", V, !0), () => {
    window.removeEventListener("scroll", V, !0);
  }), [V, p]), f(() => {
    r.chipIndex === i && (r.isKeyFocused ? o.current.focus() : r.isValueFocused && c.current.focus());
  }, [
    r.isKeyFocused,
    r.isValueFocused,
    o,
    c,
    i,
    r.chipIndex
  ]), f(() => (p && window.addEventListener("scroll", V, !0), () => {
    window.removeEventListener("scroll", V, !0);
  }), [V, p]), f(() => {
    if (r.isEdit)
      return document.addEventListener("click", L, !0), () => {
        document.removeEventListener("click", L, !0);
      };
  }, [L, r.isEdit]);
  const ve = I(
    (e) => {
      if (r.chipIndex === i && u) {
        if (!e.shiftKey && e.key === J && r.isValueFocused)
          return q(e, J);
        if (e.shiftKey && e.key === J && r.isKeyFocused)
          return q(e, Ke);
      }
      e.stopPropagation();
    },
    [r, q, i, u]
  ), re = I(
    (e) => {
      const t = e.target.name === N;
      r.chipIndex === i ? (t ? (o.current.selectionStart = o.current.selectionEnd, O((s) => ({
        ...s,
        isKeyFocused: !0,
        isValueFocused: !1
      }))) : (c.current.selectionStart = c.current.selectionEnd, O((s) => ({
        ...s,
        isKeyFocused: !1,
        isValueFocused: !0
      }))), e && e.stopPropagation()) : G(r.chipIndex) && (t ? o.current.selectionStart = o.current.selectionEnd : c.current.selectionStart = c.current.selectionEnd, O({
        chipIndex: i,
        isEdit: !0,
        isKeyFocused: t,
        isValueFocused: !t
      }));
    },
    [N, o, c, O, r.chipIndex, i]
  ), te = I(
    (e) => {
      var s;
      const t = ((s = w.current) == null ? void 0 : s.clientWidth) - 50;
      if (e.preventDefault(), e.target.name === N) {
        const n = D(o.current);
        A((_) => ({
          ..._,
          key: o.current.value,
          keyFieldWidth: o.current.value.length <= 1 ? v : n >= t ? t : n > v ? n + 2 : v
        }));
      } else {
        const n = D(c.current);
        A((_) => {
          var P;
          return {
            ..._,
            value: c.current.value,
            valueFieldWidth: ((P = c.current.value) == null ? void 0 : P.length) <= 1 ? F : n >= t ? t : n > F ? n + 2 : F
          };
        });
      }
    },
    [N, v, w, F]
  );
  se(() => {
    r.chipIndex === i && ae(r.isKeyFocused ? "key" : r.isValueFocused ? "value" : null);
  }, [r.isKeyFocused, r.isValueFocused, r.chipIndex, i]), f(() => {
    m.valid && p && B(!1);
  }, [m.valid, p]), f(() => {
    m.error && (de((e) => {
      var t;
      return {
        ...e,
        [y]: (t = e[y]) == null ? void 0 : t.map((s) => ({
          ...s,
          isValid: h(z(m, ["error", r.chipIndex, y], [])) ? !0 : !m.error[r.chipIndex][y].some(
            (n) => n && n.name === s.name
          )
        }))
      };
    }), !p && B(!0));
  }, [m, p, y, r.chipIndex]);
  const Fe = I(() => {
    var e;
    return (e = X[y]) == null ? void 0 : e.map(({ isValid: t = !1, label: s, name: n }) => /* @__PURE__ */ W(be, { valid: t, validationMessage: s }, n));
  }, [y, X]);
  return /* @__PURE__ */ fe(
    "div",
    {
      className: pe,
      onKeyDown: (e) => !d.disabled && r.isEdit && ve(e),
      ref: S,
      children: [
        /* @__PURE__ */ W(
          ne,
          {
            className: me,
            disabled: d.disabled || !u || !G(r.chipIndex) && r.chipIndex !== i,
            name: N,
            onChange: te,
            onFocus: re,
            placeholder: u ? "key" : "",
            ref: o,
            style: { width: l.keyFieldWidth }
          }
        ),
        !l.isKeyOnly && /* @__PURE__ */ W("div", { className: "edit-chip-separator", children: ":" }),
        !l.isKeyOnly && /* @__PURE__ */ W(
          ne,
          {
            className: he,
            disabled: d.disabled || !u || !G(r.chipIndex) && r.chipIndex !== i,
            name: ce,
            onChange: te,
            onFocus: re,
            placeholder: u ? "value" : "",
            ref: c,
            style: { width: l.valueFieldWidth }
          }
        ),
        /* @__PURE__ */ W(
          "button",
          {
            disabled: d.disabled,
            className: ye,
            onClick: (e) => !d.disabled && le(e, i),
            children: /* @__PURE__ */ W(_e, {})
          }
        ),
        !d.disabled && (r.isKeyFocused ? !h(l.key) : !h(l.value)) && r.chipIndex === i && !h(z(m, ["error", r.chipIndex, y], [])) && /* @__PURE__ */ W(ke, { show: p, ref: { refInputContainer: S, validationRulesRef: x }, children: Fe() })
      ]
    }
  );
};
E = we(E);
E.displayName = "NewChipForm";
E.propTypes = {
  chip: a.object.isRequired,
  chipIndex: a.number.isRequired,
  chipOptions: We.isRequired,
  className: a.string,
  editConfig: a.object.isRequired,
  handleRemoveChip: a.func.isRequired,
  isDeletable: a.bool.isRequired,
  isEditable: a.bool.isRequired,
  keyName: a.string.isRequired,
  meta: a.object.isRequired,
  onChange: a.func.isRequired,
  setChipSizeIsRecalculated: a.func.isRequired,
  setEditConfig: a.func.isRequired,
  validationRules: a.object,
  valueName: a.string.isRequired
};
const Me = E;
export {
  Me as default
};
//# sourceMappingURL=NewChipForm.mjs.map
