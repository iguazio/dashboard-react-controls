import { jsxs as o, jsx as s } from "react/jsx-runtime";
import "react";
import { Link as k } from "react-router-dom";
import a from "prop-types";
import u from "classnames";
import r from "../../components/Tooltip/Tooltip.mjs";
import i from "../../components/TooltipTemplate/TextTooltipTemplate.mjs";
import { formatDatetime as N } from "../../utils/datetime.util.mjs";
import { truncateUid as g } from "../../utils/string.util.mjs";
import T from "../../images/arrow.svg.mjs";
/* empty css                    */
const C = ({
  cellData: e = {},
  className: b = "",
  item: t,
  link: n,
  selectItem: f,
  selectedItem: m = {},
  showExpandButton: x = !1,
  toggleRow: p = null
}) => {
  const v = u(
    "table-body__cell",
    e.className,
    b,
    e.bodyCellClassName
  ), c = u("item-name"), { value: d, label: l, className: h } = t.state ?? {};
  return /* @__PURE__ */ o("td", { "data-testid": e.headerId, className: v, children: [
    e.linkIsExternal ? /* @__PURE__ */ s("span", { className: "data-ellipsis", children: /* @__PURE__ */ o("a", { href: n, className: "link", target: "blank", children: [
      /* @__PURE__ */ s(
        r,
        {
          className: c,
          template: /* @__PURE__ */ s(i, { text: e.tooltip || e.value || "" }),
          children: e.value
        }
      ),
      e.showStatus && d && l && /* @__PURE__ */ s(r, { className: "status", template: /* @__PURE__ */ s(i, { text: l }), children: /* @__PURE__ */ s("i", { className: h }) })
    ] }) }) : /* @__PURE__ */ o(k, { to: n, onClick: () => f(t), className: "data-ellipsis", children: [
      /* @__PURE__ */ o("div", { className: "name-wrapper", children: [
        /* @__PURE__ */ o("div", { className: "link", children: [
          /* @__PURE__ */ s(
            r,
            {
              className: c,
              template: /* @__PURE__ */ s(i, { text: e.tooltip || e.value || "" }),
              children: e.value
            }
          ),
          e.showStatus && d && l && /* @__PURE__ */ s(r, { className: "status", template: /* @__PURE__ */ s(i, { text: l }), children: /* @__PURE__ */ s("i", { className: h }) })
        ] }),
        e.showTag && /* @__PURE__ */ s(r, { className: "item-tag", template: /* @__PURE__ */ s(i, { text: t.tag }), children: /* @__PURE__ */ s("span", { className: "link-subtext", children: t.tag }) })
      ] }),
      (e.showUid || e.showSelectedUid && Object.values(m).length !== 0) && /* @__PURE__ */ o("div", { className: "date-uid-row", children: [
        (t.startTime || t.created || t.updated) && e.type !== "date" && (e.showDate || e.showUpdatedDate) && /* @__PURE__ */ s("span", { className: "link-subtext", children: e.showUpdatedDate ? N(t.updated, "N/A") : N(
          t.startTime || t.created,
          d === "aborted" ? "N/A" : "Not yet started"
        ) }),
        e.value !== t.uid && e.value !== t.hash && /* @__PURE__ */ s("span", { className: "link-subtext", children: g(t.uid || t.hash) })
      ] }),
      e.additionalInfo && Object.values(m).length !== 0 && /* @__PURE__ */ s("span", { className: "link-subtext", children: e.additionalInfo })
    ] }),
    x && /* @__PURE__ */ s(
      T,
      {
        onClick: (w) => {
          p && p(w, t);
        },
        className: "expand-arrow"
      }
    )
  ] });
};
C.propTypes = {
  cellData: a.object,
  className: a.string,
  item: a.object.isRequired,
  link: a.string.isRequired,
  selectItem: a.func.isRequired,
  selectedItem: a.object,
  showExpandButton: a.bool,
  toggleRow: a.func
};
export {
  C as default
};
//# sourceMappingURL=TableLinkCell.mjs.map
