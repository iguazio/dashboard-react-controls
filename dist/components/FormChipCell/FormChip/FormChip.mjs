import { jsx as p } from "react/jsx-runtime";
import F, { useLayoutEffect as T, forwardRef as k } from "react";
import e from "prop-types";
import w from "../NewChipForm/NewChipForm.mjs";
import { CHIP_OPTIONS as O } from "../../../types.mjs";
/* empty css               */
let i = ({
  chip: f,
  chipIndex: r,
  chipSizeIsRecalculated: s,
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
  isDeletable: q = !1,
  isEditable: g = !1,
  keyName: a = "",
  meta: y,
  setChipsSizes: t,
  setEditConfig: j,
  validationRules: E = {},
  valueName: N = ""
}, v) => {
  const u = F.useRef();
  return T(() => {
    u.current && t && s && t((d) => {
      var o, n, l;
      return {
        ...d,
        [r]: ((l = (n = (o = u.current) == null ? void 0 : o.getBoundingClientRect) == null ? void 0 : n.call(o)) == null ? void 0 : l.width) ?? 50
      };
    });
  }, [r, s, t]), /* @__PURE__ */ p("div", { onClick: (d) => C(d, r, a), ref: u, children: /* @__PURE__ */ p(
    w,
    {
      chip: f,
      chipIndex: r,
      chipOptions: m,
      className: "input-label-key",
      editConfig: R,
      handleRemoveChip: h,
      isDeletable: q,
      isEditable: g,
      keyName: a,
      meta: y,
      onChange: b,
      ref: v,
      setChipSizeIsRecalculated: c,
      setEditConfig: j,
      validationRules: E,
      valueName: N
    }
  ) });
};
i = k(i);
i.displayName = "FormChip";
i.propTypes = {
  chip: e.object.isRequired,
  chipSizeIsRecalculated: e.bool.isRequired,
  setChipSizeIsRecalculated: e.func.isRequired,
  chipIndex: e.number.isRequired,
  chipOptions: O,
  editConfig: e.object.isRequired,
  handleEditChip: e.func.isRequired,
  handleRemoveChip: e.func.isRequired,
  handleToEditMode: e.func.isRequired,
  isDeletable: e.bool,
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
