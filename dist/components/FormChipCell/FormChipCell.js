"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _lodash = _interopRequireWildcard(require("lodash"));
var _classnames = _interopRequireDefault(require("classnames"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _FormChipCellView = _interopRequireDefault(require("./FormChipCellView"));
var _types = require("../../types");
var _constants = require("../../constants");
var _common = require("../../utils/common.util");
var _validation = require("../../utils/validation.util");
var _generateChipsList = require("../../utils/generateChipsList.util");
var _formChipCell = require("./formChipCell.util");
var _hooks = require("../../hooks");
require("./formChipCell.scss");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
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
var FormChipCell = function FormChipCell(_ref) {
  var chipOptions = _ref.chipOptions,
    className = _ref.className,
    delimiter = _ref.delimiter,
    formState = _ref.formState,
    initialValues = _ref.initialValues,
    isEditable = _ref.isEditable,
    label = _ref.label,
    name = _ref.name,
    onClick = _ref.onClick,
    shortChips = _ref.shortChips,
    validationRules = _ref.validationRules,
    validator = _ref.validator,
    visibleChipsMaxLength = _ref.visibleChipsMaxLength;
  var chipsClassName = (0, _classnames.default)('chips', className);
  var _useChipCell = (0, _hooks.useChipCell)(isEditable, visibleChipsMaxLength),
    chipsCellRef = _useChipCell.chipsCellRef,
    chipsWrapperRef = _useChipCell.chipsWrapperRef,
    handleShowElements = _useChipCell.handleShowElements,
    hiddenChipsCounterRef = _useChipCell.hiddenChipsCounterRef,
    hiddenChipsPopUpRef = _useChipCell.hiddenChipsPopUpRef,
    setChipsSizes = _useChipCell.setChipsSizes,
    setShowHiddenChips = _useChipCell.setShowHiddenChips,
    showChips = _useChipCell.showChips,
    showHiddenChips = _useChipCell.showHiddenChips,
    visibleChipsCount = _useChipCell.visibleChipsCount;
  var _useState = (0, _react.useState)({
      chipIndex: null,
      isEdit: false,
      isKeyFocused: false,
      isValueFocused: false,
      isNewChip: false
    }),
    _useState2 = _slicedToArray(_useState, 2),
    editConfig = _useState2[0],
    setEditConfig = _useState2[1];
  var chips = (0, _react.useMemo)(function () {
    return isEditable || visibleChipsMaxLength === 'all' ? {
      visibleChips: (0, _lodash.get)(formState.values, name),
      hiddenChips: []
    } : (0, _generateChipsList.generateChipsList)((0, _lodash.get)(formState.values, name), visibleChipsMaxLength ? visibleChipsMaxLength : visibleChipsCount);
  }, [visibleChipsMaxLength, isEditable, visibleChipsCount, formState.values, name]);
  var checkChipsList = (0, _react.useCallback)(function (currentChipsList) {
    if ((0, _common.areArraysEqual)((0, _lodash.get)(initialValues, name), currentChipsList, ['id'])) {
      (0, _lodash.set)(formState.initialValues, name, currentChipsList);
    }
    formState.form.mutators.setFieldState(name, {
      modified: true
    });
    formState.form.mutators.setFieldState(name, {
      touched: true
    });
  }, [initialValues, name, formState]);
  var handleAddNewChip = (0, _react.useCallback)(function (event, fields) {
    var _fields$value;
    var fieldsLength = ((_fields$value = fields.value) === null || _fields$value === void 0 ? void 0 : _fields$value.length) || 0;
    if (!editConfig.isEdit && !editConfig.chipIndex) {
      formState.form.mutators.push(name, {
        id: fieldsLength + new Date(),
        key: '',
        value: '',
        delimiter: delimiter
      });
    }
    if (showHiddenChips) {
      setShowHiddenChips(false);
    }
    setEditConfig({
      chipIndex: fieldsLength,
      isEdit: true,
      isKeyFocused: true,
      isValueFocused: false,
      isNewChip: true
    });
    event && event.preventDefault();
  }, [editConfig.isEdit, editConfig.chipIndex, showHiddenChips, formState.form.mutators, name, delimiter, setShowHiddenChips]);
  var handleRemoveChip = (0, _react.useCallback)(function (event, fields, chipIndex) {
    checkChipsList(_lodash.default.chain(formState).get(['values', name]).filter(function (_, index) {
      return index !== chipIndex;
    }).value());
    fields.remove(chipIndex);
    event && event.stopPropagation();
  }, [checkChipsList, formState, name]);
  var handleEditChip = (0, _react.useCallback)(function (event, fields, nameEvent) {
    var _fields$value$editCon = fields.value[editConfig.chipIndex],
      key = _fields$value$editCon.key,
      value = _fields$value$editCon.value;
    var isChipNotEmpty = !!(key !== null && key !== void 0 && key.trim() && value !== null && value !== void 0 && value.trim());
    if (nameEvent === _constants.CLICK) {
      if (!isChipNotEmpty) {
        handleRemoveChip(event, fields, editConfig.chipIndex);
      }
      setEditConfig({
        chipIndex: null,
        isEdit: false,
        isKeyFocused: false,
        isValueFocused: false,
        isNewChip: false
      });
    } else if (nameEvent === _constants.TAB) {
      if (!isChipNotEmpty) {
        handleRemoveChip(event, fields, editConfig.chipIndex);
      }
      setEditConfig(function (prevState) {
        var lastChipSelected = prevState.chipIndex + 1 > fields.value.length - 1;
        return {
          chipIndex: lastChipSelected ? null : prevState.chipIndex + 1,
          isEdit: !lastChipSelected,
          isKeyFocused: true,
          isValueFocused: false,
          isNewChip: false
        };
      });
    } else if (nameEvent === _constants.TAB_SHIFT) {
      if (!isChipNotEmpty) {
        handleRemoveChip(event, fields, editConfig.chipIndex);
      }
      setEditConfig(function (prevState) {
        var isPrevChipIndexExists = prevState.chipIndex - 1 < 0;
        return {
          chipIndex: isPrevChipIndexExists ? null : prevState.chipIndex - 1,
          isEdit: !isPrevChipIndexExists,
          isKeyFocused: isPrevChipIndexExists,
          isValueFocused: !isPrevChipIndexExists,
          isNewChip: false
        };
      });
    }
    checkChipsList((0, _lodash.get)(formState.values, name));
    event && event.preventDefault();
  }, [editConfig.chipIndex, handleRemoveChip, checkChipsList, formState.values, name]);
  var handleToEditMode = (0, _react.useCallback)(function (event, index) {
    if (isEditable) {
      event.stopPropagation();
      setEditConfig(function (preState) {
        return _objectSpread(_objectSpread({}, preState), {}, {
          chipIndex: index,
          isEdit: true,
          isKeyFocused: true,
          isValueFocused: false
        });
      });
    }
    onClick && onClick();
  }, [isEditable, onClick]);
  var validateFields = function validateFields(fieldsArray) {
    var uniquenessValidator = function uniquenessValidator(newValue, idx) {
      return !fieldsArray.some(function (_ref2, index) {
        var key = _ref2.key;
        return newValue === key && index !== idx;
      });
    };
    var errorData = [];
    if (!fieldsArray) return [];
    if (!(0, _lodash.isEmpty)(validationRules)) {
      errorData = fieldsArray.map(function (chip) {
        var _validateChip = validateChip(chip),
          _validateChip2 = _slicedToArray(_validateChip, 2),
          keyValidation = _validateChip2[0],
          valueValidation = _validateChip2[1];
        if (keyValidation && valueValidation) return {
          key: keyValidation,
          value: valueValidation
        };
        if (keyValidation) return {
          key: keyValidation
        };
        if (valueValidation) return {
          value: valueValidation
        };
        return null;
      });
    }

    // uniqueness
    fieldsArray.forEach(function (chip, index) {
      var isUnique = uniquenessValidator(chip.key, index);
      if (!isUnique) {
        if ((0, _lodash.get)(errorData, [index, 'key'], false)) {
          errorData.at(index).key.push(_formChipCell.uniquenessError);
        } else {
          (0, _lodash.set)(errorData, [index, 'key'], [_formChipCell.uniquenessError]);
        }
      }
    });
    if (!errorData && validator) {
      errorData = validator(fieldsArray);
    }
    if (errorData.every(function (label) {
      return (0, _lodash.isNil)(label);
    })) {
      return [];
    }
    return errorData;
  };
  var validateChip = function validateChip(_ref3) {
    var key = _ref3.key,
      value = _ref3.value;
    var validateField = function validateField(value, field) {
      var _checkPatternsValidit = (0, _validation.checkPatternsValidity)(validationRules[field].filter(function (rule) {
          return rule.pattern;
        }), value),
        _checkPatternsValidit2 = _slicedToArray(_checkPatternsValidit, 2),
        newRules = _checkPatternsValidit2[0],
        isValidField = _checkPatternsValidit2[1];
      if (isValidField) return null;
      var invalidRules = newRules.filter(function (rule) {
        return !rule.isValid;
      });
      return invalidRules.map(function (rule) {
        return {
          name: rule.name,
          label: rule.label
        };
      });
    };
    return [validateField(key, 'key'), validateField(value, 'value')];
  };
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: chipsClassName,
    children: [label && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "chips__label",
      children: label
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: label ? 'chips__wrapper' : '',
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_FormChipCellView.default, {
        chipOptions: chipOptions,
        chips: chips,
        editConfig: editConfig,
        handleAddNewChip: handleAddNewChip,
        handleEditChip: handleEditChip,
        handleRemoveChip: handleRemoveChip,
        handleShowElements: handleShowElements,
        handleToEditMode: handleToEditMode,
        isEditable: isEditable,
        name: name,
        ref: {
          chipsCellRef: chipsCellRef,
          chipsWrapperRef: chipsWrapperRef,
          hiddenChipsCounterRef: hiddenChipsCounterRef,
          hiddenChipsPopUpRef: hiddenChipsPopUpRef
        },
        setChipsSizes: setChipsSizes,
        setEditConfig: setEditConfig,
        shortChips: shortChips,
        showChips: showChips,
        showHiddenChips: showHiddenChips,
        validateFields: validateFields,
        validationRules: validationRules
      })
    })]
  });
};
FormChipCell.defaultProps = {
  chipOptions: {
    background: 'purple',
    boldValue: false,
    borderRadius: 'primary',
    borderColor: 'transparent',
    density: 'dense',
    font: 'purple'
  },
  className: '',
  delimiter: null,
  isEditable: false,
  label: null,
  onClick: function onClick() {},
  shortChips: false,
  validationRules: {},
  validator: function validator() {},
  visibleChipsMaxLength: null
};
FormChipCell.propTypes = {
  chipOptions: _types.CHIP_OPTIONS,
  className: _propTypes.default.string,
  delimiter: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.element]),
  formState: _propTypes.default.shape({}).isRequired,
  initialValues: _propTypes.default.object.isRequired,
  isEditable: _propTypes.default.bool,
  label: _propTypes.default.string,
  name: _propTypes.default.string.isRequired,
  onClick: _propTypes.default.func,
  shortChips: _propTypes.default.bool,
  validationRules: _propTypes.default.object,
  validator: _propTypes.default.func,
  visibleChipsMaxLength: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number])
};
var _default = /*#__PURE__*/_react.default.memo(FormChipCell);
exports.default = _default;