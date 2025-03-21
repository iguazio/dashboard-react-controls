import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import { FieldArray } from "react-final-form-arrays";
import FormSelect from "../FormSelect/FormSelect.mjs";
import FormInput from "../FormInput/FormInput.mjs";
import Tooltip from "../Tooltip/Tooltip.mjs";
import TextTooltipTemplate from "../TooltipTemplate/TextTooltipTemplate.mjs";
import FormActionButton from "../../elements/FormActionButton/FormActionButton.mjs";
import FormRowActions from "../../elements/FormRowActions/FormRowActions.mjs";
import "../../hooks/index.mjs";
import { INPUT_VALIDATION_RULES } from "../../types.mjs";
import { useFormTable } from "../../hooks/useFormTable.hook.mjs";
const FormKeyValueTable = ({
  actionButtonId = "",
  addNewItemLabel = "Add new item",
  className = "",
  defaultKey = "",
  disabled = false,
  exitEditModeTriggerItem = null,
  fieldsPath,
  formState,
  isKeyEditable = true,
  isKeyRequired = true,
  isValueRequired = true,
  keyHeader = "Key",
  keyLabel = "Key",
  keyOptions = null,
  keyValidationRules = [],
  onExitEditModeCallback = () => {
  },
  valueHeader = "Value",
  valueLabel = "Value",
  valueType = "text",
  valueValidationRules = []
}) => {
  const tableClassNames = classnames(
    "form-table form-key-value-table",
    disabled && "form-table_disabled",
    className
  );
  const {
    addNewRow,
    applyChanges,
    bottomScrollRef,
    deleteRow,
    discardOrDelete,
    editingItem,
    enterEditMode,
    isCurrentRowEditing
  } = useFormTable(formState, exitEditModeTriggerItem, onExitEditModeCallback);
  const uniquenessValidator = (fields, newValue) => {
    return !fields.value.some(({ data: { key } }, index) => {
      return newValue.trim() === key.trim() && index !== editingItem.ui.index;
    });
  };
  const getKeyTextTemplate = (keyValue) => {
    return /* @__PURE__ */ jsx(Tooltip, { template: /* @__PURE__ */ jsx(TextTooltipTemplate, { text: keyValue }), children: keyValue });
  };
  return /* @__PURE__ */ jsxs("div", { className: tableClassNames, "data-testid": fieldsPath, children: [
    /* @__PURE__ */ jsxs("div", { className: "form-table__row form-table__header-row no-hover", children: [
      /* @__PURE__ */ jsx("div", { className: "form-table__cell form-table__cell_1", children: keyHeader }),
      /* @__PURE__ */ jsx("div", { className: "form-table__cell form-table__cell_1", children: valueHeader }),
      /* @__PURE__ */ jsx("div", { className: "form-table__cell form-table__actions-cell" })
    ] }),
    /* @__PURE__ */ jsx(FieldArray, { name: fieldsPath, children: ({ fields }) => {
      var _a;
      return /* @__PURE__ */ jsxs(Fragment, { children: [
        fields.map((rowPath, index) => {
          const tableRowClassNames = classnames(
            "form-table__row",
            isCurrentRowEditing(rowPath) && "form-table__row_active"
          );
          return editingItem && index === editingItem.ui.index && !disabled ? /* @__PURE__ */ jsxs("div", { className: tableRowClassNames, children: [
            /* @__PURE__ */ jsx("div", { className: "form-table__cell form-table__cell_1", children: keyOptions ? /* @__PURE__ */ jsx(
              FormSelect,
              {
                name: `${rowPath}.data.key`,
                density: "normal",
                options: keyOptions
              }
            ) : isKeyEditable || editingItem.ui.isNew ? /* @__PURE__ */ jsx(
              FormInput,
              {
                className: "input_edit",
                placeholder: keyLabel,
                density: "normal",
                name: `${rowPath}.data.key`,
                required: isKeyRequired,
                validationRules: [
                  ...keyValidationRules,
                  {
                    name: "uniqueness",
                    label: "Name must be unique",
                    pattern: (newValue) => uniquenessValidator(fields, newValue)
                  }
                ]
              }
            ) : getKeyTextTemplate(fields.value[index].data.key) }),
            /* @__PURE__ */ jsx("div", { className: "form-table__cell form-table__cell_1", children: /* @__PURE__ */ jsx(
              FormInput,
              {
                className: "input_edit",
                placeholder: valueLabel,
                density: "normal",
                name: `${rowPath}.data.value`,
                type: valueType,
                required: isValueRequired,
                validationRules: valueValidationRules
              }
            ) }),
            /* @__PURE__ */ jsx(
              FormRowActions,
              {
                applyChanges,
                deleteRow,
                discardOrDelete,
                editingItem,
                fieldsPath,
                index
              }
            )
          ] }, index) : /* @__PURE__ */ jsxs(
            "div",
            {
              className: tableRowClassNames,
              onClick: (event) => !disabled && enterEditMode(event, fields, fieldsPath, index),
              children: [
                /* @__PURE__ */ jsx("div", { className: "form-table__cell form-table__cell_1", children: getKeyTextTemplate(fields.value[index].data.key) }),
                /* @__PURE__ */ jsx("div", { className: "form-table__cell form-table__cell_1", children: /* @__PURE__ */ jsx(
                  Tooltip,
                  {
                    template: /* @__PURE__ */ jsx(
                      TextTooltipTemplate,
                      {
                        text: valueType === "password" ? null : fields.value[index].data.value
                      }
                    ),
                    children: valueType === "password" ? "*****" : fields.value[index].data.value
                  }
                ) }),
                /* @__PURE__ */ jsx(
                  FormRowActions,
                  {
                    applyChanges,
                    deleteRow,
                    discardOrDelete,
                    editingItem,
                    fieldsPath,
                    index
                  }
                )
              ]
            },
            index
          );
        }),
        /* @__PURE__ */ jsx(
          FormActionButton,
          {
            ref: bottomScrollRef,
            disabled,
            hidden: (_a = editingItem == null ? void 0 : editingItem.ui) == null ? void 0 : _a.isNew,
            fields,
            id: actionButtonId,
            label: addNewItemLabel,
            onClick: (...addRowArgs) => addNewRow(...addRowArgs, {
              data: {
                key: defaultKey || "",
                value: ""
              }
            }),
            fieldsPath
          }
        )
      ] });
    } })
  ] });
};
FormKeyValueTable.propTypes = {
  actionButtonId: PropTypes.string,
  addNewItemLabel: PropTypes.string,
  className: PropTypes.string,
  defaultKey: PropTypes.string,
  disabled: PropTypes.bool,
  exitEditModeTriggerItem: PropTypes.any,
  fieldsPath: PropTypes.string.isRequired,
  formState: PropTypes.shape({}).isRequired,
  isKeyEditable: PropTypes.bool,
  isKeyRequired: PropTypes.bool,
  isValueRequired: PropTypes.bool,
  keyHeader: PropTypes.string,
  keyLabel: PropTypes.string,
  keyOptions: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired
    })
  ),
  keyValidationRules: INPUT_VALIDATION_RULES,
  onExitEditModeCallback: PropTypes.func,
  valueHeader: PropTypes.string,
  valueLabel: PropTypes.string,
  valueType: PropTypes.string,
  valueValidationRules: INPUT_VALIDATION_RULES
};
export {
  FormKeyValueTable as default
};
//# sourceMappingURL=FormKeyValueTable.mjs.map
