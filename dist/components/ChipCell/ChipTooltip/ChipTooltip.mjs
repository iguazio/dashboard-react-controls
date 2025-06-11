import { jsx as t, jsxs as l } from "react/jsx-runtime";
import { useMemo as s } from "react";
import o from "prop-types";
import a from "../../Tooltip/Tooltip.mjs";
import d from "../../TooltipTemplate/TextTooltipTemplate.mjs";
import { getChipLabelAndValue as n } from "../../../utils/chips.util.mjs";
import { CHIP as c } from "../../../types.mjs";
const f = ({ children: i, chip: e, editConfig: r = {} }) => {
  const { chipLabel: m, chipValue: p } = s(() => n(e), [e]);
  return /* @__PURE__ */ t(
    a,
    {
      hidden: r.isEdit || /^\+ [\d]+/g.test(e.value),
      template: /* @__PURE__ */ t(
        d,
        {
          text: e.delimiter ? /* @__PURE__ */ l("span", { className: "chip__content", children: [
            m,
            /* @__PURE__ */ t("span", { className: "chip__delimiter", children: e.delimiter }),
            p
          ] }) : e.value
        }
      ),
      children: i
    }
  );
};
f.propTypes = {
  children: o.node.isRequired,
  chip: c,
  editConfig: o.object
};
export {
  f as default
};
//# sourceMappingURL=ChipTooltip.mjs.map
