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
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
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

var FormRowActions = function FormRowActions(_ref) {
  var _editingItem$ui, _editingItem$ui2, _editingItem$ui3;
  var applyChanges = _ref.applyChanges,
    deleteIsDisabled = _ref.deleteIsDisabled,
    deleteRow = _ref.deleteRow,
    disabled = _ref.disabled,
    discardOrDelete = _ref.discardOrDelete,
    editingItem = _ref.editingItem,
    fieldsPath = _ref.fieldsPath,
    hidden = _ref.hidden,
    index = _ref.index;
  return hidden ? /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    className: "form-table__cell form-table__actions-cell"
  }) : /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    className: "form-table__cell form-table__actions-cell",
    children: (editingItem === null || editingItem === void 0 ? void 0 : (_editingItem$ui = editingItem.ui) === null || _editingItem$ui === void 0 ? void 0 : _editingItem$ui.index) === index ? /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_components.RoundedIcon, {
        onClick: function onClick(event) {
          return applyChanges(event, index);
        },
        tooltipText: "Apply",
        disabled: disabled,
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_checkmark.ReactComponent, {})
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.RoundedIcon, {
        onClick: function onClick(event) {
          return discardOrDelete(event, fieldsPath, index);
        },
        tooltipText: (_editingItem$ui2 = editingItem.ui) !== null && _editingItem$ui2 !== void 0 && _editingItem$ui2.isNew ? 'Delete' : 'Discard changes',
        disabled: disabled,
        children: (_editingItem$ui3 = editingItem.ui) !== null && _editingItem$ui3 !== void 0 && _editingItem$ui3.isNew ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_delete.ReactComponent, {}) : /*#__PURE__*/(0, _jsxRuntime.jsx)(_close.ReactComponent, {})
      })]
    }) : /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_components.RoundedIcon, {
        onClick: function onClick(event) {
          event.preventDefault();
        },
        tooltipText: "Edit",
        disabled: disabled,
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_edit.ReactComponent, {})
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.RoundedIcon, {
        onClick: function onClick(event) {
          deleteRow(event, fieldsPath, index);
        },
        tooltipText: "Delete",
        disabled: disabled || deleteIsDisabled,
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_delete.ReactComponent, {})
      })]
    })
  });
};
FormRowActions.defaultProps = {
  deleteIsDisabled: false,
  disabled: false,
  editingItem: null,
  hidden: false
};
FormRowActions.propTypes = {
  applyChanges: _propTypes.default.func.isRequired,
  deleteIsDisabled: _propTypes.default.bool,
  deleteRow: _propTypes.default.func.isRequired,
  disabled: _propTypes.default.bool,
  discardOrDelete: _propTypes.default.func.isRequired,
  editingItem: _types.FORM_TABLE_EDITING_ITEM,
  fieldsPath: _propTypes.default.string.isRequired,
  hidden: _propTypes.default.bool,
  index: _propTypes.default.number.isRequired
};
var _default = FormRowActions;
exports.default = _default;