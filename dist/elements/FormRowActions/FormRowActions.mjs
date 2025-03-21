import { jsx, jsxs, Fragment } from "react/jsx-runtime";
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
  return hidden ? /* @__PURE__ */ jsx("div", { className: "form-table__cell form-table__actions-cell" }) : /* @__PURE__ */ jsxs("div", { className: "form-table__cell form-table__actions-cell", children: [
    ((_a = editingItem == null ? void 0 : editingItem.ui) == null ? void 0 : _a.index) === index && /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx(
        RoundedIcon,
        {
          id: "apply-btn",
          onClick: (event) => applyChanges(event, index),
          tooltipText: "Apply",
          disabled,
          children: /* @__PURE__ */ jsx(SvgCheckmark2, {})
        }
      ),
      /* @__PURE__ */ jsx(
        RoundedIcon,
        {
          id: "delete-discard-btn",
          onClick: (event) => discardOrDelete(event, fieldsPath, index),
          tooltipText: ((_b = editingItem.ui) == null ? void 0 : _b.isNew) ? "Delete" : "Discard changes",
          disabled,
          children: ((_c = editingItem.ui) == null ? void 0 : _c.isNew) ? /* @__PURE__ */ jsx(SvgDelete, {}) : /* @__PURE__ */ jsx(SvgClose, {})
        }
      )
    ] }),
    (!editingItem || ((_d = editingItem == null ? void 0 : editingItem.ui) == null ? void 0 : _d.index) !== index) && /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx(
        RoundedIcon,
        {
          id: "edit-btn",
          onClick: (event) => {
            event.preventDefault();
          },
          tooltipText: "Edit",
          disabled,
          children: /* @__PURE__ */ jsx(SvgEdit, {})
        }
      ),
      !deleteButtonIsHidden && /* @__PURE__ */ jsx(
        RoundedIcon,
        {
          id: "delete-btn",
          onClick: (event) => {
            deleteRow(event, fieldsPath, index);
          },
          tooltipText: "Delete",
          disabled,
          children: /* @__PURE__ */ jsx(SvgDelete, {})
        }
      )
    ] })
  ] });
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
