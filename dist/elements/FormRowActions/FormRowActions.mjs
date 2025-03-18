import { j as jsxDevRuntimeExports } from "../../_virtual/jsx-dev-runtime.mjs";
import "react";
import PropTypes from "prop-types";
import RoundedIcon from "../../components/RoundedIcon/RoundedIcon.mjs";
import { FORM_TABLE_EDITING_ITEM } from "../../types.mjs";
import SvgClose from "../../images/close.svg.mjs";
import SvgEdit from "../../images/edit.svg.mjs";
import SvgDelete from "../../images/delete.svg.mjs";
import SvgCheckmark2 from "../../images/checkmark2.svg.mjs";
const FormRowActions = ({
  applyChanges,
  deleteButtonIsHidden = false,
  deleteRow,
  disabled = false,
  discardOrDelete,
  editingItem = null,
  fieldsPath,
  hidden = false,
  index
}) => {
  var _a, _b, _c, _d;
  return hidden ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "form-table__cell form-table__actions-cell" }, void 0, false, {
    fileName: "/Users/Ilan_Kader/Development/dashboard-react-controls/src/lib/elements/FormRowActions/FormRowActions.jsx",
    lineNumber: 44,
    columnNumber: 5
  }, void 0) : /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "form-table__cell form-table__actions-cell", children: [
    ((_a = editingItem == null ? void 0 : editingItem.ui) == null ? void 0 : _a.index) === index && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(jsxDevRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
        RoundedIcon,
        {
          id: "apply-btn",
          onClick: (event) => applyChanges(event, index),
          tooltipText: "Apply",
          disabled,
          children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(SvgCheckmark2, {}, void 0, false, {
            fileName: "/Users/Ilan_Kader/Development/dashboard-react-controls/src/lib/elements/FormRowActions/FormRowActions.jsx",
            lineNumber: 55,
            columnNumber: 13
          }, void 0)
        },
        void 0,
        false,
        {
          fileName: "/Users/Ilan_Kader/Development/dashboard-react-controls/src/lib/elements/FormRowActions/FormRowActions.jsx",
          lineNumber: 49,
          columnNumber: 11
        },
        void 0
      ),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
        RoundedIcon,
        {
          id: "delete-discard-btn",
          onClick: (event) => discardOrDelete(event, fieldsPath, index),
          tooltipText: ((_b = editingItem.ui) == null ? void 0 : _b.isNew) ? "Delete" : "Discard changes",
          disabled,
          children: ((_c = editingItem.ui) == null ? void 0 : _c.isNew) ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(SvgDelete, {}, void 0, false, {
            fileName: "/Users/Ilan_Kader/Development/dashboard-react-controls/src/lib/elements/FormRowActions/FormRowActions.jsx",
            lineNumber: 63,
            columnNumber: 38
          }, void 0) : /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(SvgClose, {}, void 0, false, {
            fileName: "/Users/Ilan_Kader/Development/dashboard-react-controls/src/lib/elements/FormRowActions/FormRowActions.jsx",
            lineNumber: 63,
            columnNumber: 51
          }, void 0)
        },
        void 0,
        false,
        {
          fileName: "/Users/Ilan_Kader/Development/dashboard-react-controls/src/lib/elements/FormRowActions/FormRowActions.jsx",
          lineNumber: 57,
          columnNumber: 11
        },
        void 0
      )
    ] }, void 0, true, {
      fileName: "/Users/Ilan_Kader/Development/dashboard-react-controls/src/lib/elements/FormRowActions/FormRowActions.jsx",
      lineNumber: 48,
      columnNumber: 9
    }, void 0),
    (!editingItem || ((_d = editingItem == null ? void 0 : editingItem.ui) == null ? void 0 : _d.index) !== index) && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(jsxDevRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
        RoundedIcon,
        {
          id: "edit-btn",
          onClick: (event) => {
            event.preventDefault();
          },
          tooltipText: "Edit",
          disabled,
          children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(SvgEdit, {}, void 0, false, {
            fileName: "/Users/Ilan_Kader/Development/dashboard-react-controls/src/lib/elements/FormRowActions/FormRowActions.jsx",
            lineNumber: 77,
            columnNumber: 13
          }, void 0)
        },
        void 0,
        false,
        {
          fileName: "/Users/Ilan_Kader/Development/dashboard-react-controls/src/lib/elements/FormRowActions/FormRowActions.jsx",
          lineNumber: 69,
          columnNumber: 11
        },
        void 0
      ),
      !deleteButtonIsHidden && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
        RoundedIcon,
        {
          id: "delete-btn",
          onClick: (event) => {
            deleteRow(event, fieldsPath, index);
          },
          tooltipText: "Delete",
          disabled,
          children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(SvgDelete, {}, void 0, false, {
            fileName: "/Users/Ilan_Kader/Development/dashboard-react-controls/src/lib/elements/FormRowActions/FormRowActions.jsx",
            lineNumber: 89,
            columnNumber: 15
          }, void 0)
        },
        void 0,
        false,
        {
          fileName: "/Users/Ilan_Kader/Development/dashboard-react-controls/src/lib/elements/FormRowActions/FormRowActions.jsx",
          lineNumber: 81,
          columnNumber: 13
        },
        void 0
      )
    ] }, void 0, true, {
      fileName: "/Users/Ilan_Kader/Development/dashboard-react-controls/src/lib/elements/FormRowActions/FormRowActions.jsx",
      lineNumber: 68,
      columnNumber: 9
    }, void 0)
  ] }, void 0, true, {
    fileName: "/Users/Ilan_Kader/Development/dashboard-react-controls/src/lib/elements/FormRowActions/FormRowActions.jsx",
    lineNumber: 46,
    columnNumber: 5
  }, void 0);
};
FormRowActions.propTypes = {
  applyChanges: PropTypes.func.isRequired,
  deleteButtonIsHidden: PropTypes.bool,
  deleteRow: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  discardOrDelete: PropTypes.func.isRequired,
  editingItem: FORM_TABLE_EDITING_ITEM,
  fieldsPath: PropTypes.string.isRequired,
  hidden: PropTypes.bool,
  index: PropTypes.number.isRequired
};
export {
  FormRowActions as default
};
//# sourceMappingURL=FormRowActions.mjs.map
