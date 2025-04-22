import { jsx as u } from "react/jsx-runtime";
import g, { useLayoutEffect as y, forwardRef as j } from "react";
import e from "prop-types";
import E from "../NewChipForm/NewChipForm.mjs";
import { CHIP_OPTIONS as N } from "../../../types.mjs";
/* empty css               */
let i = ({
  chip: a,
  chipIndex: r,
  chipOptions: s = {
    background: "purple",
    boldValue: !1,
    borderRadius: "primary",
    borderColor: "transparent",
    density: "dense",
    font: "purple"
  },
  editConfig: p,
  handleEditChip: f,
  handleRemoveChip: l,
  handleToEditMode: m,
  isEditable: c = !1,
  keyName: n = "",
  meta: R,
  setChipsSizes: o,
  setEditConfig: b,
  validationRules: h = {},
  valueName: C = ""
}, q) => {
  const t = g.useRef();
  return y(() => {
    t.current && o && o((d) => ({
      ...d,
      [r]: t.current.getBoundingClientRect().width
    }));
  }, [r, o]), /* @__PURE__ */ u("div", { onClick: (d) => m(d, r, n), ref: t, children: /* @__PURE__ */ u(
    E,
    {
      chip: a,
      chipIndex: r,
      chipOptions: s,
      className: "input-label-key",
      editConfig: p,
      handleRemoveChip: l,
      isEditable: c,
      keyName: n,
      meta: R,
      onChange: f,
      ref: q,
      setEditConfig: b,
      validationRules: h,
      valueName: C
    }
  ) });
};
i = j(i);
i.displayName = "FormChip";
i.propTypes = {
  chip: e.object.isRequired,
  chipIndex: e.number.isRequired,
  chipOptions: N,
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
const P = i;
export {
  P as default
};
//# sourceMappingURL=FormChip.mjs.map
