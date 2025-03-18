import { j as jsxDevRuntimeExports } from "../../_virtual/jsx-dev-runtime.mjs";
import React__default, { useState, useMemo, useCallback } from "react";
import lodash, { get, set, isEmpty, isNil } from "lodash";
import classnames from "classnames";
import PropTypes from "prop-types";
import FormChipCellView from "./FormChipCellView.mjs";
import { CHIP_OPTIONS } from "../../types.mjs";
import { CLICK, TAB, TAB_SHIFT } from "../../constants.mjs";
import { areArraysEqual } from "../../utils/common.util.mjs";
import { checkPatternsValidity } from "../../utils/validation.util.mjs";
import { generateChipsList } from "../../utils/generateChipsList.util.mjs";
import { uniquenessError } from "./formChipCell.util.mjs";
import "../../hooks/index.mjs";
/* empty css                   */
import { useChipCell } from "../../hooks/useChipCell.hook.mjs";
const FormChipCell = ({
  chipOptions = {
    background: "purple",
    boldValue: false,
    borderRadius: "primary",
    borderColor: "transparent",
    density: "dense",
    font: "purple"
  },
  className = "",
  delimiter = null,
  formState,
  initialValues,
  isEditable = false,
  label = null,
  name,
  onClick = () => {
  },
  shortChips = false,
  validationRules = {},
  validator = null,
  onExitEditModeCallback = null,
  visibleChipsMaxLength = null
}) => {
  const chipsClassName = classnames("chips", className);
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
  } = useChipCell(isEditable, visibleChipsMaxLength);
  const [editConfig, setEditConfig] = useState({
    chipIndex: null,
    isEdit: false,
    isKeyFocused: false,
    isValueFocused: false,
    isNewChip: false
  });
  let chips = useMemo(() => {
    return isEditable || visibleChipsMaxLength === "all" ? {
      visibleChips: get(formState.values, name),
      hiddenChips: []
    } : generateChipsList(
      get(formState.values, name),
      visibleChipsMaxLength ? visibleChipsMaxLength : visibleChipsCount
    );
  }, [visibleChipsMaxLength, isEditable, visibleChipsCount, formState.values, name]);
  const checkChipsList = useCallback(
    (currentChipsList) => {
      if (areArraysEqual(get(initialValues, name), currentChipsList, ["id"])) {
        set(formState.initialValues, name, currentChipsList);
      }
      formState.form.mutators.setFieldState(name, { modified: true });
      formState.form.mutators.setFieldState(name, { touched: true });
    },
    [initialValues, name, formState]
  );
  const handleAddNewChip = useCallback(
    (event, fields) => {
      var _a;
      const fieldsLength = ((_a = fields.value) == null ? void 0 : _a.length) || 0;
      if (!editConfig.isEdit && !editConfig.chipIndex) {
        formState.form.mutators.push(name, {
          id: fieldsLength + /* @__PURE__ */ new Date(),
          key: "",
          value: "",
          delimiter
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
    },
    [
      editConfig.isEdit,
      editConfig.chipIndex,
      showHiddenChips,
      formState.form.mutators,
      name,
      delimiter,
      setShowHiddenChips
    ]
  );
  const handleRemoveChip = useCallback(
    (event, fields, chipIndex, isOutsideClick = false) => {
      checkChipsList(
        lodash.chain(formState).get(["values", name]).filter((_, index) => index !== chipIndex).value()
      );
      fields.remove(chipIndex);
      onExitEditModeCallback && onExitEditModeCallback();
      event && !isOutsideClick && event.stopPropagation();
    },
    [checkChipsList, formState, name, onExitEditModeCallback]
  );
  const handleEditChip = useCallback(
    (event, fields, nameEvent, isOutsideClick) => {
      const { key, value } = fields.value[editConfig.chipIndex];
      const isChipNotEmpty = !!((key == null ? void 0 : key.trim()) && (value == null ? void 0 : value.trim()));
      if (nameEvent === CLICK) {
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
      } else if (nameEvent === TAB) {
        if (!isChipNotEmpty) {
          handleRemoveChip(event, fields, editConfig.chipIndex);
        }
        setEditConfig((prevState) => {
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
      } else if (nameEvent === TAB_SHIFT) {
        if (!isChipNotEmpty) {
          handleRemoveChip(event, fields, editConfig.chipIndex);
        }
        setEditConfig((prevState) => {
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
      checkChipsList(get(formState.values, name));
      if (editConfig.chipIndex > 0 && editConfig.chipIndex < fields.value.length - 1 || fields.value.length > 1 && editConfig.chipIndex === 0 && nameEvent !== TAB_SHIFT || fields.value.length > 1 && editConfig.chipIndex === fields.value.length - 1 && nameEvent !== TAB) {
        event && event.preventDefault();
      }
    },
    [
      editConfig.chipIndex,
      checkChipsList,
      formState.values,
      name,
      onExitEditModeCallback,
      handleRemoveChip
    ]
  );
  const handleToEditMode = useCallback(
    (event, chipIndex, keyName) => {
      if (isEditable) {
        const { clientX: pointerCoordinateX, clientY: pointerCoordinateY } = event;
        let isKeyClicked = false;
        const isClickedInsideInputElement = (pointerCoordinateX2, pointerCoordinateY2, inputElement) => {
          if (inputElement) {
            const {
              top: topPosition,
              left: leftPosition,
              right: rightPosition,
              bottom: bottomPosition
            } = inputElement.getBoundingClientRect();
            if (pointerCoordinateX2 > rightPosition || pointerCoordinateX2 < leftPosition)
              return false;
            if (pointerCoordinateY2 > bottomPosition || pointerCoordinateY2 < topPosition)
              return false;
            return true;
          }
        };
        event.stopPropagation();
        if (event.target.nodeName !== "INPUT") {
          if (event.target.firstElementChild) {
            isKeyClicked = isClickedInsideInputElement(
              pointerCoordinateX,
              pointerCoordinateY,
              event.target.firstElementChild
            );
          }
        } else {
          isKeyClicked = event.target.name === keyName;
        }
        setEditConfig((preState) => ({
          ...preState,
          chipIndex,
          isEdit: true,
          isKeyFocused: isKeyClicked,
          isValueFocused: !isKeyClicked
        }));
      }
      onClick && onClick();
    },
    [isEditable, onClick]
  );
  const validateFields = (fieldsArray) => {
    if (!fieldsArray) return null;
    let errorData = [];
    const uniquenessValidator = (newValue, idx) => {
      return !fieldsArray.some(({ key }, index) => {
        return newValue === key && index !== idx;
      });
    };
    if (!isEmpty(validationRules)) {
      errorData = fieldsArray.map((chip) => {
        const [keyValidation, valueValidation] = validateChip(chip);
        if (keyValidation && valueValidation) return { key: keyValidation, value: valueValidation };
        if (keyValidation) return { key: keyValidation };
        if (valueValidation) return { value: valueValidation };
        return null;
      });
    }
    fieldsArray.forEach((chip, index) => {
      const isUnique = uniquenessValidator(chip.key, index);
      if (!isUnique) {
        if (get(errorData, [index, "key"], false)) {
          errorData.at(index).key.push(uniquenessError);
        } else {
          set(errorData, [index, "key"], [uniquenessError]);
        }
      }
    });
    if (isEmpty(errorData) && validator) {
      errorData = validator(fieldsArray);
    }
    if (errorData.every((label2) => isNil(label2))) {
      return null;
    }
    return errorData;
  };
  const validateChip = ({ key, value, disabled }) => {
    const validateField = (value2, field) => {
      const [newRules, isValidField] = checkPatternsValidity(
        validationRules[field].filter((rule) => rule.pattern),
        value2
      );
      if (isValidField) return null;
      const invalidRules = newRules.filter((rule) => !rule.isValid);
      return invalidRules.map((rule) => ({ name: rule.name, label: rule.label }));
    };
    return disabled ? [null, null] : [validateField(key, "key"), validateField(value, "value")];
  };
  return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: chipsClassName, "data-testid": `${name}-chips`, children: [
    label && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "chips__label", children: label }, void 0, false, {
      fileName: "/Users/Ilan_Kader/Development/dashboard-react-controls/src/lib/components/FormChipCell/FormChipCell.jsx",
      lineNumber: 359,
      columnNumber: 17
    }, void 0),
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: label ? "chips__wrapper" : "", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
      FormChipCellView,
      {
        chipOptions,
        chips,
        editConfig,
        handleAddNewChip,
        handleEditChip,
        handleRemoveChip,
        handleShowElements,
        handleToEditMode,
        isEditable,
        name,
        ref: { chipsCellRef, chipsWrapperRef, hiddenChipsCounterRef, hiddenChipsPopUpRef },
        setChipsSizes,
        setEditConfig,
        shortChips,
        showChips,
        showHiddenChips,
        validateFields,
        validationRules
      },
      void 0,
      false,
      {
        fileName: "/Users/Ilan_Kader/Development/dashboard-react-controls/src/lib/components/FormChipCell/FormChipCell.jsx",
        lineNumber: 361,
        columnNumber: 9
      },
      void 0
    ) }, void 0, false, {
      fileName: "/Users/Ilan_Kader/Development/dashboard-react-controls/src/lib/components/FormChipCell/FormChipCell.jsx",
      lineNumber: 360,
      columnNumber: 7
    }, void 0)
  ] }, void 0, true, {
    fileName: "/Users/Ilan_Kader/Development/dashboard-react-controls/src/lib/components/FormChipCell/FormChipCell.jsx",
    lineNumber: 358,
    columnNumber: 5
  }, void 0);
};
FormChipCell.propTypes = {
  chipOptions: CHIP_OPTIONS,
  className: PropTypes.string,
  delimiter: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  formState: PropTypes.object.isRequired,
  initialValues: PropTypes.object.isRequired,
  isEditable: PropTypes.bool,
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  onExitEditModeCallback: PropTypes.func,
  shortChips: PropTypes.bool,
  validationRules: PropTypes.object,
  validator: PropTypes.func,
  visibleChipsMaxLength: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
const FormChipCell$1 = React__default.memo(FormChipCell);
export {
  FormChipCell$1 as default
};
//# sourceMappingURL=FormChipCell.mjs.map
