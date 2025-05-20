import { jsx as s } from "react/jsx-runtime";
import j, { useLayoutEffect as E, forwardRef as N } from "react";
import e from "prop-types";
import v from "../NewChipForm/NewChipForm.mjs";
import { CHIP_OPTIONS as F } from "../../../types.mjs";
/* empty css               */
let i = ({
  chip: a,
  chipIndex: r,
  chipSizeIsRecalculated: d,
  setChipSizeIsRecalculated: l,
  chipOptions: p = {
    background: "purple",
    boldValue: !1,
    borderRadius: "primary",
    borderColor: "transparent",
    density: "dense",
    font: "purple"
  },
  editConfig: f,
  handleEditChip: c,
  handleRemoveChip: m,
  handleToEditMode: R,
  isEditable: b = !1,
  keyName: n = "",
  meta: h,
  setChipsSizes: o,
  setEditConfig: C,
  validationRules: q = {},
  valueName: g = ""
}, y) => {
  const t = j.useRef();
  return E(() => {
    t.current && o && d && o((u) => ({
      ...u,
      [r]: t.current.getBoundingClientRect().width
    }));
  }, [r, d, o]), /* @__PURE__ */ s("div", { onClick: (u) => R(u, r, n), ref: t, children: /* @__PURE__ */ s(
    v,
    {
      chip: a,
      chipIndex: r,
      chipOptions: p,
      className: "input-label-key",
      editConfig: f,
      handleRemoveChip: m,
      isEditable: b,
      keyName: n,
      meta: h,
      onChange: c,
      ref: y,
      setChipSizeIsRecalculated: l,
      setEditConfig: C,
      validationRules: q,
      valueName: g
    }
  ) });
};
i = N(i);
i.displayName = "FormChip";
i.propTypes = {
  chip: e.object.isRequired,
  chipSizeIsRecalculated: e.bool.isRequired,
  setChipSizeIsRecalculated: e.func.isRequired,
  chipIndex: e.number.isRequired,
  chipOptions: F,
  editConfig: e.object.isRequired,
  handleEditChip: e.func.isRequired,
  handleRemoveChip: e.func.isRequired,
  handleToEditMode: e.func.isRequired,
  isEditable: e.bool,
  keyName: e.string,
  meta: e.object.isRequired,
  setChipsSizes: e.func.isRequired,
  setEditConfig: e.func.isRequired,
  validationRules: e.object,
  valueName: e.string
};
const B = i;
export {
  B as default
};
//# sourceMappingURL=FormChip.mjs.map
