import { jsxs, Fragment, jsx } from "react/jsx-runtime";
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
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Backdrop, { onClose, show }),
    /* @__PURE__ */ jsx(CSSTransition, { in: show, timeout: 300, classNames: "modal-transition", unmountOnExit: true, children: /* @__PURE__ */ jsxs("div", { className: modalClassNames, "data-testid": "modal", children: [
      /* @__PURE__ */ jsx("div", { className: "modal__header-button", children: /* @__PURE__ */ jsx(RoundedIcon, { "data-testid": "pop-up-close-btn", onClick: onClose, tooltipText: "Close", children: /* @__PURE__ */ jsx(SvgClose, {}) }) }),
      /* @__PURE__ */ jsxs("div", { className: "modal__content", children: [
        !noHeader && /* @__PURE__ */ jsxs("div", { className: "modal__header", children: [
          previewText && /* @__PURE__ */ jsx("div", { className: "modal__header-preview-text", children: previewText }),
          /* @__PURE__ */ jsx("h5", { className: "modal__header-title", children: title }),
          subTitle && /* @__PURE__ */ jsx("h6", { className: "modal__header-sub-title", children: subTitle })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "modal__body", children }),
        actions && actions.length > 0 && /* @__PURE__ */ jsx("div", { className: "modal__footer", children: /* @__PURE__ */ jsx("div", { className: "modal__footer-actions", children: actions.map((action, idx) => /* @__PURE__ */ jsx("div", { children: action }, idx)) }) })
      ] })
    ] }) })
  ] });
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
