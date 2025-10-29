import { jsxs as pe, jsx as T } from "react/jsx-runtime";
import ce, { useState as k, useMemo as he, useCallback as y } from "react";
import ae, { get as F, set as O, isEmpty as D, isNil as de } from "lodash";
import fe from "classnames";
import r from "prop-types";
import me from "./FormChipCellView.mjs";
import { CHIP_OPTIONS as Ce } from "../../types.mjs";
import { CLICK as Ie, TAB as H, TAB_SHIFT as U } from "../../constants.mjs";
import { areArraysEqual as ge } from "../../utils/common.util.mjs";
import { checkPatternsValidity as ye } from "../../utils/validation.util.mjs";
import { generateChipsList as Fe } from "../../utils/generateChipsList.util.mjs";
import { uniquenessError as b } from "./formChipCell.util.mjs";
import "../../hooks/index.mjs";
/* empty css                   */
import { useChipCell as Ne } from "../../hooks/useChipCell.hook.mjs";
let w = ({
  chipOptions: z = {
    background: "purple",
    boldValue: !1,
    borderRadius: "primary",
    borderColor: "transparent",
    density: "dense",
    font: "purple"
  },
  className: B = "",
  delimiter: _ = null,
  formState: n,
  initialValues: q,
  isEditable: m = !1,
  label: R = null,
  name: o,
  onClick: V = () => {
  },
  onExitEditModeCallback: d = null,
  shortChips: W = !1,
  validationRules: P = {},
  validator: x = null,
  visibleChipsMaxLength: I = null,
  withInitialParentWidth: $ = !1
}) => {
  const X = fe("chips", B), [Y, A] = k(!1), {
    chipsCellRef: G,
    chipsWrapperRef: J,
    handleShowElements: L,
    hiddenChipsCounterRef: Q,
    hiddenChipsPopUpRef: Z,
    setChipsSizes: S,
    setShowHiddenChips: K,
    showChips: E,
    showHiddenChips: v,
    visibleChipsCount: j
  } = Ne(m, I, $), [p, C] = k({
    chipIndex: null,
    isEdit: !1,
    isKeyFocused: !1,
    isValueFocused: !1,
    isNewChip: !1
  });
  let M = he(() => m || I === "all" ? {
    visibleChips: F(n.values, o),
    hiddenChips: []
  } : Fe(
    F(n.values, o),
    I || j
  ), [I, m, j, n.values, o]);
  const N = y(
    (e) => {
      ge(F(q, o), e, ["id"]) && O(n.initialValues, o, e), n.form.mutators.setFieldState(o, { modified: !0 }), n.form.mutators.setFieldState(o, { touched: !0 });
    },
    [q, o, n]
  ), ee = y(
    (e, i) => {
      var t;
      const u = ((t = i.value) == null ? void 0 : t.length) || 0;
      !p.isEdit && !p.chipIndex && n.form.mutators.push(o, {
        id: u + /* @__PURE__ */ new Date(),
        key: "",
        value: "",
        delimiter: _
      }), v && K(!1), C({
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
      v,
      n.form.mutators,
      o,
      _,
      K
    ]
  ), g = y(
    (e, i, u, t = !1) => {
      N(
        ae.chain(n).get(["values", o]).filter((s, l) => l !== u).value()
      ), i.length === 1 ? n.form.change(o, []) : i.remove(u), d && d(), e && !t && e.stopPropagation();
    },
    [N, n, o, d]
  ), ie = y(
    (e, i, u, t) => {
      const { key: s, value: l } = i.value[p.chipIndex], h = !!(s != null && s.trim() && (l != null && l.trim()));
      u === Ie ? (h || g(e, i, p.chipIndex, t), C({
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
      })), N(F(n.values, o)), (p.chipIndex > 0 && p.chipIndex < i.value.length - 1 || i.value.length > 1 && p.chipIndex === 0 && u !== U || i.value.length > 1 && p.chipIndex === i.value.length - 1 && u !== H) && e && e.preventDefault();
    },
    [
      p.chipIndex,
      N,
      n.values,
      o,
      d,
      g
    ]
  ), se = y(
    (e, i, u) => {
      if (m) {
        const { clientX: t, clientY: s } = e;
        let l = !1;
        const h = (a, c, f) => {
          if (f) {
            const {
              top: re,
              left: oe,
              right: ue,
              bottom: ne
            } = f.getBoundingClientRect();
            return !(a > ue || a < oe || c > ne || c < re);
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
      V && V();
    },
    [m, V]
  ), le = (e) => {
    if (!e) return null;
    let i = [];
    const u = (t, s) => !e.some(({ key: l }, h) => t === l && h !== s);
    return D(P) || (i = e.map((t) => {
      const [s, l] = te(t);
      return s && l ? { key: s, value: l } : s ? { key: s } : l ? { value: l } : null;
    })), e.forEach((t, s) => {
      u(t.key, s) || (F(i, [s, "key"], !1) ? i.at(s).key.push(b) : O(i, [s, "key"], [b]));
    }), D(i) && x && (i = x(e)), i.every((t) => de(t)) ? null : i;
  }, te = ({ key: e, value: i, disabled: u }) => {
    const t = (s, l) => {
      const [h, a] = ye(
        P[l].filter((f) => f.pattern),
        s
      );
      return a ? null : h.filter((f) => !f.isValid).map((f) => ({ name: f.name, label: f.label }));
    };
    return u ? [null, null] : [t(e, "key"), t(i, "value")];
  };
  return /* @__PURE__ */ pe("div", { className: X, "data-testid": `${o}-chips`, children: [
    R && /* @__PURE__ */ T("div", { className: "chips__label", children: R }),
    /* @__PURE__ */ T("div", { className: R ? "chips__wrapper" : "", children: /* @__PURE__ */ T(
      me,
      {
        chipOptions: z,
        chipSizeIsRecalculated: Y,
        chips: M,
        editConfig: p,
        formState: n,
        handleAddNewChip: ee,
        handleEditChip: ie,
        handleRemoveChip: g,
        handleShowElements: L,
        handleToEditMode: se,
        isEditable: m,
        name: o,
        ref: { chipsCellRef: G, chipsWrapperRef: J, hiddenChipsCounterRef: Q, hiddenChipsPopUpRef: Z },
        setChipSizeIsRecalculated: A,
        setChipsSizes: S,
        setEditConfig: C,
        shortChips: W,
        showChips: E,
        showHiddenChips: v,
        validateFields: le,
        validationRules: P
      }
    ) })
  ] });
};
w.propTypes = {
  chipOptions: Ce,
  className: r.string,
  delimiter: r.oneOfType([r.string, r.element]),
  formState: r.object.isRequired,
  initialValues: r.object.isRequired,
  isEditable: r.bool,
  label: r.string,
  name: r.string.isRequired,
  onClick: r.func,
  onExitEditModeCallback: r.func,
  shortChips: r.bool,
  validationRules: r.object,
  validator: r.func,
  visibleChipsMaxLength: r.oneOfType([r.string, r.number]),
  withInitialParentWidth: r.bool
};
w = ce.memo(w);
const Ue = w;
export {
  Ue as default
};
//# sourceMappingURL=FormChipCell.mjs.map
