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

var WizardSteps = function WizardSteps(_ref) {
  var activeStepNumber = _ref.activeStepNumber,
    handleSubmit = _ref.handleSubmit,
    jumpToStep = _ref.jumpToStep,
    nextStepIsInvalid = _ref.nextStepIsInvalid,
    steps = _ref.steps;
  var getStepClassNames = function getStepClassNames(idx, stepIsInvalid) {
    return (0, _classnames.default)('wizard-steps__item', idx === activeStepNumber && 'active', !stepIsInvalid && 'valid');
  };
  var handleJumpToStep = function handleJumpToStep(event, idx) {
    event.preventDefault();
    if (idx === activeStepNumber + 1) {
      handleSubmit();
    } else {
      jumpToStep(idx);
    }
  };
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    className: "wizard-steps",
    children: steps.map(function (_ref2, idx) {
      var id = _ref2.id,
        label = _ref2.label,
        disabled = _ref2.disabled;
      var stepIsInvalid = idx > activeStepNumber + 1 || idx === activeStepNumber + 1 && (nextStepIsInvalid || disabled);
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.default, {
        className: getStepClassNames(idx, stepIsInvalid),
        disabled: stepIsInvalid,
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
  handleSubmit: _propTypes.default.func.isRequired,
  jumpToStep: _propTypes.default.func.isRequired,
  nextStepIsInvalid: _propTypes.default.bool.isRequired,
  steps: _types.WIZARD_STEPS_CONFIG
};
var _default = WizardSteps;
exports.default = _default;