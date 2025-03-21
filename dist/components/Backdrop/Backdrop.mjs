import { jsx } from "react/jsx-runtime";
import "react";
import PropTypes from "prop-types";
import { CSSTransition } from "react-transition-group";
/* empty css               */
const Backdrop = ({ duration = 300, show = false, onClose = null }) => {
  return /* @__PURE__ */ jsx(
    CSSTransition,
    {
      in: show,
      timeout: duration,
      classNames: "backdrop-transition",
      mountOnEnter: true,
      unmountOnExit: true,
      children: /* @__PURE__ */ jsx("div", { className: "backdrop", onClick: onClose })
    }
  );
};
Backdrop.propTypes = {
  duration: PropTypes.number,
  onClose: PropTypes.func,
  show: PropTypes.bool.isRequired
};
export {
  Backdrop as default
};
//# sourceMappingURL=Backdrop.mjs.map
