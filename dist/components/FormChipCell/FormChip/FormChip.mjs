import { jsx as p } from "react/jsx-runtime";
import v, { useLayoutEffect as F, forwardRef as T } from "react";
import e from "prop-types";
import k from "../NewChipForm/NewChipForm.mjs";
import { CHIP_OPTIONS as w } from "../../../types.mjs";
/* empty css               */
let i = ({
  chip: f,
  chipIndex: r,
  chipSizeIsRecalculated: n,
  setChipSizeIsRecalculated: c,
  chipOptions: m = {
    background: "purple",
    boldValue: !1,
    borderRadius: "primary",
    borderColor: "transparent",
    density: "dense",
    font: "purple"
  },
  editConfig: R,
  handleEditChip: b,
  handleRemoveChip: h,
  handleToEditMode: C,
  isEditable: q = !1,
  keyName: s = "",
  meta: g,
  setChipsSizes: t,
  setEditConfig: y,
  validationRules: j = {},
  valueName: E = ""
}, N) => {
  const u = v.useRef();
  return F(() => {
    u.current && t && n && t((d) => {
      var o, a, l;
      return {
        ...d,
        [r]: ((l = (a = (o = u.current) == null ? void 0 : o.getBoundingClientRect) == null ? void 0 : a.call(o)) == null ? void 0 : l.width) ?? 50
      };
    });
  }, [r, n, t]), /* @__PURE__ */ p("div", { onClick: (d) => C(d, r, s), ref: u, children: /* @__PURE__ */ p(
    k,
    {
      chip: f,
      chipIndex: r,
      chipOptions: m,
      className: "input-label-key",
      editConfig: R,
      handleRemoveChip: h,
      isEditable: q,
      keyName: s,
      meta: g,
      onChange: b,
      ref: N,
      setChipSizeIsRecalculated: c,
      setEditConfig: y,
      validationRules: j,
      valueName: E
    }
  ) });
};
i = T(i);
i.displayName = "FormChip";
i.propTypes = {
  chip: e.object.isRequired,
  chipSizeIsRecalculated: e.bool.isRequired,
  setChipSizeIsRecalculated: e.func.isRequired,
  chipIndex: e.number.isRequired,
  chipOptions: w,
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
const L = i;
export {
  L as default
};
//# sourceMappingURL=FormChip.mjs.map
