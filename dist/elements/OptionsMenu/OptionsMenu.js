"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _reactTransitionGroup = require("react-transition-group");
var _components = require("../../components");
require("./optionsMenu.scss");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
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

const OptionsMenu = /*#__PURE__*/_react.default.forwardRef((_ref, ref) => {
  let {
    children = [],
    show = false,
    timeout = 300
  } = _ref;
  const nodeRef = (0, _react.useRef)(null);
  const {
    width: dropdownWidth
  } = ref.current ? ref.current.getBoundingClientRect() : {};
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactTransitionGroup.CSSTransition, {
    nodeRef: nodeRef,
    in: show,
    timeout: timeout,
    classNames: "options-menu-transition",
    unmountOnExit: true,
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.PopUpDialog, {
      ref: nodeRef,
      headerIsHidden: true,
      className: "options-menu",
      customPosition: {
        element: ref,
        position: 'bottom-right',
        autoVerticalPosition: true,
        autoHorizontalPosition: true
      },
      style: {
        minWidth: `${dropdownWidth}px`
      },
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)("ul", {
        className: "options-menu__body",
        children: children
      })
    })
  });
});
OptionsMenu.propTypes = {
  children: _propTypes.default.arrayOf(_propTypes.default.element),
  show: _propTypes.default.bool.isRequired,
  timeout: _propTypes.default.number
};
var _default = exports.default = OptionsMenu;