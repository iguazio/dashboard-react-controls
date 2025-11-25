import { jsx as W, jsxs as Fe } from "react/jsx-runtime";
import T, { useState as $, useMemo as H, useCallback as I, useEffect as h, useLayoutEffect as fe, forwardRef as we } from "react";
import a from "prop-types";
import j from "classnames";
import { isEmpty as y, get as z, throttle as Re, isNil as G } from "lodash";
import se from "../NewChipInput/NewChipInput.mjs";
import be from "../../../elements/OptionsMenu/OptionsMenu.mjs";
import ke from "../../../elements/ValidationTemplate/ValidationTemplate.mjs";
import { CHIP_OPTIONS as We } from "../../../types.mjs";
import { CLICK as Ie, TAB as J, TAB_SHIFT as Ke } from "../../../constants.mjs";
import { getTextWidth as D } from "../formChipCell.util.mjs";
import { getTransitionEndEventName as Ve } from "../../../utils/common.util.mjs";
import _e from "../../../images/close.svg.mjs";
/* empty css                  */
const Ne = {
  rules: {}
};
let P = ({
  chip: d,
  chipIndex: i,
  chipOptions: ne,
  className: ie = "",
  editConfig: r,
  handleRemoveChip: le,
  isDeletable: Q,
  isEditable: u,
  keyName: N,
  meta: m,
  onChange: q,
  setChipSizeIsRecalculated: U,
  setEditConfig: O,
  validationRules: ue = Ne.rules,
  valueName: oe
}, w) => {
  const [l, A] = $({
    isKeyOnly: d.isKeyOnly,
    key: d.key,
    value: d.value,
    keyFieldWidth: 0,
    valueFieldWidth: 0
  }), [v, ce] = $("key"), [X, ae] = $(ue), [p, B] = $(!1), { background: Y, borderColor: Z, borderRadius: C, density: g, font: ee } = ne, F = H(() => u ? 25 : 20, [u]), f = H(() => u ? 35 : 20, [u]), M = H(() => Ve(), []), o = T.useRef({}), c = T.useRef({}), S = T.useRef(), x = T.useRef(), de = j(
    ie,
    !r.isKeyFocused && "item_edited",
    !y(z(m, ["error", i, "key"], [])) && !y(l.key) && !d.disabled && u && "item_edited_invalid"
  ), me = j(
    "edit-chip-container",
    Y && `edit-chip-container-background_${Y}`,
    Z && `edit-chip-container-border_${Z}`,
    ee && `edit-chip-container-font_${ee}`,
    g && `edit-chip-container-density_${g}`,
    C && `edit-chip-container-border_${C}`,
    (r.isEdit || r.isNewChip) && "edit-chip-container_edited",
    u && d.disabled && "edit-chip-container_disabled edit-chip-container-font_disabled"
  ), pe = j(
    "input-label-value",
    !r.isValueFocused && "item_edited",
    !y(z(m, ["error", i, "value"], [])) && !y(l.value) && u && "item_edited_invalid"
  ), he = j(
    "item-icon-close",
    !d.disabled && (r.chipIndex === i && u || !Q) && "item-icon-close invisible",
    !u && !Q && "item-icon-close hidden"
  ), K = I(() => {
    var e;
    if (o.current) {
      const t = D(o.current) + 1, s = D(c.current) + 1, n = ((e = w.current) == null ? void 0 : e.clientWidth) - 50, _ = t >= n / 2, L = s >= n / 2;
      let R = null, b = null;
      if (_ && L)
        R = b = n / 2;
      else if (_) {
        b = l.value ? s : f;
        const k = n - b;
        R = k > t ? t : k;
      } else if (L) {
        R = l.key ? t : F;
        const k = n - R;
        b = k > s ? s : k;
      } else
        R = !l.key || t <= F ? F : t, b = !l.value || s <= f ? f : s;
      o.current.style.width = `${R}px`, y(c.current) || (c.current.style.width = `${b}px`), A((k) => ({
        ...k,
        keyFieldWidth: R,
        valueFieldWidth: b
      })), U(!0);
    }
  }, [
    l.key,
    l.value,
    F,
    f,
    w,
    U
  ]);
  h(() => {
    if (!w.current) return;
    const e = w.current, t = new ResizeObserver(K);
    return t.observe(e), () => t.unobserve(e);
  }, [w, K]), h(() => {
    const e = Re(K, 500);
    if (u)
      return window.addEventListener("resize", e), window.addEventListener(M, e), () => {
        window.removeEventListener("resize", e), window.removeEventListener(M, e);
      };
  }, [u, K, M]), h(() => {
    !l.keyFieldWidth && !l.valueFieldWidth && K();
  }, [l.keyFieldWidth, l.valueFieldWidth, K]);
  const E = I(
    (e, t) => {
      var s;
      r.chipIndex === i && (!(e.path ?? ((s = e.composedPath) == null ? void 0 : s.call(e))).includes(S.current) || t ? (q(e, Ie, !0), window.getSelection().removeAllRanges(), document.activeElement.blur()) : e.stopPropagation());
    },
    [q, S, i, r.chipIndex]
  ), V = I(
    (e) => {
      x != null && x.current && !x.current.contains(e.target) && (B(!1), E(e, !0));
    },
    [E]
  );
  h(() => (p && window.addEventListener("scroll", V, !0), () => {
    window.removeEventListener("scroll", V, !0);
  }), [V, p]), h(() => {
    r.chipIndex === i && (r.isKeyFocused ? o.current.focus() : r.isValueFocused && c.current.focus());
  }, [
    r.isKeyFocused,
    r.isValueFocused,
    o,
    c,
    i,
    r.chipIndex
  ]), h(() => (p && window.addEventListener("scroll", V, !0), () => {
    window.removeEventListener("scroll", V, !0);
  }), [V, p]), h(() => {
    if (r.isEdit)
      return document.addEventListener("click", E, !0), () => {
        document.removeEventListener("click", E, !0);
      };
  }, [E, r.isEdit]);
  const ye = I(
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
          keyFieldWidth: o.current.value.length <= 1 ? F : n >= t ? t : n > F ? n + 2 : F
        }));
      } else {
        const n = D(c.current);
        A((_) => {
          var L;
          return {
            ..._,
            value: c.current.value,
            valueFieldWidth: ((L = c.current.value) == null ? void 0 : L.length) <= 1 ? f : n >= t ? t : n > f ? n + 2 : f
          };
        });
      }
    },
    [N, F, w, f]
  );
  fe(() => {
    r.chipIndex === i && ce(r.isKeyFocused ? "key" : r.isValueFocused ? "value" : null);
  }, [r.isKeyFocused, r.isValueFocused, r.chipIndex, i]), h(() => {
    m.valid && p && B(!1);
  }, [m.valid, p]), h(() => {
    m.error && (ae((e) => {
      var t;
      return {
        ...e,
        [v]: (t = e[v]) == null ? void 0 : t.map((s) => ({
          ...s,
          isValid: y(z(m, ["error", r.chipIndex, v], [])) ? !0 : !m.error[r.chipIndex][v].some(
            (n) => n && n.name === s.name
          )
        }))
      };
    }), !p && B(!0));
  }, [m, p, v, r.chipIndex]);
  const ve = I(() => {
    var e;
    return (e = X[v]) == null ? void 0 : e.map(({ isValid: t = !1, label: s, name: n }) => /* @__PURE__ */ W(ke, { valid: t, validationMessage: s }, n));
  }, [v, X]);
  return /* @__PURE__ */ Fe(
    "div",
    {
      className: me,
      onKeyDown: (e) => !d.disabled && r.isEdit && ye(e),
      ref: S,
      children: [
        /* @__PURE__ */ W(
          se,
          {
            className: de,
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
          se,
          {
            className: pe,
            disabled: d.disabled || !u || !G(r.chipIndex) && r.chipIndex !== i,
            name: oe,
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
            className: he,
            onClick: (e) => !d.disabled && le(e, i),
            children: /* @__PURE__ */ W(_e, {})
          }
        ),
        !d.disabled && (r.isKeyFocused ? !y(l.key) : !y(l.value)) && r.chipIndex === i && !y(z(m, ["error", r.chipIndex, v], [])) && /* @__PURE__ */ W(be, { show: p, ref: { refInputContainer: S, validationRulesRef: x }, children: ve() })
      ]
    }
  );
};
P = we(P);
P.displayName = "NewChipForm";
P.propTypes = {
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
const Me = P;
export {
  Me as default
};
//# sourceMappingURL=NewChipForm.mjs.map
