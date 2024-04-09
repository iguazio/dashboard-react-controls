"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useFormTable = void 0;
var _react = require("react");
var _lodash = require("lodash");
var _finalForm = require("final-form");
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

const useFormTable = (formState, exitEditModeTriggerItem, onExitEditModeCallback) => {
  // `editingItem` should contain the `data` object with all fields that are used in the `formState`.
  // Properties that aren't used in the `formState` should be placed directly in the `editingItem` object
  // `editingItem` also has an `ui` property which is used internally in this hook
  //
  // e.g.
  // editingItem = {
  //   data: {
  //     <fieldName>: <fieldValue>,
  //     <fieldName2>: <fieldValue2>
  //   },
  //   <anotherProperty>: <anotherPropertyValue>
  //   ui: {
  //     isNew: <true|false>, // `true` if we are creating a new row, if we are editing it's `false`
  //     fieldsPath: <"the.path">, // the path where table data is placed in the `formState`
  //     index: <0|1|...> // index of the editing row
  //   }
  // }
  const [editingItem, setEditingItem] = (0, _react.useState)(null);
  const editingItemRef = (0, _react.useRef)(null);
  const editingItemErrorsRef = (0, _react.useRef)(null);
  const formStateRef = (0, _react.useRef)(null);
  const bottomScrollRef = (0, _react.useRef)(null);
  const onExitEditModeCallbackRef = (0, _react.useRef)(onExitEditModeCallback);
  (0, _react.useLayoutEffect)(() => {
    const tableErrors = (0, _lodash.get)(formState === null || formState === void 0 ? void 0 : formState.errors, editingItem === null || editingItem === void 0 ? void 0 : editingItem.ui.fieldsPath, []);
    editingItemErrorsRef.current = (0, _lodash.get)(tableErrors, editingItem === null || editingItem === void 0 ? void 0 : editingItem.ui.index, null);
  }, [editingItem === null || editingItem === void 0 ? void 0 : editingItem.ui.fieldsPath, editingItem === null || editingItem === void 0 ? void 0 : editingItem.ui.index, formState === null || formState === void 0 ? void 0 : formState.errors]);
  (0, _react.useLayoutEffect)(() => {
    formStateRef.current = formState;
  }, [formState]);
  (0, _react.useLayoutEffect)(() => {
    onExitEditModeCallbackRef.current = onExitEditModeCallback;
  }, [onExitEditModeCallback]);
  const exitEditMode = () => {
    var _editingItemRef$curre;
    if ((_editingItemRef$curre = editingItemRef.current) !== null && _editingItemRef$curre !== void 0 && _editingItemRef$curre.data) {
      var _editingItemRef$curre2;
      Object.entries((_editingItemRef$curre2 = editingItemRef.current) === null || _editingItemRef$curre2 === void 0 ? void 0 : _editingItemRef$curre2.data).forEach(_ref => {
        var _formStateRef$current, _editingItemRef$curre3, _editingItemRef$curre4;
        let [fieldName] = _ref;
        (_formStateRef$current = formStateRef.current) === null || _formStateRef$current === void 0 || _formStateRef$current.form.mutators.setFieldState("".concat((_editingItemRef$curre3 = editingItemRef.current) === null || _editingItemRef$curre3 === void 0 ? void 0 : _editingItemRef$curre3.ui.fieldsPath, "[").concat((_editingItemRef$curre4 = editingItemRef.current) === null || _editingItemRef$curre4 === void 0 ? void 0 : _editingItemRef$curre4.ui.index, "].data.").concat(fieldName), {
          modified: false
        });
      });
    }
    editingItemRef.current = null;
    setEditingItem(null);
    (onExitEditModeCallbackRef === null || onExitEditModeCallbackRef === void 0 ? void 0 : onExitEditModeCallbackRef.current) && onExitEditModeCallbackRef.current();
  };
  (0, _react.useEffect)(() => {
    const applyOrDiscardOrDeleteInEffect = () => {
      if (editingItemRef !== null && editingItemRef !== void 0 && editingItemRef.current) {
        if (!editingItemErrorsRef.current) {
          exitEditMode();
        } else {
          var _editingItemRef$curre5;
          if ((_editingItemRef$curre5 = editingItemRef.current) !== null && _editingItemRef$curre5 !== void 0 && (_editingItemRef$curre5 = _editingItemRef$curre5.ui) !== null && _editingItemRef$curre5 !== void 0 && _editingItemRef$curre5.isNew) {
            var _editingItemRef$curre6;
            const values = (0, _lodash.get)(formStateRef.current.values, (_editingItemRef$curre6 = editingItemRef.current) === null || _editingItemRef$curre6 === void 0 ? void 0 : _editingItemRef$curre6.ui.fieldsPath);
            if ((values === null || values === void 0 ? void 0 : values.length) > 1) {
              var _editingItemRef$curre7, _editingItemRef$curre8;
              formStateRef.current.form.mutators.remove((_editingItemRef$curre7 = editingItemRef.current) === null || _editingItemRef$curre7 === void 0 ? void 0 : _editingItemRef$curre7.ui.fieldsPath, (_editingItemRef$curre8 = editingItemRef.current) === null || _editingItemRef$curre8 === void 0 ? void 0 : _editingItemRef$curre8.ui.index);
            } else {
              var _editingItemRef$curre9;
              formStateRef.current.form.change((_editingItemRef$curre9 = editingItemRef.current) === null || _editingItemRef$curre9 === void 0 ? void 0 : _editingItemRef$curre9.ui.fieldsPath, []);
            }
          } else {
            var _editingItemRef$curre10, _editingItemRef$curre11;
            formStateRef.current.form.mutators.update((_editingItemRef$curre10 = editingItemRef.current) === null || _editingItemRef$curre10 === void 0 ? void 0 : _editingItemRef$curre10.ui.fieldsPath, (_editingItemRef$curre11 = editingItemRef.current) === null || _editingItemRef$curre11 === void 0 ? void 0 : _editingItemRef$curre11.ui.index, (0, _lodash.omit)(editingItemRef.current, ['ui']));
          }
          exitEditMode();
        }
      }
    };
    return () => {
      applyOrDiscardOrDeleteInEffect();
    };
  }, [exitEditModeTriggerItem]);
  const addNewRow = (event, fields, fieldsPath, newItem) => {
    applyOrDiscardOrDelete(event);
    formStateRef.current.form.mutators.push(fieldsPath, newItem);
    setEditingItem(() => {
      var _fields$value;
      const newEditingItem = {
        ...newItem,
        ui: {
          isNew: true,
          fieldsPath,
          index: ((_fields$value = fields.value) === null || _fields$value === void 0 ? void 0 : _fields$value.length) || 0
        }
      };
      editingItemRef.current = newEditingItem;
      return newEditingItem;
    });
    scrollIntoView();
  };
  const applyChanges = (event, index) => {
    if (editingItemRef.current) {
      if (!editingItemErrorsRef.current) {
        var _editingItemRef$curre12;
        if ((_editingItemRef$curre12 = editingItemRef.current) !== null && _editingItemRef$curre12 !== void 0 && _editingItemRef$curre12.ui.isNew) {
          scrollIntoView();
        }
        exitEditMode();
      } else {
        var _editingItemErrorsRef;
        // Mark all empty fields as `modified` in order to highlight the error if the field is invalid
        Object.entries((_editingItemErrorsRef = editingItemErrorsRef.current) === null || _editingItemErrorsRef === void 0 ? void 0 : _editingItemErrorsRef.data).forEach(_ref2 => {
          var _formStateRef$current2, _editingItemRef$curre13;
          let [fieldName] = _ref2;
          (_formStateRef$current2 = formStateRef.current) === null || _formStateRef$current2 === void 0 || _formStateRef$current2.form.mutators.setFieldState("".concat((_editingItemRef$curre13 = editingItemRef.current) === null || _editingItemRef$curre13 === void 0 ? void 0 : _editingItemRef$curre13.ui.fieldsPath, "[").concat(index, "].data.").concat(fieldName), {
            modified: true
          });
        });
      }
    }
  };
  const deleteRow = (event, fieldsPath, index) => {
    if (editingItemRef.current && index !== editingItemRef.current.ui.index) {
      applyOrDiscardOrDelete(event);
    }
    const values = (0, _lodash.get)(formStateRef.current.values, fieldsPath);
    if ((values === null || values === void 0 ? void 0 : values.length) > 1) {
      formStateRef.current.form.mutators.remove(fieldsPath, index);
    } else {
      formStateRef.current.form.change(fieldsPath, []);
    }
    exitEditMode();
    event && event.stopPropagation();
  };
  const discardChanges = (event, fieldsPath, index) => {
    formStateRef.current.form.mutators.update(fieldsPath, index, (0, _lodash.omit)(editingItemRef.current, ['ui']));
    exitEditMode();
    event && event.stopPropagation();
  };
  const discardOrDelete = (event, fieldsPath, index) => {
    var _editingItemRef$curre14;
    if (!editingItemRef.current || (_editingItemRef$curre14 = editingItemRef.current) !== null && _editingItemRef$curre14 !== void 0 && (_editingItemRef$curre14 = _editingItemRef$curre14.ui) !== null && _editingItemRef$curre14 !== void 0 && _editingItemRef$curre14.isNew) {
      deleteRow(event, fieldsPath, index);
    } else {
      discardChanges(event, fieldsPath, index);
    }
  };
  const applyOrDiscardOrDelete = function () {
    let event = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    if (editingItemRef !== null && editingItemRef !== void 0 && editingItemRef.current) {
      if (!editingItemErrorsRef.current) {
        var _editingItemRef$curre15;
        applyChanges(event, (_editingItemRef$curre15 = editingItemRef.current) === null || _editingItemRef$curre15 === void 0 ? void 0 : _editingItemRef$curre15.ui.index);
      } else {
        var _editingItemRef$curre16, _editingItemRef$curre17;
        discardOrDelete(event, (_editingItemRef$curre16 = editingItemRef.current) === null || _editingItemRef$curre16 === void 0 ? void 0 : _editingItemRef$curre16.ui.fieldsPath, (_editingItemRef$curre17 = editingItemRef.current) === null || _editingItemRef$curre17 === void 0 ? void 0 : _editingItemRef$curre17.ui.index);
      }
    }
  };
  const enterEditMode = (event, fields, fieldsPath, index) => {
    applyOrDiscardOrDelete(event);
    setTimeout(() => {
      const editItem = fields.value[index];
      setEditingItem(() => {
        const newEditingItem = {
          ...editItem,
          ui: {
            fieldsPath,
            index
          }
        };
        editingItemRef.current = newEditingItem;
        return newEditingItem;
      });
    });
  };
  const scrollIntoView = () => {
    if (bottomScrollRef.current) {
      setTimeout(() => {
        bottomScrollRef.current.scrollIntoView({
          behavior: 'smooth',
          block: 'nearest'
        });
      });
    }
  };
  const isCurrentRowEditing = rowPath => {
    return (editingItemRef === null || editingItemRef === void 0 ? void 0 : editingItemRef.current) && "".concat(editingItemRef.current.ui.fieldsPath, "[").concat(editingItemRef.current.ui.index, "]") === rowPath;
  };
  const getTableArrayErrors = fieldsPath => {
    if (formState.submitFailed && formState.invalid) {
      return (0, _lodash.get)(formState, "errors.".concat(fieldsPath, ".").concat(_finalForm.ARRAY_ERROR), []);
    } else {
      return [];
    }
  };
  return {
    addNewRow,
    applyChanges,
    applyOrDiscardOrDelete,
    bottomScrollRef,
    deleteRow,
    discardChanges,
    discardOrDelete,
    editingItem,
    editingItemRef,
    enterEditMode,
    exitEditMode,
    getTableArrayErrors,
    isCurrentRowEditing
  };
};
exports.useFormTable = useFormTable;