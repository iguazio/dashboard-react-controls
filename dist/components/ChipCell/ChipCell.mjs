import { jsx as f, jsxs as R } from "react/jsx-runtime";
import G, { useState as J, useMemo as Q, useCallback as I } from "react";
import A from "classnames";
import r from "prop-types";
import X from "../Chip/Chip.mjs";
import Y from "./ChipTooltip/ChipTooltip.mjs";
import Z from "./HiddenChipsBlock/HiddenChipsBlock.mjs";
import { CHIP_OPTIONS as O } from "../../types.mjs";
import { CLICK as L, TAB as M, TAB_SHIFT as ee } from "../../constants.mjs";
import { cutChips as ie } from "../../utils/chips.util.mjs";
import { isEveryObjectValueEmpty as se } from "../../utils/common.util.mjs";
import "../../hooks/index.mjs";
import re from "../../images/add.svg.mjs";
/* empty css               */
import { useChipCell as oe } from "../../hooks/useChipCell.hook.mjs";
const H = ({
  addChip: N = () => {
  },
  chipOptions: l = {
    background: "purple",
    boldValue: !1,
    borderRadius: "primary",
    borderColor: "transparent",
    density: "dense",
    font: "purple"
  },
  className: b,
  delimiter: x = null,
  editChip: F = () => {
  },
  elements: o = [],
  isEditMode: t = !1,
  onClick: y = () => {
  },
  removeChip: g = () => {
  },
  shortChips: S = !1,
  setValidation: j = null,
  visibleChipsMaxLength: u = null
}) => {
  const {
    chipsCellRef: k,
    chipsWrapperRef: B,
    handleShowElements: v,
    hiddenChipsCounterRef: T,
    hiddenChipsPopUpRef: D,
    setChipsSizes: V,
    setShowHiddenChips: $,
    showChips: z,
    showHiddenChips: w,
    visibleChipsCount: E
  } = oe(t, u), [s, n] = J({
    chipIndex: null,
    isEdit: !1,
    isKeyFocused: !0,
    isValueFocused: !1,
    isNewChip: !1
  }), U = A(
    "button-add",
    b,
    l.background && `button-add-background_${l.background}`,
    l.borderColor && `button-add-border_${l.borderColor}`,
    l.font && `button-add-font_${l.font}`,
    l.density && `button-add-density_${l.density}`
  ), W = A("chips-wrapper", t && "fixed-max-width");
  let C = Q(() => t && !u || u === "all" ? {
    visibleChips: o.map((e) => ({
      value: e,
      delimiter: x
    }))
  } : ie(
    o,
    u || E,
    x
  ), [x, o, t, E, u]);
  const q = I(
    (e, i) => {
      e.preventDefault(), !s.isEdit && !s.chipIndex && N(i, o), w && $(!1), n({
        chipIndex: o.length,
        isEdit: !0,
        isKeyFocused: !0,
        isValueFocused: !1,
        isNewChip: !0
      });
    },
    [
      s.isEdit,
      s.chipIndex,
      w,
      o,
      N,
      $
    ]
  ), a = I(
    (e, i) => {
      e.stopPropagation();
      const c = o.filter((h, m) => m !== i);
      g(c);
    },
    [o, g]
  ), _ = I(
    (e, i, c) => {
      var m, P;
      e.preventDefault();
      const h = !!(i.key && i.value && ((m = i.key) != null && m.trim()) && ((P = i.value) != null && P.trim()));
      if (h) {
        const d = [...o];
        d[s.chipIndex] = `${i.key}: ${i.value}`, F(d);
      }
      c === L ? (s.isNewChip && !h && a(e, s.chipIndex), n({
        chipIndex: null,
        isEdit: !1,
        isKeyFocused: !0,
        isValueFocused: !1,
        isNewChip: !1
      })) : c === M ? (s.isNewChip && !h && a(e, s.chipIndex), n((d) => {
        const p = d.chipIndex + 1 > o.length - 1;
        return {
          chipIndex: p ? null : d.chipIndex + 1,
          isEdit: !p,
          isKeyFocused: !0,
          isValueFocused: !1,
          isNewChip: !1
        };
      })) : c === ee && (s.isNewChip && !h && a(e, s.chipIndex), n((d) => {
        const p = d.chipIndex - 1 < 0;
        return {
          chipIndex: p ? null : d.chipIndex - 1,
          isEdit: !p,
          isKeyFocused: p,
          isValueFocused: !p,
          isNewChip: !1
        };
      }));
    },
    [o, s.chipIndex, s.isNewChip, F, a]
  ), K = I(
    (e, i) => {
      t && (e.stopPropagation(), n({
        chipIndex: i,
        isEdit: !0,
        isKeyFocused: !0,
        isValueFocused: !1
      })), y && y();
    },
    [t, y]
  );
  return (t || !se(C)) && /* @__PURE__ */ f("div", { className: "chips-cell", ref: k, children: /* @__PURE__ */ R("div", { className: W, ref: B, children: [
    C.visibleChips.map((e, i) => /* @__PURE__ */ R("div", { className: "chip-block", children: [
      /* @__PURE__ */ f(Y, { chip: e, editConfig: s, children: /* @__PURE__ */ f(
        X,
        {
          chip: e,
          chipIndex: i,
          chipOptions: l,
          className: b,
          editConfig: s,
          handleEditChip: _,
          handleIsEdit: K,
          handleRemoveChip: a,
          isEditMode: t,
          onClick: v,
          ref: { chipsCellRef: k, hiddenChipsCounterRef: T },
          setChipsSizes: V,
          setEditConfig: n,
          setValidation: j,
          shortChip: S,
          showChips: z,
          textOverflowEllipsis: !0
        }
      ) }, e.value),
      C.visibleChips.length - 1 === i && w && /* @__PURE__ */ f(
        Z,
        {
          chipOptions: l,
          className: b,
          chips: C.hiddenChips,
          chipIndex: i,
          editConfig: s,
          handleEditChip: _,
          handleIsEdit: K,
          handleRemoveChip: a,
          handleShowElements: v,
          isEditMode: t,
          setEditConfig: n,
          setChipsSizes: V,
          ref: { hiddenChipsCounterRef: T, hiddenChipsPopUpRef: D }
        }
      )
    ] }, `${e.value}${i}`)),
    t && /* @__PURE__ */ f("button", { className: U, onClick: (e) => q(e, ":"), children: /* @__PURE__ */ f(re, {}) })
  ] }) });
};
H.propTypes = {
  addChip: r.func,
  chipOptions: O,
  className: r.string,
  delimiter: r.oneOfType([r.string, r.element]),
  editChip: r.func,
  elements: r.arrayOf(r.string),
  isEditMode: r.bool,
  onClick: r.func,
  removeChip: r.func,
  setValidation: r.func,
  shortChips: r.bool,
  visibleChipsMaxLength: r.oneOfType([r.string, r.number])
};
const ye = G.memo(H);
export {
  ye as default
};
//# sourceMappingURL=ChipCell.mjs.map
