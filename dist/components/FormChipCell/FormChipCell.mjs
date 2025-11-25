import { jsxs as he, jsx as v } from "react/jsx-runtime";
import ae, { useState as j, useMemo as de, useCallback as y } from "react";
import fe, { get as F, set as k, isEmpty as D, isNil as me } from "lodash";
import Ce from "classnames";
import u from "prop-types";
import Ie from "./FormChipCellView.mjs";
import { VISIBLE_CHIPS_MAX_LENGTH as ge, CHIP_OPTIONS as ye } from "../../types.mjs";
import { CLICK as Fe, TAB as B, TAB_SHIFT as O } from "../../constants.mjs";
import { areArraysEqual as Ne } from "../../utils/common.util.mjs";
import { checkPatternsValidity as Ve } from "../../utils/validation.util.mjs";
import { generateChipsList as we } from "../../utils/generateChipsList.util.mjs";
import { uniquenessError as U } from "./formChipCell.util.mjs";
import "../../hooks/index.mjs";
/* empty css                   */
import { useChipCell as Re } from "../../hooks/useChipCell.hook.mjs";
let V = ({
  chipOptions: b = {
    background: "purple",
    boldValue: !1,
    borderRadius: "primary",
    borderColor: "transparent",
    density: "dense",
    font: "purple"
  },
  className: z = "",
  children: W,
  delimiter: T = null,
  formState: n,
  initialValues: q,
  isDeletable: X = !1,
  isEditable: m = !1,
  label: w = null,
  name: r,
  onClick: R = () => {
  },
  onExitEditModeCallback: d = null,
  shortChips: $ = !1,
  validationRules: P = {},
  validator: K = null,
  visibleChipsMaxLength: C = null,
  withInitialParentWidth: A = !1
}) => {
  const G = Ce("chips", z), [L, Y] = j(!1), {
    chipsCellRef: J,
    chipsWrapperRef: Q,
    handleShowElements: Z,
    hiddenChipsCounterRef: S,
    hiddenChipsPopUpRef: E,
    setChipsSizes: M,
    setShowHiddenChips: x,
    showChips: ee,
    showHiddenChips: _,
    visibleChipsCount: H
  } = Re(m, C, A), [p, I] = j({
    chipIndex: null,
    isEdit: !1,
    isKeyFocused: !1,
    isValueFocused: !1,
    isNewChip: !1
  });
  let ie = de(() => m || C === "all" ? {
    visibleChips: F(n.values, r),
    hiddenChips: []
  } : we(
    F(n.values, r),
    C || H
  ), [C, m, H, n.values, r]);
  const N = y(
    (e) => {
      Ne(F(q, r), e, ["id"]) && k(n.initialValues, r, e), n.form.mutators.setFieldState(r, { modified: !0 }), n.form.mutators.setFieldState(r, { touched: !0 });
    },
    [q, r, n]
  ), se = y(
    (e, i) => {
      var t;
      const o = ((t = i.value) == null ? void 0 : t.length) || 0;
      !p.isEdit && !p.chipIndex && n.form.mutators.push(r, {
        id: o + /* @__PURE__ */ new Date(),
        key: "",
        value: "",
        delimiter: T
      }), _ && x(!1), I({
        chipIndex: o,
        isEdit: !0,
        isKeyFocused: !0,
        isValueFocused: !1,
        isNewChip: !0
      }), e && e.preventDefault();
    },
    [
      p.isEdit,
      p.chipIndex,
      _,
      n.form.mutators,
      r,
      T,
      x
    ]
  ), g = y(
    (e, i, o, t = !1) => {
      N(
        fe.chain(n).get(["values", r]).filter((s, l) => l !== o).value()
      ), i.length === 1 ? n.form.change(r, []) : i.remove(o), d && d(), e && !t && e.stopPropagation();
    },
    [N, n, r, d]
  ), le = y(
    (e, i, o, t) => {
      const { key: s, value: l } = i.value[p.chipIndex], h = !!(s != null && s.trim() && (l != null && l.trim()));
      o === Fe ? (h || g(e, i, p.chipIndex, t), I({
        chipIndex: null,
        isEdit: !1,
        isKeyFocused: !1,
        isValueFocused: !1,
        isNewChip: !1
      }), h && d && d()) : o === B ? (h || g(e, i, p.chipIndex), I((a) => {
        const c = a.chipIndex + 1 > i.value.length - 1;
        return h && c && d && d(), {
          chipIndex: c ? null : a.chipIndex + 1,
          isEdit: !c,
          isKeyFocused: !c,
          isValueFocused: !1,
          isNewChip: !1
        };
      })) : o === O && (h || g(e, i, p.chipIndex), I((a) => {
        const c = a.chipIndex === 0;
        return h && c && d && d(), {
          chipIndex: c ? null : a.chipIndex - 1,
          isEdit: !c,
          isKeyFocused: !1,
          isValueFocused: !c,
          isNewChip: !1
        };
      })), N(F(n.values, r)), (p.chipIndex > 0 && p.chipIndex < i.value.length - 1 || i.value.length > 1 && p.chipIndex === 0 && o !== O || i.value.length > 1 && p.chipIndex === i.value.length - 1 && o !== B) && e && e.preventDefault();
    },
    [
      p.chipIndex,
      N,
      n.values,
      r,
      d,
      g
    ]
  ), te = y(
    (e, i, o) => {
      if (m) {
        const { clientX: t, clientY: s } = e;
        let l = !1;
        const h = (a, c, f) => {
          if (f) {
            const {
              top: ue,
              left: ne,
              right: pe,
              bottom: ce
            } = f.getBoundingClientRect();
            return !(a > pe || a < ne || c > ce || c < ue);
          }
        };
        e.stopPropagation(), e.target.nodeName !== "INPUT" ? e.target.firstElementChild && (l = h(
          t,
          s,
          e.target.firstElementChild
        )) : l = e.target.name === o, I((a) => ({
          ...a,
          chipIndex: i,
          isEdit: !0,
          isKeyFocused: l,
          isValueFocused: !l
        }));
      }
      R && R();
    },
    [m, R]
  ), re = (e) => {
    if (!e) return null;
    let i = [];
    const o = (t, s) => !e.some(({ key: l }, h) => t === l && h !== s);
    return D(P) || (i = e.map((t) => {
      const [s, l] = oe(t);
      return s && l ? { key: s, value: l } : s ? { key: s } : l ? { value: l } : null;
    })), e.forEach((t, s) => {
      o(t.key, s) || (F(i, [s, "key"], !1) ? i.at(s).key.push(U) : k(i, [s, "key"], [U]));
    }), D(i) && K && (i = K(e)), i.every((t) => me(t)) ? null : i;
  }, oe = ({ key: e, value: i, disabled: o }) => {
    const t = (s, l) => {
      const [h, a] = Ve(
        P[l].filter((f) => f.pattern),
        s
      );
      return a ? null : h.filter((f) => !f.isValid).map((f) => ({ name: f.name, label: f.label }));
    };
    return o ? [null, null] : [t(e, "key"), t(i, "value")];
  };
  return /* @__PURE__ */ he("div", { className: G, "data-testid": `${r}-chips`, children: [
    w && /* @__PURE__ */ v("div", { className: "chips__label", children: w }),
    /* @__PURE__ */ v("div", { className: w ? "chips__wrapper" : "", children: /* @__PURE__ */ v(
      Ie,
      {
        chipOptions: b,
        chipSizeIsRecalculated: L,
        chips: ie,
        editConfig: p,
        formState: n,
        handleAddNewChip: se,
        handleEditChip: le,
        handleRemoveChip: g,
        handleShowElements: Z,
        handleToEditMode: te,
        isDeletable: X,
        isEditable: m,
        name: r,
        ref: { chipsCellRef: J, chipsWrapperRef: Q, hiddenChipsCounterRef: S, hiddenChipsPopUpRef: E },
        setChipSizeIsRecalculated: Y,
        setChipsSizes: M,
        setEditConfig: I,
        shortChips: $,
        showChips: ee,
        showHiddenChips: _,
        validateFields: re,
        validationRules: P,
        visibleChipsMaxLength: C,
        children: W
      }
    ) })
  ] });
};
V.propTypes = {
  chipOptions: ye,
  children: u.node,
  className: u.string,
  delimiter: u.oneOfType([u.string, u.element]),
  formState: u.object.isRequired,
  initialValues: u.object.isRequired,
  isDeletable: u.bool,
  isEditable: u.bool,
  label: u.string,
  name: u.string.isRequired,
  onClick: u.func,
  onExitEditModeCallback: u.func,
  shortChips: u.bool,
  validationRules: u.object,
  validator: u.func,
  visibleChipsMaxLength: ge,
  withInitialParentWidth: u.bool
};
V = ae.memo(V);
const ze = V;
export {
  ze as default
};
//# sourceMappingURL=FormChipCell.mjs.map
