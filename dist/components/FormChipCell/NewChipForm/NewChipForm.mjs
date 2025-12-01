import { jsx as k, jsxs as ve } from "react/jsx-runtime";
import T, { useState as $, useMemo as H, useCallback as W, useEffect as f, useLayoutEffect as Fe, forwardRef as fe } from "react";
import o from "prop-types";
import j from "classnames";
import { isEmpty as h, get as D, throttle as we, isNil as G } from "lodash";
import re from "../NewChipInput/NewChipInput.mjs";
import Re from "../../../elements/OptionsMenu/OptionsMenu.mjs";
import be from "../../../elements/ValidationTemplate/ValidationTemplate.mjs";
import { CHIP_OPTIONS as ke } from "../../../types.mjs";
import { CLICK as We, TAB as J, TAB_SHIFT as Ie } from "../../../constants.mjs";
import { getTextWidth as z } from "../formChipCell.util.mjs";
import { getTransitionEndEventName as Ke } from "../../../utils/common.util.mjs";
import Ve from "../../../images/close.svg.mjs";
/* empty css                  */
const _e = {
  rules: {}
};
let x = ({
  chip: a,
  chipIndex: n,
  chipOptions: se,
  className: ie = "",
  editConfig: t,
  handleRemoveChip: ne,
  isEditable: d,
  keyName: V,
  meta: m,
  onChange: _,
  setChipSizeIsRecalculated: Q,
  setEditConfig: L,
  validationRules: le = _e.rules,
  valueName: ue
}, P) => {
  const [l, A] = $({
    isKeyOnly: a.isKeyOnly,
    key: a.key,
    value: a.value,
    keyFieldWidth: 0,
    valueFieldWidth: 0
  }), [y, ce] = $("key"), [U, oe] = $(le), [p, B] = $(!1), { background: X, borderColor: Y, borderRadius: Z, density: C, font: g } = se, v = H(() => d ? 25 : 20, [d]), F = H(() => d ? 35 : 20, [d]), M = H(() => Ke(), []), u = T.useRef({}), c = T.useRef({}), S = T.useRef(), E = T.useRef(), ae = j(
    ie,
    !t.isKeyFocused && "item_edited",
    !h(D(m, ["error", n, "key"], [])) && !h(l.key) && !a.disabled && "item_edited_invalid"
  ), de = j(
    "edit-chip-container",
    X && `edit-chip-container-background_${X}`,
    Y && `edit-chip-container-border_${Y}`,
    g && `edit-chip-container-font_${g}`,
    C && `edit-chip-container-density_${C}`,
    Z && `edit-chip-container-border_${Z}`,
    (t.isEdit || t.isNewChip) && "edit-chip-container_edited",
    a.disabled && "edit-chip-container_disabled edit-chip-container-font_disabled"
  ), me = j(
    "input-label-value",
    !t.isValueFocused && "item_edited",
    !h(D(m, ["error", n, "value"], [])) && !h(l.value) && "item_edited_invalid"
  ), pe = j(
    "item-icon-close",
    !a.disabled && t.chipIndex === n && d && "item-icon-close_invisible",
    !d && "item-icon-close_hidden"
  ), O = W(() => {
    var e;
    if (u.current) {
      const r = z(u.current) + 1, s = z(c.current) + 1, i = ((e = P.current) == null ? void 0 : e.clientWidth) - 50, K = r >= i / 2, q = s >= i / 2;
      let w = null, R = null;
      if (K && q)
        w = R = i / 2;
      else if (K) {
        R = l.value ? s : F;
        const b = i - R;
        w = b > r ? r : b;
      } else if (q) {
        w = l.key ? r : v;
        const b = i - w;
        R = b > s ? s : b;
      } else
        w = !l.key || r <= v ? v : r, R = !l.value || s <= F ? F : s;
      u.current.style.width = `${w}px`, h(c.current) || (c.current.style.width = `${R}px`), A((b) => ({
        ...b,
        keyFieldWidth: w,
        valueFieldWidth: R
      })), Q(!0);
    }
  }, [
    l.key,
    l.value,
    v,
    F,
    P,
    Q
  ]);
  f(() => {
    const e = we(O, 500);
    if (d)
      return window.addEventListener("resize", e), window.addEventListener(M, e), () => {
        window.removeEventListener("resize", e), window.removeEventListener(M, e);
      };
  }, [d, O, M]), f(() => {
    !l.keyFieldWidth && !l.valueFieldWidth && O();
  }, [l.keyFieldWidth, l.valueFieldWidth, O]);
  const N = W(
    (e, r) => {
      var s;
      t.chipIndex === n && (!(e.path ?? ((s = e.composedPath) == null ? void 0 : s.call(e))).includes(S.current) || r ? (_(e, We, !0), window.getSelection().removeAllRanges(), document.activeElement.blur()) : e.stopPropagation());
    },
    [_, S, n, t.chipIndex]
  ), I = W(
    (e) => {
      E != null && E.current && !E.current.contains(e.target) && (B(!1), N(e, !0));
    },
    [N]
  );
  f(() => (p && window.addEventListener("scroll", I, !0), () => {
    window.removeEventListener("scroll", I, !0);
  }), [I, p]), f(() => {
    t.chipIndex === n && (t.isKeyFocused ? u.current.focus() : t.isValueFocused && c.current.focus());
  }, [
    t.isKeyFocused,
    t.isValueFocused,
    u,
    c,
    n,
    t.chipIndex
  ]), f(() => (p && window.addEventListener("scroll", I, !0), () => {
    window.removeEventListener("scroll", I, !0);
  }), [I, p]), f(() => {
    if (t.isEdit)
      return document.addEventListener("click", N, !0), () => {
        document.removeEventListener("click", N, !0);
      };
  }, [N, t.isEdit]);
  const he = W(
    (e) => {
      if (t.chipIndex === n && d) {
        if (!e.shiftKey && e.key === J && t.isValueFocused)
          return _(e, J);
        if (e.shiftKey && e.key === J && t.isKeyFocused)
          return _(e, Ie);
      }
      e.stopPropagation();
    },
    [t, _, n, d]
  ), ee = W(
    (e) => {
      const r = e.target.name === V;
      t.chipIndex === n ? (r ? (u.current.selectionStart = u.current.selectionEnd, L((s) => ({
        ...s,
        isKeyFocused: !0,
        isValueFocused: !1
      }))) : (c.current.selectionStart = c.current.selectionEnd, L((s) => ({
        ...s,
        isKeyFocused: !1,
        isValueFocused: !0
      }))), e && e.stopPropagation()) : G(t.chipIndex) && (r ? u.current.selectionStart = u.current.selectionEnd : c.current.selectionStart = c.current.selectionEnd, L({
        chipIndex: n,
        isEdit: !0,
        isKeyFocused: r,
        isValueFocused: !r
      }));
    },
    [V, u, c, L, t.chipIndex, n]
  ), te = W(
    (e) => {
      var s;
      const r = ((s = P.current) == null ? void 0 : s.clientWidth) - 50;
      if (e.preventDefault(), e.target.name === V) {
        const i = z(u.current);
        A((K) => ({
          ...K,
          key: u.current.value,
          keyFieldWidth: u.current.value.length <= 1 ? v : i >= r ? r : i > v ? i + 2 : v
        }));
      } else {
        const i = z(c.current);
        A((K) => {
          var q;
          return {
            ...K,
            value: c.current.value,
            valueFieldWidth: ((q = c.current.value) == null ? void 0 : q.length) <= 1 ? F : i >= r ? r : i > F ? i + 2 : F
          };
        });
      }
    },
    [V, v, P, F]
  );
  Fe(() => {
    t.chipIndex === n && ce(t.isKeyFocused ? "key" : t.isValueFocused ? "value" : null);
  }, [t.isKeyFocused, t.isValueFocused, t.chipIndex, n]), f(() => {
    m.valid && p && B(!1);
  }, [m.valid, p]), f(() => {
    m.error && (oe((e) => {
      var r;
      return {
        ...e,
        [y]: (r = e[y]) == null ? void 0 : r.map((s) => ({
          ...s,
          isValid: h(D(m, ["error", t.chipIndex, y], [])) ? !0 : !m.error[t.chipIndex][y].some(
            (i) => i && i.name === s.name
          )
        }))
      };
    }), !p && B(!0));
  }, [m, p, y, t.chipIndex]);
  const ye = W(() => {
    var e;
    return (e = U[y]) == null ? void 0 : e.map(({ isValid: r = !1, label: s, name: i }) => /* @__PURE__ */ k(be, { valid: r, validationMessage: s }, i));
  }, [y, U]);
  return /* @__PURE__ */ ve(
    "div",
    {
      className: de,
      onKeyDown: (e) => !a.disabled && t.isEdit && he(e),
      ref: S,
      children: [
        /* @__PURE__ */ k(
          re,
          {
            className: ae,
            disabled: a.disabled || !d || !G(t.chipIndex) && t.chipIndex !== n,
            name: V,
            onChange: te,
            onFocus: ee,
            placeholder: "key",
            ref: u,
            style: { width: l.keyFieldWidth }
          }
        ),
        !l.isKeyOnly && /* @__PURE__ */ k("div", { className: "edit-chip-separator", children: ":" }),
        !l.isKeyOnly && /* @__PURE__ */ k(
          re,
          {
            className: me,
            disabled: a.disabled || !d || !G(t.chipIndex) && t.chipIndex !== n,
            name: ue,
            onChange: te,
            onFocus: ee,
            placeholder: "value",
            ref: c,
            style: { width: l.valueFieldWidth }
          }
        ),
        /* @__PURE__ */ k(
          "button",
          {
            disabled: a.disabled,
            className: pe,
            onClick: (e) => !a.disabled && ne(e, n),
            children: /* @__PURE__ */ k(Ve, {})
          }
        ),
        !a.disabled && (t.isKeyFocused ? !h(l.key) : !h(l.value)) && t.chipIndex === n && !h(D(m, ["error", t.chipIndex, y], [])) && /* @__PURE__ */ k(Re, { show: p, ref: { refInputContainer: S, validationRulesRef: E }, children: ye() })
      ]
    }
  );
};
x = fe(x);
x.displayName = "NewChipForm";
x.propTypes = {
  chip: o.object.isRequired,
  chipIndex: o.number.isRequired,
  chipOptions: ke.isRequired,
  className: o.string,
  editConfig: o.object.isRequired,
  handleRemoveChip: o.func.isRequired,
  isEditable: o.bool.isRequired,
  keyName: o.string.isRequired,
  meta: o.object.isRequired,
  onChange: o.func.isRequired,
  setChipSizeIsRecalculated: o.func.isRequired,
  setEditConfig: o.func.isRequired,
  validationRules: o.object,
  valueName: o.string.isRequired
};
const Be = x;
export {
  Be as default
};
//# sourceMappingURL=NewChipForm.mjs.map
