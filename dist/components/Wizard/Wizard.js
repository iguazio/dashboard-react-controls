"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
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
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; } /*
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
var Wizard = function Wizard(_ref) {
  var children = _ref.children,
    className = _ref.className,
    getActions = _ref.getActions,
    isWizardOpen = _ref.isWizardOpen,
    location = _ref.location,
    onWizardResolve = _ref.onWizardResolve,
    previewText = _ref.previewText,
    size = _ref.size,
    stepsConfig = _ref.stepsConfig,
    subTitle = _ref.subTitle,
    title = _ref.title;
  var wizardClasses = (0, _classnames.default)('wizard-form', className);
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    jumpingToFirstInvalid = _useState2[0],
    setJumpingToFirstInvalid = _useState2[1];
  var _useState3 = (0, _react.useState)(0),
    _useState4 = _slicedToArray(_useState3, 2),
    activeStepNumber = _useState4[0],
    setActiveStepNumber = _useState4[1];
  var _useState5 = (0, _react.useState)(null),
    _useState6 = _slicedToArray(_useState5, 2),
    firstDisabledStepIdx = _useState6[0],
    setFirstDisabledStepIdx = _useState6[1];
  var visibleSteps = (0, _react.useMemo)(function () {
    return (stepsConfig === null || stepsConfig === void 0 ? void 0 : stepsConfig.filter(function (step) {
      return !step.hidden;
    })) || [];
  }, [stepsConfig]);
  (0, _react.useLayoutEffect)(function () {
    var disabledStep = visibleSteps.find(function (step, stepIdx) {
      if (step.disabled) {
        setFirstDisabledStepIdx(stepIdx);
      }
      return step.disabled;
    });
    if (!disabledStep) {
      setFirstDisabledStepIdx(null);
    }
  }, [visibleSteps]);
  (0, _react.useEffect)(function () {
    var firstInvalidStepIdx = visibleSteps.findIndex(function (step) {
      return step.invalid;
    });
    if (jumpingToFirstInvalid && (0, _lodash.isNumber)(firstInvalidStepIdx) && firstInvalidStepIdx !== -1) {
      setActiveStepNumber(firstInvalidStepIdx);
      setJumpingToFirstInvalid(false);
    }
  }, [jumpingToFirstInvalid, visibleSteps]);
  var stepsTemplate = (0, _react.useMemo)(function () {
    return _react.default.Children.toArray(children).filter(function (child, idx) {
      return !(0, _lodash.isEmpty)(stepsConfig) && !stepsConfig[idx].hidden;
    }).map(function (child, idx) {
      var stepIsActive = idx === activeStepNumber;
      var newChild = !(0, _lodash.isNumber)(firstDisabledStepIdx) || idx < firstDisabledStepIdx ? /*#__PURE__*/_react.default.cloneElement(child, {
        stepIsActive: stepIsActive
      }) : null;
      return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: !stepIsActive ? 'wizard-form__hidden-content-item' : '',
        children: newChild
      }, idx);
    });
  }, [activeStepNumber, children, firstDisabledStepIdx, stepsConfig]);
  var totalSteps = (0, _react.useMemo)(function () {
    return visibleSteps.length - 1 || 0;
  }, [visibleSteps]);
  var isLastStep = (0, _react.useMemo)(function () {
    return activeStepNumber === totalSteps;
  }, [activeStepNumber, totalSteps]);
  var goToNextStep = function goToNextStep() {
    setActiveStepNumber(function (prevStep) {
      return Math.min(++prevStep, totalSteps);
    });
  };
  var goToPreviousStep = function goToPreviousStep() {
    return setActiveStepNumber(function (prevStep) {
      return Math.max(--prevStep, 0);
    });
  };
  var goToFirstInvalidStep = function goToFirstInvalidStep() {
    setJumpingToFirstInvalid(true);
  };
  var jumpToStep = function jumpToStep(idx) {
    return setActiveStepNumber(idx);
  };
  var getDefaultActions = function getDefaultActions(stepConfig) {
    var defaultActions = [];
    if (activeStepNumber !== 0) {
      defaultActions.push( /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.default, {
        id: "wizard-btn-back",
        onClick: goToPreviousStep,
        disabled: activeStepNumber === 0,
        label: "Back",
        type: "button"
      }));
    }
    defaultActions.push( /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.default, {
      id: "wizard-btn-next",
      disabled: stepConfig.nextIsDisabled || isLastStep,
      onClick: goToNextStep,
      label: 'Next',
      type: "button",
      variant: _constants.SECONDARY_BUTTON
    }));
    return defaultActions;
  };
  var renderModalActions = function renderModalActions() {
    if ((0, _lodash.isEmpty)(visibleSteps)) return [];
    var actionsList = getDefaultActions(visibleSteps[activeStepNumber]);
    var allStepsAreEnabled = visibleSteps.every(function (step) {
      return !step.disabled;
    });
    if (getActions) {
      var actions = getActions({
        allStepsAreEnabled: allStepsAreEnabled,
        jumpToStep: jumpToStep,
        goToFirstInvalidStep: goToFirstInvalidStep
      });
      var mainActions = actions.map(function (action) {
        return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.default, _objectSpread({}, action));
      });
      actionsList.push.apply(actionsList, _toConsumableArray(mainActions));
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
Wizard.defaultProps = {
  className: '',
  getActions: null,
  confirmClose: false,
  previewText: '',
  size: _constants.MODAL_MD,
  stepsConfig: [],
  subTitle: null
};
Wizard.propsTypes = {
  className: _propTypes.default.string,
  getActions: _propTypes.default.func,
  confirmClose: _propTypes.default.bool,
  isWizardOpen: _propTypes.default.bool.isRequired,
  location: _propTypes.default.string.isRequired,
  onWizardResolve: _propTypes.default.func.isRequired,
  previewText: _propTypes.default.string,
  size: _types.MODAL_SIZES,
  stepsConfig: _types.WIZARD_STEPS_CONFIG,
  subTitle: _propTypes.default.string,
  title: _propTypes.default.string.isRequired
};
Wizard.Step = function (_ref2) {
  var children = _ref2.children;
  return children;
};
var _default = Wizard;
exports.default = _default;