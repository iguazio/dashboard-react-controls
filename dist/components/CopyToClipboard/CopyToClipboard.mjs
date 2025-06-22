import { jsx as t } from "react/jsx-runtime";
import o from "prop-types";
import { useMemo as d } from "react";
import { useDispatch as f } from "react-redux";
import u from "../RoundedIcon/RoundedIcon.mjs";
import b from "../TooltipTemplate/TextTooltipTemplate.mjs";
import h from "../Tooltip/Tooltip.mjs";
import { setNotification as y } from "../../reducers/notificationReducer.mjs";
import { showErrorNotification as T } from "../../utils/notification.util.mjs";
import g from "../../images/copy-to-clipboard-icon.svg.mjs";
const C = ({
  children: i = null,
  className: l = "",
  disabled: e = !1,
  textToCopy: r = "",
  tooltipText: p
}) => {
  const s = f(), c = d(() => e || !r, [e, r]), a = (m) => {
    navigator.clipboard.writeText(m).then(() => {
      s(
        y({
          status: 200,
          id: Math.random(),
          message: "Copied to clipboard successfully"
        })
      );
    }).catch((n) => {
      T(s, n, "", "Copy to clipboard failed");
    });
  };
  return /* @__PURE__ */ t("div", { className: l, "data-testid": "copy-to-clipboard", children: i ? /* @__PURE__ */ t(h, { template: /* @__PURE__ */ t(b, { text: p }), textShow: !0, children: /* @__PURE__ */ t("span", { onClick: () => a(r), children: i }) }) : /* @__PURE__ */ t(
    u,
    {
      tooltipText: p,
      onClick: () => a(r),
      disabled: c,
      children: /* @__PURE__ */ t(g, {})
    }
  ) });
};
C.propTypes = {
  children: o.oneOfType([o.string, o.array, o.element]),
  className: o.string,
  disabled: o.bool,
  textToCopy: o.string,
  tooltipText: o.string.isRequired
};
export {
  C as default
};
//# sourceMappingURL=CopyToClipboard.mjs.map
