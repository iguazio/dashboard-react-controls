import { j as jsxDevRuntimeExports } from "../../_virtual/jsx-dev-runtime.mjs";
import "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import Button from "../Button/Button.mjs";
import PopUpDialog from "../PopUpDialog/PopUpDialog.mjs";
import { CONFIRM_DIALOG_MESSAGE, CONFIRM_DIALOG_SUBMIT_BUTTON, CONFIRM_DIALOG_CANCEL_BUTTON } from "../../types.mjs";
/* empty css                    */
const ConfirmDialog = ({
  cancelButton = null,
  children = null,
  className = "",
  closePopUp = null,
  confirmButton = null,
  customPosition = {},
  header = "",
  isOpen = false,
  message = "",
  messageOnly = false,
  onResolve = null
}) => {
  const messageClassNames = classnames(
    "confirm-dialog__message",
    messageOnly && "confirm-dialog__message-only"
  );
  const handleCancelDialog = (event) => {
    onResolve && onResolve();
    cancelButton.handler && cancelButton.handler(event);
  };
  const handleCloseDialog = (event) => {
    onResolve && onResolve();
    closePopUp && closePopUp(event);
  };
  const handleConfirmDialog = (event) => {
    onResolve && onResolve();
    confirmButton.handler && confirmButton.handler(event);
  };
  return isOpen && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
    PopUpDialog,
    {
      className,
      closePopUp: handleCloseDialog,
      customPosition,
      headerText: header,
      children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "confirm-dialog", children: [
        message && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: messageClassNames, children: message }, void 0, false, {
          fileName: "/Users/Ilan_Kader/Development/dashboard-react-controls/src/lib/components/ConfirmDialog/ConfirmDialog.jsx",
          lineNumber: 74,
          columnNumber: 23
        }, void 0),
        children && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "confirm-dialog__body", children }, void 0, false, {
          fileName: "/Users/Ilan_Kader/Development/dashboard-react-controls/src/lib/components/ConfirmDialog/ConfirmDialog.jsx",
          lineNumber: 75,
          columnNumber: 24
        }, void 0),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "confirm-dialog__btn-container", children: [
          cancelButton && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
            Button,
            {
              className: "pop-up-dialog__btn_cancel",
              label: cancelButton.label,
              onClick: handleCancelDialog,
              variant: cancelButton.variant,
              disabled: cancelButton.disabled
            },
            void 0,
            false,
            {
              fileName: "/Users/Ilan_Kader/Development/dashboard-react-controls/src/lib/components/ConfirmDialog/ConfirmDialog.jsx",
              lineNumber: 78,
              columnNumber: 15
            },
            void 0
          ),
          confirmButton && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
            Button,
            {
              label: confirmButton.label,
              onClick: handleConfirmDialog,
              variant: confirmButton.variant,
              disabled: confirmButton.disabled
            },
            void 0,
            false,
            {
              fileName: "/Users/Ilan_Kader/Development/dashboard-react-controls/src/lib/components/ConfirmDialog/ConfirmDialog.jsx",
              lineNumber: 87,
              columnNumber: 15
            },
            void 0
          )
        ] }, void 0, true, {
          fileName: "/Users/Ilan_Kader/Development/dashboard-react-controls/src/lib/components/ConfirmDialog/ConfirmDialog.jsx",
          lineNumber: 76,
          columnNumber: 11
        }, void 0)
      ] }, void 0, true, {
        fileName: "/Users/Ilan_Kader/Development/dashboard-react-controls/src/lib/components/ConfirmDialog/ConfirmDialog.jsx",
        lineNumber: 73,
        columnNumber: 9
      }, void 0)
    },
    void 0,
    false,
    {
      fileName: "/Users/Ilan_Kader/Development/dashboard-react-controls/src/lib/components/ConfirmDialog/ConfirmDialog.jsx",
      lineNumber: 67,
      columnNumber: 7
    },
    void 0
  );
};
ConfirmDialog.propTypes = {
  cancelButton: CONFIRM_DIALOG_CANCEL_BUTTON,
  children: PropTypes.node,
  className: PropTypes.string,
  closePopUp: PropTypes.func,
  confirmButton: CONFIRM_DIALOG_SUBMIT_BUTTON,
  customPosition: PropTypes.object,
  header: PropTypes.string,
  isOpen: PropTypes.bool,
  message: CONFIRM_DIALOG_MESSAGE,
  messageOnly: PropTypes.bool,
  onResolve: PropTypes.func
};
export {
  ConfirmDialog as default
};
//# sourceMappingURL=ConfirmDialog.mjs.map
