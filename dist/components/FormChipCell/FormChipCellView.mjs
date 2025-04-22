import { jsx as d, jsxs as m, Fragment as B } from "react/jsx-runtime";
import { forwardRef as D } from "react";
import r from "prop-types";
import p from "classnames";
import { FieldArray as K } from "react-final-form-arrays";
import { isEmpty as M } from "lodash";
import G from "./FormChip/FormChip.mjs";
import J from "./HiddenChipsBlock/HiddenChipsBlock.mjs";
import L from "../TooltipTemplate/TextTooltipTemplate.mjs";
import Q from "../Tooltip/Tooltip.mjs";
import { CHIP_OPTIONS as U } from "../../types.mjs";
import { isEveryObjectValueEmpty as W } from "../../utils/common.util.mjs";
import { uniquenessError as R } from "./formChipCell.util.mjs";
import X from "../../images/add.svg.mjs";
let s = ({
  chipOptions: e = {
    background: "purple",
    boldValue: !1,
    borderRadius: "primary",
    borderColor: "transparent",
    density: "dense",
    font: "purple"
  },
  chips: a,
  editConfig: b,
  handleAddNewChip: q,
  handleEditChip: $,
  handleRemoveChip: g,
  handleShowElements: f,
  handleToEditMode: w,
  isEditable: o = !1,
  name: C,
  setChipsSizes: T,
  setEditConfig: x,
  shortChips: F = !1,
  showChips: j,
  showHiddenChips: V,
  validateFields: E,
  validationRules: n = {}
}, { chipsCellRef: y, chipsWrapperRef: A, hiddenChipsCounterRef: _, hiddenChipsPopUpRef: H }) => {
  const P = p(
    "button-add",
    e.background && `button-add-background_${e.background}`,
    e.borderColor && `button-add-border_${e.borderColor}`,
    e.font && `button-add-font_${e.font}`,
    e.density && `button-add-density_${e.density}`
  ), S = p("chips-wrapper", o && "fixed-max-width"), N = p(
    "chip",
    "chip__content",
    o && "data-ellipsis",
    F && "chip_short",
    a.hiddenChips && "chip_hidden",
    e.density && `chip-density_${e.density}`,
    e.borderRadius && `chip-border_${e.borderRadius}`,
    e.background && `chip-background_${e.background}`,
    e.borderColor && `chip-border_${e.borderColor}`,
    e.font && `chip-font_${e.font}`,
    o && "editable",
    (j || o) && "chip_visible"
  );
  return /* @__PURE__ */ d(K, { name: C, validate: E, children: ({ fields: t, meta: I }) => {
    let k = { ...n };
    return !M(n) && n.key.every((l) => l.name !== R.name) && (k = {
      ...n,
      key: [...n.key, R]
    }), (o || !W(t)) && /* @__PURE__ */ d("div", { className: "chips-cell", ref: y, children: /* @__PURE__ */ m("div", { className: S, ref: A, children: [
      t.map((l, c) => {
        var v;
        const i = t.value[c];
        return c < ((v = a.visibleChips) == null ? void 0 : v.length) && /* @__PURE__ */ d("div", { className: "chip-block", children: /* @__PURE__ */ d(
          Q,
          {
            hidden: b.isEdit && !i.tooltip,
            template: /* @__PURE__ */ d(
              L,
              {
                text: i.tooltip || /* @__PURE__ */ m("span", { className: "chip__content", children: [
                  /* @__PURE__ */ d("span", { className: "chip__content-item", children: i.key }),
                  !i.isKeyOnly && /* @__PURE__ */ m(B, { children: [
                    /* @__PURE__ */ d("span", { className: "chip__delimiter", children: i.delimiter ? i.delimiter : ":" }),
                    /* @__PURE__ */ d("span", { className: "chip__content-item", children: i.value })
                  ] })
                ] })
              }
            ),
            children: /* @__PURE__ */ d(
              G,
              {
                chip: i,
                chipIndex: c,
                chipOptions: e,
                editConfig: b,
                handleEditChip: (u, h, z) => $(u, t, h, z),
                handleRemoveChip: (u, h) => g(u, t, h),
                handleToEditMode: w,
                isEditable: o,
                keyName: `${l}.key`,
                meta: I,
                ref: y,
                setChipsSizes: T,
                setEditConfig: x,
                validationRules: k,
                valueName: `${l}.value`
              }
            )
          },
          i.id
        ) }, i.id);
      }),
      /* @__PURE__ */ m("div", { className: "chip-block", children: [
        a.hiddenChips.length > 0 && V && /* @__PURE__ */ d(
          J,
          {
            chipClassNames: N,
            chipOptions: e,
            chips: a.hiddenChips,
            handleShowElements: f,
            ref: { hiddenChipsCounterRef: _, hiddenChipsPopUpRef: H },
            textOverflowEllipsis: !0
          }
        ),
        a.hiddenChipsNumber && /* @__PURE__ */ d(
          "span",
          {
            ref: _,
            className: `${N} chips_button`,
            onClick: f,
            children: a.hiddenChipsNumber
          }
        )
      ] }),
      o && /* @__PURE__ */ d(
        "button",
        {
          "data-testid": `${C}-add-chip`,
          className: P,
          onClick: (l) => q(l, t),
          children: /* @__PURE__ */ d(X, {})
        }
      )
    ] }) });
  } });
};
s = D(s);
s.displayName = "FormChipCellView";
s.propTypes = {
  chipOptions: U,
  chips: r.object.isRequired,
  editConfig: r.object.isRequired,
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
const ce = s;
export {
  ce as default
};
//# sourceMappingURL=FormChipCellView.mjs.map
