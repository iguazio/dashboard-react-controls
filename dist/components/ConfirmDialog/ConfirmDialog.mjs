import { jsx as o, jsxs as m } from "react/jsx-runtime";
import "react";
import a from "prop-types";
import O from "classnames";
import p from "../Button/Button.mjs";
import D from "../PopUpDialog/PopUpDialog.mjs";
import { CONFIRM_DIALOG_MESSAGE as T, CONFIRM_DIALOG_SUBMIT_BUTTON as I, CONFIRM_DIALOG_CANCEL_BUTTON as y } from "../../types.mjs";
/* empty css                    */
const A = ({
  cancelButton: l = null,
  children: r = null,
  className: c = "",
  closePopUp: d = null,
  confirmButton: i = null,
  customPosition: _ = {},
  header: g = "",
  isOpen: t = !1,
  message: n = "",
  messageOnly: b = !1,
  onResolve: s = null
}) => {
  const f = O(
    "confirm-dialog__message",
    b && "confirm-dialog__message-only"
  ), h = (e) => {
    s && s(), l.handler && l.handler(e);
  }, N = (e) => {
    s && s(), d && d(e);
  }, C = (e) => {
    s && s(), i.handler && i.handler(e);
  };
  return t && /* @__PURE__ */ o(
    D,
    {
      className: c,
      closePopUp: N,
      customPosition: _,
      headerText: g,
      children: /* @__PURE__ */ m("div", { className: "confirm-dialog", children: [
        n && /* @__PURE__ */ o("div", { className: f, children: n }),
        r && /* @__PURE__ */ o("div", { className: "confirm-dialog__body", children: r }),
        /* @__PURE__ */ m("div", { className: "confirm-dialog__btn-container", children: [
          l && /* @__PURE__ */ o(
            p,
            {
              className: "pop-up-dialog__btn_cancel",
              label: l.label,
              onClick: h,
              variant: l.variant,
              disabled: l.disabled
            }
          ),
          i && /* @__PURE__ */ o(
            p,
            {
              label: i.label,
              onClick: C,
              variant: i.variant,
              disabled: i.disabled
            }
          )
        ] })
      ] })
    }
  );
};
A.propTypes = {
  cancelButton: y,
  children: a.node,
  className: a.string,
  closePopUp: a.func,
  confirmButton: I,
  customPosition: a.object,
  header: a.string,
  isOpen: a.bool,
  message: T,
  messageOnly: a.bool,
  onResolve: a.func
};
export {
  A as default
};
//# sourceMappingURL=ConfirmDialog.mjs.map
