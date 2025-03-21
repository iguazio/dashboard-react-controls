import { jsx } from "react/jsx-runtime";
import React__default from "react";
import PropTypes from "prop-types";
import { CSSTransition } from "react-transition-group";
import PopUpDialog from "../../components/PopUpDialog/PopUpDialog.mjs";
/* empty css                  */
const OptionsMenu = React__default.forwardRef(({ children = [], show = false, timeout = 300 }, ref) => {
  const { width: dropdownWidth } = ref.current ? ref.current.getBoundingClientRect() : {};
  return /* @__PURE__ */ jsx(CSSTransition, { in: show, timeout, classNames: "options-menu-transition", unmountOnExit: true, children: /* @__PURE__ */ jsx(
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
      children: /* @__PURE__ */ jsx("ul", { className: "options-menu__body", children })
    }
  ) });
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
