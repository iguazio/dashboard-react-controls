import { j as jsxDevRuntimeExports } from "../../_virtual/jsx-dev-runtime.mjs";
import React__default from "react";
import PropTypes from "prop-types";
import { CSSTransition } from "react-transition-group";
import PopUpDialog from "../../components/PopUpDialog/PopUpDialog.mjs";
/* empty css                  */
const OptionsMenu = React__default.forwardRef(({ children = [], show = false, timeout = 300 }, ref) => {
  const { width: dropdownWidth } = ref.current ? ref.current.getBoundingClientRect() : {};
  return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(CSSTransition, { in: show, timeout, classNames: "options-menu-transition", unmountOnExit: true, children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
    PopUpDialog,
    {
      headerIsHidden: true,
      className: "options-menu",
      customPosition: {
        element: ref,
        position: "bottom-right",
        autoVerticalPosition: true,
        autoHorizontalPosition: true
      },
      style: { minWidth: `${dropdownWidth}px` },
      children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("ul", { className: "options-menu__body", children }, void 0, false, {
        fileName: "/Users/Ilan_Kader/Development/dashboard-react-controls/src/lib/elements/OptionsMenu/OptionsMenu.jsx",
        lineNumber: 40,
        columnNumber: 9
      }, void 0)
    },
    void 0,
    false,
    {
      fileName: "/Users/Ilan_Kader/Development/dashboard-react-controls/src/lib/elements/OptionsMenu/OptionsMenu.jsx",
      lineNumber: 29,
      columnNumber: 7
    },
    void 0
  ) }, void 0, false, {
    fileName: "/Users/Ilan_Kader/Development/dashboard-react-controls/src/lib/elements/OptionsMenu/OptionsMenu.jsx",
    lineNumber: 28,
    columnNumber: 5
  }, void 0);
});
OptionsMenu.displayName = "OptionsMenu";
OptionsMenu.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element),
  show: PropTypes.bool.isRequired,
  timeout: PropTypes.number
};
export {
  OptionsMenu as default
};
//# sourceMappingURL=OptionsMenu.mjs.map
