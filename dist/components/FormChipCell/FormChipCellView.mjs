import { j as jsxDevRuntimeExports } from "../../_virtual/jsx-dev-runtime.mjs";
import React__default from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import { FieldArray } from "react-final-form-arrays";
import { isEmpty } from "lodash";
import FormChip from "./FormChip/FormChip.mjs";
import HiddenChipsBlock from "./HiddenChipsBlock/HiddenChipsBlock.mjs";
import TextTooltipTemplate from "../TooltipTemplate/TextTooltipTemplate.mjs";
import Tooltip from "../Tooltip/Tooltip.mjs";
import { CHIP_OPTIONS } from "../../types.mjs";
import { isEveryObjectValueEmpty } from "../../utils/common.util.mjs";
import { uniquenessError } from "./formChipCell.util.mjs";
import SvgAdd from "../../images/add.svg.mjs";
const FormChipCellView = React__default.forwardRef(
  ({
    chipOptions = {
      background: "purple",
      boldValue: false,
      borderRadius: "primary",
      borderColor: "transparent",
      density: "dense",
      font: "purple"
    },
    chips,
    editConfig,
    handleAddNewChip,
    handleEditChip,
    handleRemoveChip,
    handleShowElements,
    handleToEditMode,
    isEditable = false,
    name,
    setChipsSizes,
    setEditConfig,
    shortChips = false,
    showChips,
    showHiddenChips,
    validateFields,
    validationRules = {}
  }, { chipsCellRef, chipsWrapperRef, hiddenChipsCounterRef, hiddenChipsPopUpRef }) => {
    const buttonAddClassNames = classnames(
      "button-add",
      chipOptions.background && `button-add-background_${chipOptions.background}`,
      chipOptions.borderColor && `button-add-border_${chipOptions.borderColor}`,
      chipOptions.font && `button-add-font_${chipOptions.font}`,
      chipOptions.density && `button-add-density_${chipOptions.density}`
    );
    const wrapperClassNames = classnames("chips-wrapper", isEditable && "fixed-max-width");
    const chipClassNames = classnames(
      "chip",
      "chip__content",
      isEditable && "data-ellipsis",
      shortChips && "chip_short",
      chips.hiddenChips && "chip_hidden",
      chipOptions.density && `chip-density_${chipOptions.density}`,
      chipOptions.borderRadius && `chip-border_${chipOptions.borderRadius}`,
      chipOptions.background && `chip-background_${chipOptions.background}`,
      chipOptions.borderColor && `chip-border_${chipOptions.borderColor}`,
      chipOptions.font && `chip-font_${chipOptions.font}`,
      isEditable && "editable",
      (showChips || isEditable) && "chip_visible"
    );
    return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(FieldArray, { name, validate: validateFields, children: ({ fields, meta }) => {
      if (!isEmpty(validationRules) && validationRules.key.every((rule) => rule.name !== uniquenessError.name)) {
        validationRules.key.push(uniquenessError);
      }
      return (isEditable || !isEveryObjectValueEmpty(fields)) && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "chips-cell", ref: chipsCellRef, children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: wrapperClassNames, ref: chipsWrapperRef, children: [
        fields.map((contentItem, index) => {
          var _a;
          const chipData = fields.value[index];
          return index < ((_a = chips.visibleChips) == null ? void 0 : _a.length) && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "chip-block", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
            Tooltip,
            {
              hidden: editConfig.isEdit && !chipData.tooltip,
              template: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
                TextTooltipTemplate,
                {
                  text: chipData.tooltip || /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "chip__content", children: [
                    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "chip__content-item", children: chipData.key }, void 0, false, {
                      fileName: "/Users/Ilan_Kader/Development/dashboard-react-controls/src/lib/components/FormChipCell/FormChipCellView.jsx",
                      lineNumber: 115,
                      columnNumber: 39
                    }, void 0),
                    !chipData.isKeyOnly && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(jsxDevRuntimeExports.Fragment, { children: [
                      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "chip__delimiter", children: chipData.delimiter ? chipData.delimiter : ":" }, void 0, false, {
                        fileName: "/Users/Ilan_Kader/Development/dashboard-react-controls/src/lib/components/FormChipCell/FormChipCellView.jsx",
                        lineNumber: 118,
                        columnNumber: 43
                      }, void 0),
                      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "chip__content-item", children: chipData.value }, void 0, false, {
                        fileName: "/Users/Ilan_Kader/Development/dashboard-react-controls/src/lib/components/FormChipCell/FormChipCellView.jsx",
                        lineNumber: 121,
                        columnNumber: 43
                      }, void 0)
                    ] }, void 0, true, {
                      fileName: "/Users/Ilan_Kader/Development/dashboard-react-controls/src/lib/components/FormChipCell/FormChipCellView.jsx",
                      lineNumber: 117,
                      columnNumber: 41
                    }, void 0)
                  ] }, void 0, true, {
                    fileName: "/Users/Ilan_Kader/Development/dashboard-react-controls/src/lib/components/FormChipCell/FormChipCellView.jsx",
                    lineNumber: 114,
                    columnNumber: 37
                  }, void 0)
                },
                void 0,
                false,
                {
                  fileName: "/Users/Ilan_Kader/Development/dashboard-react-controls/src/lib/components/FormChipCell/FormChipCellView.jsx",
                  lineNumber: 111,
                  columnNumber: 31
                },
                void 0
              ),
              children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
                FormChip,
                {
                  chip: chipData,
                  chipIndex: index,
                  chipOptions,
                  editConfig,
                  handleEditChip: (event, nameEvent, isOutsideClick) => handleEditChip(event, fields, nameEvent, isOutsideClick),
                  handleRemoveChip: (event, index2) => handleRemoveChip(event, fields, index2),
                  handleToEditMode,
                  isEditable,
                  keyName: `${contentItem}.key`,
                  meta,
                  ref: chipsCellRef,
                  setChipsSizes,
                  setEditConfig,
                  validationRules,
                  valueName: `${contentItem}.value`
                },
                void 0,
                false,
                {
                  fileName: "/Users/Ilan_Kader/Development/dashboard-react-controls/src/lib/components/FormChipCell/FormChipCellView.jsx",
                  lineNumber: 132,
                  columnNumber: 29
                },
                void 0
              )
            },
            chipData.id,
            false,
            {
              fileName: "/Users/Ilan_Kader/Development/dashboard-react-controls/src/lib/components/FormChipCell/FormChipCellView.jsx",
              lineNumber: 107,
              columnNumber: 27
            },
            void 0
          ) }, chipData.id, false, {
            fileName: "/Users/Ilan_Kader/Development/dashboard-react-controls/src/lib/components/FormChipCell/FormChipCellView.jsx",
            lineNumber: 106,
            columnNumber: 25
          }, void 0);
        }),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "chip-block", children: [
          chips.hiddenChips.length > 0 && showHiddenChips && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
            HiddenChipsBlock,
            {
              chipClassNames,
              chipOptions,
              chips: chips.hiddenChips,
              handleShowElements,
              ref: { hiddenChipsCounterRef, hiddenChipsPopUpRef },
              textOverflowEllipsis: true
            },
            void 0,
            false,
            {
              fileName: "/Users/Ilan_Kader/Development/dashboard-react-controls/src/lib/components/FormChipCell/FormChipCellView.jsx",
              lineNumber: 161,
              columnNumber: 23
            },
            void 0
          ),
          chips.hiddenChipsNumber && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
            "span",
            {
              ref: hiddenChipsCounterRef,
              className: `${chipClassNames} chips_button`,
              onClick: handleShowElements,
              children: chips.hiddenChipsNumber
            },
            void 0,
            false,
            {
              fileName: "/Users/Ilan_Kader/Development/dashboard-react-controls/src/lib/components/FormChipCell/FormChipCellView.jsx",
              lineNumber: 171,
              columnNumber: 23
            },
            void 0
          )
        ] }, void 0, true, {
          fileName: "/Users/Ilan_Kader/Development/dashboard-react-controls/src/lib/components/FormChipCell/FormChipCellView.jsx",
          lineNumber: 159,
          columnNumber: 19
        }, void 0),
        isEditable && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
          "button",
          {
            "data-testid": `${name}-add-chip`,
            className: buttonAddClassNames,
            onClick: (e) => handleAddNewChip(e, fields),
            children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(SvgAdd, {}, void 0, false, {
              fileName: "/Users/Ilan_Kader/Development/dashboard-react-controls/src/lib/components/FormChipCell/FormChipCellView.jsx",
              lineNumber: 187,
              columnNumber: 23
            }, void 0)
          },
          void 0,
          false,
          {
            fileName: "/Users/Ilan_Kader/Development/dashboard-react-controls/src/lib/components/FormChipCell/FormChipCellView.jsx",
            lineNumber: 182,
            columnNumber: 21
          },
          void 0
        )
      ] }, void 0, true, {
        fileName: "/Users/Ilan_Kader/Development/dashboard-react-controls/src/lib/components/FormChipCell/FormChipCellView.jsx",
        lineNumber: 100,
        columnNumber: 17
      }, void 0) }, void 0, false, {
        fileName: "/Users/Ilan_Kader/Development/dashboard-react-controls/src/lib/components/FormChipCell/FormChipCellView.jsx",
        lineNumber: 99,
        columnNumber: 15
      }, void 0);
    } }, void 0, false, {
      fileName: "/Users/Ilan_Kader/Development/dashboard-react-controls/src/lib/components/FormChipCell/FormChipCellView.jsx",
      lineNumber: 88,
      columnNumber: 7
    }, void 0);
  }
);
FormChipCellView.displayName = "FormChipCellView";
FormChipCellView.propTypes = {
  chipOptions: CHIP_OPTIONS,
  chips: PropTypes.object.isRequired,
  editConfig: PropTypes.object.isRequired,
  handleAddNewChip: PropTypes.func.isRequired,
  handleEditChip: PropTypes.func.isRequired,
  handleRemoveChip: PropTypes.func.isRequired,
  handleShowElements: PropTypes.func.isRequired,
  handleToEditMode: PropTypes.func.isRequired,
  isEditable: PropTypes.bool,
  name: PropTypes.string.isRequired,
  setChipsSizes: PropTypes.func.isRequired,
  setEditConfig: PropTypes.func.isRequired,
  shortChips: PropTypes.bool,
  showChips: PropTypes.bool.isRequired,
  showHiddenChips: PropTypes.bool.isRequired,
  validateFields: PropTypes.func.isRequired,
  validationRules: PropTypes.object
};
export {
  FormChipCellView as default
};
//# sourceMappingURL=FormChipCellView.mjs.map
