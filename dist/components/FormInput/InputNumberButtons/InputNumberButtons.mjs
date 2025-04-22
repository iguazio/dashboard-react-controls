import { jsx as o, jsxs as g } from "react/jsx-runtime";
import _ from "react";
import e from "prop-types";
import { isNil as N } from "lodash";
import { performFloatOperation as d } from "../../../utils/math.util.mjs";
import p from "../../../images/range-arrow-small.svg.mjs";
/* empty css                         */
let i = ({
  disabled: u = !1,
  min: n = null,
  max: a = null,
  onChange: c,
  step: s = 1,
  value: t
}) => {
  const f = (l) => {
    if (l.preventDefault(), a && t >= a) return;
    let r = m() ? s : d(t, s, "+");
    r = a && r > a ? a : r, c(r);
  }, b = (l) => {
    if (l.preventDefault(), n && t <= n) return;
    let r = m() ? -s : d(t, s, "-");
    r = n && r < n ? n : r, c(r);
  }, m = () => N(t) || t === "";
  return /* @__PURE__ */ o("div", { "data-testid": "range-input-container", className: "form-field-range", children: /* @__PURE__ */ g("div", { className: "range__buttons", children: [
    /* @__PURE__ */ o(
      "button",
      {
        "data-testid": "btn-increase",
        className: "range__button range__button-increase",
        disabled: u,
        onClick: f,
        children: /* @__PURE__ */ o(p, { className: "increase" })
      }
    ),
    /* @__PURE__ */ o(
      "button",
      {
        "data-testid": "btn-decrease",
        className: "range__button range__button-decrease",
        disabled: u,
        onClick: b,
        children: /* @__PURE__ */ o(p, { className: "decrease" })
      }
    )
  ] }) });
};
i.propTypes = {
  disabled: e.bool,
  min: e.oneOfType([e.string, e.number]),
  max: e.oneOfType([e.string, e.number]),
  onChange: e.func.isRequired,
  step: e.number,
  value: e.oneOfType([e.string, e.number]).isRequired
};
i = _.memo(i);
const D = i;
export {
  D as default
};
//# sourceMappingURL=InputNumberButtons.mjs.map
