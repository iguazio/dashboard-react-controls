"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useFormTable = void 0;

var _react = require("react");

var _lodash = require("lodash");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var useFormTable = function useFormTable(formState) {
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
  var bottomScrollRef = (0, _react.useRef)(null);
  (0, _react.useEffect)(function () {
    editingItemRef.current = editingItem;
  }, [editingItem]);
  (0, _react.useEffect)(function () {
    return function () {
      var _editingItemRef$curre, _editingItemRef$curre2;

      if ((_editingItemRef$curre = editingItemRef.current) !== null && _editingItemRef$curre !== void 0 && (_editingItemRef$curre2 = _editingItemRef$curre.ui) !== null && _editingItemRef$curre2 !== void 0 && _editingItemRef$curre2.isNew) {
        formState.form.mutators.remove(editingItemRef.current.ui.fieldsPath, editingItemRef.current.ui.index);
      } else if (editingItemRef.current) {
        formState.form.mutators.update(editingItemRef.current.ui.fieldsPath, editingItemRef.current.ui.index, (0, _lodash.omit)(editingItemRef.current, ['ui']));
      }
    };
  }, [formState.form.mutators]);

  var addNewRow = function addNewRow(event, fields, fieldsPath, newItem) {
    applyOrDiscardOrDelete(event);
    formState.form.mutators.push(fieldsPath, newItem);
    setEditingItem(function () {
      var _fields$value;

      return _objectSpread(_objectSpread({}, newItem), {}, {
        ui: {
          isNew: true,
          fieldsPath: fieldsPath,
          index: ((_fields$value = fields.value) === null || _fields$value === void 0 ? void 0 : _fields$value.length) || 0
        }
      });
    });
    scrollIntoView();
  };

  var applyChanges = function applyChanges(event, index) {
    if (editingItem) {
      if (!(0, _lodash.get)(formState === null || formState === void 0 ? void 0 : formState.errors, editingItem.ui.fieldsPath.split('.'), false)) {
        exitEditMode();

        if (editingItem.ui.isNew) {
          scrollIntoView();
        }
      } else {
        var errorField = (0, _lodash.get)(formState.errors, editingItem.ui.fieldsPath.split('.'), {})[index]; // Mark all empty fields as `modified` in order to highlight the error if the field is invalid

        Object.entries(errorField.data).forEach(function (_ref) {
          var _ref2 = _slicedToArray(_ref, 1),
              fieldName = _ref2[0];

          formState.form.mutators.setFieldState("".concat(editingItem.ui.fieldsPath, "[").concat(index, "].data.").concat(fieldName), {
            modified: true
          });
        });
      }
    }
  };

  var applyOrDiscardOrDelete = function applyOrDiscardOrDelete() {
    var event = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

    if (editingItem) {
      if (!(0, _lodash.get)(formState === null || formState === void 0 ? void 0 : formState.errors, editingItem.ui.fieldsPath, false)) {
        applyChanges(event, editingItem.ui.index);
      } else {
        discardOrDelete(event, editingItem.ui.fieldsPath, editingItem.ui.index);
      }
    }
  };

  var deleteRow = function deleteRow(event, fieldsPath, index) {
    if (editingItem && index !== editingItem.ui.index) {
      applyOrDiscardOrDelete(event);
    }

    exitEditMode();
    formState.form.mutators.remove(fieldsPath, index);
    event && event.stopPropagation();
  };

  var discardChanges = function discardChanges(event, fieldsPath, index) {
    exitEditMode();
    formState.form.mutators.update(fieldsPath, index, (0, _lodash.omit)(editingItem, ['ui']));
    event && event.stopPropagation();
  };

  var discardOrDelete = function discardOrDelete(event, fieldsPath, index) {
    var _editingItem$ui;

    if (!editingItem || editingItem !== null && editingItem !== void 0 && (_editingItem$ui = editingItem.ui) !== null && _editingItem$ui !== void 0 && _editingItem$ui.isNew) {
      deleteRow(event, fieldsPath, index);
    } else {
      discardChanges(event, fieldsPath, index);
    }
  };

  var enterEditMode = function enterEditMode(event, fields, fieldsPath, index) {
    applyOrDiscardOrDelete(event);
    setTimeout(function () {
      var editItem = fields.value[index];
      setEditingItem(function () {
        return _objectSpread(_objectSpread({}, editItem), {}, {
          ui: {
            fieldsPath: fieldsPath,
            index: index
          }
        });
      });
    });
  };

  var exitEditMode = function exitEditMode() {
    setEditingItem(null);
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
    return editingItem && "".concat(editingItem.ui.fieldsPath, "[").concat(editingItem.ui.index, "]") === rowPath;
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
    isCurrentRowEditing: isCurrentRowEditing
  };
};

exports.useFormTable = useFormTable;