import { jsx as t, jsxs as v } from "react/jsx-runtime";
import { cloneElement as x } from "react";
import s from "prop-types";
import c from "classnames";
import I from "../ChipCell/ChipCell.mjs";
import _ from "../CopyToClipboard/CopyToClipboard.mjs";
import O from "../../elements/TableLinkCell/TableLinkCell.mjs";
import j from "../../elements/TableTypeCell/TableTypeCell.mjs";
import i from "../TooltipTemplate/TextTooltipTemplate.mjs";
import d from "../Tooltip/Tooltip.mjs";
import { BUTTON_COPY_URI_CELL_TYPE as L } from "../../constants.mjs";
import { getChipOptions as U } from "../../utils/chips.util.mjs";
import { truncateUid as A } from "../../utils/string.util.mjs";
import E from "../../images/arrow.svg.mjs";
const P = ({
  cellData: e,
  className: m = "",
  firstCell: h = !1,
  item: r,
  link: l = "",
  onClick: p = null,
  selectItem: y = () => {
  },
  selectedItem: b = {},
  showExpandButton: a = !1,
  toggleRow: u = null
}) => {
  const { value: C, label: f, className: N } = r.state ?? {}, o = c(
    "table-body__cell",
    e.className,
    m,
    e.bodyCellClassName,
    p && "link"
  );
  return e.template ? x(e.template, {
    className: m
  }) : l && e.type !== "hidden" ? /* @__PURE__ */ t(
    O,
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
  ) : h && !l ? /* @__PURE__ */ v(
    "td",
    {
      onClick: () => e.value && p && p(e.value),
      className: o,
      children: [
        /* @__PURE__ */ t("div", { className: "data-ellipsis", children: e && /* @__PURE__ */ t(
          d,
          {
            template: /* @__PURE__ */ t(i, { text: e.tooltip || e.value || "" }),
            children: e.value
          }
        ) }),
        r.state && C && f && /* @__PURE__ */ t(d, { className: "status", template: /* @__PURE__ */ t(i, { text: f }), children: /* @__PURE__ */ t("i", { className: N }) }),
        !r.state && r.status && /* @__PURE__ */ t(d, { className: "status", template: /* @__PURE__ */ t(i, { text: r.status }), children: /* @__PURE__ */ t("i", { className: `${r.status[0].toLowerCase()}${r.status.slice(1)}` }) }),
        a && /* @__PURE__ */ t(E, { onClick: (n) => u && u(n, r), className: "expand-arrow" })
      ]
    }
  ) : e.type === "type" ? /* @__PURE__ */ t(j, { className: m, cellData: e }) : e.type === "icons" ? /* @__PURE__ */ t("td", { "data-testid": e.headerId, className: o, children: e.value.map((n, T) => /* @__PURE__ */ t(
    d,
    {
      template: /* @__PURE__ */ t(i, { text: n.tooltip }),
      children: n.icon
    },
    n.tooltip + T
  )) }) : Array.isArray(e.value) ? /* @__PURE__ */ t("td", { "data-testid": e.headerId, className: o, children: /* @__PURE__ */ t(I, { chipOptions: U(e.type), elements: e.value, tooltip: !0 }) }) : e.type === L ? /* @__PURE__ */ t("td", { "data-testid": e.headerId, className: o, children: /* @__PURE__ */ t(
    _,
    {
      tooltipText: "Copy URI",
      textToCopy: e.actionHandler(r),
      disabled: e.disabled
    }
  ) }) : e.type === "hash" ? /* @__PURE__ */ t("td", { "data-testid": e.headerId, className: o, children: /* @__PURE__ */ t(d, { template: /* @__PURE__ */ t(i, { text: e.value }), children: /* @__PURE__ */ t("span", { children: A(e.value) }) }) }) : e.type === "hidden" ? null : e.type === "component" ? /* @__PURE__ */ t("td", { "data-testid": e.headerId, className: o, children: e.value }) : /* @__PURE__ */ t(
    "td",
    {
      "data-testid": e == null ? void 0 : e.headerId,
      className: o,
      onClick: () => e.value && p && p(e.value),
      children: /* @__PURE__ */ t(
        d,
        {
          className: "text_small",
          template: /* @__PURE__ */ t(i, { text: e.tooltip || e.value || "" }),
          children: e.value
        }
      )
    }
  );
};
P.propTypes = {
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
  P as default
};
//# sourceMappingURL=TableCell.mjs.map
