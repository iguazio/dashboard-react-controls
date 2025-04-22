import { jsx as n, jsxs as G } from "react/jsx-runtime";
import z, { useState as f, useMemo as m, useLayoutEffect as J, useEffect as U, createElement as Y } from "react";
import s from "prop-types";
import H from "classnames";
import { isNumber as w, isEmpty as A } from "lodash";
import b from "../Button/Button.mjs";
import K from "../Modal/Modal.mjs";
import Q from "./WizardSteps/WizardSteps.mjs";
import { TERTIARY_BUTTON as I, MODAL_MD as V } from "../../constants.mjs";
import { WIZARD_STEPS_CONFIG as X, MODAL_SIZES as $ } from "../../types.mjs";
import N from "../../images/back-arrow.svg.mjs";
/* empty css             */
const x = ({
  children: l,
  className: y = "",
  getActions: S = null,
  isWizardOpen: E,
  onWizardResolve: M,
  previewText: R = "",
  size: D = V,
  stepsConfig: o = [],
  subTitle: k = null,
  title: F
}) => {
  const L = H("wizard-form", y), [v, _] = f(!1), [r, d] = f(0), [c, h] = f(null), i = m(() => (o == null ? void 0 : o.filter((t) => !t.hidden)) || [], [o]);
  J(() => {
    i.find((e, a) => (e.disabled && h(a), e.disabled)) || h(null);
  }, [i]), U(() => {
    const t = i.findIndex((e) => e.invalid);
    v && w(t) && t !== -1 && (d(t), _(!1));
  }, [v, i]);
  const O = m(() => z.Children.toArray(l).filter((t, e) => !A(o) && !o[e].hidden).map((t, e) => {
    const a = e === r, p = !w(c) || e < c ? z.cloneElement(t, { stepIsActive: a }) : null;
    return /* @__PURE__ */ n(
      "div",
      {
        className: a ? "wizard-form__visible-content-item" : "wizard-form__hidden-content-item",
        children: p
      },
      e
    );
  }), [r, l, c, o]), u = m(() => i.length - 1 || 0, [i]), W = m(() => r === u, [r, u]), j = () => {
    d((t) => Math.min(++t, u));
  }, q = () => d((t) => Math.max(--t, 0)), B = () => {
    _(!0);
  }, T = (t) => d(t), P = (t) => {
    const e = [];
    return r !== 0 && e.push(
      /* @__PURE__ */ n(
        b,
        {
          id: "wizard-btn-back",
          icon: /* @__PURE__ */ n(N, {}),
          className: "wizard-form__back-button",
          onClick: q,
          disabled: r === 0,
          label: "Back",
          type: "button",
          variant: I
        }
      )
    ), e.push(
      /* @__PURE__ */ n(
        b,
        {
          id: "wizard-btn-next",
          icon: /* @__PURE__ */ n(N, {}),
          iconPosition: "right",
          className: "wizard-form__next-button",
          disabled: (t == null ? void 0 : t.nextIsDisabled) || W,
          onClick: j,
          label: "Next",
          type: "button",
          variant: I
        }
      )
    ), e;
  };
  return /* @__PURE__ */ G(
    K,
    {
      actions: (() => {
        if (A(i)) return [];
        const t = P(i[r]), e = i.every((a) => !a.disabled);
        if (S) {
          const p = S({ allStepsAreEnabled: e, jumpToStep: T, goToFirstInvalidStep: B }).map((g, Z) => /* @__PURE__ */ Y(b, { ...g, key: Z }));
          t.push(...p);
        }
        return t;
      })(),
      className: L,
      onClose: M,
      previewText: R,
      show: E,
      size: D,
      subTitle: k,
      title: F,
      children: [
        /* @__PURE__ */ n(
          Q,
          {
            activeStepNumber: r,
            firstDisabledStepIdx: c,
            jumpToStep: T,
            steps: i
          }
        ),
        /* @__PURE__ */ n("div", { className: "wizard-form__content-container", children: /* @__PURE__ */ n("div", { className: "wizard-form__content", children: O }) })
      ]
    }
  );
};
x.propTypes = {
  children: s.node.isRequired,
  className: s.string,
  getActions: s.func,
  isWizardOpen: s.bool.isRequired,
  onWizardResolve: s.func.isRequired,
  previewText: s.string,
  size: $,
  stepsConfig: X,
  subTitle: s.string,
  title: s.string.isRequired
};
x.Step = ({ children: l }) => l;
export {
  x as default
};
//# sourceMappingURL=Wizard.mjs.map
