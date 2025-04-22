import { jsx as e, jsxs as s, Fragment as u } from "react/jsx-runtime";
import "react";
import l from "prop-types";
import c from "../../components/RoundedIcon/RoundedIcon.mjs";
import { FORM_TABLE_EDITING_ITEM as v } from "../../types.mjs";
import C from "../../images/close.svg.mjs";
import D from "../../images/edit.svg.mjs";
import m from "../../images/delete.svg.mjs";
import k from "../../images/checkmark2.svg.mjs";
const x = ({
  applyChanges: h,
  deleteButtonIsHidden: _ = !1,
  deleteRow: b,
  disabled: t = !1,
  discardOrDelete: R,
  editingItem: o = null,
  fieldsPath: p,
  hidden: T = !1,
  index: i
}) => {
  var a, n, d, f;
  return T ? /* @__PURE__ */ e("div", { className: "form-table__cell form-table__actions-cell" }) : /* @__PURE__ */ s("div", { className: "form-table__cell form-table__actions-cell", children: [
    ((a = o == null ? void 0 : o.ui) == null ? void 0 : a.index) === i && /* @__PURE__ */ s(u, { children: [
      /* @__PURE__ */ e(
        c,
        {
          id: "apply-btn",
          onClick: (r) => h(r, i),
          tooltipText: "Apply",
          disabled: t,
          children: /* @__PURE__ */ e(k, {})
        }
      ),
      /* @__PURE__ */ e(
        c,
        {
          id: "delete-discard-btn",
          onClick: (r) => R(r, p, i),
          tooltipText: (n = o.ui) != null && n.isNew ? "Delete" : "Discard changes",
          disabled: t,
          children: (d = o.ui) != null && d.isNew ? /* @__PURE__ */ e(m, {}) : /* @__PURE__ */ e(C, {})
        }
      )
    ] }),
    (!o || ((f = o == null ? void 0 : o.ui) == null ? void 0 : f.index) !== i) && /* @__PURE__ */ s(u, { children: [
      /* @__PURE__ */ e(
        c,
        {
          id: "edit-btn",
          onClick: (r) => {
            r.preventDefault();
          },
          tooltipText: "Edit",
          disabled: t,
          children: /* @__PURE__ */ e(D, {})
        }
      ),
      !_ && /* @__PURE__ */ e(
        c,
        {
          id: "delete-btn",
          onClick: (r) => {
            b(r, p, i);
          },
          tooltipText: "Delete",
          disabled: t,
          children: /* @__PURE__ */ e(m, {})
        }
      )
    ] })
  ] });
};
x.propTypes = {
  applyChanges: l.func.isRequired,
  deleteButtonIsHidden: l.bool,
  deleteRow: l.func.isRequired,
  disabled: l.bool,
  discardOrDelete: l.func.isRequired,
  editingItem: v,
  fieldsPath: l.string.isRequired,
  hidden: l.bool,
  index: l.number.isRequired
};
export {
  x as default
};
//# sourceMappingURL=FormRowActions.mjs.map
