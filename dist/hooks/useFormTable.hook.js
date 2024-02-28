"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useFormTable = void 0;
var _react = require("react");
var _lodash = require("lodash");
var _finalForm = require("final-form");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; } /*
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
var useFormTable = function useFormTable(formState, exitEditModeTriggerItem, onExitEditModeCallback) {
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
  var _useState = (0, _react.useState)(null),
    _useState2 = _slicedToArray(_useState, 2),
    editingItem = _useState2[0],
    setEditingItem = _useState2[1];
  var editingItemRef = (0, _react.useRef)(null);
  var editingItemErrorsRef = (0, _react.useRef)(null);
  var formStateRef = (0, _react.useRef)(null);
  var bottomScrollRef = (0, _react.useRef)(null);
  var onExitEditModeCallbackRef = (0, _react.useRef)(onExitEditModeCallback);
  (0, _react.useLayoutEffect)(function () {
    var tableErrors = (0, _lodash.get)(formState === null || formState === void 0 ? void 0 : formState.errors, editingItem === null || editingItem === void 0 ? void 0 : editingItem.ui.fieldsPath, []);
    editingItemErrorsRef.current = (0, _lodash.get)(tableErrors, editingItem === null || editingItem === void 0 ? void 0 : editingItem.ui.index, null);
  }, [editingItem === null || editingItem === void 0 ? void 0 : editingItem.ui.fieldsPath, editingItem === null || editingItem === void 0 ? void 0 : editingItem.ui.index, formState === null || formState === void 0 ? void 0 : formState.errors]);
  (0, _react.useLayoutEffect)(function () {
    formStateRef.current = formState;
  }, [formState]);
  (0, _react.useLayoutEffect)(function () {
    onExitEditModeCallbackRef.current = onExitEditModeCallback;
  }, [onExitEditModeCallback]);
  var exitEditMode = function exitEditMode() {
    var _editingItemRef$curre;
    if ((_editingItemRef$curre = editingItemRef.current) !== null && _editingItemRef$curre !== void 0 && _editingItemRef$curre.data) {
      var _editingItemRef$curre2;
      Object.entries((_editingItemRef$curre2 = editingItemRef.current) === null || _editingItemRef$curre2 === void 0 ? void 0 : _editingItemRef$curre2.data).forEach(function (_ref) {
        var _formStateRef$current, _editingItemRef$curre3, _editingItemRef$curre4;
        var _ref2 = _slicedToArray(_ref, 1),
          fieldName = _ref2[0];
        (_formStateRef$current = formStateRef.current) === null || _formStateRef$current === void 0 ? void 0 : _formStateRef$current.form.mutators.setFieldState("".concat((_editingItemRef$curre3 = editingItemRef.current) === null || _editingItemRef$curre3 === void 0 ? void 0 : _editingItemRef$curre3.ui.fieldsPath, "[").concat((_editingItemRef$curre4 = editingItemRef.current) === null || _editingItemRef$curre4 === void 0 ? void 0 : _editingItemRef$curre4.ui.index, "].data.").concat(fieldName), {
          modified: false
        });
      });
    }
    editingItemRef.current = null;
    setEditingItem(null);
    (onExitEditModeCallbackRef === null || onExitEditModeCallbackRef === void 0 ? void 0 : onExitEditModeCallbackRef.current) && onExitEditModeCallbackRef.current();
  };
  (0, _react.useEffect)(function () {
    var applyOrDiscardOrDeleteInEffect = function applyOrDiscardOrDeleteInEffect() {
      if (editingItemRef !== null && editingItemRef !== void 0 && editingItemRef.current) {
        if (!editingItemErrorsRef.current) {
          exitEditMode();
        } else {
          var _editingItemRef$curre5, _editingItemRef$curre6;
          if ((_editingItemRef$curre5 = editingItemRef.current) !== null && _editingItemRef$curre5 !== void 0 && (_editingItemRef$curre6 = _editingItemRef$curre5.ui) !== null && _editingItemRef$curre6 !== void 0 && _editingItemRef$curre6.isNew) {
            var _editingItemRef$curre7;
            var values = (0, _lodash.get)(formStateRef.current.values, (_editingItemRef$curre7 = editingItemRef.current) === null || _editingItemRef$curre7 === void 0 ? void 0 : _editingItemRef$curre7.ui.fieldsPath);
            if ((values === null || values === void 0 ? void 0 : values.length) > 1) {
              var _editingItemRef$curre8, _editingItemRef$curre9;
              formStateRef.current.form.mutators.remove((_editingItemRef$curre8 = editingItemRef.current) === null || _editingItemRef$curre8 === void 0 ? void 0 : _editingItemRef$curre8.ui.fieldsPath, (_editingItemRef$curre9 = editingItemRef.current) === null || _editingItemRef$curre9 === void 0 ? void 0 : _editingItemRef$curre9.ui.index);
            } else {
              var _editingItemRef$curre10;
              formStateRef.current.form.change((_editingItemRef$curre10 = editingItemRef.current) === null || _editingItemRef$curre10 === void 0 ? void 0 : _editingItemRef$curre10.ui.fieldsPath, []);
            }
          } else {
            var _editingItemRef$curre11, _editingItemRef$curre12;
            formStateRef.current.form.mutators.update((_editingItemRef$curre11 = editingItemRef.current) === null || _editingItemRef$curre11 === void 0 ? void 0 : _editingItemRef$curre11.ui.fieldsPath, (_editingItemRef$curre12 = editingItemRef.current) === null || _editingItemRef$curre12 === void 0 ? void 0 : _editingItemRef$curre12.ui.index, (0, _lodash.omit)(editingItemRef.current, ['ui']));
          }
          exitEditMode();
        }
      }
    };
    return function () {
      applyOrDiscardOrDeleteInEffect();
    };
  }, [exitEditModeTriggerItem]);
  var addNewRow = function addNewRow(event, fields, fieldsPath, newItem) {
    applyOrDiscardOrDelete(event);
    formStateRef.current.form.mutators.push(fieldsPath, newItem);
    setEditingItem(function () {
      var _fields$value;
      var newEditingItem = _objectSpread(_objectSpread({}, newItem), {}, {
        ui: {
          isNew: true,
          fieldsPath: fieldsPath,
          index: ((_fields$value = fields.value) === null || _fields$value === void 0 ? void 0 : _fields$value.length) || 0
        }
      });
      editingItemRef.current = newEditingItem;
      return newEditingItem;
    });
    scrollIntoView();
  };
  var applyChanges = function applyChanges(event, index) {
    if (editingItemRef.current) {
      if (!editingItemErrorsRef.current) {
        var _editingItemRef$curre13;
        if ((_editingItemRef$curre13 = editingItemRef.current) !== null && _editingItemRef$curre13 !== void 0 && _editingItemRef$curre13.ui.isNew) {
          scrollIntoView();
        }
        exitEditMode();
      } else {
        var _editingItemErrorsRef;
        // Mark all empty fields as `modified` in order to highlight the error if the field is invalid
        Object.entries((_editingItemErrorsRef = editingItemErrorsRef.current) === null || _editingItemErrorsRef === void 0 ? void 0 : _editingItemErrorsRef.data).forEach(function (_ref3) {
          var _formStateRef$current2, _editingItemRef$curre14;
          var _ref4 = _slicedToArray(_ref3, 1),
            fieldName = _ref4[0];
          (_formStateRef$current2 = formStateRef.current) === null || _formStateRef$current2 === void 0 ? void 0 : _formStateRef$current2.form.mutators.setFieldState("".concat((_editingItemRef$curre14 = editingItemRef.current) === null || _editingItemRef$curre14 === void 0 ? void 0 : _editingItemRef$curre14.ui.fieldsPath, "[").concat(index, "].data.").concat(fieldName), {
            modified: true
          });
        });
      }
    }
  };
  var deleteRow = function deleteRow(event, fieldsPath, index) {
    if (editingItemRef.current && index !== editingItemRef.current.ui.index) {
      applyOrDiscardOrDelete(event);
    }
    var values = (0, _lodash.get)(formStateRef.current.values, fieldsPath);
    if ((values === null || values === void 0 ? void 0 : values.length) > 1) {
      formStateRef.current.form.mutators.remove(fieldsPath, index);
    } else {
      formStateRef.current.form.change(fieldsPath, []);
    }
    exitEditMode();
    event && event.stopPropagation();
  };
  var discardChanges = function discardChanges(event, fieldsPath, index) {
    formStateRef.current.form.mutators.update(fieldsPath, index, (0, _lodash.omit)(editingItemRef.current, ['ui']));
    exitEditMode();
    event && event.stopPropagation();
  };
  var discardOrDelete = function discardOrDelete(event, fieldsPath, index) {
    var _editingItemRef$curre15, _editingItemRef$curre16;
    if (!editingItemRef.current || (_editingItemRef$curre15 = editingItemRef.current) !== null && _editingItemRef$curre15 !== void 0 && (_editingItemRef$curre16 = _editingItemRef$curre15.ui) !== null && _editingItemRef$curre16 !== void 0 && _editingItemRef$curre16.isNew) {
      deleteRow(event, fieldsPath, index);
    } else {
      discardChanges(event, fieldsPath, index);
    }
  };
  var applyOrDiscardOrDelete = function applyOrDiscardOrDelete() {
    var event = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    if (editingItemRef !== null && editingItemRef !== void 0 && editingItemRef.current) {
      if (!editingItemErrorsRef.current) {
        var _editingItemRef$curre17;
        applyChanges(event, (_editingItemRef$curre17 = editingItemRef.current) === null || _editingItemRef$curre17 === void 0 ? void 0 : _editingItemRef$curre17.ui.index);
      } else {
        var _editingItemRef$curre18, _editingItemRef$curre19;
        discardOrDelete(event, (_editingItemRef$curre18 = editingItemRef.current) === null || _editingItemRef$curre18 === void 0 ? void 0 : _editingItemRef$curre18.ui.fieldsPath, (_editingItemRef$curre19 = editingItemRef.current) === null || _editingItemRef$curre19 === void 0 ? void 0 : _editingItemRef$curre19.ui.index);
      }
    }
  };
  var enterEditMode = function enterEditMode(event, fields, fieldsPath, index) {
    applyOrDiscardOrDelete(event);
    setTimeout(function () {
      var editItem = fields.value[index];
      setEditingItem(function () {
        var newEditingItem = _objectSpread(_objectSpread({}, editItem), {}, {
          ui: {
            fieldsPath: fieldsPath,
            index: index
          }
        });
        editingItemRef.current = newEditingItem;
        return newEditingItem;
      });
    });
  };
  var scrollIntoView = function scrollIntoView() {
    if (bottomScrollRef.current) {
      setTimeout(function () {
        bottomScrollRef.current.scrollIntoView({
          behavior: 'smooth',
          block: 'nearest'
        });
      });
    }
  };
  var isCurrentRowEditing = function isCurrentRowEditing(rowPath) {
    return (editingItemRef === null || editingItemRef === void 0 ? void 0 : editingItemRef.current) && "".concat(editingItemRef.current.ui.fieldsPath, "[").concat(editingItemRef.current.ui.index, "]") === rowPath;
  };
  var getTableArrayErrors = function getTableArrayErrors(fieldsPath) {
    if (formState.submitFailed && formState.invalid) {
      return (0, _lodash.get)(formState, "errors.".concat(fieldsPath, ".").concat(_finalForm.ARRAY_ERROR), []);
    } else {
      return [];
    }
  };
  return {
    addNewRow: addNewRow,
    applyChanges: applyChanges,
    applyOrDiscardOrDelete: applyOrDiscardOrDelete,
    bottomScrollRef: bottomScrollRef,
    deleteRow: deleteRow,
    discardChanges: discardChanges,
    discardOrDelete: discardOrDelete,
    editingItem: editingItem,
    editingItemRef: editingItemRef,
    enterEditMode: enterEditMode,
    exitEditMode: exitEditMode,
    getTableArrayErrors: getTableArrayErrors,
    isCurrentRowEditing: isCurrentRowEditing
  };
};
exports.useFormTable = useFormTable;