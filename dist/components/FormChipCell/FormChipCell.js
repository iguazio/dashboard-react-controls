"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _lodash = require("lodash");

var _FormChipCellView = _interopRequireDefault(require("./FormChipCellView"));

var _common = require("../../utils/common.util");

var _generateChipsList = require("../../utils/generateChipsList.util");

var _types = require("../../types");

var _constants = require("../../constants");

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var FormChipCell = function FormChipCell(_ref) {
  var chipOptions = _ref.chipOptions,
      className = _ref.className,
      delimiter = _ref.delimiter,
      formState = _ref.formState,
      initialValues = _ref.initialValues,
      isEditMode = _ref.isEditMode,
      name = _ref.name,
      onClick = _ref.onClick,
      shortChips = _ref.shortChips,
      visibleChipsMaxLength = _ref.visibleChipsMaxLength;

  var _useState = (0, _react.useState)({}),
      _useState2 = _slicedToArray(_useState, 2),
      chipsSizes = _useState2[0],
      setChipsSizes = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      showHiddenChips = _useState4[0],
      setShowHiddenChips = _useState4[1];

  var _useState5 = (0, _react.useState)({
    chipIndex: null,
    isEdit: false,
    isKeyFocused: true,
    isValueFocused: false,
    isNewChip: false
  }),
      _useState6 = _slicedToArray(_useState5, 2),
      editConfig = _useState6[0],
      setEditConfig = _useState6[1];

  var _useState7 = (0, _react.useState)(false),
      _useState8 = _slicedToArray(_useState7, 2),
      showChips = _useState8[0],
      setShowChips = _useState8[1];

  var _useState9 = (0, _react.useState)(8),
      _useState10 = _slicedToArray(_useState9, 2),
      visibleChipsCount = _useState10[0],
      setVisibleChipsCount = _useState10[1];

  var chipsCellRef = (0, _react.useRef)();
  var chipsWrapperRef = (0, _react.useRef)();
  var handleShowElements = (0, _react.useCallback)(function () {
    if (!isEditMode || isEditMode && visibleChipsMaxLength) {
      setShowHiddenChips(function (state) {
        return !state;
      });
    }
  }, [isEditMode, visibleChipsMaxLength]);
  var chips = (0, _react.useMemo)(function () {
    return isEditMode || visibleChipsMaxLength === 'all' ? {
      visibleChips: formState.values[name]
    } : (0, _generateChipsList.generateChipsList)(formState.values[name], visibleChipsMaxLength ? visibleChipsMaxLength : visibleChipsCount, delimiter);
  }, [visibleChipsMaxLength, isEditMode, formState.values, name, visibleChipsCount, delimiter]);
  var handleResize = (0, _react.useCallback)(function () {
    if (!isEditMode && !(0, _common.isEveryObjectValueEmpty)(chipsSizes)) {
      var _chipsCellRef$current;

      var parentSize = (_chipsCellRef$current = chipsCellRef.current) === null || _chipsCellRef$current === void 0 ? void 0 : _chipsCellRef$current.getBoundingClientRect().width;
      var maxLength = 0;
      var chipIndex = 0;
      var padding = 65;
      Object.values(chipsSizes).every(function (chipSize, index) {
        if (maxLength + chipSize > parentSize || Object.values(chipsSizes).length > 1 && maxLength + chipSize + padding > parentSize) {
          chipIndex = index;
          return false;
        } else {
          maxLength += chipSize;

          if (index === Object.values(chipsSizes).length - 1) {
            chipIndex = 8;
          }

          return true;
        }
      });
      setVisibleChipsCount(chipIndex);
      setShowChips(true);
    }
  }, [chipsSizes, isEditMode]);
  (0, _react.useEffect)(function () {
    handleResize();
  }, [handleResize, showChips]);
  (0, _react.useEffect)(function () {
    if (!isEditMode) {
      window.addEventListener('resize', handleResize);
      return function () {
        return window.removeEventListener('resize', handleResize);
      };
    }
  }, [handleResize, isEditMode]);
  (0, _react.useEffect)(function () {
    window.addEventListener('mainResize', handleResize);
    return function () {
      return window.removeEventListener('mainResize', handleResize);
    };
  }, [handleResize]);
  (0, _react.useEffect)(function () {
    if (showHiddenChips) {
      window.addEventListener('click', handleShowElements);
      return function () {
        return window.removeEventListener('click', handleShowElements);
      };
    }
  }, [showHiddenChips, handleShowElements]);
  var checkChipsList = (0, _react.useCallback)(function (currentChipsList) {
    if ((0, _lodash.isEqual)(initialValues[name], currentChipsList)) {
      formState.initialValues[name] = currentChipsList;
    }

    formState.form.mutators.setFieldState(name, {
      modified: true
    });
    formState.form.mutators.setFieldState(name, {
      touched: true
    });
  }, [initialValues, name, formState]);
  var handleAddNewChip = (0, _react.useCallback)(function (event, fields) {
    if (!editConfig.isEdit && !editConfig.chipIndex) {
      formState.form.mutators.push(name, {
        key: '',
        value: '',
        delimiter: delimiter
      });
    }

    if (showHiddenChips) {
      setShowHiddenChips(false);
    }

    event && event.preventDefault();
    setEditConfig({
      chipIndex: fields.value.length,
      isEdit: true,
      isKeyFocused: true,
      isValueFocused: false,
      isNewChip: true
    });
  }, [editConfig.isEdit, editConfig.chipIndex, showHiddenChips, formState, name, delimiter]);
  var handleRemoveChip = (0, _react.useCallback)(function (event, fields, chipIndex) {
    checkChipsList(formState.values[name].filter(function (_, index) {
      return index !== chipIndex;
    }));
    fields.remove(chipIndex);
    event && event.stopPropagation();
  }, [checkChipsList, formState.values, name]);
  var handleEditChip = (0, _react.useCallback)(function (event, fields, nameEvent) {
    var chip = formState.values[name][editConfig.chipIndex];
    var isChipNotEmpty = !!(chip.key && chip.value);

    if (nameEvent === _constants.CLICK) {
      if (editConfig.isNewChip && !isChipNotEmpty) {
        handleRemoveChip(event, fields, editConfig.chipIndex);
      }

      setEditConfig({
        chipIndex: null,
        isEdit: false,
        isKeyFocused: true,
        isValueFocused: false,
        isNewChip: false
      });
    } else if (nameEvent === _constants.TAB) {
      if (editConfig.isNewChip && !isChipNotEmpty) {
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
      if (editConfig.isNewChip && !isChipNotEmpty) {
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

    event && event.preventDefault();
    checkChipsList(formState.values[name]);
  }, [editConfig.chipIndex, editConfig.isNewChip, handleRemoveChip, name, formState, checkChipsList]);
  var handleIsEdit = (0, _react.useCallback)(function (event, index) {
    if (isEditMode) {
      event.stopPropagation();
      setEditConfig({
        chipIndex: index,
        isEdit: true,
        isKeyFocused: true,
        isValueFocused: false
      });
    }

    onClick && onClick();
  }, [isEditMode, onClick]);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_FormChipCellView.default, {
    chipOptions: chipOptions,
    chips: chips,
    className: className,
    editConfig: editConfig,
    handleAddNewChip: handleAddNewChip,
    handleEditChip: handleEditChip,
    handleIsEdit: handleIsEdit,
    handleRemoveChip: handleRemoveChip,
    handleShowElements: handleShowElements,
    isEditMode: isEditMode,
    name: name,
    ref: {
      chipsCellRef: chipsCellRef,
      chipsWrapperRef: chipsWrapperRef
    },
    setChipsSizes: setChipsSizes,
    setEditConfig: setEditConfig,
    shortChips: shortChips,
    showChips: showChips,
    showHiddenChips: showHiddenChips
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
  delimiter: null,
  onClick: function onClick() {},
  shortChips: false,
  isEditMode: false,
  visibleChipsMaxLength: 'all'
};
FormChipCell.propTypes = {
  chipOptions: _types.CHIP_OPTIONS,
  className: _propTypes.default.string,
  delimiter: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.element]),
  onClick: _propTypes.default.func,
  shortChips: _propTypes.default.bool,
  name: _propTypes.default.string.isRequired,
  formState: _propTypes.default.shape({}).isRequired,
  initialValues: _propTypes.default.object.isRequired,
  isEditMode: _propTypes.default.bool,
  visibleChipsMaxLength: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number])
};

var _default = /*#__PURE__*/_react.default.memo(FormChipCell);

exports.default = _default;