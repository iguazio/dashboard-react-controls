"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _reactTransitionGroup = require("react-transition-group");
var _classnames = _interopRequireDefault(require("classnames"));
var _Backdrop = _interopRequireDefault(require("../Backdrop/Backdrop"));
var _RoundedIcon = _interopRequireDefault(require("../RoundedIcon/RoundedIcon"));
var _constants = require("../../constants");
var _types = require("../../types");
var _close = require("../../images/close.svg");
require("./Modal.scss");
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

const Modal = _ref => {
  let {
    actions = [],
    children,
    className,
    noHeader = false,
    onClose,
    previewText = '',
    size = _constants.MODAL_MD,
    show = false,
    subTitle = null,
    title = ''
  } = _ref;
  const nodeRef = (0, _react.useRef)(null);
  const modalClassNames = (0, _classnames.default)('modal', className, size && `modal-${size}`);
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Backdrop.default, {
      onClose: onClose,
      show: show
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactTransitionGroup.CSSTransition, {
      nodeRef: nodeRef,
      in: show,
      timeout: 300,
      classNames: "modal-transition",
      unmountOnExit: true,
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: modalClassNames,
        "data-testid": "modal",
        ref: nodeRef,
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "modal__header-button",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_RoundedIcon.default, {
            "data-testid": "pop-up-close-btn",
            onClick: onClose,
            tooltipText: "Close",
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_close.ReactComponent, {})
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "modal__content",
          children: [!noHeader && /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            className: "modal__header",
            children: [previewText && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
              className: "modal__header-preview-text",
              children: previewText
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("h5", {
              className: "modal__header-title",
              children: title
            }), subTitle && /*#__PURE__*/(0, _jsxRuntime.jsx)("h6", {
              className: "modal__header-sub-title",
              children: subTitle
            })]
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: "modal__body",
            children: children
          }), actions && actions.length > 0 && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: "modal__footer",
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
              className: "modal__footer-actions",
              children: actions.map((action, idx) => /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                children: action
              }, idx))
            })
          })]
        })]
      })
    })]
  });
};
Modal.propTypes = {
  actions: _propTypes.default.array,
  children: _propTypes.default.oneOfType([_propTypes.default.element, _propTypes.default.object, _propTypes.default.node, _propTypes.default.string]).isRequired,
  onClose: _propTypes.default.func.isRequired,
  previewText: _propTypes.default.string,
  show: _propTypes.default.bool.isRequired,
  size: _types.MODAL_SIZES,
  subTitle: _propTypes.default.string,
  title: _propTypes.default.string
};
var _default = exports.default = Modal;