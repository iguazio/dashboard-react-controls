"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _components = require("../../components");
var _types = require("../../types");
var _close = require("../../images/close.svg");
var _edit = require("../../images/edit.svg");
var _delete = require("../../images/delete.svg");
var _checkmark = require("../../images/checkmark2.svg");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
/*
Copyright 2019 Iguazio Systems Ltd.

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

const FormRowActions = _ref => {
  let {
    applyChanges,
    deleteButtonIsHidden = false,
    deleteRow,
    disabled = false,
    discardOrDelete,
    editingItem = null,
    fieldsPath,
    hidden = false,
    index
  } = _ref;
  return hidden ? /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    className: "form-table__cell form-table__actions-cell"
  }) : /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: "form-table__cell form-table__actions-cell",
    children: [editingItem?.ui?.index === index && /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_components.RoundedIcon, {
        id: "apply-btn",
        onClick: event => applyChanges(event, index),
        tooltipText: "Apply",
        disabled: disabled,
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_checkmark.ReactComponent, {})
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.RoundedIcon, {
        id: "delete-discard-btn",
        onClick: event => discardOrDelete(event, fieldsPath, index),
        tooltipText: editingItem.ui?.isNew ? 'Delete' : 'Discard changes',
        disabled: disabled,
        children: editingItem.ui?.isNew ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_delete.ReactComponent, {}) : /*#__PURE__*/(0, _jsxRuntime.jsx)(_close.ReactComponent, {})
      })]
    }), (!editingItem || editingItem?.ui?.index !== index) && /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_components.RoundedIcon, {
        id: "edit-btn",
        onClick: event => {
          event.preventDefault();
        },
        tooltipText: "Edit",
        disabled: disabled,
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_edit.ReactComponent, {})
      }), !deleteButtonIsHidden && /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.RoundedIcon, {
        id: "delete-btn",
        onClick: event => {
          deleteRow(event, fieldsPath, index);
        },
        tooltipText: "Delete",
        disabled: disabled,
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_delete.ReactComponent, {})
      })]
    })]
  });
};
FormRowActions.propTypes = {
  applyChanges: _propTypes.default.func.isRequired,
  deleteButtonIsHidden: _propTypes.default.bool,
  deleteRow: _propTypes.default.func.isRequired,
  disabled: _propTypes.default.bool,
  discardOrDelete: _propTypes.default.func.isRequired,
  editingItem: _types.FORM_TABLE_EDITING_ITEM,
  fieldsPath: _propTypes.default.string.isRequired,
  hidden: _propTypes.default.bool,
  index: _propTypes.default.number.isRequired
};
var _default = exports.default = FormRowActions;