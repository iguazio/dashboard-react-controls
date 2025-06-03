import { jsx as i, jsxs as m, Fragment as M } from "react/jsx-runtime";
import { forwardRef as G } from "react";
import r from "prop-types";
import p from "classnames";
import { FieldArray as J } from "react-final-form-arrays";
import { isEmpty as L } from "lodash";
import Q from "./FormChip/FormChip.mjs";
import U from "./HiddenChipsBlock/HiddenChipsBlock.mjs";
import W from "../TooltipTemplate/TextTooltipTemplate.mjs";
import X from "../Tooltip/Tooltip.mjs";
import { CHIP_OPTIONS as Y } from "../../types.mjs";
import { isEveryObjectValueEmpty as Z } from "../../utils/common.util.mjs";
import { uniquenessError as g } from "./formChipCell.util.mjs";
import O from "../../images/add.svg.mjs";
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
  chips: o,
  editConfig: f,
  handleAddNewChip: w,
  handleEditChip: T,
  handleRemoveChip: j,
  handleShowElements: C,
  handleToEditMode: x,
  isEditable: t = !1,
  name: _,
  setChipsSizes: F,
  setEditConfig: V,
  shortChips: E = !1,
  showChips: S,
  showHiddenChips: A,
  validateFields: H,
  validationRules: s = {}
}, { chipsCellRef: y, chipsWrapperRef: I, hiddenChipsCounterRef: N, hiddenChipsPopUpRef: P }) => {
  var k;
  const z = p(
    "button-add",
    e.background && `button-add-background_${e.background}`,
    e.borderColor && `button-add-border_${e.borderColor}`,
    e.font && `button-add-font_${e.font}`,
    e.density && `button-add-density_${e.density}`
  ), B = p(
    "chips-wrapper",
    t && "fixed-max-width",
    ((k = o.visibleChips) == null ? void 0 : k.length) > 0 && !b && "chip_invisible"
  ), R = p(
    "chip",
    "chip__content",
    t && "data-ellipsis",
    E && "chip_short",
    o.hiddenChips && "chip_hidden",
    e.density && `chip-density_${e.density}`,
    e.borderRadius && `chip-border_${e.borderRadius}`,
    e.background && `chip-background_${e.background}`,
    e.borderColor && `chip-border_${e.borderColor}`,
    e.font && `chip-font_${e.font}`,
    t && "editable",
    (S || t) && "chip_visible"
  );
  return /* @__PURE__ */ i(J, { name: _, validate: H, children: ({ fields: a, meta: D }) => {
    let v = { ...s };
    return !L(s) && s.key.every((l) => l.name !== g.name) && (v = {
      ...s,
      key: [...s.key, g]
    }), (t || !Z(a)) && /* @__PURE__ */ i("div", { className: "chips-cell", ref: y, children: /* @__PURE__ */ m("div", { className: B, ref: I, children: [
      a.map((l, c) => {
        var q;
        const d = a.value[c];
        return c < ((q = o.visibleChips) == null ? void 0 : q.length) && /* @__PURE__ */ i("div", { className: "chip-block", children: /* @__PURE__ */ i(
          X,
          {
            hidden: f.isEdit && !d.tooltip,
            template: /* @__PURE__ */ i(
              W,
              {
                text: d.tooltip || /* @__PURE__ */ m("span", { className: "chip__content", children: [
                  /* @__PURE__ */ i("span", { className: "chip__content-item", children: d.key }),
                  !d.isKeyOnly && /* @__PURE__ */ m(M, { children: [
                    /* @__PURE__ */ i("span", { className: "chip__delimiter", children: d.delimiter ? d.delimiter : ":" }),
                    /* @__PURE__ */ i("span", { className: "chip__content-item", children: d.value })
                  ] })
                ] })
              }
            ),
            children: /* @__PURE__ */ i(
              Q,
              {
                chip: d,
                chipSizeIsRecalculated: b,
                setChipSizeIsRecalculated: $,
                chipIndex: c,
                chipOptions: e,
                editConfig: f,
                handleEditChip: (u, h, K) => T(u, a, h, K),
                handleRemoveChip: (u, h) => j(u, a, h),
                handleToEditMode: x,
                isEditable: t,
                keyName: `${l}.key`,
                meta: D,
                ref: y,
                setChipsSizes: F,
                setEditConfig: V,
                validationRules: v,
                valueName: `${l}.value`
              }
            )
          },
          d.id
        ) }, d.id);
      }),
      /* @__PURE__ */ m("div", { className: "chip-block", children: [
        o.hiddenChips.length > 0 && A && /* @__PURE__ */ i(
          U,
          {
            chipClassNames: R,
            chipOptions: e,
            chips: o.hiddenChips,
            handleShowElements: C,
            ref: { hiddenChipsCounterRef: N, hiddenChipsPopUpRef: P },
            textOverflowEllipsis: !0
          }
        ),
        o.hiddenChipsNumber && /* @__PURE__ */ i(
          "span",
          {
            ref: N,
            className: `${R} chips_button`,
            onClick: C,
            children: o.hiddenChipsNumber
          }
        )
      ] }),
      t && /* @__PURE__ */ i(
        "button",
        {
          "data-testid": `${_}-add-chip`,
          className: z,
          onClick: (l) => w(l, a),
          children: /* @__PURE__ */ i(O, {})
        }
      )
    ] }) });
  } });
};
n = G(n);
n.displayName = "FormChipCellView";
n.propTypes = {
  chipOptions: Y,
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
const pe = n;
export {
  pe as default
};
//# sourceMappingURL=FormChipCellView.mjs.map
