import { jsx as s, jsxs as x } from "react/jsx-runtime";
import { cloneElement as C } from "react";
import t from "prop-types";
import c from "classnames";
import p from "../Tooltip/Tooltip.mjs";
import j from "../ReadOnlyChips/ReadOnlyChips.mjs";
import I from "../../elements/TableLinkCell/TableLinkCell.mjs";
import O from "../../elements/TableTagStatusCell/TableTagStatusCell.mjs";
import g from "../../elements/TableTypeCell/TableTypeCell.mjs";
import d from "../TooltipTemplate/TextTooltipTemplate.mjs";
import { getChipOptions as w } from "../../utils/chips.util.mjs";
import { truncateUid as A } from "../../utils/string.util.mjs";
import L from "../../images/arrow.svg.mjs";
const S = ({
  cellData: e,
  className: n = "",
  firstCell: h = !1,
  item: r,
  link: u = "",
  onClick: o = null,
  selectItem: y = () => {
  },
  selectedItem: b = {},
  showExpandButton: f = !1,
  toggleRow: l = null
}) => {
  const { value: v, label: a, className: N } = r.state ?? {}, i = c(
    "table-body__cell",
    e.className,
    n,
    e.bodyCellClassName,
    o && "link"
  );
  return e.template ? C(e.template, {
    className: n
  }) : u && e.type !== "hidden" ? /* @__PURE__ */ s(
    I,
    {
      className: n,
      cellData: e,
      item: r,
      link: u,
      selectItem: y,
      selectedItem: b,
      showExpandButton: f,
      toggleRow: l
    }
  ) : h && !u ? /* @__PURE__ */ x(
    "td",
    {
      onClick: () => e.value && o && o(e.value),
      className: i,
      children: [
        /* @__PURE__ */ s("div", { className: "data-ellipsis", children: e && /* @__PURE__ */ s(
          p,
          {
            template: /* @__PURE__ */ s(d, { text: e.tooltip || e.value || "" }),
            children: e.value
          }
        ) }),
        r.state && v && a && /* @__PURE__ */ s(p, { className: "status", template: /* @__PURE__ */ s(d, { text: a }), children: /* @__PURE__ */ s("i", { className: N }) }),
        !r.state && r.status && /* @__PURE__ */ s(p, { className: "status", template: /* @__PURE__ */ s(d, { text: r.status }), children: /* @__PURE__ */ s("i", { className: `${r.status[0].toLowerCase()}${r.status.slice(1)}` }) }),
        f && /* @__PURE__ */ s(L, { onClick: (m) => l && l(m, r), className: "expand-arrow" })
      ]
    }
  ) : e.type === "type" ? /* @__PURE__ */ s(g, { className: n, cellData: e }) : e.type === "icons" ? /* @__PURE__ */ s("td", { "data-testid": e.headerId, className: i, children: e.value.map((m, T) => /* @__PURE__ */ s(
    p,
    {
      template: /* @__PURE__ */ s(d, { text: m.tooltip }),
      children: m.icon
    },
    m.tooltip + T
  )) }) : Array.isArray(e.value) ? /* @__PURE__ */ s("td", { "data-testid": e.headerId, className: i, children: /* @__PURE__ */ s(
    j,
    {
      chipOptions: w(e.type),
      labels: e.value,
      shortChips: !0
    }
  ) }) : e.type === "hash" ? /* @__PURE__ */ s("td", { "data-testid": e.headerId, className: i, children: /* @__PURE__ */ s(p, { template: /* @__PURE__ */ s(d, { text: e.value }), children: /* @__PURE__ */ s("span", { children: A(e.value) }) }) }) : e.type === "hidden" ? null : e.type === "component" ? /* @__PURE__ */ s("td", { "data-testid": e.headerId, className: i, children: e.value }) : e.showStatus && e.showTag ? /* @__PURE__ */ s(O, { className: n, cellData: e, item: r, onClick: o }) : /* @__PURE__ */ s(
    "td",
    {
      "data-testid": e == null ? void 0 : e.headerId,
      className: i,
      onClick: () => e.value && o && o(e.value),
      children: /* @__PURE__ */ s(
        p,
        {
          className: "text_small",
          template: /* @__PURE__ */ s(d, { text: e.tooltip || e.value || "" }),
          children: e.value
        }
      )
    }
  );
};
S.propTypes = {
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
  S as default
};
//# sourceMappingURL=TableCell.mjs.map
