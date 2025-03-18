import { j as jsxDevRuntimeExports } from "../../_virtual/jsx-dev-runtime.mjs";
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
    return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Tooltip, { template: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(TextTooltipTemplate, { text: keyValue }, void 0, false, {
      fileName: "/Users/Ilan_Kader/Development/dashboard-react-controls/src/lib/components/FormKeyValueTable/FormKeyValueTable.jsx",
      lineNumber: 77,
      columnNumber: 31
    }, void 0), children: keyValue }, void 0, false, {
      fileName: "/Users/Ilan_Kader/Development/dashboard-react-controls/src/lib/components/FormKeyValueTable/FormKeyValueTable.jsx",
      lineNumber: 77,
      columnNumber: 12
    }, void 0);
  };
  return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: tableClassNames, "data-testid": fieldsPath, children: [
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "form-table__row form-table__header-row no-hover", children: [
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "form-table__cell form-table__cell_1", children: keyHeader }, void 0, false, {
        fileName: "/Users/Ilan_Kader/Development/dashboard-react-controls/src/lib/components/FormKeyValueTable/FormKeyValueTable.jsx",
        lineNumber: 83,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "form-table__cell form-table__cell_1", children: valueHeader }, void 0, false, {
        fileName: "/Users/Ilan_Kader/Development/dashboard-react-controls/src/lib/components/FormKeyValueTable/FormKeyValueTable.jsx",
        lineNumber: 84,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "form-table__cell form-table__actions-cell" }, void 0, false, {
        fileName: "/Users/Ilan_Kader/Development/dashboard-react-controls/src/lib/components/FormKeyValueTable/FormKeyValueTable.jsx",
        lineNumber: 85,
        columnNumber: 9
      }, void 0)
    ] }, void 0, true, {
      fileName: "/Users/Ilan_Kader/Development/dashboard-react-controls/src/lib/components/FormKeyValueTable/FormKeyValueTable.jsx",
      lineNumber: 82,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(FieldArray, { name: fieldsPath, children: ({ fields }) => {
      var _a;
      return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(jsxDevRuntimeExports.Fragment, { children: [
        fields.map((rowPath, index) => {
          const tableRowClassNames = classnames(
            "form-table__row",
            isCurrentRowEditing(rowPath) && "form-table__row_active"
          );
          return editingItem && index === editingItem.ui.index && !disabled ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: tableRowClassNames, children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "form-table__cell form-table__cell_1", children: keyOptions ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
              FormSelect,
              {
                name: `${rowPath}.data.key`,
                density: "normal",
                options: keyOptions
              },
              void 0,
              false,
              {
                fileName: "/Users/Ilan_Kader/Development/dashboard-react-controls/src/lib/components/FormKeyValueTable/FormKeyValueTable.jsx",
                lineNumber: 100,
                columnNumber: 23
              },
              void 0
            ) : isKeyEditable || editingItem.ui.isNew ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
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
              },
              void 0,
              false,
              {
                fileName: "/Users/Ilan_Kader/Development/dashboard-react-controls/src/lib/components/FormKeyValueTable/FormKeyValueTable.jsx",
                lineNumber: 106,
                columnNumber: 23
              },
              void 0
            ) : getKeyTextTemplate(fields.value[index].data.key) }, void 0, false, {
              fileName: "/Users/Ilan_Kader/Development/dashboard-react-controls/src/lib/components/FormKeyValueTable/FormKeyValueTable.jsx",
              lineNumber: 98,
              columnNumber: 19
            }, void 0),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "form-table__cell form-table__cell_1", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
              FormInput,
              {
                className: "input_edit",
                placeholder: valueLabel,
                density: "normal",
                name: `${rowPath}.data.value`,
                type: valueType,
                required: isValueRequired,
                validationRules: valueValidationRules
              },
              void 0,
              false,
              {
                fileName: "/Users/Ilan_Kader/Development/dashboard-react-controls/src/lib/components/FormKeyValueTable/FormKeyValueTable.jsx",
                lineNumber: 126,
                columnNumber: 21
              },
              void 0
            ) }, void 0, false, {
              fileName: "/Users/Ilan_Kader/Development/dashboard-react-controls/src/lib/components/FormKeyValueTable/FormKeyValueTable.jsx",
              lineNumber: 125,
              columnNumber: 19
            }, void 0),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
              FormRowActions,
              {
                applyChanges,
                deleteRow,
                discardOrDelete,
                editingItem,
                fieldsPath,
                index
              },
              void 0,
              false,
              {
                fileName: "/Users/Ilan_Kader/Development/dashboard-react-controls/src/lib/components/FormKeyValueTable/FormKeyValueTable.jsx",
                lineNumber: 136,
                columnNumber: 19
              },
              void 0
            )
          ] }, index, true, {
            fileName: "/Users/Ilan_Kader/Development/dashboard-react-controls/src/lib/components/FormKeyValueTable/FormKeyValueTable.jsx",
            lineNumber: 97,
            columnNumber: 17
          }, void 0) : /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
            "div",
            {
              className: tableRowClassNames,
              onClick: (event) => !disabled && enterEditMode(event, fields, fieldsPath, index),
              children: [
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "form-table__cell form-table__cell_1", children: getKeyTextTemplate(fields.value[index].data.key) }, void 0, false, {
                  fileName: "/Users/Ilan_Kader/Development/dashboard-react-controls/src/lib/components/FormKeyValueTable/FormKeyValueTable.jsx",
                  lineNumber: 151,
                  columnNumber: 19
                }, void 0),
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "form-table__cell form-table__cell_1", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
                  Tooltip,
                  {
                    template: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
                      TextTooltipTemplate,
                      {
                        text: valueType === "password" ? null : fields.value[index].data.value
                      },
                      void 0,
                      false,
                      {
                        fileName: "/Users/Ilan_Kader/Development/dashboard-react-controls/src/lib/components/FormKeyValueTable/FormKeyValueTable.jsx",
                        lineNumber: 157,
                        columnNumber: 25
                      },
                      void 0
                    ),
                    children: valueType === "password" ? "*****" : fields.value[index].data.value
                  },
                  void 0,
                  false,
                  {
                    fileName: "/Users/Ilan_Kader/Development/dashboard-react-controls/src/lib/components/FormKeyValueTable/FormKeyValueTable.jsx",
                    lineNumber: 155,
                    columnNumber: 21
                  },
                  void 0
                ) }, void 0, false, {
                  fileName: "/Users/Ilan_Kader/Development/dashboard-react-controls/src/lib/components/FormKeyValueTable/FormKeyValueTable.jsx",
                  lineNumber: 154,
                  columnNumber: 19
                }, void 0),
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
                  FormRowActions,
                  {
                    applyChanges,
                    deleteRow,
                    discardOrDelete,
                    editingItem,
                    fieldsPath,
                    index
                  },
                  void 0,
                  false,
                  {
                    fileName: "/Users/Ilan_Kader/Development/dashboard-react-controls/src/lib/components/FormKeyValueTable/FormKeyValueTable.jsx",
                    lineNumber: 165,
                    columnNumber: 19
                  },
                  void 0
                )
              ]
            },
            index,
            true,
            {
              fileName: "/Users/Ilan_Kader/Development/dashboard-react-controls/src/lib/components/FormKeyValueTable/FormKeyValueTable.jsx",
              lineNumber: 146,
              columnNumber: 17
            },
            void 0
          );
        }),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
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
          },
          void 0,
          false,
          {
            fileName: "/Users/Ilan_Kader/Development/dashboard-react-controls/src/lib/components/FormKeyValueTable/FormKeyValueTable.jsx",
            lineNumber: 177,
            columnNumber: 13
          },
          void 0
        )
      ] }, void 0, true, {
        fileName: "/Users/Ilan_Kader/Development/dashboard-react-controls/src/lib/components/FormKeyValueTable/FormKeyValueTable.jsx",
        lineNumber: 89,
        columnNumber: 11
      }, void 0);
    } }, void 0, false, {
      fileName: "/Users/Ilan_Kader/Development/dashboard-react-controls/src/lib/components/FormKeyValueTable/FormKeyValueTable.jsx",
      lineNumber: 87,
      columnNumber: 7
    }, void 0)
  ] }, void 0, true, {
    fileName: "/Users/Ilan_Kader/Development/dashboard-react-controls/src/lib/components/FormKeyValueTable/FormKeyValueTable.jsx",
    lineNumber: 81,
    columnNumber: 5
  }, void 0);
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
