import { jsx, jsxs } from "react/jsx-runtime";
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
      return /* @__PURE__ */ jsx(
        "div",
        {
          className: !stepIsActive ? "wizard-form__hidden-content-item" : "wizard-form__visible-content-item",
          children: newChild
        },
        idx
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
        /* @__PURE__ */ jsx(
          Button,
          {
            id: "wizard-btn-back",
            icon: /* @__PURE__ */ jsx(SvgBackArrow, {}),
            className: "wizard-form__back-button",
            onClick: goToPreviousStep,
            disabled: activeStepNumber === 0,
            label: "Back",
            type: "button",
            variant: TERTIARY_BUTTON
          }
        )
      );
    }
    defaultActions.push(
      /* @__PURE__ */ jsx(
        Button,
        {
          id: "wizard-btn-next",
          icon: /* @__PURE__ */ jsx(SvgBackArrow, {}),
          iconPosition: "right",
          className: "wizard-form__next-button",
          disabled: (stepConfig == null ? void 0 : stepConfig.nextIsDisabled) || isLastStep,
          onClick: goToNextStep,
          label: "Next",
          type: "button",
          variant: TERTIARY_BUTTON
        }
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
  return /* @__PURE__ */ jsxs(
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
        /* @__PURE__ */ jsx(
          WizardSteps,
          {
            activeStepNumber,
            firstDisabledStepIdx,
            jumpToStep,
            steps: visibleSteps
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "wizard-form__content-container", children: /* @__PURE__ */ jsx("div", { className: "wizard-form__content", children: stepsTemplate }) })
      ]
    }
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
