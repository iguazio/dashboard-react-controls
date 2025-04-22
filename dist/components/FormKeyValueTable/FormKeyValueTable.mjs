import { jsx as a, jsxs as m, Fragment as G } from "react/jsx-runtime";
import "react";
import e from "prop-types";
import y from "classnames";
import { FieldArray as J } from "react-final-form-arrays";
import Q from "../FormSelect/FormSelect.mjs";
import N from "../FormInput/FormInput.mjs";
import g from "../Tooltip/Tooltip.mjs";
import R from "../TooltipTemplate/TextTooltipTemplate.mjs";
import W from "../../elements/FormActionButton/FormActionButton.mjs";
import h from "../../elements/FormRowActions/FormRowActions.mjs";
import "../../hooks/index.mjs";
import { INPUT_VALIDATION_RULES as w } from "../../types.mjs";
import { useFormTable as X } from "../../hooks/useFormTable.hook.mjs";
const Y = ({
  actionButtonId: T = "",
  addNewItemLabel: k = "Add new item",
  className: q = "",
  defaultKey: F = "",
  disabled: s = !1,
  exitEditModeTriggerItem: C = null,
  fieldsPath: i,
  formState: E,
  isKeyEditable: K = !0,
  isKeyRequired: V = !0,
  isValueRequired: A = !0,
  keyHeader: I = "Key",
  keyLabel: L = "Key",
  keyOptions: u = null,
  keyValidationRules: S = [],
  onExitEditModeCallback: x = () => {
  },
  valueHeader: M = "Value",
  valueLabel: O = "Value",
  valueType: d = "text",
  valueValidationRules: $ = []
}) => {
  const j = y(
    "form-table form-key-value-table",
    s && "form-table_disabled",
    q
  ), {
    addNewRow: B,
    applyChanges: _,
    bottomScrollRef: D,
    deleteRow: p,
    discardOrDelete: b,
    editingItem: t,
    enterEditMode: H,
    isCurrentRowEditing: U
  } = X(E, C, x), z = (l, n) => !l.value.some(({ data: { key: o } }, r) => n.trim() === o.trim() && r !== t.ui.index), f = (l) => /* @__PURE__ */ a(g, { template: /* @__PURE__ */ a(R, { text: l }), children: l });
  return /* @__PURE__ */ m("div", { className: j, "data-testid": i, children: [
    /* @__PURE__ */ m("div", { className: "form-table__row form-table__header-row no-hover", children: [
      /* @__PURE__ */ a("div", { className: "form-table__cell form-table__cell_1", children: I }),
      /* @__PURE__ */ a("div", { className: "form-table__cell form-table__cell_1", children: M }),
      /* @__PURE__ */ a("div", { className: "form-table__cell form-table__actions-cell" })
    ] }),
    /* @__PURE__ */ a(J, { name: i, children: ({ fields: l }) => {
      var n;
      return /* @__PURE__ */ m(G, { children: [
        l.map((o, r) => {
          const v = y(
            "form-table__row",
            U(o) && "form-table__row_active"
          );
          return t && r === t.ui.index && !s ? /* @__PURE__ */ m("div", { className: v, children: [
            /* @__PURE__ */ a("div", { className: "form-table__cell form-table__cell_1", children: u ? /* @__PURE__ */ a(
              Q,
              {
                name: `${o}.data.key`,
                density: "normal",
                options: u
              }
            ) : K || t.ui.isNew ? /* @__PURE__ */ a(
              N,
              {
                className: "input_edit",
                placeholder: L,
                density: "normal",
                name: `${o}.data.key`,
                required: V,
                validationRules: [
                  ...S,
                  {
                    name: "uniqueness",
                    label: "Name must be unique",
                    pattern: (c) => z(l, c)
                  }
                ]
              }
            ) : f(l.value[r].data.key) }),
            /* @__PURE__ */ a("div", { className: "form-table__cell form-table__cell_1", children: /* @__PURE__ */ a(
              N,
              {
                className: "input_edit",
                placeholder: O,
                density: "normal",
                name: `${o}.data.value`,
                type: d,
                required: A,
                validationRules: $
              }
            ) }),
            /* @__PURE__ */ a(
              h,
              {
                applyChanges: _,
                deleteRow: p,
                discardOrDelete: b,
                editingItem: t,
                fieldsPath: i,
                index: r
              }
            )
          ] }, r) : /* @__PURE__ */ m(
            "div",
            {
              className: v,
              onClick: (c) => !s && H(c, l, i, r),
              children: [
                /* @__PURE__ */ a("div", { className: "form-table__cell form-table__cell_1", children: f(l.value[r].data.key) }),
                /* @__PURE__ */ a("div", { className: "form-table__cell form-table__cell_1", children: /* @__PURE__ */ a(
                  g,
                  {
                    template: /* @__PURE__ */ a(
                      R,
                      {
                        text: d === "password" ? null : l.value[r].data.value
                      }
                    ),
                    children: d === "password" ? "*****" : l.value[r].data.value
                  }
                ) }),
                /* @__PURE__ */ a(
                  h,
                  {
                    applyChanges: _,
                    deleteRow: p,
                    discardOrDelete: b,
                    editingItem: t,
                    fieldsPath: i,
                    index: r
                  }
                )
              ]
            },
            r
          );
        }),
        /* @__PURE__ */ a(
          W,
          {
            ref: D,
            disabled: s,
            hidden: (n = t == null ? void 0 : t.ui) == null ? void 0 : n.isNew,
            fields: l,
            id: T,
            label: k,
            onClick: (...o) => B(...o, {
              data: {
                key: F || "",
                value: ""
              }
            }),
            fieldsPath: i
          }
        )
      ] });
    } })
  ] });
};
Y.propTypes = {
  actionButtonId: e.string,
  addNewItemLabel: e.string,
  className: e.string,
  defaultKey: e.string,
  disabled: e.bool,
  exitEditModeTriggerItem: e.any,
  fieldsPath: e.string.isRequired,
  formState: e.shape({}).isRequired,
  isKeyEditable: e.bool,
  isKeyRequired: e.bool,
  isValueRequired: e.bool,
  keyHeader: e.string,
  keyLabel: e.string,
  keyOptions: e.arrayOf(
    e.shape({
      label: e.string.isRequired,
      id: e.string.isRequired
    })
  ),
  keyValidationRules: w,
  onExitEditModeCallback: e.func,
  valueHeader: e.string,
  valueLabel: e.string,
  valueType: e.string,
  valueValidationRules: w
};
export {
  Y as default
};
//# sourceMappingURL=FormKeyValueTable.mjs.map
