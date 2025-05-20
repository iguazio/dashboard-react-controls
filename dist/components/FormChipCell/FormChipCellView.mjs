import { jsx as i, jsxs as m, Fragment as K } from "react/jsx-runtime";
import { forwardRef as M } from "react";
import r from "prop-types";
import p from "classnames";
import { FieldArray as G } from "react-final-form-arrays";
import { isEmpty as J } from "lodash";
import L from "./FormChip/FormChip.mjs";
import Q from "./HiddenChipsBlock/HiddenChipsBlock.mjs";
import U from "../TooltipTemplate/TextTooltipTemplate.mjs";
import W from "../Tooltip/Tooltip.mjs";
import { CHIP_OPTIONS as X } from "../../types.mjs";
import { isEveryObjectValueEmpty as Y } from "../../utils/common.util.mjs";
import { uniquenessError as v } from "./formChipCell.util.mjs";
import Z from "../../images/add.svg.mjs";
let n = ({
  chipOptions: e = {
    background: "purple",
    boldValue: !1,
    borderRadius: "primary",
    borderColor: "transparent",
    density: "dense",
    font: "purple"
  },
  chipSizeIsRecalculated: b,
  setChipSizeIsRecalculated: $,
  chips: a,
  editConfig: f,
  handleAddNewChip: g,
  handleEditChip: w,
  handleRemoveChip: T,
  handleShowElements: C,
  handleToEditMode: j,
  isEditable: o = !1,
  name: _,
  setChipsSizes: x,
  setEditConfig: F,
  shortChips: V = !1,
  showChips: E,
  showHiddenChips: S,
  validateFields: A,
  validationRules: s = {}
}, { chipsCellRef: y, chipsWrapperRef: H, hiddenChipsCounterRef: N, hiddenChipsPopUpRef: I }) => {
  const P = p(
    "button-add",
    e.background && `button-add-background_${e.background}`,
    e.borderColor && `button-add-border_${e.borderColor}`,
    e.font && `button-add-font_${e.font}`,
    e.density && `button-add-density_${e.density}`
  ), z = p(
    "chips-wrapper",
    o && "fixed-max-width",
    !b && "chip_invisible"
  ), R = p(
    "chip",
    "chip__content",
    o && "data-ellipsis",
    V && "chip_short",
    a.hiddenChips && "chip_hidden",
    e.density && `chip-density_${e.density}`,
    e.borderRadius && `chip-border_${e.borderRadius}`,
    e.background && `chip-background_${e.background}`,
    e.borderColor && `chip-border_${e.borderColor}`,
    e.font && `chip-font_${e.font}`,
    o && "editable",
    (E || o) && "chip_visible"
  );
  return /* @__PURE__ */ i(G, { name: _, validate: A, children: ({ fields: t, meta: B }) => {
    let k = { ...s };
    return !J(s) && s.key.every((l) => l.name !== v.name) && (k = {
      ...s,
      key: [...s.key, v]
    }), (o || !Y(t)) && /* @__PURE__ */ i("div", { className: "chips-cell", ref: y, children: /* @__PURE__ */ m("div", { className: z, ref: H, children: [
      t.map((l, c) => {
        var q;
        const d = t.value[c];
        return c < ((q = a.visibleChips) == null ? void 0 : q.length) && /* @__PURE__ */ i("div", { className: "chip-block", children: /* @__PURE__ */ i(
          W,
          {
            hidden: f.isEdit && !d.tooltip,
            template: /* @__PURE__ */ i(
              U,
              {
                text: d.tooltip || /* @__PURE__ */ m("span", { className: "chip__content", children: [
                  /* @__PURE__ */ i("span", { className: "chip__content-item", children: d.key }),
                  !d.isKeyOnly && /* @__PURE__ */ m(K, { children: [
                    /* @__PURE__ */ i("span", { className: "chip__delimiter", children: d.delimiter ? d.delimiter : ":" }),
                    /* @__PURE__ */ i("span", { className: "chip__content-item", children: d.value })
                  ] })
                ] })
              }
            ),
            children: /* @__PURE__ */ i(
              L,
              {
                chip: d,
                chipSizeIsRecalculated: b,
                setChipSizeIsRecalculated: $,
                chipIndex: c,
                chipOptions: e,
                editConfig: f,
                handleEditChip: (u, h, D) => w(u, t, h, D),
                handleRemoveChip: (u, h) => T(u, t, h),
                handleToEditMode: j,
                isEditable: o,
                keyName: `${l}.key`,
                meta: B,
                ref: y,
                setChipsSizes: x,
                setEditConfig: F,
                validationRules: k,
                valueName: `${l}.value`
              }
            )
          },
          d.id
        ) }, d.id);
      }),
      /* @__PURE__ */ m("div", { className: "chip-block", children: [
        a.hiddenChips.length > 0 && S && /* @__PURE__ */ i(
          Q,
          {
            chipClassNames: R,
            chipOptions: e,
            chips: a.hiddenChips,
            handleShowElements: C,
            ref: { hiddenChipsCounterRef: N, hiddenChipsPopUpRef: I },
            textOverflowEllipsis: !0
          }
        ),
        a.hiddenChipsNumber && /* @__PURE__ */ i(
          "span",
          {
            ref: N,
            className: `${R} chips_button`,
            onClick: C,
            children: a.hiddenChipsNumber
          }
        )
      ] }),
      o && /* @__PURE__ */ i(
        "button",
        {
          "data-testid": `${_}-add-chip`,
          className: P,
          onClick: (l) => g(l, t),
          children: /* @__PURE__ */ i(Z, {})
        }
      )
    ] }) });
  } });
};
n = M(n);
n.displayName = "FormChipCellView";
n.propTypes = {
  chipOptions: X,
  chipSizeIsRecalculated: r.bool.isRequired,
  setChipSizeIsRecalculated: r.func.isRequired,
  chips: r.object.isRequired,
  editConfig: r.object.isRequired,
  formState: r.object.isRequired,
  handleAddNewChip: r.func.isRequired,
  handleEditChip: r.func.isRequired,
  handleRemoveChip: r.func.isRequired,
  handleShowElements: r.func.isRequired,
  handleToEditMode: r.func.isRequired,
  isEditable: r.bool,
  name: r.string.isRequired,
  setChipsSizes: r.func.isRequired,
  setEditConfig: r.func.isRequired,
  shortChips: r.bool,
  showChips: r.bool.isRequired,
  showHiddenChips: r.bool.isRequired,
  validateFields: r.func.isRequired,
  validationRules: r.object
};
const he = n;
export {
  he as default
};
//# sourceMappingURL=FormChipCellView.mjs.map
