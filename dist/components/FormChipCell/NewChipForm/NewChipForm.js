"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _NewChipInput = _interopRequireDefault(require("../NewChipInput/NewChipInput"));

var _types = require("../../../types");

var _constants = require("../../../constants");

require("./newChipForm.scss");

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var NewChipForm = /*#__PURE__*/_react.default.forwardRef(function (_ref, ref) {
  var chip = _ref.chip,
      chipOptions = _ref.chipOptions,
      className = _ref.className,
      editConfig = _ref.editConfig,
      keyName = _ref.keyName,
      onChange = _ref.onChange,
      setEditConfig = _ref.setEditConfig,
      valueName = _ref.valueName;

  var _useState = (0, _react.useState)({
    key: chip.key,
    value: chip.value,
    keyFieldWidth: 0,
    valueFieldWidth: 0
  }),
      _useState2 = _slicedToArray(_useState, 2),
      chipData = _useState2[0],
      setChipData = _useState2[1];

  var maxWidthInput = (0, _react.useMemo)(function () {
    var _ref$current;

    return ((_ref$current = ref.current) === null || _ref$current === void 0 ? void 0 : _ref$current.clientWidth) - 50;
  }, [ref]);
  var background = chipOptions.background,
      borderColor = chipOptions.borderColor,
      borderRadius = chipOptions.borderRadius,
      density = chipOptions.density,
      font = chipOptions.font;
  var minWidthInput = 25;
  var minWidthValueInput = 35;

  var refInputKey = /*#__PURE__*/_react.default.createRef();

  var refInputValue = /*#__PURE__*/_react.default.createRef();

  var refInputContainer = /*#__PURE__*/_react.default.createRef();

  var labelKeyClassName = (0, _classnames.default)(className, !editConfig.isKeyFocused && 'item_edited');
  var labelContainerClassName = (0, _classnames.default)('edit-chip-container', background && "edit-chip-container-background_".concat(background), borderColor && "edit-chip-container-border_".concat(borderColor), font && "edit-chip-container-font_".concat(font), density && "edit-chip-container-density_".concat(density), borderRadius && "edit-chip-container-border_".concat(borderRadius), (editConfig.isEdit || editConfig.isNewChip) && 'edit-chip-container_edited');
  var labelValueClassName = (0, _classnames.default)((0, _classnames.default)('input-label-value', !editConfig.isValueFocused && 'item_edited'));
  (0, _react.useLayoutEffect)(function () {
    if (!chipData.keyFieldWidth && !chipData.valueFieldWidth) {
      var currentWidthKeyInput = refInputKey.current.scrollWidth + 1;
      var currentWidthValueInput = refInputValue.current.scrollWidth + 1;

      if (chipData.key && chipData.value) {
        setChipData(function (prevState) {
          return _objectSpread(_objectSpread({}, prevState), {}, {
            keyFieldWidth: currentWidthKeyInput >= maxWidthInput ? maxWidthInput : currentWidthKeyInput,
            valueFieldWidth: currentWidthValueInput >= maxWidthInput ? maxWidthInput : currentWidthValueInput
          });
        });
      } else {
        setChipData(function (prevState) {
          return _objectSpread(_objectSpread({}, prevState), {}, {
            keyFieldWidth: minWidthInput,
            valueFieldWidth: minWidthValueInput
          });
        });
      }
    }
  }, [chipData.key, chipData.value, chipData.keyFieldWidth, chipData.valueFieldWidth, maxWidthInput, refInputKey, refInputValue]);
  (0, _react.useEffect)(function () {
    if (editConfig.isKeyFocused) {
      refInputKey.current.focus();
    } else if (editConfig.isValueFocused) {
      refInputValue.current.focus();
    }
  }, [editConfig.isKeyFocused, editConfig.isValueFocused, refInputKey, refInputValue]);
  var outsideClick = (0, _react.useCallback)(function (event) {
    var _event$path, _event$composedPath;

    event.stopPropagation();
    var elementPath = (_event$path = event.path) !== null && _event$path !== void 0 ? _event$path : (_event$composedPath = event.composedPath) === null || _event$composedPath === void 0 ? void 0 : _event$composedPath.call(event);

    if (!elementPath.includes(refInputContainer.current)) {
      onChange(event, _constants.CLICK);
    }
  }, [onChange, refInputContainer]);
  (0, _react.useEffect)(function () {
    if (editConfig.isEdit) {
      document.addEventListener('click', outsideClick, true);
      return function () {
        document.removeEventListener('click', outsideClick, true);
      };
    }
  }, [outsideClick, editConfig.isEdit]);
  var focusChip = (0, _react.useCallback)(function (event) {
    event.stopPropagation();

    if (!event.shiftKey && event.key === _constants.TAB && editConfig.isValueFocused) {
      onChange(event, _constants.TAB);
    } else if (event.shiftKey && event.key === _constants.TAB && editConfig.isKeyFocused) {
      onChange(event, _constants.TAB_SHIFT);
    }

    if (event.key === _constants.BACKSPACE || event.key === _constants.DELETE) {
      setChipData(function (prevState) {
        return {
          keyFieldWidth: editConfig.isKeyFocused ? minWidthInput : prevState.keyFieldWidth,
          valueFieldWidth: editConfig.isValueFocused ? minWidthValueInput : prevState.valueFieldWidth
        };
      });
    }
  }, [editConfig, onChange]);
  var handleOnFocus = (0, _react.useCallback)(function (event) {
    if (event.target.name === keyName) {
      refInputKey.current.selectionStart = refInputKey.current.selectionEnd;
      setEditConfig(function (prevState) {
        return _objectSpread(_objectSpread({}, prevState), {}, {
          isKeyFocused: true,
          isValueFocused: false
        });
      });
    } else {
      refInputValue.current.selectionStart = refInputValue.current.selectionEnd;
      setEditConfig(function (prevState) {
        return _objectSpread(_objectSpread({}, prevState), {}, {
          isKeyFocused: false,
          isValueFocused: true
        });
      });
    }
  }, [keyName, refInputKey, refInputValue, setEditConfig]);
  var handleOnChange = (0, _react.useCallback)(function (event) {
    event.preventDefault();

    if (event.target.name === keyName) {
      var currentWidthKeyInput = refInputKey.current.scrollWidth;
      setChipData(function (prevState) {
        return _objectSpread(_objectSpread({}, prevState), {}, {
          key: refInputKey.current.value,
          keyFieldWidth: refInputKey.current.value.length <= 1 ? minWidthInput : currentWidthKeyInput >= maxWidthInput ? maxWidthInput : currentWidthKeyInput > minWidthInput ? currentWidthKeyInput + 2 : minWidthInput
        });
      });
    } else {
      var currentWidthValueInput = refInputValue.current.scrollWidth;
      setChipData(function (prevState) {
        return _objectSpread(_objectSpread({}, prevState), {}, {
          value: refInputValue.current.value,
          valueFieldWidth: refInputValue.current.value.length <= 1 ? minWidthValueInput : currentWidthValueInput >= maxWidthInput ? maxWidthInput : currentWidthValueInput > minWidthValueInput ? currentWidthValueInput + 2 : minWidthValueInput
        });
      });
    }
  }, [maxWidthInput, refInputKey, refInputValue, keyName]);
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: labelContainerClassName,
    onKeyDown: function onKeyDown(event) {
      return editConfig.isEdit && focusChip(event);
    },
    ref: refInputContainer,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_NewChipInput.default, {
      className: labelKeyClassName,
      name: keyName,
      onChange: handleOnChange,
      onFocus: handleOnFocus,
      placeholder: "key",
      ref: refInputKey,
      style: {
        width: chipData.keyFieldWidth
      }
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "edit-chip-separator",
      children: ":"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_NewChipInput.default, {
      className: labelValueClassName,
      name: valueName,
      onChange: handleOnChange,
      onFocus: handleOnFocus,
      placeholder: "value",
      ref: refInputValue,
      style: {
        width: chipData.valueFieldWidth
      }
    })]
  });
});

NewChipForm.defaultProps = {
  className: ''
};
NewChipForm.propTypes = {
  chip: _propTypes.default.object.isRequired,
  chipOptions: _types.CHIP_OPTIONS.isRequired,
  className: _propTypes.default.string,
  editConfig: _propTypes.default.shape({}).isRequired,
  keyName: _propTypes.default.string.isRequired,
  onChange: _propTypes.default.func.isRequired,
  setEditConfig: _propTypes.default.func.isRequired,
  valueName: _propTypes.default.string.isRequired
};
var _default = NewChipForm;
exports.default = _default;