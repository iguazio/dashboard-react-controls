import { j as jsxDevRuntimeExports } from "../../_virtual/jsx-dev-runtime.mjs";
import React__default, { useState, useMemo, useLayoutEffect, useEffect, createElement } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import { isNumber, isEmpty } from "lodash";
import Button from "../Button/Button.mjs";
import Modal from "../Modal/Modal.mjs";
import WizardSteps from "./WizardSteps/WizardSteps.mjs";
import { TERTIARY_BUTTON, MODAL_MD } from "../../constants.mjs";
import { WIZARD_STEPS_CONFIG, MODAL_SIZES } from "../../types.mjs";
import SvgBackArrow from "../../images/back-arrow.svg.mjs";
/* empty css             */
const Wizard = ({
  children,
  className = "",
  getActions = null,
  isWizardOpen,
  location,
  onWizardResolve,
  previewText = "",
  size = MODAL_MD,
  stepsConfig = [],
  subTitle = null,
  title
}) => {
  const wizardClasses = classnames("wizard-form", className);
  const [jumpingToFirstInvalid, setJumpingToFirstInvalid] = useState(false);
  const [activeStepNumber, setActiveStepNumber] = useState(0);
  const [firstDisabledStepIdx, setFirstDisabledStepIdx] = useState(null);
  const visibleSteps = useMemo(() => {
    return (stepsConfig == null ? void 0 : stepsConfig.filter((step) => !step.hidden)) || [];
  }, [stepsConfig]);
  useLayoutEffect(() => {
    const disabledStep = visibleSteps.find((step, stepIdx) => {
      if (step.disabled) {
        setFirstDisabledStepIdx(stepIdx);
      }
      return step.disabled;
    });
    if (!disabledStep) {
      setFirstDisabledStepIdx(null);
    }
  }, [visibleSteps]);
  useEffect(() => {
    const firstInvalidStepIdx = visibleSteps.findIndex((step) => step.invalid);
    if (jumpingToFirstInvalid && isNumber(firstInvalidStepIdx) && firstInvalidStepIdx !== -1) {
      setActiveStepNumber(firstInvalidStepIdx);
      setJumpingToFirstInvalid(false);
    }
  }, [jumpingToFirstInvalid, visibleSteps]);
  const stepsTemplate = useMemo(() => {
    return React__default.Children.toArray(children).filter((child, idx) => !isEmpty(stepsConfig) && !stepsConfig[idx].hidden).map((child, idx) => {
      const stepIsActive = idx === activeStepNumber;
      const newChild = !isNumber(firstDisabledStepIdx) || idx < firstDisabledStepIdx ? React__default.cloneElement(child, { stepIsActive }) : null;
      return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
        "div",
        {
          className: !stepIsActive ? "wizard-form__hidden-content-item" : "wizard-form__visible-content-item",
          children: newChild
        },
        idx,
        false,
        {
          fileName: "/Users/Ilan_Kader/Development/dashboard-react-controls/src/lib/components/Wizard/Wizard.jsx",
          lineNumber: 89,
          columnNumber: 11
        },
        void 0
      );
    });
  }, [activeStepNumber, children, firstDisabledStepIdx, stepsConfig]);
  const totalSteps = useMemo(() => {
    return visibleSteps.length - 1 || 0;
  }, [visibleSteps]);
  const isLastStep = useMemo(() => {
    return activeStepNumber === totalSteps;
  }, [activeStepNumber, totalSteps]);
  const goToNextStep = () => {
    setActiveStepNumber((prevStep) => Math.min(++prevStep, totalSteps));
  };
  const goToPreviousStep = () => setActiveStepNumber((prevStep) => Math.max(--prevStep, 0));
  const goToFirstInvalidStep = () => {
    setJumpingToFirstInvalid(true);
  };
  const jumpToStep = (idx) => {
    return setActiveStepNumber(idx);
  };
  const getDefaultActions = (stepConfig) => {
    const defaultActions = [];
    if (activeStepNumber !== 0) {
      defaultActions.push(
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
          Button,
          {
            id: "wizard-btn-back",
            icon: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(SvgBackArrow, {}, void 0, false, {
              fileName: "/Users/Ilan_Kader/Development/dashboard-react-controls/src/lib/components/Wizard/Wizard.jsx",
              lineNumber: 132,
              columnNumber: 17
            }, void 0),
            className: "wizard-form__back-button",
            onClick: goToPreviousStep,
            disabled: activeStepNumber === 0,
            label: "Back",
            type: "button",
            variant: TERTIARY_BUTTON
          },
          void 0,
          false,
          {
            fileName: "/Users/Ilan_Kader/Development/dashboard-react-controls/src/lib/components/Wizard/Wizard.jsx",
            lineNumber: 130,
            columnNumber: 9
          },
          void 0
        )
      );
    }
    defaultActions.push(
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
        Button,
        {
          id: "wizard-btn-next",
          icon: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(SvgBackArrow, {}, void 0, false, {
            fileName: "/Users/Ilan_Kader/Development/dashboard-react-controls/src/lib/components/Wizard/Wizard.jsx",
            lineNumber: 146,
            columnNumber: 15
          }, void 0),
          iconPosition: "right",
          className: "wizard-form__next-button",
          disabled: (stepConfig == null ? void 0 : stepConfig.nextIsDisabled) || isLastStep,
          onClick: goToNextStep,
          label: "Next",
          type: "button",
          variant: TERTIARY_BUTTON
        },
        void 0,
        false,
        {
          fileName: "/Users/Ilan_Kader/Development/dashboard-react-controls/src/lib/components/Wizard/Wizard.jsx",
          lineNumber: 144,
          columnNumber: 7
        },
        void 0
      )
    );
    return defaultActions;
  };
  const renderModalActions = () => {
    if (isEmpty(visibleSteps)) return [];
    const actionsList = getDefaultActions(visibleSteps[activeStepNumber]);
    const allStepsAreEnabled = visibleSteps.every((step) => !step.disabled);
    if (getActions) {
      const actions = getActions({ allStepsAreEnabled, jumpToStep, goToFirstInvalidStep });
      const mainActions = actions.map((action, index) => /* @__PURE__ */ createElement(Button, { ...action, key: index }));
      actionsList.push(...mainActions);
    }
    return actionsList;
  };
  return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
    Modal,
    {
      actions: renderModalActions(),
      className: wizardClasses,
      location,
      onClose: onWizardResolve,
      previewText,
      show: isWizardOpen,
      size,
      subTitle,
      title,
      children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
          WizardSteps,
          {
            activeStepNumber,
            firstDisabledStepIdx,
            jumpToStep,
            steps: visibleSteps
          },
          void 0,
          false,
          {
            fileName: "/Users/Ilan_Kader/Development/dashboard-react-controls/src/lib/components/Wizard/Wizard.jsx",
            lineNumber: 187,
            columnNumber: 7
          },
          void 0
        ),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "wizard-form__content-container", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "wizard-form__content", children: stepsTemplate }, void 0, false, {
          fileName: "/Users/Ilan_Kader/Development/dashboard-react-controls/src/lib/components/Wizard/Wizard.jsx",
          lineNumber: 194,
          columnNumber: 9
        }, void 0) }, void 0, false, {
          fileName: "/Users/Ilan_Kader/Development/dashboard-react-controls/src/lib/components/Wizard/Wizard.jsx",
          lineNumber: 193,
          columnNumber: 7
        }, void 0)
      ]
    },
    void 0,
    true,
    {
      fileName: "/Users/Ilan_Kader/Development/dashboard-react-controls/src/lib/components/Wizard/Wizard.jsx",
      lineNumber: 176,
      columnNumber: 5
    },
    void 0
  );
};
Wizard.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  getActions: PropTypes.func,
  isWizardOpen: PropTypes.bool.isRequired,
  location: PropTypes.string.isRequired,
  onWizardResolve: PropTypes.func.isRequired,
  previewText: PropTypes.string,
  size: MODAL_SIZES,
  stepsConfig: WIZARD_STEPS_CONFIG,
  subTitle: PropTypes.string,
  title: PropTypes.string.isRequired
};
Wizard.Step = ({ children }) => children;
export {
  Wizard as default
};
//# sourceMappingURL=Wizard.mjs.map
