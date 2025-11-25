import { jsx as i, jsxs as m, Fragment as X } from "react/jsx-runtime";
import { forwardRef as J } from "react";
import e from "prop-types";
import p from "classnames";
import { FieldArray as Q } from "react-final-form-arrays";
import { isEmpty as U } from "lodash";
import W from "./FormChip/FormChip.mjs";
import Y from "./HiddenChipsBlock/HiddenChipsBlock.mjs";
import Z from "../TooltipTemplate/TextTooltipTemplate.mjs";
import O from "../Tooltip/Tooltip.mjs";
import { VISIBLE_CHIPS_MAX_LENGTH as ee, CHIP_OPTIONS as re } from "../../types.mjs";
import { isEveryObjectValueEmpty as ie } from "../../utils/common.util.mjs";
import { uniquenessError as g } from "./formChipCell.util.mjs";
import de from "../../images/add.svg.mjs";
let n = ({
  chipOptions: r = {
    background: "purple",
    boldValue: !1,
    borderRadius: "primary",
    borderColor: "transparent",
    density: "dense",
    font: "purple"
  },
  chipSizeIsRecalculated: b,
  setChipSizeIsRecalculated: $,
  children: w,
  chips: o,
  editConfig: f,
  handleAddNewChip: T,
  handleEditChip: x,
  handleRemoveChip: j,
  handleShowElements: C,
  handleToEditMode: E,
  isDeletable: F = !1,
  isEditable: l = !1,
  name: _,
  setChipsSizes: S,
  setEditConfig: V,
  shortChips: I = !1,
  showChips: A,
  showHiddenChips: H,
  validateFields: P,
  validationRules: s = {},
  visibleChipsMaxLength: L = null
}, { chipsCellRef: y, chipsWrapperRef: M, hiddenChipsCounterRef: N, hiddenChipsPopUpRef: z }) => {
  var R;
  const B = p(
    "button-add",
    r.background && `button-add-background_${r.background}`,
    r.borderColor && `button-add-border_${r.borderColor}`,
    r.font && `button-add-font_${r.font}`,
    r.density && `button-add-density_${r.density}`
  ), D = p(
    "chips-wrapper",
    l && "fixed-max-width",
    ((R = o.visibleChips) == null ? void 0 : R.length) > 0 && !b && "chip_invisible",
    L === "all" && "chips-wrapper_all-visible"
  ), v = p(
    "chip",
    "chip__content",
    l && "data-ellipsis",
    I && "chip_short",
    o.hiddenChips && "chip_hidden",
    r.density && `chip-density_${r.density}`,
    r.borderRadius && `chip-border_${r.borderRadius}`,
    r.background && `chip-background_${r.background}`,
    r.borderColor && `chip-border_${r.borderColor}`,
    r.font && `chip-font_${r.font}`,
    l && "editable",
    (A || l) && "chip_visible"
  );
  return /* @__PURE__ */ i(Q, { name: _, validate: P, children: ({ fields: a, meta: G }) => {
    let k = { ...s };
    return !U(s) && s.key.every((t) => t.name !== g.name) && (k = {
      ...s,
      key: [...s.key, g]
    }), (l || !ie(a)) && /* @__PURE__ */ i("div", { className: "chips-cell", ref: y, children: /* @__PURE__ */ m("div", { className: D, ref: M, children: [
      a.map((t, c) => {
        var q;
        const d = a.value[c];
        return c < ((q = o.visibleChips) == null ? void 0 : q.length) && /* @__PURE__ */ i("div", { className: "chip-block", children: /* @__PURE__ */ i(
          O,
          {
            hidden: f.isEdit && !d.tooltip,
            template: /* @__PURE__ */ i(
              Z,
              {
                text: d.tooltip || /* @__PURE__ */ m("span", { className: "chip__content", children: [
                  /* @__PURE__ */ i("span", { className: "chip__content-item", children: d.key }),
                  !d.isKeyOnly && /* @__PURE__ */ m(X, { children: [
                    /* @__PURE__ */ i("span", { className: "chip__delimiter", children: d.delimiter ? d.delimiter : ":" }),
                    /* @__PURE__ */ i("span", { className: "chip__content-item", children: d.value })
                  ] })
                ] })
              }
            ),
            children: /* @__PURE__ */ i(
              W,
              {
                chip: d,
                chipSizeIsRecalculated: b,
                setChipSizeIsRecalculated: $,
                chipIndex: c,
                chipOptions: r,
                editConfig: f,
                handleEditChip: (h, u, K) => x(h, a, u, K),
                handleRemoveChip: (h, u) => j(h, a, u),
                handleToEditMode: E,
                isDeletable: F,
                isEditable: l,
                keyName: `${t}.key`,
                meta: G,
                ref: y,
                setChipsSizes: S,
                setEditConfig: V,
                validationRules: k,
                valueName: `${t}.value`
              }
            )
          },
          d.id
        ) }, d.id);
      }),
      /* @__PURE__ */ m("div", { className: "chip-block", children: [
        o.hiddenChips.length > 0 && H && /* @__PURE__ */ i(
          Y,
          {
            chipClassNames: v,
            chipOptions: r,
            chips: o.hiddenChips,
            handleShowElements: C,
            ref: { hiddenChipsCounterRef: N, hiddenChipsPopUpRef: z },
            textOverflowEllipsis: !0
          }
        ),
        o.hiddenChipsNumber && /* @__PURE__ */ i(
          "span",
          {
            ref: N,
            className: `${v} chips_button`,
            onClick: C,
            children: o.hiddenChipsNumber
          }
        )
      ] }),
      l && /* @__PURE__ */ i(
        "button",
        {
          "data-testid": `${_}-add-chip`,
          className: B,
          onClick: (t) => T(t, a),
          children: /* @__PURE__ */ i(de, {})
        }
      ),
      w
    ] }) });
  } });
};
n = J(n);
n.displayName = "FormChipCellView";
n.propTypes = {
  chipOptions: re,
  chipSizeIsRecalculated: e.bool.isRequired,
  setChipSizeIsRecalculated: e.func.isRequired,
  children: e.node,
  chips: e.object.isRequired,
  editConfig: e.object.isRequired,
  formState: e.object.isRequired,
  handleAddNewChip: e.func.isRequired,
  handleEditChip: e.func.isRequired,
  handleRemoveChip: e.func.isRequired,
  handleShowElements: e.func.isRequired,
  handleToEditMode: e.func.isRequired,
  isDeletable: e.bool,
  isEditable: e.bool,
  name: e.string.isRequired,
  setChipsSizes: e.func.isRequired,
  setEditConfig: e.func.isRequired,
  shortChips: e.bool,
  showChips: e.bool.isRequired,
  showHiddenChips: e.bool.isRequired,
  validateFields: e.func.isRequired,
  validationRules: e.object,
  visibleChipsMaxLength: ee
};
const _e = n;
export {
  _e as default
};
//# sourceMappingURL=FormChipCellView.mjs.map
