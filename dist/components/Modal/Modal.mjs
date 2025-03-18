import { j as jsxDevRuntimeExports } from "../../_virtual/jsx-dev-runtime.mjs";
import "react";
import PropTypes from "prop-types";
import { CSSTransition } from "react-transition-group";
import classnames from "classnames";
import Backdrop from "../Backdrop/Backdrop.mjs";
import RoundedIcon from "../RoundedIcon/RoundedIcon.mjs";
import { MODAL_MD } from "../../constants.mjs";
import { MODAL_SIZES } from "../../types.mjs";
import SvgClose from "../../images/close.svg.mjs";
/* empty css            */
const Modal = ({
  actions = [],
  children,
  className = "",
  noHeader = false,
  onClose,
  previewText = "",
  show = false,
  size = MODAL_MD,
  subTitle = null,
  title = ""
}) => {
  const modalClassNames = classnames("modal", className, size && `modal-${size}`);
  return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(jsxDevRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Backdrop, { onClose, show }, void 0, false, {
      fileName: "/Users/Ilan_Kader/Development/dashboard-react-controls/src/lib/components/Modal/Modal.jsx",
      lineNumber: 48,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(CSSTransition, { in: show, timeout: 300, classNames: "modal-transition", unmountOnExit: true, children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: modalClassNames, "data-testid": "modal", children: [
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "modal__header-button", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(RoundedIcon, { "data-testid": "pop-up-close-btn", onClick: onClose, tooltipText: "Close", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(SvgClose, {}, void 0, false, {
        fileName: "/Users/Ilan_Kader/Development/dashboard-react-controls/src/lib/components/Modal/Modal.jsx",
        lineNumber: 53,
        columnNumber: 15
      }, void 0) }, void 0, false, {
        fileName: "/Users/Ilan_Kader/Development/dashboard-react-controls/src/lib/components/Modal/Modal.jsx",
        lineNumber: 52,
        columnNumber: 13
      }, void 0) }, void 0, false, {
        fileName: "/Users/Ilan_Kader/Development/dashboard-react-controls/src/lib/components/Modal/Modal.jsx",
        lineNumber: 51,
        columnNumber: 11
      }, void 0),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "modal__content", children: [
        !noHeader && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "modal__header", children: [
          previewText && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "modal__header-preview-text", children: previewText }, void 0, false, {
            fileName: "/Users/Ilan_Kader/Development/dashboard-react-controls/src/lib/components/Modal/Modal.jsx",
            lineNumber: 59,
            columnNumber: 33
          }, void 0),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("h5", { className: "modal__header-title", children: title }, void 0, false, {
            fileName: "/Users/Ilan_Kader/Development/dashboard-react-controls/src/lib/components/Modal/Modal.jsx",
            lineNumber: 60,
            columnNumber: 17
          }, void 0),
          subTitle && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("h6", { className: "modal__header-sub-title", children: subTitle }, void 0, false, {
            fileName: "/Users/Ilan_Kader/Development/dashboard-react-controls/src/lib/components/Modal/Modal.jsx",
            lineNumber: 61,
            columnNumber: 30
          }, void 0)
        ] }, void 0, true, {
          fileName: "/Users/Ilan_Kader/Development/dashboard-react-controls/src/lib/components/Modal/Modal.jsx",
          lineNumber: 58,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "modal__body", children }, void 0, false, {
          fileName: "/Users/Ilan_Kader/Development/dashboard-react-controls/src/lib/components/Modal/Modal.jsx",
          lineNumber: 64,
          columnNumber: 13
        }, void 0),
        actions && actions.length > 0 && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "modal__footer", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "modal__footer-actions", children: actions.map((action, idx) => /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { children: action }, idx, false, {
          fileName: "/Users/Ilan_Kader/Development/dashboard-react-controls/src/lib/components/Modal/Modal.jsx",
          lineNumber: 69,
          columnNumber: 21
        }, void 0)) }, void 0, false, {
          fileName: "/Users/Ilan_Kader/Development/dashboard-react-controls/src/lib/components/Modal/Modal.jsx",
          lineNumber: 67,
          columnNumber: 17
        }, void 0) }, void 0, false, {
          fileName: "/Users/Ilan_Kader/Development/dashboard-react-controls/src/lib/components/Modal/Modal.jsx",
          lineNumber: 66,
          columnNumber: 15
        }, void 0)
      ] }, void 0, true, {
        fileName: "/Users/Ilan_Kader/Development/dashboard-react-controls/src/lib/components/Modal/Modal.jsx",
        lineNumber: 56,
        columnNumber: 11
      }, void 0)
    ] }, void 0, true, {
      fileName: "/Users/Ilan_Kader/Development/dashboard-react-controls/src/lib/components/Modal/Modal.jsx",
      lineNumber: 50,
      columnNumber: 9
    }, void 0) }, void 0, false, {
      fileName: "/Users/Ilan_Kader/Development/dashboard-react-controls/src/lib/components/Modal/Modal.jsx",
      lineNumber: 49,
      columnNumber: 7
    }, void 0)
  ] }, void 0, true, {
    fileName: "/Users/Ilan_Kader/Development/dashboard-react-controls/src/lib/components/Modal/Modal.jsx",
    lineNumber: 47,
    columnNumber: 5
  }, void 0);
};
Modal.propTypes = {
  actions: PropTypes.array,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.object,
    PropTypes.node,
    PropTypes.string
  ]).isRequired,
  className: PropTypes.string,
  noHeader: PropTypes.bool,
  onClose: PropTypes.func.isRequired,
  previewText: PropTypes.string,
  show: PropTypes.bool.isRequired,
  size: MODAL_SIZES,
  subTitle: PropTypes.string,
  title: PropTypes.string
};
export {
  Modal as default
};
//# sourceMappingURL=Modal.mjs.map
