import { jsx as s, jsxs as f } from "react/jsx-runtime";
import "react";
import i from "prop-types";
import t from "classnames";
import { useDispatch as _, useSelector as b } from "react-redux";
import h from "../../components/Tooltip/Tooltip.mjs";
import C from "../../components/TooltipTemplate/TextTooltipTemplate.mjs";
import { performDetailsActionHelper as T } from "../../utils/common.util.mjs";
/* empty css                      */
const u = ({ dataItem: e = {}, index: n, isIconDisplayed: c, menuItem: o }) => {
  const l = _(), r = b((a) => a.commonDetailsStore.changes), p = t(
    "actions-menu__icon",
    c && "actions-menu__icon_visible"
  ), d = t(
    "actions-menu__option",
    o.className && `actions-menu__option_${o.className}`,
    o.disabled && "actions-menu__option_disabled"
  ), m = async () => {
    o.disabled || (o.allowLeaveWarning ? await T(r, l) && o.onClick(e) : o.onClick(e));
  };
  return /* @__PURE__ */ s(
    "li",
    {
      "data-testid": `actions-menu__option-${n}`,
      className: d,
      onClick: m,
      children: /* @__PURE__ */ f(
        h,
        {
          template: /* @__PURE__ */ s(C, { text: o.tooltip }),
          hidden: !o.tooltip,
          children: [
            /* @__PURE__ */ s("span", { className: p, children: o.icon }),
            o.label
          ]
        },
        o.label
      )
    }
  );
};
u.propTypes = {
  dataItem: i.oneOfType([i.object, i.string]),
  index: i.number.isRequired,
  isIconDisplayed: i.bool.isRequired,
  menuItem: i.object.isRequired
};
export {
  u as default
};
//# sourceMappingURL=ActionsMenuItem.mjs.map
