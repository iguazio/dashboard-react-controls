import { jsx as o } from "react/jsx-runtime";
import "react";
import p from "prop-types";
import { capitalize as l } from "lodash";
import d from "classnames";
import y from "../../components/Tooltip/Tooltip.mjs";
import b from "../../components/TooltipTemplate/TextTooltipTemplate.mjs";
const c = ({ cellData: e, className: i = "" }) => {
  var s, t, r, m;
  const a = d(
    "table-body__cell",
    e.className,
    e.bodyCellClassName,
    i
  );
  return /* @__PURE__ */ o("td", { "data-testid": e.headerId, className: a, children: /* @__PURE__ */ o(
    y,
    {
      className: "table-body__cell_type",
      template: /* @__PURE__ */ o(
        b,
        {
          text: ((t = (s = e.types) == null ? void 0 : s[e.value]) == null ? void 0 : t.label) ?? l(e.value)
        }
      ),
      children: ((m = (r = e.types) == null ? void 0 : r[e.value]) == null ? void 0 : m.icon) ?? l(e.value)
    }
  ) });
};
c.propTypes = {
  cellData: p.object.isRequired,
  className: p.string
};
export {
  c as default
};
//# sourceMappingURL=TableTypeCell.mjs.map
