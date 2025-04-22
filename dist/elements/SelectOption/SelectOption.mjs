import { jsx as l, jsxs as a } from "react/jsx-runtime";
import "react";
import s from "prop-types";
import m from "classnames";
import u from "../../components/FormCheckBox/FormCheckBox.mjs";
import o from "../../components/Tooltip/Tooltip.mjs";
import i from "../../components/TooltipTemplate/TextTooltipTemplate.mjs";
import { SELECT_OPTION as h } from "../../types.mjs";
import f from "../../images/checkmark.svg.mjs";
/* empty css                   */
const N = ({
  item: e,
  name: r,
  onClick: n = () => {
  },
  multiple: t = !1,
  selectedId: p,
  withSelectedIcon: b = !0
}) => {
  var d;
  const c = m(
    "select__item",
    t && "multiple",
    e.hidden && "hidden",
    e.disabled && "disabled"
  );
  return t ? /* @__PURE__ */ l("div", { "data-testid": "select-checkbox", className: c, children: /* @__PURE__ */ l(
    u,
    {
      name: r,
      value: e.id,
      label: e.label,
      disabled: e.disabled || !1,
      children: e.status && /* @__PURE__ */ l("span", { className: `state-${e.status}-job status` })
    }
  ) }) : /* @__PURE__ */ l(
    "li",
    {
      "data-testid": "select-option",
      className: c,
      onClick: () => {
        !e.disabled && n(e.id);
      },
      "data-custom-id": e.id,
      children: /* @__PURE__ */ a("div", { className: "label-row", children: [
        /* @__PURE__ */ a("div", { className: "data-ellipsis select__item-label", children: [
          /* @__PURE__ */ a("div", { className: "select__item-main-label", children: [
            e.icon && /* @__PURE__ */ l("span", { "data-testid": "select-icon", className: "select__item-icon", children: e.icon }),
            e.status && /* @__PURE__ */ l("span", { className: `state-${e.status}-job status` }),
            /* @__PURE__ */ l(
              o,
              {
                renderChildAsHtml: ((d = e.labelHtml) == null ? void 0 : d.length) > 0,
                template: /* @__PURE__ */ l(i, { text: e.label }),
                children: e.labelHtml ? e.labelHtml : e.label
              }
            )
          ] }),
          e.subLabel && /* @__PURE__ */ l(
            o,
            {
              className: "select__item-sub-label",
              template: /* @__PURE__ */ l(i, { text: e.subLabel }),
              children: /* @__PURE__ */ l("span", { children: e.subLabel })
            }
          )
        ] }),
        b && e.id === p && /* @__PURE__ */ l(f, { className: "checkmark" })
      ] })
    }
  );
};
N.propTypes = {
  name: s.string.isRequired,
  item: h.isRequired,
  onClick: s.func,
  multiple: s.bool,
  selectedId: s.string,
  withSelectedIcon: s.bool
};
export {
  N as default
};
//# sourceMappingURL=SelectOption.mjs.map
