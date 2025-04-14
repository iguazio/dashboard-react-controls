"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _classnames = _interopRequireDefault(require("classnames"));
var _lodash = require("lodash");
var _NewChipInput = _interopRequireDefault(require("../NewChipInput/NewChipInput"));
var _OptionsMenu = _interopRequireDefault(require("../../../elements/OptionsMenu/OptionsMenu"));
var _ValidationTemplate = _interopRequireDefault(require("../../../elements/ValidationTemplate/ValidationTemplate"));
var _types = require("../../../types");
var _constants = require("../../../constants");
var _formChipCell = require("../formChipCell.util");
var _common = require("../../../utils/common.util");
var _close = require("../../../images/close.svg");
require("./newChipForm.scss");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
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

const defaultProps = {
  rules: {}
};
const NewChipForm = /*#__PURE__*/_react.default.forwardRef((_ref, ref) => {
  let {
    chip,
    chipIndex,
    chipOptions,
    className = '',
    editConfig,
    handleRemoveChip,
    isEditable,
    keyName,
    meta,
    onChange,
    setEditConfig,
    validationRules: rules = defaultProps.rules,
    valueName
  } = _ref;
  const [chipData, setChipData] = (0, _react.useState)({
    isKeyOnly: chip.isKeyOnly,
    key: chip.key,
    value: chip.value,
    keyFieldWidth: 0,
    valueFieldWidth: 0
  });
  const [selectedInput, setSelectedInput] = (0, _react.useState)('key');
  const [validationRules, setValidationRules] = (0, _react.useState)(rules);
  const [showValidationRules, setShowValidationRules] = (0, _react.useState)(false);
  const {
    background,
    borderColor,
    borderRadius,
    density,
    font
  } = chipOptions;
  const minWidthInput = (0, _react.useMemo)(() => {
    return isEditable ? 25 : 20;
  }, [isEditable]);
  const minWidthValueInput = (0, _react.useMemo)(() => {
    return isEditable ? 35 : 20;
  }, [isEditable]);
  const transitionEndEventName = (0, _react.useMemo)(() => (0, _common.getTransitionEndEventName)(), []);
  const refInputKey = _react.default.useRef({});
  const refInputValue = _react.default.useRef({});
  const refInputContainer = _react.default.useRef();
  const validationRulesRef = _react.default.useRef();
  const labelKeyClassName = (0, _classnames.default)(className, !editConfig.isKeyFocused && 'item_edited', !(0, _lodash.isEmpty)((0, _lodash.get)(meta, ['error', chipIndex, 'key'], [])) && !(0, _lodash.isEmpty)(chipData.key) && !chip.disabled && 'item_edited_invalid');
  const labelContainerClassName = (0, _classnames.default)('edit-chip-container', background && `edit-chip-container-background_${background}`, borderColor && `edit-chip-container-border_${borderColor}`, font && `edit-chip-container-font_${font}`, density && `edit-chip-container-density_${density}`, borderRadius && `edit-chip-container-border_${borderRadius}`, (editConfig.isEdit || editConfig.isNewChip) && 'edit-chip-container_edited', chip.disabled && 'edit-chip-container_disabled edit-chip-container-font_disabled');
  const labelValueClassName = (0, _classnames.default)('input-label-value', !editConfig.isValueFocused && 'item_edited', !(0, _lodash.isEmpty)((0, _lodash.get)(meta, ['error', chipIndex, 'value'], [])) && !(0, _lodash.isEmpty)(chipData.value) && 'item_edited_invalid');
  const closeButtonClass = (0, _classnames.default)('item-icon-close', !chip.disabled && editConfig.chipIndex === chipIndex && isEditable && 'item-icon-close_invisible', !isEditable && 'item-icon-close_hidden');
  const resizeChip = (0, _react.useCallback)(() => {
    if (refInputKey.current) {
      const currentWidthKeyInput = (0, _formChipCell.getTextWidth)(refInputKey.current) + 1;
      const currentWidthValueInput = (0, _formChipCell.getTextWidth)(refInputValue.current) + 1;
      const maxWidthInput = ref.current?.clientWidth - 50;
      const keyEllipsis = currentWidthKeyInput >= maxWidthInput / 2;
      const valueEllipsis = currentWidthValueInput >= maxWidthInput / 2;
      let keyFieldWidth = null;
      let valueFieldWidth = null;
      if (keyEllipsis && valueEllipsis) {
        keyFieldWidth = valueFieldWidth = maxWidthInput / 2;
      } else if (keyEllipsis) {
        valueFieldWidth = !chipData.value ? minWidthValueInput : currentWidthValueInput;
        const remainingPlace = maxWidthInput - valueFieldWidth;
        keyFieldWidth = remainingPlace > currentWidthKeyInput ? currentWidthKeyInput : remainingPlace;
      } else if (valueEllipsis) {
        keyFieldWidth = !chipData.key ? minWidthInput : currentWidthKeyInput;
        const remainingPlace = maxWidthInput - keyFieldWidth;
        valueFieldWidth = remainingPlace > currentWidthValueInput ? currentWidthValueInput : remainingPlace;
      } else {
        keyFieldWidth = !chipData.key || currentWidthKeyInput <= minWidthInput ? minWidthInput : currentWidthKeyInput;
        valueFieldWidth = !chipData.value || currentWidthValueInput <= minWidthValueInput ? minWidthValueInput : currentWidthValueInput;
      }
      refInputKey.current.style.width = `${keyFieldWidth}px`;
      if (!(0, _lodash.isEmpty)(refInputValue.current)) {
        refInputValue.current.style.width = `${valueFieldWidth}px`;
      }
      setChipData(prevState => ({
        ...prevState,
        keyFieldWidth,
        valueFieldWidth
      }));
    }
  }, [chipData.key, chipData.value, minWidthInput, minWidthValueInput, ref]);
  (0, _react.useEffect)(() => {
    const resizeChipDebounced = (0, _lodash.throttle)(resizeChip, 500);
    if (isEditable) {
      window.addEventListener('resize', resizeChipDebounced);
      window.addEventListener(transitionEndEventName, resizeChipDebounced);
      return () => {
        window.removeEventListener('resize', resizeChipDebounced);
        window.removeEventListener(transitionEndEventName, resizeChipDebounced);
      };
    }
  }, [isEditable, resizeChip, transitionEndEventName]);
  (0, _react.useEffect)(() => {
    if (!chipData.keyFieldWidth && !chipData.valueFieldWidth) {
      resizeChip();
    }
  }, [chipData.keyFieldWidth, chipData.valueFieldWidth, resizeChip]);
  (0, _react.useEffect)(() => {
    if (showValidationRules) {
      window.addEventListener('scroll', handleScroll, true);
    }
    return () => {
      window.removeEventListener('scroll', handleScroll, true);
    };
  }, [showValidationRules]);
  (0, _react.useEffect)(() => {
    if (editConfig.chipIndex === chipIndex) {
      if (editConfig.isKeyFocused) {
        refInputKey.current.focus();
      } else if (editConfig.isValueFocused) {
        refInputValue.current.focus();
      }
    }
  }, [editConfig.isKeyFocused, editConfig.isValueFocused, refInputKey, refInputValue, chipIndex, editConfig.chipIndex]);
  const outsideClick = (0, _react.useCallback)((event, forceOutsideClick) => {
    if (editConfig.chipIndex === chipIndex) {
      const elementPath = event.path ?? event.composedPath?.();
      if (!elementPath.includes(refInputContainer.current) || forceOutsideClick) {
        onChange(event, _constants.CLICK, true);
        window.getSelection().removeAllRanges();
        document.activeElement.blur();
      } else {
        event.stopPropagation();
      }
    }
  }, [onChange, refInputContainer, chipIndex, editConfig.chipIndex]);
  const handleScroll = (0, _react.useCallback)(event => {
    if (validationRulesRef?.current && !validationRulesRef.current.contains(event.target)) {
      setShowValidationRules(false);
      outsideClick(event, true);
    }
  }, [outsideClick]);
  (0, _react.useEffect)(() => {
    if (showValidationRules) {
      window.addEventListener('scroll', handleScroll, true);
    }
    return () => {
      window.removeEventListener('scroll', handleScroll, true);
    };
  }, [handleScroll, showValidationRules]);
  (0, _react.useEffect)(() => {
    if (editConfig.isEdit) {
      document.addEventListener('click', outsideClick, true);
      return () => {
        document.removeEventListener('click', outsideClick, true);
      };
    }
  }, [outsideClick, editConfig.isEdit]);
  const focusChip = (0, _react.useCallback)(event => {
    if (editConfig.chipIndex === chipIndex && isEditable) {
      if (!event.shiftKey && event.key === _constants.TAB && editConfig.isValueFocused) {
        return onChange(event, _constants.TAB);
      } else if (event.shiftKey && event.key === _constants.TAB && editConfig.isKeyFocused) {
        return onChange(event, _constants.TAB_SHIFT);
      }
    }
    event.stopPropagation();
  }, [editConfig, onChange, chipIndex, isEditable]);
  const handleOnFocus = (0, _react.useCallback)(event => {
    const isKeyFocused = event.target.name === keyName;
    if (editConfig.chipIndex === chipIndex) {
      if (isKeyFocused) {
        refInputKey.current.selectionStart = refInputKey.current.selectionEnd;
        setEditConfig(prevConfig => ({
          ...prevConfig,
          isKeyFocused: true,
          isValueFocused: false
        }));
      } else {
        refInputValue.current.selectionStart = refInputValue.current.selectionEnd;
        setEditConfig(prevConfig => ({
          ...prevConfig,
          isKeyFocused: false,
          isValueFocused: true
        }));
      }
      event && event.stopPropagation();
    } else if ((0, _lodash.isNil)(editConfig.chipIndex)) {
      if (isKeyFocused) {
        refInputKey.current.selectionStart = refInputKey.current.selectionEnd;
      } else {
        refInputValue.current.selectionStart = refInputValue.current.selectionEnd;
      }
      setEditConfig({
        chipIndex,
        isEdit: true,
        isKeyFocused: isKeyFocused,
        isValueFocused: !isKeyFocused
      });
    }
  }, [keyName, refInputKey, refInputValue, setEditConfig, editConfig.chipIndex, chipIndex]);
  const handleOnChange = (0, _react.useCallback)(event => {
    const maxWidthInput = ref.current?.clientWidth - 50;
    event.preventDefault();
    if (event.target.name === keyName) {
      const currentWidthKeyInput = (0, _formChipCell.getTextWidth)(refInputKey.current);
      setChipData(prevState => ({
        ...prevState,
        key: refInputKey.current.value,
        keyFieldWidth: refInputKey.current.value.length <= 1 ? minWidthInput : currentWidthKeyInput >= maxWidthInput ? maxWidthInput : currentWidthKeyInput > minWidthInput ? currentWidthKeyInput + 2 : minWidthInput
      }));
    } else {
      const currentWidthValueInput = (0, _formChipCell.getTextWidth)(refInputValue.current);
      setChipData(prevState => ({
        ...prevState,
        value: refInputValue.current.value,
        valueFieldWidth: refInputValue.current.value?.length <= 1 ? minWidthValueInput : currentWidthValueInput >= maxWidthInput ? maxWidthInput : currentWidthValueInput > minWidthValueInput ? currentWidthValueInput + 2 : minWidthValueInput
      }));
    }
  }, [keyName, minWidthInput, ref, minWidthValueInput]);
  (0, _react.useLayoutEffect)(() => {
    if (editConfig.chipIndex === chipIndex) {
      setSelectedInput(editConfig.isKeyFocused ? 'key' : editConfig.isValueFocused ? 'value' : null);
    }
  }, [editConfig.isKeyFocused, editConfig.isValueFocused, editConfig.chipIndex, chipIndex]);
  (0, _react.useEffect)(() => {
    if (meta.valid && showValidationRules) {
      setShowValidationRules(false);
    }
  }, [meta.valid, showValidationRules]);
  (0, _react.useEffect)(() => {
    if (meta.error) {
      setValidationRules(prevState => {
        return {
          ...prevState,
          [selectedInput]: prevState[selectedInput]?.map(rule => {
            return {
              ...rule,
              isValid: (0, _lodash.isEmpty)((0, _lodash.get)(meta, ['error', editConfig.chipIndex, selectedInput], [])) ? true : !meta.error[editConfig.chipIndex][selectedInput].some(err => err && err.name === rule.name)
            };
          })
        };
      });
      !showValidationRules && setShowValidationRules(true);
    }
  }, [meta, showValidationRules, selectedInput, editConfig.chipIndex]);
  const getValidationRules = (0, _react.useCallback)(() => {
    return validationRules[selectedInput]?.map(_ref2 => {
      let {
        isValid = false,
        label,
        name
      } = _ref2;
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_ValidationTemplate.default, {
        valid: isValid,
        validationMessage: label
      }, name);
    });
  }, [selectedInput, validationRules]);
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: labelContainerClassName,
    onKeyDown: event => !chip.disabled && editConfig.isEdit && focusChip(event),
    ref: refInputContainer,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_NewChipInput.default, {
      className: labelKeyClassName,
      disabled: chip.disabled || !isEditable || !(0, _lodash.isNil)(editConfig.chipIndex) && editConfig.chipIndex !== chipIndex,
      name: keyName,
      onChange: handleOnChange,
      onFocus: handleOnFocus,
      placeholder: "key",
      ref: refInputKey,
      style: {
        width: chipData.keyFieldWidth
      }
    }), !chipData.isKeyOnly && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "edit-chip-separator",
      children: ":"
    }), !chipData.isKeyOnly && /*#__PURE__*/(0, _jsxRuntime.jsx)(_NewChipInput.default, {
      className: labelValueClassName,
      disabled: chip.disabled || !isEditable || !(0, _lodash.isNil)(editConfig.chipIndex) && editConfig.chipIndex !== chipIndex,
      name: valueName,
      onChange: handleOnChange,
      onFocus: handleOnFocus,
      placeholder: "value",
      ref: refInputValue,
      style: {
        width: chipData.valueFieldWidth
      }
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
      disabled: chip.disabled,
      className: closeButtonClass,
      onClick: event => !chip.disabled && handleRemoveChip(event, chipIndex),
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_close.ReactComponent, {})
    }), !chip.disabled && (editConfig.isKeyFocused ? !(0, _lodash.isEmpty)(chipData.key) : !(0, _lodash.isEmpty)(chipData.value)) && editConfig.chipIndex === chipIndex && !(0, _lodash.isEmpty)((0, _lodash.get)(meta, ['error', editConfig.chipIndex, selectedInput], [])) && /*#__PURE__*/(0, _jsxRuntime.jsx)(_OptionsMenu.default, {
      show: showValidationRules,
      ref: {
        refInputContainer,
        validationRulesRef
      },
      children: getValidationRules()
    })]
  });
});
NewChipForm.propTypes = {
  chip: _propTypes.default.object.isRequired,
  chipIndex: _propTypes.default.number.isRequired,
  chipOptions: _types.CHIP_OPTIONS.isRequired,
  className: _propTypes.default.string,
  editConfig: _propTypes.default.shape({}).isRequired,
  handleRemoveChip: _propTypes.default.func.isRequired,
  isEditable: _propTypes.default.bool.isRequired,
  keyName: _propTypes.default.string.isRequired,
  meta: _propTypes.default.object.isRequired,
  onChange: _propTypes.default.func.isRequired,
  setEditConfig: _propTypes.default.func.isRequired,
  validationRules: _propTypes.default.object,
  valueName: _propTypes.default.string.isRequired
};
var _default = exports.default = NewChipForm;