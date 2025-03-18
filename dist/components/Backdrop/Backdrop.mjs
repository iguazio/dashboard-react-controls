import { j as jsxDevRuntimeExports } from "../../_virtual/jsx-dev-runtime.mjs";
import "react";
import PropTypes from "prop-types";
import { CSSTransition } from "react-transition-group";
/* empty css               */
const Backdrop = ({ duration = 300, show = false, onClose = null }) => {
  return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
    CSSTransition,
    {
      in: show,
      timeout: duration,
      classNames: "backdrop-transition",
      mountOnEnter: true,
      unmountOnExit: true,
      children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "backdrop", onClick: onClose }, void 0, false, {
        fileName: "/Users/Ilan_Kader/Development/dashboard-react-controls/src/lib/components/Backdrop/Backdrop.jsx",
        lineNumber: 32,
        columnNumber: 7
      }, void 0)
    },
    void 0,
    false,
    {
      fileName: "/Users/Ilan_Kader/Development/dashboard-react-controls/src/lib/components/Backdrop/Backdrop.jsx",
      lineNumber: 25,
      columnNumber: 5
    },
    void 0
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
