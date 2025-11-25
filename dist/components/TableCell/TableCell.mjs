import { jsx as s, jsxs as C } from "react/jsx-runtime";
import { cloneElement as T } from "react";
import t from "prop-types";
import c from "classnames";
import i from "../Tooltip/Tooltip.mjs";
import j from "../ReadOnlyChips/ReadOnlyChips.mjs";
import I from "../../elements/TableLinkCell/TableLinkCell.mjs";
import O from "../../elements/TableTypeCell/TableTypeCell.mjs";
import p from "../TooltipTemplate/TextTooltipTemplate.mjs";
import { getChipOptions as A } from "../../utils/chips.util.mjs";
import { truncateUid as L } from "../../utils/string.util.mjs";
import _ from "../../images/arrow.svg.mjs";
const g = ({
  cellData: e,
  className: m = "",
  firstCell: h = !1,
  item: r,
  link: l = "",
  onClick: d = null,
  selectItem: y = () => {
  },
  selectedItem: b = {},
  showExpandButton: a = !1,
  toggleRow: u = null
}) => {
  const { value: N, label: f, className: v } = r.state ?? {}, o = c(
    "table-body__cell",
    e.className,
    m,
    e.bodyCellClassName,
    d && "link"
  );
  return e.template ? T(e.template, {
    className: m
  }) : l && e.type !== "hidden" ? /* @__PURE__ */ s(
    I,
    {
      className: m,
      cellData: e,
      item: r,
      link: l,
      selectItem: y,
      selectedItem: b,
      showExpandButton: a,
      toggleRow: u
    }
  ) : h && !l ? /* @__PURE__ */ C(
    "td",
    {
      onClick: () => e.value && d && d(e.value),
      className: o,
      children: [
        /* @__PURE__ */ s("div", { className: "data-ellipsis", children: e && /* @__PURE__ */ s(
          i,
          {
            template: /* @__PURE__ */ s(p, { text: e.tooltip || e.value || "" }),
            children: e.value
          }
        ) }),
        r.state && N && f && /* @__PURE__ */ s(i, { className: "status", template: /* @__PURE__ */ s(p, { text: f }), children: /* @__PURE__ */ s("i", { className: v }) }),
        !r.state && r.status && /* @__PURE__ */ s(i, { className: "status", template: /* @__PURE__ */ s(p, { text: r.status }), children: /* @__PURE__ */ s("i", { className: `${r.status[0].toLowerCase()}${r.status.slice(1)}` }) }),
        a && /* @__PURE__ */ s(_, { onClick: (n) => u && u(n, r), className: "expand-arrow" })
      ]
    }
  ) : e.type === "type" ? /* @__PURE__ */ s(O, { className: m, cellData: e }) : e.type === "icons" ? /* @__PURE__ */ s("td", { "data-testid": e.headerId, className: o, children: e.value.map((n, x) => /* @__PURE__ */ s(
    i,
    {
      template: /* @__PURE__ */ s(p, { text: n.tooltip }),
      children: n.icon
    },
    n.tooltip + x
  )) }) : Array.isArray(e.value) ? /* @__PURE__ */ s("td", { "data-testid": e.headerId, className: o, children: /* @__PURE__ */ s(
    j,
    {
      chipOptions: A(e.type),
      labels: e.value,
      shortChips: !0
    }
  ) }) : e.type === "hash" ? /* @__PURE__ */ s("td", { "data-testid": e.headerId, className: o, children: /* @__PURE__ */ s(i, { template: /* @__PURE__ */ s(p, { text: e.value }), children: /* @__PURE__ */ s("span", { children: L(e.value) }) }) }) : e.type === "hidden" ? null : e.type === "component" ? /* @__PURE__ */ s("td", { "data-testid": e.headerId, className: o, children: e.value }) : /* @__PURE__ */ s(
    "td",
    {
      "data-testid": e == null ? void 0 : e.headerId,
      className: o,
      onClick: () => e.value && d && d(e.value),
      children: /* @__PURE__ */ s(
        i,
        {
          className: "text_small",
          template: /* @__PURE__ */ s(p, { text: e.tooltip || e.value || "" }),
          children: e.value
        }
      )
    }
  );
};
g.propTypes = {
  cellData: t.object.isRequired,
  className: t.string,
  firstCell: t.bool,
  item: t.oneOfType([t.object, t.bool]),
  link: t.oneOfType([t.string, t.bool]),
  onClick: t.func,
  selectItem: t.func,
  selectedItem: t.object,
  showExpandButton: t.bool,
  toggleRow: t.func
};
export {
  g as default
};
//# sourceMappingURL=TableCell.mjs.map
