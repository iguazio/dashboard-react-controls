"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _classnames = _interopRequireDefault(require("classnames"));
var _reactFinalFormArrays = require("react-final-form-arrays");
var _components = require("../../components");
var _elements = require("../../elements");
var _hooks = require("../../hooks");
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

var FormKeyValueTable = function FormKeyValueTable(_ref) {
  var actionButtonId = _ref.actionButtonId,
    addNewItemLabel = _ref.addNewItemLabel,
    className = _ref.className,
    defaultKey = _ref.defaultKey,
    disabled = _ref.disabled,
    exitEditModeTriggerItem = _ref.exitEditModeTriggerItem,
    fieldsPath = _ref.fieldsPath,
    formState = _ref.formState,
    isKeyRequired = _ref.isKeyRequired,
    isValueRequired = _ref.isValueRequired,
    keyHeader = _ref.keyHeader,
    keyLabel = _ref.keyLabel,
    keyOptions = _ref.keyOptions,
    onExitEditModeCallback = _ref.onExitEditModeCallback,
    valueHeader = _ref.valueHeader,
    valueLabel = _ref.valueLabel;
  var tableClassNames = (0, _classnames.default)('form-table form-key-value-table', className);
  var _useFormTable = (0, _hooks.useFormTable)(formState, exitEditModeTriggerItem, onExitEditModeCallback),
    addNewRow = _useFormTable.addNewRow,
    applyChanges = _useFormTable.applyChanges,
    bottomScrollRef = _useFormTable.bottomScrollRef,
    deleteRow = _useFormTable.deleteRow,
    discardOrDelete = _useFormTable.discardOrDelete,
    editingItem = _useFormTable.editingItem,
    enterEditMode = _useFormTable.enterEditMode,
    isCurrentRowEditing = _useFormTable.isCurrentRowEditing;
  var uniquenessValidator = function uniquenessValidator(fields, newValue) {
    return !fields.value.some(function (_ref2, index) {
      var key = _ref2.data.key;
      return newValue.trim() === key && index !== editingItem.ui.index;
    });
  };
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: tableClassNames,
    "data-testid": fieldsPath,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "form-table__row form-table__header-row no-hover",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "form-table__cell form-table__cell_1",
        children: keyHeader
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "form-table__cell form-table__cell_1",
        children: valueHeader
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "form-table__cell form-table__actions-cell"
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactFinalFormArrays.FieldArray, {
      name: fieldsPath,
      children: function children(_ref3) {
        var _editingItem$ui;
        var fields = _ref3.fields;
        return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
          children: [fields.map(function (rowPath, index) {
            var tableRowClassNames = (0, _classnames.default)('form-table__row', isCurrentRowEditing(rowPath) && 'form-table__row_active');
            return editingItem && index === editingItem.ui.index && !disabled ? /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
              className: tableRowClassNames,
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                className: "form-table__cell form-table__cell_1",
                children: keyOptions ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.FormSelect, {
                  name: "".concat(rowPath, ".data.key"),
                  density: "normal",
                  options: keyOptions
                }) : /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.FormInput, {
                  className: "input_edit",
                  placeholder: keyLabel,
                  density: "normal",
                  name: "".concat(rowPath, ".data.key"),
                  required: isKeyRequired,
                  validationRules: [{
                    name: 'uniqueness',
                    label: 'Name must be unique',
                    pattern: function pattern(newValue) {
                      return uniquenessValidator(fields, newValue);
                    }
                  }]
                })
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                className: "form-table__cell form-table__cell_1",
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.FormInput, {
                  className: "input_edit",
                  placeholder: valueLabel,
                  density: "normal",
                  name: "".concat(rowPath, ".data.value"),
                  required: isValueRequired
                })
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_elements.FormRowActions, {
                applyChanges: applyChanges,
                deleteRow: deleteRow,
                discardOrDelete: discardOrDelete,
                editingItem: editingItem,
                fieldsPath: fieldsPath,
                index: index
              })]
            }, index) : /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
              className: tableRowClassNames,
              onClick: function onClick(event) {
                return enterEditMode(event, fields, fieldsPath, index);
              },
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                className: "form-table__cell form-table__cell_1",
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Tooltip, {
                  template: /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.TextTooltipTemplate, {
                    text: fields.value[index].data.key
                  }),
                  children: fields.value[index].data.key
                })
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                className: "form-table__cell form-table__cell_1",
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Tooltip, {
                  template: /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.TextTooltipTemplate, {
                    text: fields.value[index].data.value
                  }),
                  children: fields.value[index].data.value
                })
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_elements.FormRowActions, {
                applyChanges: applyChanges,
                deleteRow: deleteRow,
                discardOrDelete: discardOrDelete,
                editingItem: editingItem,
                fieldsPath: fieldsPath,
                index: index
              })]
            }, index);
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_elements.FormActionButton, {
            ref: bottomScrollRef,
            disabled: disabled,
            hidden: editingItem === null || editingItem === void 0 ? void 0 : (_editingItem$ui = editingItem.ui) === null || _editingItem$ui === void 0 ? void 0 : _editingItem$ui.isNew,
            fields: fields,
            id: actionButtonId,
            label: addNewItemLabel,
            onClick: function onClick() {
              for (var _len = arguments.length, addRowArgs = new Array(_len), _key = 0; _key < _len; _key++) {
                addRowArgs[_key] = arguments[_key];
              }
              return addNewRow.apply(void 0, addRowArgs.concat([{
                data: {
                  key: defaultKey || '',
                  value: ''
                }
              }]));
            },
            fieldsPath: fieldsPath
          })]
        });
      }
    })]
  });
};
FormKeyValueTable.defaultProps = {
  actionButtonId: '',
  addNewItemLabel: 'Add new item',
  className: '',
  defaultKey: '',
  disabled: false,
  exitEditModeTriggerItem: null,
  isKeyRequired: true,
  isValueRequired: true,
  keyHeader: 'Key',
  keyLabel: 'Key',
  keyOptions: null,
  onExitEditModeCallback: function onExitEditModeCallback() {},
  valueHeader: 'Value',
  valueLabel: 'Value'
};
FormKeyValueTable.propTypes = {
  actionButtonId: _propTypes.default.string,
  addNewItemLabel: _propTypes.default.string,
  className: _propTypes.default.string,
  defaultKey: _propTypes.default.string,
  disabled: _propTypes.default.bool,
  exitEditModeTriggerItem: _propTypes.default.any,
  fieldsPath: _propTypes.default.string.isRequired,
  formState: _propTypes.default.shape({}).isRequired,
  isKeyRequired: _propTypes.default.bool,
  isValueRequired: _propTypes.default.bool,
  keyHeader: _propTypes.default.string,
  keyLabel: _propTypes.default.string,
  keyOptions: _propTypes.default.arrayOf(_propTypes.default.shape({
    label: _propTypes.default.string.isRequired,
    id: _propTypes.default.string.isRequired
  })),
  onExitEditModeCallback: _propTypes.default.func,
  valueHeader: _propTypes.default.string,
  valueLabel: _propTypes.default.string
};
var _default = FormKeyValueTable;
exports.default = _default;