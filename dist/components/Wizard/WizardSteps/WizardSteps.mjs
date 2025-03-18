import { j as jsxDevRuntimeExports } from "../../../_virtual/jsx-dev-runtime.mjs";
import "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import { isNumber } from "lodash";
import Button from "../../Button/Button.mjs";
import { WIZARD_STEPS_CONFIG } from "../../../types.mjs";
/* empty css                  */
const WizardSteps = ({ activeStepNumber, firstDisabledStepIdx = null, jumpToStep, steps }) => {
  const getStepClassNames = (idx, invalid) => classnames(
    "wizard-steps__item",
    idx === activeStepNumber && "wizard-steps__item_active",
    invalid && "wizard-steps__item_invalid"
  );
  const handleJumpToStep = (event, idx) => {
    event.preventDefault();
    jumpToStep(idx);
  };
  return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "wizard-steps", children: steps.map(({ id, label, invalid }, idx) => {
    const stepIsDisabled = isNumber(firstDisabledStepIdx) && idx >= firstDisabledStepIdx;
    return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
      Button,
      {
        className: getStepClassNames(idx, invalid),
        disabled: stepIsDisabled,
        icon: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "wizard-steps__indicator", children: idx + 1 }, void 0, false, {
          fileName: "/Users/Ilan_Kader/Development/dashboard-react-controls/src/lib/components/Wizard/WizardSteps/WizardSteps.jsx",
          lineNumber: 50,
          columnNumber: 19
        }, void 0),
        label,
        onClick: (e) => handleJumpToStep(e, idx)
      },
      id,
      false,
      {
        fileName: "/Users/Ilan_Kader/Development/dashboard-react-controls/src/lib/components/Wizard/WizardSteps/WizardSteps.jsx",
        lineNumber: 47,
        columnNumber: 11
      },
      void 0
    );
  }) }, void 0, false, {
    fileName: "/Users/Ilan_Kader/Development/dashboard-react-controls/src/lib/components/Wizard/WizardSteps/WizardSteps.jsx",
    lineNumber: 42,
    columnNumber: 5
  }, void 0);
};
WizardSteps.propTypes = {
  activeStepNumber: PropTypes.number.isRequired,
  firstDisabledStepIdx: PropTypes.oneOfType([PropTypes.number, PropTypes.oneOf([null])]),
  jumpToStep: PropTypes.func.isRequired,
  steps: WIZARD_STEPS_CONFIG
};
export {
  WizardSteps as default
};
//# sourceMappingURL=WizardSteps.mjs.map
