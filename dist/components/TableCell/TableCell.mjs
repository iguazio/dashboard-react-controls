import { jsx as t, jsxs as C } from "react/jsx-runtime";
import { cloneElement as T } from "react";
import s from "prop-types";
import c from "classnames";
import j from "../ChipCell/ChipCell.mjs";
import I from "../../elements/TableLinkCell/TableLinkCell.mjs";
import O from "../../elements/TableTypeCell/TableTypeCell.mjs";
import i from "../TooltipTemplate/TextTooltipTemplate.mjs";
import p from "../Tooltip/Tooltip.mjs";
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
  selectedItem: N = {},
  showExpandButton: a = !1,
  toggleRow: u = null
}) => {
  const { value: b, label: f, className: v } = r.state ?? {}, o = c(
    "table-body__cell",
    e.className,
    m,
    e.bodyCellClassName,
    d && "link"
  );
  return e.template ? T(e.template, {
    className: m
  }) : l && e.type !== "hidden" ? /* @__PURE__ */ t(
    I,
    {
      className: m,
      cellData: e,
      item: r,
      link: l,
      selectItem: y,
      selectedItem: N,
      showExpandButton: a,
      toggleRow: u
    }
  ) : h && !l ? /* @__PURE__ */ C(
    "td",
    {
      onClick: () => e.value && d && d(e.value),
      className: o,
      children: [
        /* @__PURE__ */ t("div", { className: "data-ellipsis", children: e && /* @__PURE__ */ t(
          p,
          {
            template: /* @__PURE__ */ t(i, { text: e.tooltip || e.value || "" }),
            children: e.value
          }
        ) }),
        r.state && b && f && /* @__PURE__ */ t(p, { className: "status", template: /* @__PURE__ */ t(i, { text: f }), children: /* @__PURE__ */ t("i", { className: v }) }),
        !r.state && r.status && /* @__PURE__ */ t(p, { className: "status", template: /* @__PURE__ */ t(i, { text: r.status }), children: /* @__PURE__ */ t("i", { className: `${r.status[0].toLowerCase()}${r.status.slice(1)}` }) }),
        a && /* @__PURE__ */ t(_, { onClick: (n) => u && u(n, r), className: "expand-arrow" })
      ]
    }
  ) : e.type === "type" ? /* @__PURE__ */ t(O, { className: m, cellData: e }) : e.type === "icons" ? /* @__PURE__ */ t("td", { "data-testid": e.headerId, className: o, children: e.value.map((n, x) => /* @__PURE__ */ t(
    p,
    {
      template: /* @__PURE__ */ t(i, { text: n.tooltip }),
      children: n.icon
    },
    n.tooltip + x
  )) }) : Array.isArray(e.value) ? /* @__PURE__ */ t("td", { "data-testid": e.headerId, className: o, children: /* @__PURE__ */ t(j, { chipOptions: A(e.type), elements: e.value, tooltip: !0 }) }) : e.type === "hash" ? /* @__PURE__ */ t("td", { "data-testid": e.headerId, className: o, children: /* @__PURE__ */ t(p, { template: /* @__PURE__ */ t(i, { text: e.value }), children: /* @__PURE__ */ t("span", { children: L(e.value) }) }) }) : e.type === "hidden" ? null : e.type === "component" ? /* @__PURE__ */ t("td", { "data-testid": e.headerId, className: o, children: e.value }) : /* @__PURE__ */ t(
    "td",
    {
      "data-testid": e == null ? void 0 : e.headerId,
      className: o,
      onClick: () => e.value && d && d(e.value),
      children: /* @__PURE__ */ t(
        p,
        {
          className: "text_small",
          template: /* @__PURE__ */ t(i, { text: e.tooltip || e.value || "" }),
          children: e.value
        }
      )
    }
  );
};
g.propTypes = {
  cellData: s.object.isRequired,
  className: s.string,
  firstCell: s.bool,
  item: s.oneOfType([s.object, s.bool]),
  link: s.oneOfType([s.string, s.bool]),
  onClick: s.func,
  selectItem: s.func,
  selectedItem: s.object,
  showExpandButton: s.bool,
  toggleRow: s.func
};
export {
  g as default
};
//# sourceMappingURL=TableCell.mjs.map
