"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _classnames = _interopRequireDefault(require("classnames"));
var _lodash = require("lodash");
var _Button = _interopRequireDefault(require("../Button/Button"));
var _Modal = _interopRequireDefault(require("../Modal/Modal"));
var _WizardSteps = _interopRequireDefault(require("./WizardSteps/WizardSteps"));
var _constants = require("../../constants");
var _types = require("../../types");
require("./Wizard.scss");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
/*
Copyright 2022 Iguazio Systems Ltd.
Licensed under the Apache License, Version 2.0 (the "License") with
an addition restriction as set forth herein. You may not use this
file except in compliance with the License. You may obtain a copy of
the License at http://www.apache.org/licenses/LICENSE-2.0.
Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or
implied. See the License for the specific language governing
permissions and limitations under the License.
In addition, you may not use the software for any purposes that are
illegal under applicable law, and the grant of the foregoing license
under the Apache 2.0 license is conditioned upon your compliance with
such restriction.
*/

const Wizard = _ref => {
  let {
    children,
    className = '',
    getActions = null,
    isWizardOpen,
    location,
    onWizardResolve,
    previewText = '',
    size = _constants.MODAL_MD,
    stepsConfig = [],
    subTitle = null,
    title
  } = _ref;
  const wizardClasses = (0, _classnames.default)('wizard-form', className);
  const [jumpingToFirstInvalid, setJumpingToFirstInvalid] = (0, _react.useState)(false);
  const [activeStepNumber, setActiveStepNumber] = (0, _react.useState)(0);
  const [firstDisabledStepIdx, setFirstDisabledStepIdx] = (0, _react.useState)(null);
  const visibleSteps = (0, _react.useMemo)(() => {
    return (stepsConfig === null || stepsConfig === void 0 ? void 0 : stepsConfig.filter(step => !step.hidden)) || [];
  }, [stepsConfig]);
  (0, _react.useLayoutEffect)(() => {
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
  (0, _react.useEffect)(() => {
    const firstInvalidStepIdx = visibleSteps.findIndex(step => step.invalid);
    if (jumpingToFirstInvalid && (0, _lodash.isNumber)(firstInvalidStepIdx) && firstInvalidStepIdx !== -1) {
      setActiveStepNumber(firstInvalidStepIdx);
      setJumpingToFirstInvalid(false);
    }
  }, [jumpingToFirstInvalid, visibleSteps]);
  const stepsTemplate = (0, _react.useMemo)(() => {
    return _react.default.Children.toArray(children).filter((child, idx) => !(0, _lodash.isEmpty)(stepsConfig) && !stepsConfig[idx].hidden).map((child, idx) => {
      const stepIsActive = idx === activeStepNumber;
      const newChild = !(0, _lodash.isNumber)(firstDisabledStepIdx) || idx < firstDisabledStepIdx ? /*#__PURE__*/_react.default.cloneElement(child, {
        stepIsActive
      }) : null;
      return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: !stepIsActive ? 'wizard-form__hidden-content-item' : 'wizard-form__visible-content-item',
        children: newChild
      }, idx);
    });
  }, [activeStepNumber, children, firstDisabledStepIdx, stepsConfig]);
  const totalSteps = (0, _react.useMemo)(() => {
    return visibleSteps.length - 1 || 0;
  }, [visibleSteps]);
  const isLastStep = (0, _react.useMemo)(() => {
    return activeStepNumber === totalSteps;
  }, [activeStepNumber, totalSteps]);
  const goToNextStep = () => {
    setActiveStepNumber(prevStep => Math.min(++prevStep, totalSteps));
  };
  const goToPreviousStep = () => setActiveStepNumber(prevStep => Math.max(--prevStep, 0));
  const goToFirstInvalidStep = () => {
    setJumpingToFirstInvalid(true);
  };
  const jumpToStep = idx => {
    return setActiveStepNumber(idx);
  };
  const getDefaultActions = stepConfig => {
    const defaultActions = [];
    if (activeStepNumber !== 0) {
      defaultActions.push( /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.default, {
        id: "wizard-btn-back",
        onClick: goToPreviousStep,
        disabled: activeStepNumber === 0,
        label: "Back",
        type: "button",
        variant: _constants.LABEL_BUTTON
      }));
    }
    defaultActions.push( /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.default, {
      id: "wizard-btn-next",
      disabled: (stepConfig === null || stepConfig === void 0 ? void 0 : stepConfig.nextIsDisabled) || isLastStep,
      onClick: goToNextStep,
      label: 'Next',
      type: "button",
      variant: _constants.LABEL_BUTTON
    }));
    return defaultActions;
  };
  const renderModalActions = () => {
    if ((0, _lodash.isEmpty)(visibleSteps)) return [];
    const actionsList = getDefaultActions(visibleSteps[activeStepNumber]);
    const allStepsAreEnabled = visibleSteps.every(step => !step.disabled);
    if (getActions) {
      const actions = getActions({
        allStepsAreEnabled,
        jumpToStep,
        goToFirstInvalidStep
      });
      const mainActions = actions.map(action => /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.default, {
        ...action
      }));
      actionsList.push(...mainActions);
    }
    return actionsList;
  };
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Modal.default, {
    actions: renderModalActions(),
    className: wizardClasses,
    location: location,
    onClose: onWizardResolve,
    previewText: previewText,
    show: isWizardOpen,
    size: size,
    subTitle: subTitle,
    title: title,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_WizardSteps.default, {
      activeStepNumber: activeStepNumber,
      firstDisabledStepIdx: firstDisabledStepIdx,
      jumpToStep: jumpToStep,
      steps: visibleSteps
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "wizard-form__content-container",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "wizard-form__content",
        children: stepsTemplate
      })
    })]
  });
};
Wizard.propsTypes = {
  className: _propTypes.default.string,
  getActions: _propTypes.default.func,
  isWizardOpen: _propTypes.default.bool.isRequired,
  location: _propTypes.default.string.isRequired,
  onWizardResolve: _propTypes.default.func.isRequired,
  previewText: _propTypes.default.string,
  size: _types.MODAL_SIZES,
  stepsConfig: _types.WIZARD_STEPS_CONFIG,
  subTitle: _propTypes.default.string,
  title: _propTypes.default.string.isRequired
};
Wizard.Step = _ref2 => {
  let {
    children
  } = _ref2;
  return children;
};
var _default = exports.default = Wizard;