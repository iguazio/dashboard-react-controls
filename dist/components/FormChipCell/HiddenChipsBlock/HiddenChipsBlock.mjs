import { jsx as e, jsxs as l, Fragment as t } from "react/jsx-runtime";
import { useEffect as N, forwardRef as v } from "react";
import { createPortal as k } from "react-dom";
import s from "prop-types";
import c from "classnames";
import C from "../../Tooltip/Tooltip.mjs";
import b from "../../TooltipTemplate/TextTooltipTemplate.mjs";
import { CHIP_OPTIONS as T } from "../../../types.mjs";
import "../../../hooks/index.mjs";
import { useHiddenChipsBlock as g } from "../../../hooks/useHiddenChipsBlock.hook.mjs";
let a = ({ chipClassNames: m, chipOptions: n, chips: r, handleShowElements: p, textOverflowEllipsis: o = !1 }, { hiddenChipsCounterRef: h, hiddenChipsPopUpRef: d }) => {
  const { hiddenChipsBlockClassNames: u } = g(
    h,
    d
  ), f = c("chip__label", o && "data-ellipsis"), y = c(
    "chip__value",
    o && "data-ellipsis",
    n.boldValue && "chip-value_bold"
  ), _ = (i) => i.isKeyOnly ? i.key : `${i.key}${i.delimiter ? i.delimiter : ":"} ${i.value}`;
  return N(() => {
    r.length === 0 && p();
  }), k(
    /* @__PURE__ */ e(
      "div",
      {
        ref: d,
        className: u,
        onClick: (i) => i.stopPropagation(),
        children: /* @__PURE__ */ e("div", { className: "chip-block-hidden__scrollable-container", children: r == null ? void 0 : r.map((i) => /* @__PURE__ */ e(
          C,
          {
            template: /* @__PURE__ */ e(
              b,
              {
                text: i.delimiter ? /* @__PURE__ */ l("span", { className: "chip__content", children: [
                  i.key,
                  !i.isKeyOnly && /* @__PURE__ */ l(t, { children: [
                    /* @__PURE__ */ e("span", { className: "chip__delimiter", children: i.delimiter }),
                    i.value
                  ] })
                ] }) : _(i)
              }
            ),
            children: /* @__PURE__ */ l("div", { className: m, children: [
              i.key && /* @__PURE__ */ e("div", { className: f, children: i.key }),
              i.value && /* @__PURE__ */ l(t, { children: [
                /* @__PURE__ */ e("div", { className: "chip__delimiter", children: i.delimiter ?? ":" }),
                /* @__PURE__ */ e("div", { className: y, children: i.value })
              ] })
            ] })
          },
          i.id
        )) })
      }
    ),
    document.getElementById("overlay_container")
  );
};
a = v(a);
a.displayName = "HiddenChipsBlock";
a.propTypes = {
  chipClassNames: s.string.isRequired,
  chipOptions: T.isRequired,
  chips: s.array.isRequired,
  handleShowElements: s.func.isRequired,
  textOverflowEllipsis: s.bool
};
const j = a;
export {
  j as default
};
//# sourceMappingURL=HiddenChipsBlock.mjs.map
