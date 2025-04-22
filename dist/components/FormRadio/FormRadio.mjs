import { jsx as l, jsxs as h } from "react/jsx-runtime";
import v from "react";
import o from "prop-types";
import { Field as p } from "react-final-form";
import m from "classnames";
import u from "../Tooltip/Tooltip.mjs";
import y from "../TooltipTemplate/TextTooltipTemplate.mjs";
/* empty css                */
let a = ({
  className: s = "",
  name: e,
  label: i,
  readOnly: c = !1,
  tooltip: t = "",
  ...r
}) => {
  const f = m(
    "form-field-radio",
    c && "form-field-radio_readonly",
    s
  );
  return /* @__PURE__ */ l(p, { name: e, value: r.value, type: "radio", children: ({ input: d }) => /* @__PURE__ */ h(
    "div",
    {
      className: f,
      "data-testid": e ? `${e}-${r.value}-form-radio` : "form-field-radio",
      children: [
        /* @__PURE__ */ l(
          "input",
          {
            className: m(d.checked ? "checked" : "unchecked"),
            type: "radio",
            "data-testid": e ? `${e}-${r.value}-radio` : "form-radio",
            ...d,
            ...r,
            checked: d.checked,
            id: e + r.value
          }
        ),
        t ? /* @__PURE__ */ l(u, { className: "label", template: /* @__PURE__ */ l(y, { text: t }), children: /* @__PURE__ */ l("label", { htmlFor: e + r.value, children: i }) }) : /* @__PURE__ */ l("label", { htmlFor: e + r.value, children: i })
      ]
    }
  ) });
};
a.propTypes = {
  className: o.string,
  label: o.string.isRequired,
  name: o.string.isRequired,
  readOnly: o.bool,
  tooltip: o.string
};
a = v.memo(a);
const g = a;
export {
  g as default
};
//# sourceMappingURL=FormRadio.mjs.map
