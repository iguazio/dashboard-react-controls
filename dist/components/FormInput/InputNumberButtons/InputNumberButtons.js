"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _lodash = require("lodash");
var _math = require("../../../utils/math.util");
var _rangeArrowSmall = require("../../../images/range-arrow-small.svg");
require("./InputNumberButtons.scss");
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

const InputNumberButtons = _ref => {
  let {
    disabled = false,
    min = null,
    max = null,
    onChange,
    step = 1,
    value
  } = _ref;
  const handleIncrease = event => {
    event.preventDefault();
    if (max && value >= max) return;
    let newValue = isCurrentValueEmpty() ? step : (0, _math.performFloatOperation)(value, step, '+');
    newValue = max && newValue > max ? max : newValue;
    onChange(newValue);
  };
  const handleDecrease = event => {
    event.preventDefault();
    if (min && value <= min) return;
    let newValue = isCurrentValueEmpty() ? -step : (0, _math.performFloatOperation)(value, step, '-');
    newValue = min && newValue < min ? min : newValue;
    onChange(newValue);
  };
  const isCurrentValueEmpty = () => {
    return (0, _lodash.isNil)(value) || value === '';
  };
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    "data-testid": "range-input-container",
    className: "form-field-range",
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "range__buttons",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
        "data-testid": "btn-increase",
        className: "range__button range__button-increase",
        disabled: disabled,
        onClick: handleIncrease,
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_rangeArrowSmall.ReactComponent, {
          className: "increase"
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
        "data-testid": "btn-decrease",
        className: "range__button range__button-decrease",
        disabled: disabled,
        onClick: handleDecrease,
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_rangeArrowSmall.ReactComponent, {
          className: "decrease"
        })
      })]
    })
  });
};
InputNumberButtons.propTypes = {
  disabled: _propTypes.default.bool,
  min: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),
  max: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),
  onChange: _propTypes.default.func.isRequired,
  step: _propTypes.default.number,
  value: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]).isRequired
};
var _default = exports.default = /*#__PURE__*/_react.default.memo(InputNumberButtons);