import { jsx as r } from "react/jsx-runtime";
import k, { useEffect as v } from "react";
import e from "prop-types";
import { createPortal as B } from "react-dom";
import H from "../../Chip/Chip.mjs";
import N from "../ChipTooltip/ChipTooltip.mjs";
import { CHIP_OPTIONS as _, CHIPS as b } from "../../../types.mjs";
import "../../../hooks/index.mjs";
import { useHiddenChipsBlock as g } from "../../../hooks/useHiddenChipsBlock.hook.mjs";
let i = ({
  chips: o = [],
  chipIndex: l = 0,
  chipOptions: n,
  className: s,
  editConfig: c = {},
  handleEditChip: a,
  handleIsEdit: p = () => {
  },
  handleRemoveChip: m,
  handleShowElements: f,
  isEditMode: h = !1,
  setEditConfig: u = () => {
  }
}, { hiddenChipsCounterRef: C, hiddenChipsPopUpRef: t }) => {
  const { hiddenChipsBlockClassNames: E } = g(
    C,
    t
  );
  return v(() => {
    o.length === 0 && f();
  }), B(
    /* @__PURE__ */ r("div", { ref: t, className: E, children: /* @__PURE__ */ r("div", { className: "chip-block-hidden__scrollable-container", children: o == null ? void 0 : o.map((d, I) => /* @__PURE__ */ r(N, { chip: d, children: /* @__PURE__ */ r(
      H,
      {
        chip: d,
        chipIndex: I + l,
        chipOptions: n,
        className: s,
        editConfig: c,
        handleEditChip: a,
        handleIsEdit: p,
        handleRemoveChip: m,
        hiddenChips: !0,
        isEditMode: h,
        ref: t,
        setEditConfig: u,
        showChips: !0,
        textOverflowEllipsis: !0
      }
    ) }, d.value)) }) }),
    document.getElementById("overlay_container")
  );
};
i = k.forwardRef(i);
i.displayName = "HiddenChipsBlock";
i.propTypes = {
  className: e.string,
  chips: b,
  chipOptions: _.isRequired,
  chipIndex: e.number,
  editConfig: e.object,
  handleEditChip: e.func,
  handleIsEdit: e.func,
  handleRemoveChip: e.func,
  handleShowElements: e.func.isRequired,
  isEditMode: e.bool,
  setEditConfig: e.func
};
const q = i;
export {
  q as default
};
//# sourceMappingURL=HiddenChipsBlock.mjs.map
