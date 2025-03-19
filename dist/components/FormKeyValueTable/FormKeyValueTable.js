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
var _types = require("../../types");
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

const FormKeyValueTable = _ref => {
  let {
    actionButtonId = '',
    addNewItemLabel = 'Add new item',
    className = '',
    defaultKey = '',
    disabled = false,
    exitEditModeTriggerItem = null,
    fieldsPath,
    formState,
    isKeyEditable = true,
    isKeyRequired = true,
    isValueRequired = true,
    keyHeader = 'Key',
    keyLabel = 'Key',
    keyOptions = null,
    keyValidationRules = [],
    onExitEditModeCallback = () => {},
    valueHeader = 'Value',
    valueLabel = 'Value',
    valueType = 'text',
    valueValidationRules = []
  } = _ref;
  const tableClassNames = (0, _classnames.default)('form-table form-key-value-table', disabled && 'form-table_disabled', className);
  const {
    addNewRow,
    applyChanges,
    bottomScrollRef,
    deleteRow,
    discardOrDelete,
    editingItem,
    enterEditMode,
    isCurrentRowEditing
  } = (0, _hooks.useFormTable)(formState, exitEditModeTriggerItem, onExitEditModeCallback);
  const uniquenessValidator = (fields, newValue) => {
    return !fields.value.some((_ref2, index) => {
      let {
        data: {
          key
        }
      } = _ref2;
      return newValue.trim() === key.trim() && index !== editingItem.ui.index;
    });
  };
  const getKeyTextTemplate = keyValue => {
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Tooltip, {
      template: /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.TextTooltipTemplate, {
        text: keyValue
      }),
      children: keyValue
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
      children: _ref3 => {
        let {
          fields
        } = _ref3;
        return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
          children: [fields.map((rowPath, index) => {
            const tableRowClassNames = (0, _classnames.default)('form-table__row', isCurrentRowEditing(rowPath) && 'form-table__row_active');
            return editingItem && index === editingItem.ui.index && !disabled ? /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
              className: tableRowClassNames,
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                className: "form-table__cell form-table__cell_1",
                children: keyOptions ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.FormSelect, {
                  name: `${rowPath}.data.key`,
                  density: "normal",
                  options: keyOptions
                }) : isKeyEditable || editingItem.ui.isNew ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.FormInput, {
                  className: "input_edit",
                  placeholder: keyLabel,
                  density: "normal",
                  name: `${rowPath}.data.key`,
                  required: isKeyRequired,
                  validationRules: [...keyValidationRules, {
                    name: 'uniqueness',
                    label: 'Name must be unique',
                    pattern: newValue => uniquenessValidator(fields, newValue)
                  }]
                }) : getKeyTextTemplate(fields.value[index].data.key)
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                className: "form-table__cell form-table__cell_1",
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.FormInput, {
                  className: "input_edit",
                  placeholder: valueLabel,
                  density: "normal",
                  name: `${rowPath}.data.value`,
                  type: valueType,
                  required: isValueRequired,
                  validationRules: valueValidationRules
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
              onClick: event => !disabled && enterEditMode(event, fields, fieldsPath, index),
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                className: "form-table__cell form-table__cell_1",
                children: getKeyTextTemplate(fields.value[index].data.key)
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                className: "form-table__cell form-table__cell_1",
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Tooltip, {
                  template: /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.TextTooltipTemplate, {
                    text: valueType === 'password' ? null : fields.value[index].data.value
                  }),
                  children: valueType === 'password' ? '*****' : fields.value[index].data.value
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
            hidden: editingItem?.ui?.isNew,
            fields: fields,
            id: actionButtonId,
            label: addNewItemLabel,
            onClick: function () {
              for (var _len = arguments.length, addRowArgs = new Array(_len), _key = 0; _key < _len; _key++) {
                addRowArgs[_key] = arguments[_key];
              }
              return addNewRow(...addRowArgs, {
                data: {
                  key: defaultKey || '',
                  value: ''
                }
              });
            },
            fieldsPath: fieldsPath
          })]
        });
      }
    })]
  });
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
  isKeyEditable: _propTypes.default.bool,
  isKeyRequired: _propTypes.default.bool,
  isValueRequired: _propTypes.default.bool,
  keyHeader: _propTypes.default.string,
  keyLabel: _propTypes.default.string,
  keyOptions: _propTypes.default.arrayOf(_propTypes.default.shape({
    label: _propTypes.default.string.isRequired,
    id: _propTypes.default.string.isRequired
  })),
  keyValidationRules: _types.INPUT_VALIDATION_RULES,
  onExitEditModeCallback: _propTypes.default.func,
  valueHeader: _propTypes.default.string,
  valueLabel: _propTypes.default.string,
  valueType: _propTypes.default.string,
  valueValidationRules: _types.INPUT_VALIDATION_RULES
};
var _default = exports.default = FormKeyValueTable;