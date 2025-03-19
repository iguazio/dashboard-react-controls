"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _classnames = _interopRequireDefault(require("classnames"));
var _Tooltip = _interopRequireDefault(require("../Tooltip/Tooltip"));
var _TextTooltipTemplate = _interopRequireDefault(require("../TooltipTemplate/TextTooltipTemplate"));
require("./roundedIcon.scss");
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

const RoundedIcon = /*#__PURE__*/_react.default.forwardRef((_ref, ref) => {
  let {
    children,
    className = '',
    disabled = false,
    id = '',
    isActive = false,
    onClick = () => {},
    tooltipText = ''
  } = _ref;
  const wrapperClassNames = (0, _classnames.default)('round-icon-cp', className);
  const IconClassNames = (0, _classnames.default)('round-icon-cp__circle', isActive && 'round-icon-cp__circle-active', disabled && 'round-icon-cp__circle-disabled');
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    className: wrapperClassNames,
    ref: ref,
    "data-testid": id,
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Tooltip.default, {
      hidden: !tooltipText,
      id: id,
      template: /*#__PURE__*/(0, _jsxRuntime.jsx)(_TextTooltipTemplate.default, {
        text: tooltipText
      }),
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
        onClick: onClick,
        disabled: disabled,
        className: IconClassNames,
        children: children
      })
    })
  });
});
RoundedIcon.propTypes = {
  children: _propTypes.default.node.isRequired,
  className: _propTypes.default.string,
  disabled: _propTypes.default.bool,
  id: _propTypes.default.string,
  isActive: _propTypes.default.bool,
  onClick: _propTypes.default.func,
  tooltipText: _propTypes.default.string
};
var _default = exports.default = /*#__PURE__*/_react.default.memo(RoundedIcon);