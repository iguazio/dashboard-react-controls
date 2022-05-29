"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Button = _interopRequireDefault(require("../../Button/Button"));

var _types = require("../../../types");

require("./WizardSteps.scss");

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var WizardSteps = function WizardSteps(_ref) {
  var activeStepNumber = _ref.activeStepNumber,
      jumpToStep = _ref.jumpToStep,
      steps = _ref.steps;

  var getStepClassNames = function getStepClassNames(idx) {
    return (0, _classnames.default)('wizard-steps__item', idx === activeStepNumber && 'active', idx < activeStepNumber && 'valid');
  };

  var handleJumpToStep = function handleJumpToStep(event, idx) {
    event.preventDefault();
    jumpToStep(idx);
  };

  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    className: "wizard-steps",
    children: steps.map(function (_ref2, idx) {
      var id = _ref2.id,
          label = _ref2.label;
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.default, {
        className: getStepClassNames(idx),
        disabled: idx > activeStepNumber,
        icon: /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
          className: "wizard-steps__indicator",
          children: idx + 1
        }),
        label: label,
        onClick: function onClick(e) {
          return handleJumpToStep(e, idx);
        }
      }, id);
    })
  });
};

WizardSteps.propTypes = {
  activeStepNumber: _propTypes.default.number.isRequired,
  jumpToStep: _propTypes.default.func.isRequired,
  steps: _types.WIZARD_STEPS_CONFIG
};
var _default = WizardSteps;
exports.default = _default;