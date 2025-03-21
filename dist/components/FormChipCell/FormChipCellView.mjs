import { jsx, jsxs, Fragment } from "react/jsx-runtime";
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
    return /* @__PURE__ */ jsx(FieldArray, { name, validate: validateFields, children: ({ fields, meta }) => {
      if (!isEmpty(validationRules) && validationRules.key.every((rule) => rule.name !== uniquenessError.name)) {
        validationRules.key.push(uniquenessError);
      }
      return (isEditable || !isEveryObjectValueEmpty(fields)) && /* @__PURE__ */ jsx("div", { className: "chips-cell", ref: chipsCellRef, children: /* @__PURE__ */ jsxs("div", { className: wrapperClassNames, ref: chipsWrapperRef, children: [
        fields.map((contentItem, index) => {
          var _a;
          const chipData = fields.value[index];
          return index < ((_a = chips.visibleChips) == null ? void 0 : _a.length) && /* @__PURE__ */ jsx("div", { className: "chip-block", children: /* @__PURE__ */ jsx(
            Tooltip,
            {
              hidden: editConfig.isEdit && !chipData.tooltip,
              template: /* @__PURE__ */ jsx(
                TextTooltipTemplate,
                {
                  text: chipData.tooltip || /* @__PURE__ */ jsxs("span", { className: "chip__content", children: [
                    /* @__PURE__ */ jsx("span", { className: "chip__content-item", children: chipData.key }),
                    !chipData.isKeyOnly && /* @__PURE__ */ jsxs(Fragment, { children: [
                      /* @__PURE__ */ jsx("span", { className: "chip__delimiter", children: chipData.delimiter ? chipData.delimiter : ":" }),
                      /* @__PURE__ */ jsx("span", { className: "chip__content-item", children: chipData.value })
                    ] })
                  ] })
                }
              ),
              children: /* @__PURE__ */ jsx(
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
                }
              )
            },
            chipData.id
          ) }, chipData.id);
        }),
        /* @__PURE__ */ jsxs("div", { className: "chip-block", children: [
          chips.hiddenChips.length > 0 && showHiddenChips && /* @__PURE__ */ jsx(
            HiddenChipsBlock,
            {
              chipClassNames,
              chipOptions,
              chips: chips.hiddenChips,
              handleShowElements,
              ref: { hiddenChipsCounterRef, hiddenChipsPopUpRef },
              textOverflowEllipsis: true
            }
          ),
          chips.hiddenChipsNumber && /* @__PURE__ */ jsx(
            "span",
            {
              ref: hiddenChipsCounterRef,
              className: `${chipClassNames} chips_button`,
              onClick: handleShowElements,
              children: chips.hiddenChipsNumber
            }
          )
        ] }),
        isEditable && /* @__PURE__ */ jsx(
          "button",
          {
            "data-testid": `${name}-add-chip`,
            className: buttonAddClassNames,
            onClick: (e) => handleAddNewChip(e, fields),
            children: /* @__PURE__ */ jsx(SvgAdd, {})
          }
        )
      ] }) });
    } });
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
