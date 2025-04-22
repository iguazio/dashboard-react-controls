import { jsx as i } from "react/jsx-runtime";
import "react";
import t from "prop-types";
import _ from "classnames";
import { isNumber as f } from "lodash";
import N from "../../Button/Button.mjs";
import { WIZARD_STEPS_CONFIG as S } from "../../../types.mjs";
/* empty css                  */
const b = ({ activeStepNumber: m, firstDisabledStepIdx: p = null, jumpToStep: o, steps: a }) => {
  const n = (e, s) => _(
    "wizard-steps__item",
    e === m && "wizard-steps__item_active",
    s && "wizard-steps__item_invalid"
  ), l = (e, s) => {
    e.preventDefault(), o(s);
  };
  return /* @__PURE__ */ i("div", { className: "wizard-steps", children: a.map(({ id: e, label: s, invalid: u }, r) => {
    const c = f(p) && r >= p;
    return /* @__PURE__ */ i(
      N,
      {
        className: n(r, u),
        disabled: c,
        icon: /* @__PURE__ */ i("span", { className: "wizard-steps__indicator", children: r + 1 }),
        label: s,
        onClick: (d) => l(d, r)
      },
      e
    );
  }) });
};
b.propTypes = {
  activeStepNumber: t.number.isRequired,
  firstDisabledStepIdx: t.oneOfType([t.number, t.oneOf([null])]),
  jumpToStep: t.func.isRequired,
  steps: S.isRequired
};
export {
  b as default
};
//# sourceMappingURL=WizardSteps.mjs.map
