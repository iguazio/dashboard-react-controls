import { j as jsxDevRuntimeExports } from "../../../_virtual/jsx-dev-runtime.mjs";
import React__default, { useState, useMemo, useLayoutEffect, useEffect, useCallback } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import { isEmpty, get, isNil } from "lodash";
import NewChipInput from "../NewChipInput/NewChipInput.mjs";
import OptionsMenu from "../../../elements/OptionsMenu/OptionsMenu.mjs";
import ValidationTemplate from "../../../elements/ValidationTemplate/ValidationTemplate.mjs";
import { CHIP_OPTIONS } from "../../../types.mjs";
import { CLICK, TAB, TAB_SHIFT } from "../../../constants.mjs";
import { getTextWidth } from "../formChipCell.util.mjs";
import SvgClose from "../../../images/close.svg.mjs";
/* empty css                  */
const defaultProps = {
  rules: {}
};
const NewChipForm = React__default.forwardRef(
  ({
    chip,
    chipIndex,
    chipOptions,
    className = "",
    editConfig,
    handleRemoveChip,
    isEditable,
    keyName,
    meta,
    onChange,
    setEditConfig,
    validationRules: rules = defaultProps.rules,
    valueName
  }, ref) => {
    const [chipData, setChipData] = useState({
      isKeyOnly: chip.isKeyOnly,
      key: chip.key,
      value: chip.value,
      keyFieldWidth: 0,
      valueFieldWidth: 0
    });
    const [selectedInput, setSelectedInput] = useState("key");
    const [validationRules, setValidationRules] = useState(rules);
    const [showValidationRules, setShowValidationRules] = useState(false);
    const maxWidthInput = useMemo(() => {
      var _a;
      return ((_a = ref.current) == null ? void 0 : _a.clientWidth) - 50;
    }, [ref]);
    const { background, borderColor, borderRadius, density, font } = chipOptions;
    const minWidthInput = useMemo(() => {
      return isEditable ? 25 : 20;
    }, [isEditable]);
    const minWidthValueInput = useMemo(() => {
      return isEditable ? 35 : 20;
    }, [isEditable]);
    const refInputKey = React__default.useRef({});
    const refInputValue = React__default.useRef({});
    const refInputContainer = React__default.useRef();
    const labelKeyClassName = classnames(
      className,
      !editConfig.isKeyFocused && "item_edited",
      !isEmpty(get(meta, ["error", chipIndex, "key"], [])) && !isEmpty(chipData.key) && !chip.disabled && "item_edited_invalid"
    );
    const labelContainerClassName = classnames(
      "edit-chip-container",
      background && `edit-chip-container-background_${background}`,
      borderColor && `edit-chip-container-border_${borderColor}`,
      font && `edit-chip-container-font_${font}`,
      density && `edit-chip-container-density_${density}`,
      borderRadius && `edit-chip-container-border_${borderRadius}`,
      (editConfig.isEdit || editConfig.isNewChip) && "edit-chip-container_edited",
      chip.disabled && "edit-chip-container_disabled edit-chip-container-font_disabled"
    );
    const labelValueClassName = classnames(
      "input-label-value",
      !editConfig.isValueFocused && "item_edited",
      !isEmpty(get(meta, ["error", chipIndex, "value"], [])) && !isEmpty(chipData.value) && "item_edited_invalid"
    );
    const closeButtonClass = classnames(
      "item-icon-close",
      !chip.disabled && editConfig.chipIndex === chipIndex && isEditable && "item-icon-close_invisible",
      !isEditable && "item-icon-close_hidden"
    );
    useLayoutEffect(() => {
      if (!chipData.keyFieldWidth && !chipData.valueFieldWidth) {
        const currentWidthKeyInput = refInputKey.current.scrollWidth + 1;
        const currentWidthValueInput = refInputValue.current.scrollWidth + 1;
        const keyFieldWidth = !chipData.key || currentWidthKeyInput <= minWidthInput ? minWidthInput : currentWidthKeyInput >= maxWidthInput ? maxWidthInput : currentWidthKeyInput;
        const valueFieldWidth = !chipData.value || currentWidthValueInput <= minWidthValueInput ? minWidthValueInput : currentWidthValueInput >= maxWidthInput ? maxWidthInput : currentWidthValueInput;
        setChipData((prevState) => ({
          ...prevState,
          keyFieldWidth,
          valueFieldWidth
        }));
      }
    }, [
      minWidthInput,
      minWidthValueInput,
      chipData.key,
      chipData.value,
      chipData.keyFieldWidth,
      chipData.valueFieldWidth,
      maxWidthInput,
      refInputKey,
      refInputValue
    ]);
    const handleScroll = () => {
      setShowValidationRules(false);
    };
    useEffect(() => {
      if (showValidationRules) {
        window.addEventListener("scroll", handleScroll, true);
      }
      return () => {
        window.removeEventListener("scroll", handleScroll, true);
      };
    }, [showValidationRules]);
    useEffect(() => {
      if (editConfig.chipIndex === chipIndex) {
        if (editConfig.isKeyFocused) {
          refInputKey.current.focus();
        } else if (editConfig.isValueFocused) {
          refInputValue.current.focus();
        }
      }
    }, [
      editConfig.isKeyFocused,
      editConfig.isValueFocused,
      refInputKey,
      refInputValue,
      chipIndex,
      editConfig.chipIndex
    ]);
    const outsideClick = useCallback(
      (event) => {
        var _a;
        if (editConfig.chipIndex === chipIndex) {
          const elementPath = event.path ?? ((_a = event.composedPath) == null ? void 0 : _a.call(event));
          if (!elementPath.includes(refInputContainer.current)) {
            onChange(event, CLICK, true);
            window.getSelection().removeAllRanges();
          } else {
            event.stopPropagation();
          }
        }
      },
      [onChange, refInputContainer, chipIndex, editConfig.chipIndex]
    );
    useEffect(() => {
      if (editConfig.isEdit) {
        document.addEventListener("click", outsideClick, true);
        return () => {
          document.removeEventListener("click", outsideClick, true);
        };
      }
    }, [outsideClick, editConfig.isEdit]);
    const focusChip = useCallback(
      (event) => {
        if (editConfig.chipIndex === chipIndex && isEditable) {
          if (!event.shiftKey && event.key === TAB && editConfig.isValueFocused) {
            return onChange(event, TAB);
          } else if (event.shiftKey && event.key === TAB && editConfig.isKeyFocused) {
            return onChange(event, TAB_SHIFT);
          }
        }
        event.stopPropagation();
      },
      [editConfig, onChange, chipIndex, isEditable]
    );
    const handleOnFocus = useCallback(
      (event) => {
        const isKeyFocused = event.target.name === keyName;
        if (editConfig.chipIndex === chipIndex) {
          if (isKeyFocused) {
            refInputKey.current.selectionStart = refInputKey.current.selectionEnd;
            setEditConfig((prevConfig) => ({
              ...prevConfig,
              isKeyFocused: true,
              isValueFocused: false
            }));
          } else {
            refInputValue.current.selectionStart = refInputValue.current.selectionEnd;
            setEditConfig((prevConfig) => ({
              ...prevConfig,
              isKeyFocused: false,
              isValueFocused: true
            }));
          }
          event && event.stopPropagation();
        } else if (isNil(editConfig.chipIndex)) {
          if (isKeyFocused) {
            refInputKey.current.selectionStart = refInputKey.current.selectionEnd;
          } else {
            refInputValue.current.selectionStart = refInputValue.current.selectionEnd;
          }
          setEditConfig({
            chipIndex,
            isEdit: true,
            isKeyFocused,
            isValueFocused: !isKeyFocused
          });
        }
      },
      [keyName, refInputKey, refInputValue, setEditConfig, editConfig.chipIndex, chipIndex]
    );
    const handleOnChange = useCallback(
      (event) => {
        event.preventDefault();
        if (event.target.name === keyName) {
          const currentWidthKeyInput = getTextWidth(refInputKey.current);
          setChipData((prevState) => ({
            ...prevState,
            key: refInputKey.current.value,
            keyFieldWidth: refInputKey.current.value.length <= 1 ? minWidthInput : currentWidthKeyInput >= maxWidthInput ? maxWidthInput : currentWidthKeyInput > minWidthInput ? currentWidthKeyInput + 2 : minWidthInput
          }));
        } else {
          const currentWidthValueInput = getTextWidth(refInputValue.current);
          setChipData((prevState) => {
            var _a;
            return {
              ...prevState,
              value: refInputValue.current.value,
              valueFieldWidth: ((_a = refInputValue.current.value) == null ? void 0 : _a.length) <= 1 ? minWidthValueInput : currentWidthValueInput >= maxWidthInput ? maxWidthInput : currentWidthValueInput > minWidthValueInput ? currentWidthValueInput + 2 : minWidthValueInput
            };
          });
        }
      },
      [keyName, minWidthInput, maxWidthInput, minWidthValueInput]
    );
    useLayoutEffect(() => {
      if (editConfig.chipIndex === chipIndex) {
        setSelectedInput(
          editConfig.isKeyFocused ? "key" : editConfig.isValueFocused ? "value" : null
        );
      }
    }, [editConfig.isKeyFocused, editConfig.isValueFocused, editConfig.chipIndex, chipIndex]);
    useEffect(() => {
      if (meta.valid && showValidationRules) {
        setShowValidationRules(false);
      }
    }, [meta.valid, showValidationRules]);
    useEffect(() => {
      if (meta.error) {
        setValidationRules((prevState) => {
          var _a;
          return {
            ...prevState,
            [selectedInput]: (_a = prevState[selectedInput]) == null ? void 0 : _a.map((rule) => {
              return {
                ...rule,
                isValid: isEmpty(get(meta, ["error", editConfig.chipIndex, selectedInput], [])) ? true : !meta.error[editConfig.chipIndex][selectedInput].some(
                  (err) => err && err.name === rule.name
                )
              };
            })
          };
        });
        !showValidationRules && setShowValidationRules(true);
      }
    }, [meta, showValidationRules, selectedInput, editConfig.chipIndex]);
    const getValidationRules = useCallback(() => {
      var _a;
      return (_a = validationRules[selectedInput]) == null ? void 0 : _a.map(({ isValid = false, label, name }) => {
        return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(ValidationTemplate, { valid: isValid, validationMessage: label }, name, false, {
          fileName: "/Users/Ilan_Kader/Development/dashboard-react-controls/src/lib/components/FormChipCell/NewChipForm/NewChipForm.jsx",
          lineNumber: 341,
          columnNumber: 16
        }, void 0);
      });
    }, [selectedInput, validationRules]);
    return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
      "div",
      {
        className: labelContainerClassName,
        onKeyDown: (event) => !chip.disabled && editConfig.isEdit && focusChip(event),
        ref: refInputContainer,
        children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
            NewChipInput,
            {
              className: labelKeyClassName,
              disabled: chip.disabled || !isEditable || !isNil(editConfig.chipIndex) && editConfig.chipIndex !== chipIndex,
              name: keyName,
              onChange: handleOnChange,
              onFocus: handleOnFocus,
              placeholder: "key",
              ref: refInputKey,
              style: { width: chipData.keyFieldWidth }
            },
            void 0,
            false,
            {
              fileName: "/Users/Ilan_Kader/Development/dashboard-react-controls/src/lib/components/FormChipCell/NewChipForm/NewChipForm.jsx",
              lineNumber: 351,
              columnNumber: 9
            },
            void 0
          ),
          !chipData.isKeyOnly && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "edit-chip-separator", children: ":" }, void 0, false, {
            fileName: "/Users/Ilan_Kader/Development/dashboard-react-controls/src/lib/components/FormChipCell/NewChipForm/NewChipForm.jsx",
            lineNumber: 365,
            columnNumber: 33
          }, void 0),
          !chipData.isKeyOnly && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
            NewChipInput,
            {
              className: labelValueClassName,
              disabled: chip.disabled || !isEditable || !isNil(editConfig.chipIndex) && editConfig.chipIndex !== chipIndex,
              name: valueName,
              onChange: handleOnChange,
              onFocus: handleOnFocus,
              placeholder: "value",
              ref: refInputValue,
              style: { width: chipData.valueFieldWidth }
            },
            void 0,
            false,
            {
              fileName: "/Users/Ilan_Kader/Development/dashboard-react-controls/src/lib/components/FormChipCell/NewChipForm/NewChipForm.jsx",
              lineNumber: 367,
              columnNumber: 11
            },
            void 0
          ),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
            "button",
            {
              disabled: chip.disabled,
              className: closeButtonClass,
              onClick: (event) => !chip.disabled && handleRemoveChip(event, chipIndex),
              children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(SvgClose, {}, void 0, false, {
                fileName: "/Users/Ilan_Kader/Development/dashboard-react-controls/src/lib/components/FormChipCell/NewChipForm/NewChipForm.jsx",
                lineNumber: 388,
                columnNumber: 11
              }, void 0)
            },
            void 0,
            false,
            {
              fileName: "/Users/Ilan_Kader/Development/dashboard-react-controls/src/lib/components/FormChipCell/NewChipForm/NewChipForm.jsx",
              lineNumber: 383,
              columnNumber: 9
            },
            void 0
          ),
          !chip.disabled && (editConfig.isKeyFocused ? !isEmpty(chipData.key) : !isEmpty(chipData.value)) && editConfig.chipIndex === chipIndex && !isEmpty(get(meta, ["error", editConfig.chipIndex, selectedInput], [])) && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(OptionsMenu, { show: showValidationRules, ref: refInputContainer, children: getValidationRules() }, void 0, false, {
            fileName: "/Users/Ilan_Kader/Development/dashboard-react-controls/src/lib/components/FormChipCell/NewChipForm/NewChipForm.jsx",
            lineNumber: 395,
            columnNumber: 13
          }, void 0)
        ]
      },
      void 0,
      true,
      {
        fileName: "/Users/Ilan_Kader/Development/dashboard-react-controls/src/lib/components/FormChipCell/NewChipForm/NewChipForm.jsx",
        lineNumber: 346,
        columnNumber: 7
      },
      void 0
    );
  }
);
NewChipForm.displayName = "NewChipForm";
NewChipForm.propTypes = {
  chip: PropTypes.object.isRequired,
  chipIndex: PropTypes.number.isRequired,
  chipOptions: CHIP_OPTIONS.isRequired,
  className: PropTypes.string,
  editConfig: PropTypes.object.isRequired,
  handleRemoveChip: PropTypes.func.isRequired,
  isEditable: PropTypes.bool.isRequired,
  keyName: PropTypes.string.isRequired,
  meta: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  setEditConfig: PropTypes.func.isRequired,
  validationRules: PropTypes.object,
  valueName: PropTypes.string.isRequired
};
export {
  NewChipForm as default
};
//# sourceMappingURL=NewChipForm.mjs.map
