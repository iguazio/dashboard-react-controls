"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _NewChipForm = _interopRequireDefault(require("../NewChipForm/NewChipForm"));

var _types = require("../../../types");

var _close = require("../../../images/close.svg");

require("./formChip.scss");

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var FormChip = /*#__PURE__*/_react.default.forwardRef(function (_ref, ref) {
  var _chip$delimiter;

  var chip = _ref.chip,
      chipClassNames = _ref.chipClassNames,
      chipIndex = _ref.chipIndex,
      chipOptions = _ref.chipOptions,
      className = _ref.className,
      editConfig = _ref.editConfig,
      handleEditChip = _ref.handleEditChip,
      handleIsEdit = _ref.handleIsEdit,
      handleRemoveChip = _ref.handleRemoveChip,
      isDeleteMode = _ref.isDeleteMode,
      isEditMode = _ref.isEditMode,
      keyName = _ref.keyName,
      onClick = _ref.onClick,
      setChipsSizes = _ref.setChipsSizes,
      setEditConfig = _ref.setEditConfig,
      textOverflowEllipsis = _ref.textOverflowEllipsis,
      valueName = _ref.valueName;

  var chipRef = _react.default.useRef();

  var chipLabelClassNames = (0, _classnames.default)('chip__label', (textOverflowEllipsis || isEditMode) && 'data-ellipsis');
  var chipValueClassNames = (0, _classnames.default)('chip__value', (textOverflowEllipsis || isEditMode) && 'data-ellipsis', chipOptions.boldValue && 'chip-value_bold');
  (0, _react.useEffect)(function () {
    if (chipRef.current && setChipsSizes) {
      setChipsSizes(function (state) {
        return _objectSpread(_objectSpread({}, state), {}, _defineProperty({}, chipIndex, chipRef.current.getBoundingClientRect().width));
      });
    }
  }, [chipIndex, setChipsSizes]);
  return isEditMode && chipIndex === editConfig.chipIndex ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_NewChipForm.default, {
    chip: chip,
    chipOptions: chipOptions,
    className: "input-label-key",
    editConfig: editConfig,
    keyName: keyName,
    onChange: handleEditChip,
    ref: ref,
    setEditConfig: setEditConfig,
    valueName: valueName
  }) : /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: chipClassNames,
    onClick: function onClick(event) {
      return handleIsEdit(event, chipIndex);
    },
    ref: chipRef,
    children: [chip.key && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: chipLabelClassNames,
      children: chip.key
    }), chip.value && /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "chip__delimiter",
        children: (_chip$delimiter = chip.delimiter) !== null && _chip$delimiter !== void 0 ? _chip$delimiter : ':'
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: chipValueClassNames,
        children: chip.value
      })]
    }), (isEditMode || isDeleteMode) && /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
      className: "item-icon-close",
      onClick: function onClick(event) {
        return handleRemoveChip(event, chipIndex);
      },
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_close.ReactComponent, {})
    })]
  });
});

FormChip.defaultProps = {
  chipOptions: {
    background: 'purple',
    boldValue: false,
    borderRadius: 'primary',
    borderColor: 'transparent',
    density: 'dense',
    font: 'purple'
  },
  isDeleteMode: false,
  isEditMode: false,
  keyName: '',
  onClick: function onClick() {},
  textOverflowEllipsis: false,
  valueName: ''
};
FormChip.propTypes = {
  chip: _propTypes.default.object.isRequired,
  chipClassNames: _propTypes.default.string.isRequired,
  chipIndex: _propTypes.default.number.isRequired,
  chipOptions: _types.CHIP_OPTIONS,
  className: _propTypes.default.string,
  editConfig: _propTypes.default.object.isRequired,
  handleEditChip: _propTypes.default.func.isRequired,
  handleIsEdit: _propTypes.default.func.isRequired,
  handleRemoveChip: _propTypes.default.func.isRequired,
  isDeleteMode: _propTypes.default.bool,
  isEditMode: _propTypes.default.bool,
  keyName: _propTypes.default.string,
  onClick: _propTypes.default.func,
  setChipsSizes: _propTypes.default.func.isRequired,
  setEditConfig: _propTypes.default.func.isRequired,
  textOverflowEllipsis: _propTypes.default.bool,
  valueName: _propTypes.default.string
};
var _default = FormChip;
exports.default = _default;