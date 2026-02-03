import { jsx as s, jsxs as c } from "react/jsx-runtime";
import "react";
import l from "prop-types";
import i from "classnames";
import r from "../../components/Tooltip/Tooltip.mjs";
import o from "../../components/TooltipTemplate/TextTooltipTemplate.mjs";
/* empty css                         */
const N = ({ cellData: e = {}, className: m = "", item: a, onClick: t = null }) => {
  const d = i(
    "table-body__cell",
    "tag-status-cell",
    e.className,
    m,
    e.bodyCellClassName,
    t && "link"
  ), { value: n, label: p, className: u } = (a == null ? void 0 : a.state) ?? {};
  return /* @__PURE__ */ s(
    "td",
    {
      "data-testid": (e == null ? void 0 : e.headerId) ?? "table-tag-status-cell",
      className: d,
      onClick: () => e.value && (t == null ? void 0 : t(e.value)),
      children: /* @__PURE__ */ c("div", { className: "cell-wrapper", children: [
        /* @__PURE__ */ c("div", { className: "cell-content", children: [
          /* @__PURE__ */ s(
            r,
            {
              className: "cell-name",
              template: /* @__PURE__ */ s(o, { text: e.tooltip || e.value || "" }),
              children: e.value
            }
          ),
          n && p && /* @__PURE__ */ s(r, { className: "cell-status", template: /* @__PURE__ */ s(o, { text: p }), children: /* @__PURE__ */ s("i", { className: u }) })
        ] }),
        (a == null ? void 0 : a.tag) && /* @__PURE__ */ s(r, { className: "cell-tag", template: /* @__PURE__ */ s(o, { text: a.tag }), children: /* @__PURE__ */ s("span", { className: "cell-subtext", children: a.tag }) })
      ] })
    }
  );
};
N.propTypes = {
  cellData: l.object.isRequired,
  className: l.string,
  item: l.oneOfType([l.object, l.bool]).isRequired,
  onClick: l.func
};
export {
  N as default
};
//# sourceMappingURL=TableTagStatusCell.mjs.map
