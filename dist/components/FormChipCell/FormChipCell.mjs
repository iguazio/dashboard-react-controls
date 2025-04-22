import { jsxs as re, jsx as T } from "react/jsx-runtime";
import oe, { useState as ue, useMemo as ne, useCallback as y } from "react";
import pe, { get as F, set as k, isEmpty as O, isNil as ce } from "lodash";
import he from "classnames";
import o from "prop-types";
import ae from "./FormChipCellView.mjs";
import { CHIP_OPTIONS as de } from "../../types.mjs";
import { CLICK as fe, TAB as D, TAB_SHIFT as H } from "../../constants.mjs";
import { areArraysEqual as me } from "../../utils/common.util.mjs";
import { checkPatternsValidity as Ce } from "../../utils/validation.util.mjs";
import { generateChipsList as Ie } from "../../utils/generateChipsList.util.mjs";
import { uniquenessError as U } from "./formChipCell.util.mjs";
import "../../hooks/index.mjs";
/* empty css                   */
import { useChipCell as ge } from "../../hooks/useChipCell.hook.mjs";
let V = ({
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
  formState: p,
  initialValues: q,
  isEditable: m = !1,
  label: w = null,
  name: u,
  onClick: R = () => {
  },
  shortChips: $ = !1,
  validationRules: v = {},
  validator: x = null,
  onExitEditModeCallback: d = null,
  visibleChipsMaxLength: I = null
}) => {
  const z = he("chips", b), {
    chipsCellRef: W,
    chipsWrapperRef: X,
    handleShowElements: Y,
    hiddenChipsCounterRef: A,
    hiddenChipsPopUpRef: G,
    setChipsSizes: J,
    setShowHiddenChips: K,
    showChips: L,
    showHiddenChips: P,
    visibleChipsCount: j
  } = ge(m, I), [n, C] = ue({
    chipIndex: null,
    isEdit: !1,
    isKeyFocused: !1,
    isValueFocused: !1,
    isNewChip: !1
  });
  let Q = ne(() => m || I === "all" ? {
    visibleChips: F(p.values, u),
    hiddenChips: []
  } : Ie(
    F(p.values, u),
    I || j
  ), [I, m, j, p.values, u]);
  const N = y(
    (e) => {
      me(F(q, u), e, ["id"]) && k(p.initialValues, u, e), p.form.mutators.setFieldState(u, { modified: !0 }), p.form.mutators.setFieldState(u, { touched: !0 });
    },
    [q, u, p]
  ), Z = y(
    (e, i) => {
      var t;
      const r = ((t = i.value) == null ? void 0 : t.length) || 0;
      !n.isEdit && !n.chipIndex && p.form.mutators.push(u, {
        id: r + /* @__PURE__ */ new Date(),
        key: "",
        value: "",
        delimiter: _
      }), P && K(!1), C({
        chipIndex: r,
        isEdit: !0,
        isKeyFocused: !0,
        isValueFocused: !1,
        isNewChip: !0
      }), e && e.preventDefault();
    },
    [
      n.isEdit,
      n.chipIndex,
      P,
      p.form.mutators,
      u,
      _,
      K
    ]
  ), g = y(
    (e, i, r, t = !1) => {
      N(
        pe.chain(p).get(["values", u]).filter((s, l) => l !== r).value()
      ), i.remove(r), d && d(), e && !t && e.stopPropagation();
    },
    [N, p, u, d]
  ), S = y(
    (e, i, r, t) => {
      const { key: s, value: l } = i.value[n.chipIndex], h = !!(s != null && s.trim() && (l != null && l.trim()));
      r === fe ? (h || g(e, i, n.chipIndex, t), C({
        chipIndex: null,
        isEdit: !1,
        isKeyFocused: !1,
        isValueFocused: !1,
        isNewChip: !1
      }), h && d && d()) : r === D ? (h || g(e, i, n.chipIndex), C((a) => {
        const c = a.chipIndex + 1 > i.value.length - 1;
        return h && c && d && d(), {
          chipIndex: c ? null : a.chipIndex + 1,
          isEdit: !c,
          isKeyFocused: !c,
          isValueFocused: !1,
          isNewChip: !1
        };
      })) : r === H && (h || g(e, i, n.chipIndex), C((a) => {
        const c = a.chipIndex === 0;
        return h && c && d && d(), {
          chipIndex: c ? null : a.chipIndex - 1,
          isEdit: !c,
          isKeyFocused: !1,
          isValueFocused: !c,
          isNewChip: !1
        };
      })), N(F(p.values, u)), (n.chipIndex > 0 && n.chipIndex < i.value.length - 1 || i.value.length > 1 && n.chipIndex === 0 && r !== H || i.value.length > 1 && n.chipIndex === i.value.length - 1 && r !== D) && e && e.preventDefault();
    },
    [
      n.chipIndex,
      N,
      p.values,
      u,
      d,
      g
    ]
  ), E = y(
    (e, i, r) => {
      if (m) {
        const { clientX: t, clientY: s } = e;
        let l = !1;
        const h = (a, c, f) => {
          if (f) {
            const {
              top: ie,
              left: se,
              right: le,
              bottom: te
            } = f.getBoundingClientRect();
            return !(a > le || a < se || c > te || c < ie);
          }
        };
        e.stopPropagation(), e.target.nodeName !== "INPUT" ? e.target.firstElementChild && (l = h(
          t,
          s,
          e.target.firstElementChild
        )) : l = e.target.name === r, C((a) => ({
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
  ), M = (e) => {
    if (!e) return null;
    let i = [];
    const r = (t, s) => !e.some(({ key: l }, h) => t === l && h !== s);
    return O(v) || (i = e.map((t) => {
      const [s, l] = ee(t);
      return s && l ? { key: s, value: l } : s ? { key: s } : l ? { value: l } : null;
    })), e.forEach((t, s) => {
      r(t.key, s) || (F(i, [s, "key"], !1) ? i.at(s).key.push(U) : k(i, [s, "key"], [U]));
    }), O(i) && x && (i = x(e)), i.every((t) => ce(t)) ? null : i;
  }, ee = ({ key: e, value: i, disabled: r }) => {
    const t = (s, l) => {
      const [h, a] = Ce(
        v[l].filter((f) => f.pattern),
        s
      );
      return a ? null : h.filter((f) => !f.isValid).map((f) => ({ name: f.name, label: f.label }));
    };
    return r ? [null, null] : [t(e, "key"), t(i, "value")];
  };
  return /* @__PURE__ */ re("div", { className: z, "data-testid": `${u}-chips`, children: [
    w && /* @__PURE__ */ T("div", { className: "chips__label", children: w }),
    /* @__PURE__ */ T("div", { className: w ? "chips__wrapper" : "", children: /* @__PURE__ */ T(
      ae,
      {
        chipOptions: B,
        chips: Q,
        editConfig: n,
        handleAddNewChip: Z,
        handleEditChip: S,
        handleRemoveChip: g,
        handleShowElements: Y,
        handleToEditMode: E,
        isEditable: m,
        name: u,
        ref: { chipsCellRef: W, chipsWrapperRef: X, hiddenChipsCounterRef: A, hiddenChipsPopUpRef: G },
        setChipsSizes: J,
        setEditConfig: C,
        shortChips: $,
        showChips: L,
        showHiddenChips: P,
        validateFields: M,
        validationRules: v
      }
    ) })
  ] });
};
V.propTypes = {
  chipOptions: de,
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
V = oe.memo(V);
const Oe = V;
export {
  Oe as default
};
//# sourceMappingURL=FormChipCell.mjs.map
