"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _classnames = _interopRequireDefault(require("classnames"));
var _Button = _interopRequireDefault(require("../Button/Button"));
var _PopUpDialog = _interopRequireDefault(require("../PopUpDialog/PopUpDialog"));
var _types = require("../../types");
require("./confirmDialog.scss");
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

const ConfirmDialog = _ref => {
  let {
    cancelButton = null,
    children,
    className = '',
    closePopUp,
    confirmButton = null,
    customPosition = {},
    header = '',
    isOpen,
    message = '',
    messageOnly = false,
    onResolve
  } = _ref;
  const messageClassNames = (0, _classnames.default)('confirm-dialog__message', messageOnly && 'confirm-dialog__message-only');
  const handleCancelDialog = event => {
    onResolve && onResolve();
    cancelButton.handler && cancelButton.handler(event);
  };
  const handleCloseDialog = event => {
    onResolve && onResolve();
    closePopUp && closePopUp(event);
  };
  const handleConfirmDialog = event => {
    onResolve && onResolve();
    confirmButton.handler && confirmButton.handler(event);
  };
  return isOpen && /*#__PURE__*/(0, _jsxRuntime.jsx)(_PopUpDialog.default, {
    className: className,
    closePopUp: handleCloseDialog,
    customPosition: customPosition,
    headerText: header,
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "confirm-dialog",
      children: [message && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: messageClassNames,
        children: message
      }), children && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "confirm-dialog__body",
        children: children
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "confirm-dialog__btn-container",
        children: [cancelButton && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.default, {
          className: "pop-up-dialog__btn_cancel",
          label: cancelButton.label,
          onClick: handleCancelDialog,
          variant: cancelButton.variant,
          disabled: cancelButton.disabled
        }), confirmButton && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.default, {
          label: confirmButton.label,
          onClick: handleConfirmDialog,
          variant: confirmButton.variant,
          disabled: confirmButton.disabled
        })]
      })]
    })
  });
};
ConfirmDialog.propTypes = {
  cancelButton: _types.CONFIRM_DIALOG_CANCEL_BUTTON,
  className: _propTypes.default.string,
  closePopUp: _propTypes.default.func,
  confirmButton: _types.CONFIRM_DIALOG_SUBMIT_BUTTON,
  customPosition: _propTypes.default.object,
  header: _propTypes.default.string,
  message: _types.CONFIRM_DIALOG_MESSAGE,
  messageOnly: _propTypes.default.bool
};
var _default = exports.default = ConfirmDialog;