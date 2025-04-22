import { jsx as R, jsxs as ye } from "react/jsx-runtime";
import T, { useState as $, useMemo as H, useCallback as W, useEffect as f, useLayoutEffect as ve, forwardRef as Fe } from "react";
import d from "prop-types";
import j from "classnames";
import { isEmpty as h, get as D, throttle as fe, isNil as G } from "lodash";
import te from "../NewChipInput/NewChipInput.mjs";
import we from "../../../elements/OptionsMenu/OptionsMenu.mjs";
import be from "../../../elements/ValidationTemplate/ValidationTemplate.mjs";
import { CHIP_OPTIONS as ke } from "../../../types.mjs";
import { CLICK as Re, TAB as J, TAB_SHIFT as We } from "../../../constants.mjs";
import { getTextWidth as z } from "../formChipCell.util.mjs";
import { getTransitionEndEventName as Ie } from "../../../utils/common.util.mjs";
import Ke from "../../../images/close.svg.mjs";
/* empty css                  */
const Ve = {
  rules: {}
};
let L = ({
  chip: o,
  chipIndex: n,
  chipOptions: re,
  className: se = "",
  editConfig: t,
  handleRemoveChip: ie,
  isEditable: a,
  keyName: V,
  meta: m,
  onChange: _,
  setEditConfig: P,
  validationRules: ne = Ve.rules,
  valueName: le
}, q) => {
  const [l, A] = $({
    isKeyOnly: o.isKeyOnly,
    key: o.key,
    value: o.value,
    keyFieldWidth: 0,
    valueFieldWidth: 0
  }), [y, ue] = $("key"), [Q, ce] = $(ne), [p, B] = $(!1), { background: U, borderColor: X, borderRadius: Y, density: Z, font: C } = re, v = H(() => a ? 25 : 20, [a]), F = H(() => a ? 35 : 20, [a]), M = H(() => Ie(), []), u = T.useRef({}), c = T.useRef({}), S = T.useRef(), E = T.useRef(), oe = j(
    se,
    !t.isKeyFocused && "item_edited",
    !h(D(m, ["error", n, "key"], [])) && !h(l.key) && !o.disabled && "item_edited_invalid"
  ), ae = j(
    "edit-chip-container",
    U && `edit-chip-container-background_${U}`,
    X && `edit-chip-container-border_${X}`,
    C && `edit-chip-container-font_${C}`,
    Z && `edit-chip-container-density_${Z}`,
    Y && `edit-chip-container-border_${Y}`,
    (t.isEdit || t.isNewChip) && "edit-chip-container_edited",
    o.disabled && "edit-chip-container_disabled edit-chip-container-font_disabled"
  ), de = j(
    "input-label-value",
    !t.isValueFocused && "item_edited",
    !h(D(m, ["error", n, "value"], [])) && !h(l.value) && "item_edited_invalid"
  ), me = j(
    "item-icon-close",
    !o.disabled && t.chipIndex === n && a && "item-icon-close_invisible",
    !a && "item-icon-close_hidden"
  ), O = W(() => {
    var e;
    if (u.current) {
      const r = z(u.current) + 1, s = z(c.current) + 1, i = ((e = q.current) == null ? void 0 : e.clientWidth) - 50, K = r >= i / 2, x = s >= i / 2;
      let w = null, b = null;
      if (K && x)
        w = b = i / 2;
      else if (K) {
        b = l.value ? s : F;
        const k = i - b;
        w = k > r ? r : k;
      } else if (x) {
        w = l.key ? r : v;
        const k = i - w;
        b = k > s ? s : k;
      } else
        w = !l.key || r <= v ? v : r, b = !l.value || s <= F ? F : s;
      u.current.style.width = `${w}px`, h(c.current) || (c.current.style.width = `${b}px`), A((k) => ({
        ...k,
        keyFieldWidth: w,
        valueFieldWidth: b
      }));
    }
  }, [l.key, l.value, v, F, q]);
  f(() => {
    const e = fe(O, 500);
    if (a)
      return window.addEventListener("resize", e), window.addEventListener(M, e), () => {
        window.removeEventListener("resize", e), window.removeEventListener(M, e);
      };
  }, [a, O, M]), f(() => {
    !l.keyFieldWidth && !l.valueFieldWidth && O();
  }, [l.keyFieldWidth, l.valueFieldWidth, O]);
  const N = W(
    (e, r) => {
      var s;
      t.chipIndex === n && (!(e.path ?? ((s = e.composedPath) == null ? void 0 : s.call(e))).includes(S.current) || r ? (_(e, Re, !0), window.getSelection().removeAllRanges(), document.activeElement.blur()) : e.stopPropagation());
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
  }), [p, I]), f(() => {
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
  const pe = W(
    (e) => {
      if (t.chipIndex === n && a) {
        if (!e.shiftKey && e.key === J && t.isValueFocused)
          return _(e, J);
        if (e.shiftKey && e.key === J && t.isKeyFocused)
          return _(e, We);
      }
      e.stopPropagation();
    },
    [t, _, n, a]
  ), g = W(
    (e) => {
      const r = e.target.name === V;
      t.chipIndex === n ? (r ? (u.current.selectionStart = u.current.selectionEnd, P((s) => ({
        ...s,
        isKeyFocused: !0,
        isValueFocused: !1
      }))) : (c.current.selectionStart = c.current.selectionEnd, P((s) => ({
        ...s,
        isKeyFocused: !1,
        isValueFocused: !0
      }))), e && e.stopPropagation()) : G(t.chipIndex) && (r ? u.current.selectionStart = u.current.selectionEnd : c.current.selectionStart = c.current.selectionEnd, P({
        chipIndex: n,
        isEdit: !0,
        isKeyFocused: r,
        isValueFocused: !r
      }));
    },
    [V, u, c, P, t.chipIndex, n]
  ), ee = W(
    (e) => {
      var s;
      const r = ((s = q.current) == null ? void 0 : s.clientWidth) - 50;
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
          var x;
          return {
            ...K,
            value: c.current.value,
            valueFieldWidth: ((x = c.current.value) == null ? void 0 : x.length) <= 1 ? F : i >= r ? r : i > F ? i + 2 : F
          };
        });
      }
    },
    [V, v, q, F]
  );
  ve(() => {
    t.chipIndex === n && ue(t.isKeyFocused ? "key" : t.isValueFocused ? "value" : null);
  }, [t.isKeyFocused, t.isValueFocused, t.chipIndex, n]), f(() => {
    m.valid && p && B(!1);
  }, [m.valid, p]), f(() => {
    m.error && (ce((e) => {
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
  const he = W(() => {
    var e;
    return (e = Q[y]) == null ? void 0 : e.map(({ isValid: r = !1, label: s, name: i }) => /* @__PURE__ */ R(be, { valid: r, validationMessage: s }, i));
  }, [y, Q]);
  return /* @__PURE__ */ ye(
    "div",
    {
      className: ae,
      onKeyDown: (e) => !o.disabled && t.isEdit && pe(e),
      ref: S,
      children: [
        /* @__PURE__ */ R(
          te,
          {
            className: oe,
            disabled: o.disabled || !a || !G(t.chipIndex) && t.chipIndex !== n,
            name: V,
            onChange: ee,
            onFocus: g,
            placeholder: "key",
            ref: u,
            style: { width: l.keyFieldWidth }
          }
        ),
        !l.isKeyOnly && /* @__PURE__ */ R("div", { className: "edit-chip-separator", children: ":" }),
        !l.isKeyOnly && /* @__PURE__ */ R(
          te,
          {
            className: de,
            disabled: o.disabled || !a || !G(t.chipIndex) && t.chipIndex !== n,
            name: le,
            onChange: ee,
            onFocus: g,
            placeholder: "value",
            ref: c,
            style: { width: l.valueFieldWidth }
          }
        ),
        /* @__PURE__ */ R(
          "button",
          {
            disabled: o.disabled,
            className: me,
            onClick: (e) => !o.disabled && ie(e, n),
            children: /* @__PURE__ */ R(Ke, {})
          }
        ),
        !o.disabled && (t.isKeyFocused ? !h(l.key) : !h(l.value)) && t.chipIndex === n && !h(D(m, ["error", t.chipIndex, y], [])) && /* @__PURE__ */ R(we, { show: p, ref: { refInputContainer: S, validationRulesRef: E }, children: he() })
      ]
    }
  );
};
L = Fe(L);
L.displayName = "NewChipForm";
L.propTypes = {
  chip: d.object.isRequired,
  chipIndex: d.number.isRequired,
  chipOptions: ke.isRequired,
  className: d.string,
  editConfig: d.object.isRequired,
  handleRemoveChip: d.func.isRequired,
  isEditable: d.bool.isRequired,
  keyName: d.string.isRequired,
  meta: d.object.isRequired,
  onChange: d.func.isRequired,
  setEditConfig: d.func.isRequired,
  validationRules: d.object,
  valueName: d.string.isRequired
};
const Ae = L;
export {
  Ae as default
};
//# sourceMappingURL=NewChipForm.mjs.map
