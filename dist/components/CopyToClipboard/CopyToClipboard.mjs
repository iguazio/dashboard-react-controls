import { jsx as r } from "react/jsx-runtime";
import o from "prop-types";
import { useMemo as n } from "react";
import { useDispatch as f } from "react-redux";
import u from "../RoundedIcon/RoundedIcon.mjs";
import b from "../TooltipTemplate/TextTooltipTemplate.mjs";
import h from "../Tooltip/Tooltip.mjs";
import { setNotification as y } from "../../reducers/notificationReducer.mjs";
import { showErrorNotification as T } from "../../utils/notification.util.mjs";
import g from "../../images/copy-to-clipboard-icon.svg.mjs";
const C = ({
  children: i = null,
  className: c = "",
  disabled: e = !1,
  textToCopy: t = "",
  tooltipText: p
}) => {
  const s = f(), l = n(() => e || !t, [e, t]), a = (m) => {
    navigator.clipboard.writeText(m).then(() => {
      s(
        y({
          status: 200,
          id: Math.random(),
          message: "Copied to clipboard successfully"
        })
      );
    }).catch((d) => {
      T(s, d, "", "Copy to clipboard failed");
    });
  };
  return /* @__PURE__ */ r("div", { className: c, "data-testid": "copy-to-clipboard", children: i ? /* @__PURE__ */ r(h, { template: /* @__PURE__ */ r(b, { text: p }), textShow: !0, children: /* @__PURE__ */ r("span", { onClick: () => a(t), children: i }) }) : /* @__PURE__ */ r(
    u,
    {
      tooltipText: p,
      onClick: () => a(t),
      disabled: l,
      children: /* @__PURE__ */ r(g, {})
    }
  ) });
};
C.propTypes = {
  children: o.oneOfType([o.string, o.array]),
  className: o.string,
  disabled: o.bool,
  textToCopy: o.string,
  tooltipText: o.string.isRequired
};
export {
  C as default
};
//# sourceMappingURL=CopyToClipboard.mjs.map
