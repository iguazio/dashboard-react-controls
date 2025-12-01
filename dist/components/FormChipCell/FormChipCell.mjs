import { jsxs as ne, jsx as T } from "react/jsx-runtime";
import pe, { useState as k, useMemo as ce, useCallback as y } from "react";
import he, { get as F, set as O, isEmpty as D, isNil as ae } from "lodash";
import de from "classnames";
import o from "prop-types";
import fe from "./FormChipCellView.mjs";
import { CHIP_OPTIONS as me } from "../../types.mjs";
import { CLICK as Ce, TAB as H, TAB_SHIFT as U } from "../../constants.mjs";
import { areArraysEqual as Ie } from "../../utils/common.util.mjs";
import { checkPatternsValidity as ge } from "../../utils/validation.util.mjs";
import { generateChipsList as ye } from "../../utils/generateChipsList.util.mjs";
import { uniquenessError as z } from "./formChipCell.util.mjs";
import "../../hooks/index.mjs";
/* empty css                   */
import { useChipCell as Fe } from "../../hooks/useChipCell.hook.mjs";
let R = ({
  chipOptions: B = {
    background: "purple",
    boldValue: !1,
    borderRadius: "primary",
    borderColor: "transparent",
    density: "dense",
    font: "purple"
  },
  className: b = "",
  delimiter: _ = null,
  formState: n,
  initialValues: q,
  isEditable: m = !1,
  label: V = null,
  name: r,
  onClick: w = () => {
  },
  shortChips: $ = !1,
  validationRules: v = {},
  validator: x = null,
  onExitEditModeCallback: d = null,
  visibleChipsMaxLength: I = null
}) => {
  const W = de("chips", b), [X, Y] = k(!1), {
    chipsCellRef: A,
    chipsWrapperRef: G,
    handleShowElements: J,
    hiddenChipsCounterRef: L,
    hiddenChipsPopUpRef: Q,
    setChipsSizes: Z,
    setShowHiddenChips: K,
    showChips: S,
    showHiddenChips: P,
    visibleChipsCount: j
  } = Fe(m, I), [p, C] = k({
    chipIndex: null,
    isEdit: !1,
    isKeyFocused: !1,
    isValueFocused: !1,
    isNewChip: !1
  });
  let E = ce(() => m || I === "all" ? {
    visibleChips: F(n.values, r),
    hiddenChips: []
  } : ye(
    F(n.values, r),
    I || j
  ), [I, m, j, n.values, r]);
  const N = y(
    (e) => {
      Ie(F(q, r), e, ["id"]) && O(n.initialValues, r, e), n.form.mutators.setFieldState(r, { modified: !0 }), n.form.mutators.setFieldState(r, { touched: !0 });
    },
    [q, r, n]
  ), M = y(
    (e, i) => {
      var t;
      const u = ((t = i.value) == null ? void 0 : t.length) || 0;
      !p.isEdit && !p.chipIndex && n.form.mutators.push(r, {
        id: u + /* @__PURE__ */ new Date(),
        key: "",
        value: "",
        delimiter: _
      }), P && K(!1), C({
        chipIndex: u,
        isEdit: !0,
        isKeyFocused: !0,
        isValueFocused: !1,
        isNewChip: !0
      }), e && e.preventDefault();
    },
    [
      p.isEdit,
      p.chipIndex,
      P,
      n.form.mutators,
      r,
      _,
      K
    ]
  ), g = y(
    (e, i, u, t = !1) => {
      N(
        he.chain(n).get(["values", r]).filter((s, l) => l !== u).value()
      ), i.length === 1 ? n.form.change(r, []) : i.remove(u), d && d(), e && !t && e.stopPropagation();
    },
    [N, n, r, d]
  ), ee = y(
    (e, i, u, t) => {
      const { key: s, value: l } = i.value[p.chipIndex], h = !!(s != null && s.trim() && (l != null && l.trim()));
      u === Ce ? (h || g(e, i, p.chipIndex, t), C({
        chipIndex: null,
        isEdit: !1,
        isKeyFocused: !1,
        isValueFocused: !1,
        isNewChip: !1
      }), h && d && d()) : u === H ? (h || g(e, i, p.chipIndex), C((a) => {
        const c = a.chipIndex + 1 > i.value.length - 1;
        return h && c && d && d(), {
          chipIndex: c ? null : a.chipIndex + 1,
          isEdit: !c,
          isKeyFocused: !c,
          isValueFocused: !1,
          isNewChip: !1
        };
      })) : u === U && (h || g(e, i, p.chipIndex), C((a) => {
        const c = a.chipIndex === 0;
        return h && c && d && d(), {
          chipIndex: c ? null : a.chipIndex - 1,
          isEdit: !c,
          isKeyFocused: !1,
          isValueFocused: !c,
          isNewChip: !1
        };
      })), N(F(n.values, r)), (p.chipIndex > 0 && p.chipIndex < i.value.length - 1 || i.value.length > 1 && p.chipIndex === 0 && u !== U || i.value.length > 1 && p.chipIndex === i.value.length - 1 && u !== H) && e && e.preventDefault();
    },
    [
      p.chipIndex,
      N,
      n.values,
      r,
      d,
      g
    ]
  ), ie = y(
    (e, i, u) => {
      if (m) {
        const { clientX: t, clientY: s } = e;
        let l = !1;
        const h = (a, c, f) => {
          if (f) {
            const {
              top: te,
              left: re,
              right: ue,
              bottom: oe
            } = f.getBoundingClientRect();
            return !(a > ue || a < re || c > oe || c < te);
          }
        };
        e.stopPropagation(), e.target.nodeName !== "INPUT" ? e.target.firstElementChild && (l = h(
          t,
          s,
          e.target.firstElementChild
        )) : l = e.target.name === u, C((a) => ({
          ...a,
          chipIndex: i,
          isEdit: !0,
          isKeyFocused: l,
          isValueFocused: !l
        }));
      }
      w && w();
    },
    [m, w]
  ), se = (e) => {
    if (!e) return null;
    let i = [];
    const u = (t, s) => !e.some(({ key: l }, h) => t === l && h !== s);
    return D(v) || (i = e.map((t) => {
      const [s, l] = le(t);
      return s && l ? { key: s, value: l } : s ? { key: s } : l ? { value: l } : null;
    })), e.forEach((t, s) => {
      u(t.key, s) || (F(i, [s, "key"], !1) ? i.at(s).key.push(z) : O(i, [s, "key"], [z]));
    }), D(i) && x && (i = x(e)), i.every((t) => ae(t)) ? null : i;
  }, le = ({ key: e, value: i, disabled: u }) => {
    const t = (s, l) => {
      const [h, a] = ge(
        v[l].filter((f) => f.pattern),
        s
      );
      return a ? null : h.filter((f) => !f.isValid).map((f) => ({ name: f.name, label: f.label }));
    };
    return u ? [null, null] : [t(e, "key"), t(i, "value")];
  };
  return /* @__PURE__ */ ne("div", { className: W, "data-testid": `${r}-chips`, children: [
    V && /* @__PURE__ */ T("div", { className: "chips__label", children: V }),
    /* @__PURE__ */ T("div", { className: V ? "chips__wrapper" : "", children: /* @__PURE__ */ T(
      fe,
      {
        chipOptions: B,
        chipSizeIsRecalculated: X,
        chips: E,
        editConfig: p,
        formState: n,
        handleAddNewChip: M,
        handleEditChip: ee,
        handleRemoveChip: g,
        handleShowElements: J,
        handleToEditMode: ie,
        isEditable: m,
        name: r,
        ref: { chipsCellRef: A, chipsWrapperRef: G, hiddenChipsCounterRef: L, hiddenChipsPopUpRef: Q },
        setChipSizeIsRecalculated: Y,
        setChipsSizes: Z,
        setEditConfig: C,
        shortChips: $,
        showChips: S,
        showHiddenChips: P,
        validateFields: se,
        validationRules: v
      }
    ) })
  ] });
};
R.propTypes = {
  chipOptions: me,
  className: o.string,
  delimiter: o.oneOfType([o.string, o.element]),
  formState: o.object.isRequired,
  initialValues: o.object.isRequired,
  isEditable: o.bool,
  label: o.string,
  name: o.string.isRequired,
  onClick: o.func,
  onExitEditModeCallback: o.func,
  shortChips: o.bool,
  validationRules: o.object,
  validator: o.func,
  visibleChipsMaxLength: o.oneOfType([o.string, o.number])
};
R = pe.memo(R);
const He = R;
export {
  He as default
};
//# sourceMappingURL=FormChipCell.mjs.map
