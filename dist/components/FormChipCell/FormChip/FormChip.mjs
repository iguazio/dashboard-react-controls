import { j as jsxDevRuntimeExports } from "../../../_virtual/jsx-dev-runtime.mjs";
import React__default, { useEffect } from "react";
import PropTypes from "prop-types";
import NewChipForm from "../NewChipForm/NewChipForm.mjs";
import { CHIP_OPTIONS } from "../../../types.mjs";
/* empty css               */
const FormChip = React__default.forwardRef(
  ({
    chip,
    chipIndex,
    chipOptions = {
      background: "purple",
      boldValue: false,
      borderRadius: "primary",
      borderColor: "transparent",
      density: "dense",
      font: "purple"
    },
    editConfig,
    handleEditChip,
    handleRemoveChip,
    handleToEditMode,
    isEditable = false,
    keyName = "",
    meta,
    setChipsSizes,
    setEditConfig,
    validationRules = {},
    valueName = ""
  }, ref) => {
    const chipRef = React__default.useRef();
    useEffect(() => {
      queueMicrotask(() => {
        if (chipRef.current && setChipsSizes) {
          setChipsSizes((state) => ({
            ...state,
            [chipIndex]: chipRef.current.getBoundingClientRect().width
          }));
        }
      });
    }, [chipIndex, setChipsSizes]);
    return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { onClick: (event) => handleToEditMode(event, chipIndex, keyName), ref: chipRef, children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
      NewChipForm,
      {
        chip,
        chipIndex,
        chipOptions,
        className: "input-label-key",
        editConfig,
        handleRemoveChip,
        isEditable,
        keyName,
        meta,
        onChange: handleEditChip,
        ref,
        setEditConfig,
        validationRules,
        valueName
      },
      void 0,
      false,
      {
        fileName: "/Users/Ilan_Kader/Development/dashboard-react-controls/src/lib/components/FormChipCell/FormChip/FormChip.jsx",
        lineNumber: 68,
        columnNumber: 9
      },
      void 0
    ) }, void 0, false, {
      fileName: "/Users/Ilan_Kader/Development/dashboard-react-controls/src/lib/components/FormChipCell/FormChip/FormChip.jsx",
      lineNumber: 67,
      columnNumber: 7
    }, void 0);
  }
);
FormChip.displayName = "FormChip";
FormChip.propTypes = {
  chip: PropTypes.object.isRequired,
  chipIndex: PropTypes.number.isRequired,
  chipOptions: CHIP_OPTIONS,
  editConfig: PropTypes.object.isRequired,
  handleEditChip: PropTypes.func.isRequired,
  handleRemoveChip: PropTypes.func.isRequired,
  handleToEditMode: PropTypes.func.isRequired,
  isEditable: PropTypes.bool,
  keyName: PropTypes.string,
  meta: PropTypes.object.isRequired,
  setChipsSizes: PropTypes.func.isRequired,
  setEditConfig: PropTypes.func.isRequired,
  validationRules: PropTypes.object,
  valueName: PropTypes.string
};
export {
  FormChip as default
};
//# sourceMappingURL=FormChip.mjs.map
