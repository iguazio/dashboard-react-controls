"use strict";

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

const FormChipCell = _ref => {
  let {
    chipOptions = {
      background: 'purple',
      boldValue: false,
      borderRadius: 'primary',
      borderColor: 'transparent',
      density: 'dense',
      font: 'purple'
    },
    className = '',
    delimiter = null,
    formState,
    initialValues,
    isEditable = false,
    label = null,
    name,
    onClick = () => {},
    shortChips = false,
    validationRules = {},
    validator = null,
    onExitEditModeCallback,
    visibleChipsMaxLength = null
  } = _ref;
  const chipsClassName = (0, _classnames.default)('chips', className);
  const {
    chipsCellRef,
    chipsWrapperRef,
    handleShowElements,
    hiddenChipsCounterRef,
    hiddenChipsPopUpRef,
    setChipsSizes,
    setShowHiddenChips,
    showChips,
    showHiddenChips,
    visibleChipsCount
  } = (0, _hooks.useChipCell)(isEditable, visibleChipsMaxLength);
  const [editConfig, setEditConfig] = (0, _react.useState)({
    chipIndex: null,
    isEdit: false,
    isKeyFocused: false,
    isValueFocused: false,
    isNewChip: false
  });
  let chips = (0, _react.useMemo)(() => {
    return isEditable || visibleChipsMaxLength === 'all' ? {
      visibleChips: (0, _lodash.get)(formState.values, name),
      hiddenChips: []
    } : (0, _generateChipsList.generateChipsList)((0, _lodash.get)(formState.values, name), visibleChipsMaxLength ? visibleChipsMaxLength : visibleChipsCount);
  }, [visibleChipsMaxLength, isEditable, visibleChipsCount, formState.values, name]);
  const checkChipsList = (0, _react.useCallback)(currentChipsList => {
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
  const handleAddNewChip = (0, _react.useCallback)((event, fields) => {
    const fieldsLength = fields.value?.length || 0;
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
  const handleRemoveChip = (0, _react.useCallback)(function (event, fields, chipIndex) {
    let isOutsideClick = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
    checkChipsList(_lodash.default.chain(formState).get(['values', name]).filter((_, index) => index !== chipIndex).value());
    fields.remove(chipIndex);
    onExitEditModeCallback && onExitEditModeCallback();
    event && !isOutsideClick && event.stopPropagation();
  }, [checkChipsList, formState, name, onExitEditModeCallback]);
  const handleEditChip = (0, _react.useCallback)((event, fields, nameEvent, isOutsideClick) => {
    const {
      key,
      value
    } = fields.value[editConfig.chipIndex];
    const isChipNotEmpty = !!(key?.trim() && value?.trim());
    if (nameEvent === _constants.CLICK) {
      if (!isChipNotEmpty) {
        handleRemoveChip(event, fields, editConfig.chipIndex, isOutsideClick);
      }
      setEditConfig({
        chipIndex: null,
        isEdit: false,
        isKeyFocused: false,
        isValueFocused: false,
        isNewChip: false
      });
      isChipNotEmpty && onExitEditModeCallback && onExitEditModeCallback();
    } else if (nameEvent === _constants.TAB) {
      if (!isChipNotEmpty) {
        handleRemoveChip(event, fields, editConfig.chipIndex);
      }
      setEditConfig(prevState => {
        const lastChipSelected = prevState.chipIndex + 1 > fields.value.length - 1;
        isChipNotEmpty && lastChipSelected && onExitEditModeCallback && onExitEditModeCallback();
        return {
          chipIndex: lastChipSelected ? null : prevState.chipIndex + 1,
          isEdit: !lastChipSelected,
          isKeyFocused: !lastChipSelected,
          isValueFocused: false,
          isNewChip: false
        };
      });
    } else if (nameEvent === _constants.TAB_SHIFT) {
      if (!isChipNotEmpty) {
        handleRemoveChip(event, fields, editConfig.chipIndex);
      }
      setEditConfig(prevState => {
        const firstChipIsSelected = prevState.chipIndex === 0;
        isChipNotEmpty && firstChipIsSelected && onExitEditModeCallback && onExitEditModeCallback();
        return {
          chipIndex: firstChipIsSelected ? null : prevState.chipIndex - 1,
          isEdit: !firstChipIsSelected,
          isKeyFocused: false,
          isValueFocused: !firstChipIsSelected,
          isNewChip: false
        };
      });
    }
    checkChipsList((0, _lodash.get)(formState.values, name));
    if (editConfig.chipIndex > 0 && editConfig.chipIndex < fields.value.length - 1 || fields.value.length > 1 && editConfig.chipIndex === 0 && nameEvent !== _constants.TAB_SHIFT || fields.value.length > 1 && editConfig.chipIndex === fields.value.length - 1 && nameEvent !== _constants.TAB) {
      event && event.preventDefault();
    }
  }, [editConfig.chipIndex, checkChipsList, formState.values, name, onExitEditModeCallback, handleRemoveChip]);
  const handleToEditMode = (0, _react.useCallback)((event, chipIndex, keyName) => {
    if (isEditable) {
      const {
        clientX: pointerCoordinateX,
        clientY: pointerCoordinateY
      } = event;
      let isKeyClicked = false;
      const isClickedInsideInputElement = (pointerCoordinateX, pointerCoordinateY, inputElement) => {
        if (inputElement) {
          const {
            top: topPosition,
            left: leftPosition,
            right: rightPosition,
            bottom: bottomPosition
          } = inputElement.getBoundingClientRect();
          if (pointerCoordinateX > rightPosition || pointerCoordinateX < leftPosition) return false;
          if (pointerCoordinateY > bottomPosition || pointerCoordinateY < topPosition) return false;
          return true;
        }
      };
      event.stopPropagation();
      if (event.target.nodeName !== 'INPUT') {
        if (event.target.firstElementChild) {
          isKeyClicked = isClickedInsideInputElement(pointerCoordinateX, pointerCoordinateY, event.target.firstElementChild);
        }
      } else {
        isKeyClicked = event.target.name === keyName;
      }
      setEditConfig(preState => ({
        ...preState,
        chipIndex,
        isEdit: true,
        isKeyFocused: isKeyClicked,
        isValueFocused: !isKeyClicked
      }));
    }
    onClick && onClick();
  }, [isEditable, onClick]);
  const validateFields = fieldsArray => {
    if (!fieldsArray) return null;
    let errorData = [];
    const uniquenessValidator = (newValue, idx) => {
      return !fieldsArray.some((_ref2, index) => {
        let {
          key
        } = _ref2;
        return newValue === key && index !== idx;
      });
    };
    if (!(0, _lodash.isEmpty)(validationRules)) {
      errorData = fieldsArray.map(chip => {
        const [keyValidation, valueValidation] = validateChip(chip);
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
    fieldsArray.forEach((chip, index) => {
      const isUnique = uniquenessValidator(chip.key, index);
      if (!isUnique) {
        if ((0, _lodash.get)(errorData, [index, 'key'], false)) {
          errorData.at(index).key.push(_formChipCell.uniquenessError);
        } else {
          (0, _lodash.set)(errorData, [index, 'key'], [_formChipCell.uniquenessError]);
        }
      }
    });
    if ((0, _lodash.isEmpty)(errorData) && validator) {
      errorData = validator(fieldsArray);
    }
    if (errorData.every(label => (0, _lodash.isNil)(label))) {
      return null;
    }
    return errorData;
  };
  const validateChip = _ref3 => {
    let {
      key,
      value,
      disabled
    } = _ref3;
    const validateField = (value, field) => {
      const [newRules, isValidField] = (0, _validation.checkPatternsValidity)(validationRules[field].filter(rule => rule.pattern), value);
      if (isValidField) return null;
      const invalidRules = newRules.filter(rule => !rule.isValid);
      return invalidRules.map(rule => ({
        name: rule.name,
        label: rule.label
      }));
    };
    return disabled ? [null, null] : [validateField(key, 'key'), validateField(value, 'value')];
  };
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: chipsClassName,
    "data-testid": `${name}-chips`,
    children: [label && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "chips__label",
      children: label
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: label ? 'chips__wrapper' : '',
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_FormChipCellView.default, {
        chipOptions: chipOptions,
        chips: chips,
        editConfig: editConfig,
        formState: formState,
        handleAddNewChip: handleAddNewChip,
        handleEditChip: handleEditChip,
        handleRemoveChip: handleRemoveChip,
        handleShowElements: handleShowElements,
        handleToEditMode: handleToEditMode,
        isEditable: isEditable,
        name: name,
        ref: {
          chipsCellRef,
          chipsWrapperRef,
          hiddenChipsCounterRef,
          hiddenChipsPopUpRef
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
var _default = exports.default = /*#__PURE__*/_react.default.memo(FormChipCell);