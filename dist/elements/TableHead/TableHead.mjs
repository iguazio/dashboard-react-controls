import { jsx as t, jsxs as r } from "react/jsx-runtime";
import { forwardRef as T } from "react";
import c from "prop-types";
import N from "classnames";
import { isEmpty as b } from "lodash";
import _ from "../../components/Tip/Tip.mjs";
import y from "../../components/Tooltip/Tooltip.mjs";
import C from "../../components/TooltipTemplate/TextTooltipTemplate.mjs";
import { SORT_PROPS as R } from "../../types.mjs";
let d = ({ content: s, hideActionsMenu: h = !1, mainRowItemsCount: o, selectedItem: p, sortProps: e = null }, f) => {
  const u = (m, a, i, l, n) => N(
    "table-header__cell",
    i,
    l,
    a && "sortable-header-cell",
    a && (e == null ? void 0 : e.selectedColumnName) === m && "sortable-header-cell_active",
    !b(p) && n >= o && "table-body__cell_hidden"
  );
  return /* @__PURE__ */ t("thead", { className: "table-header", children: /* @__PURE__ */ r("tr", { className: "table-row table-header-row", ref: f, children: [
    s.map(({ headerLabel: m, headerId: a, isSortable: i, ...l }, n) => l.type !== "hidden" && !l.hidden && !l.headerIsHidden ? /* @__PURE__ */ r(
      "th",
      {
        "data-testid": a,
        className: u(
          a,
          i,
          l.className,
          l.headerCellClassName,
          n
        ),
        onClick: i ? () => e == null ? void 0 : e.sortTable(a) : null,
        children: [
          /* @__PURE__ */ t(y, { template: /* @__PURE__ */ t(C, { text: m }), children: /* @__PURE__ */ r("label", { className: i ? "sortable-header-label" : "", children: [
            /* @__PURE__ */ t("span", { className: "data-ellipsis", children: m }),
            i && (e == null ? void 0 : e.getSortingIcon(a))
          ] }) }),
          l.tip && /* @__PURE__ */ t(_, { text: l.tip })
        ]
      },
      a
    ) : null),
    !h && /* @__PURE__ */ t("th", { className: "table-header__cell table-cell-icon" })
  ] }) });
};
d = T(d);
d.displayName = "TableHead";
d.propTypes = {
  content: c.array.isRequired,
  hideActionsMenu: c.bool,
  mainRowItemsCount: c.number.isRequired,
  selectedItem: c.object.isRequired,
  sortProps: R
};
const A = d;
export {
  A as default
};
//# sourceMappingURL=TableHead.mjs.map
