"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _classnames = _interopRequireDefault(require("classnames"));
var _Tooltip = _interopRequireDefault(require("../Tooltip/Tooltip"));
var _TextTooltipTemplate = _interopRequireDefault(require("../TooltipTemplate/TextTooltipTemplate"));
var _types = require("../../types");
var _constants = require("../../constants");
require("./Button.scss");
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

const Button = /*#__PURE__*/(0, _react.forwardRef)((_ref, ref) => {
  let {
    className = '',
    density = 'normal',
    icon,
    iconPosition = 'left',
    id = 'btn',
    label = 'Button',
    tooltip = '',
    variant = _constants.TERTIARY_BUTTON,
    ...restProps
  } = _ref;
  const buttonClassName = (0, _classnames.default)('btn', "btn-".concat(variant), "btn-".concat(density), className);
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("button", {
    ...restProps,
    className: buttonClassName,
    ref: ref,
    "data-testid": id,
    children: [icon && iconPosition === 'left' && icon, tooltip ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_Tooltip.default, {
      template: /*#__PURE__*/(0, _jsxRuntime.jsx)(_TextTooltipTemplate.default, {
        text: tooltip
      }),
      children: label && /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
        children: label
      })
    }) : label && /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
      children: label
    }), icon && iconPosition === 'right' && icon]
  });
});
Button.propTypes = {
  className: _propTypes.default.string,
  density: _propTypes.default.oneOf(['dense', 'normal', 'medium', 'chunky']),
  icon: _propTypes.default.element,
  id: _propTypes.default.string,
  label: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.element]),
  tooltip: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.element]),
  variant: _types.BUTTON_VARIANTS
};
var _default = exports.default = Button;