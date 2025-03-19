"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _classnames = _interopRequireDefault(require("classnames"));
var _lodash = require("lodash");
var _Button = _interopRequireDefault(require("../../Button/Button"));
var _types = require("../../../types");
require("./WizardSteps.scss");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
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

const WizardSteps = _ref => {
  let {
    activeStepNumber,
    firstDisabledStepIdx = null,
    jumpToStep,
    steps
  } = _ref;
  const getStepClassNames = (idx, invalid) => (0, _classnames.default)('wizard-steps__item', idx === activeStepNumber && 'wizard-steps__item_active', invalid && 'wizard-steps__item_invalid');
  const handleJumpToStep = (event, idx) => {
    event.preventDefault();
    jumpToStep(idx);
  };
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    className: "wizard-steps",
    children: steps.map((_ref2, idx) => {
      let {
        id,
        label,
        disabled,
        invalid
      } = _ref2;
      const stepIsDisabled = (0, _lodash.isNumber)(firstDisabledStepIdx) && idx >= firstDisabledStepIdx;
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.default, {
        className: getStepClassNames(idx, invalid),
        disabled: stepIsDisabled,
        icon: /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
          className: "wizard-steps__indicator",
          children: idx + 1
        }),
        label: label,
        onClick: e => handleJumpToStep(e, idx)
      }, id);
    })
  });
};
WizardSteps.propTypes = {
  activeStepNumber: _propTypes.default.number.isRequired,
  firstDisabledStepIdx: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.oneOf([null])]),
  jumpToStep: _propTypes.default.func.isRequired,
  steps: _types.WIZARD_STEPS_CONFIG
};
var _default = exports.default = WizardSteps;