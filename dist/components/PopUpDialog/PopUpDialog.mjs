import { j as jsxDevRuntimeExports } from "../../_virtual/jsx-dev-runtime.mjs";
import React__default, { useState, useRef, useCallback, useLayoutEffect, useEffect } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import { createPortal } from "react-dom";
import { throttle } from "lodash";
import RoundedIcon from "../RoundedIcon/RoundedIcon.mjs";
import Tooltip from "../Tooltip/Tooltip.mjs";
import TextTooltipTemplate from "../TooltipTemplate/TextTooltipTemplate.mjs";
import { POP_UP_CUSTOM_POSITION } from "../../types.mjs";
import SvgClose from "../../images/close.svg.mjs";
/* empty css                  */
const PopUpDialog = React__default.forwardRef(
  ({
    children,
    className = "",
    closePopUp = () => {
    },
    customPosition = {},
    headerIsHidden = false,
    headerText = "",
    showPopUpDialog = true,
    style = {},
    tooltipText = ""
  }, ref) => {
    const [showPopUp, setShowPopUp] = useState(showPopUpDialog ?? true);
    const popUpOverlayRef = useRef(null);
    ref ?? (ref = popUpOverlayRef);
    const popUpClassNames = classnames(
      className,
      "pop-up-dialog__overlay",
      customPosition.element && "custom-position"
    );
    const handleClosePopUp = useCallback(() => {
      closePopUp && closePopUp();
      setShowPopUp(false);
    }, [closePopUp]);
    const calculateCustomPopUpPosition = useCallback(() => {
      var _a;
      if (((_a = customPosition == null ? void 0 : customPosition.element) == null ? void 0 : _a.current) && (ref == null ? void 0 : ref.current)) {
        const elementRect = customPosition.element.current.getBoundingClientRect();
        const popUpRect = ref.current.getBoundingClientRect();
        const [verticalPosition, horizontalPosition] = customPosition.position.split("-");
        const popupMargin = 15;
        const elementMargin = 5;
        const isEnoughSpaceFromLeft = elementRect.right >= popUpRect.width + popupMargin;
        const isEnoughSpaceFromRight = window.innerWidth - elementRect.left >= popUpRect.width + popupMargin;
        const isEnoughSpaceFromTop = elementRect.top > popUpRect.height + popupMargin + elementMargin;
        const isEnoughSpaceFromBottom = elementRect.bottom + popUpRect.height + popupMargin + elementMargin <= window.innerHeight;
        let leftPosition = horizontalPosition === "left" ? elementRect.right - popUpRect.width : elementRect.left;
        let topPosition;
        if (verticalPosition === "top") {
          topPosition = isEnoughSpaceFromTop ? elementRect.top - popUpRect.height - elementMargin : popupMargin;
        } else {
          topPosition = isEnoughSpaceFromBottom ? elementRect.bottom + elementMargin : window.innerHeight - popUpRect.height - popupMargin;
        }
        if (customPosition.autoVerticalPosition) {
          if (verticalPosition === "top") {
            if (!isEnoughSpaceFromTop && isEnoughSpaceFromBottom) {
              topPosition = elementRect.bottom + elementMargin;
            }
          } else {
            if (isEnoughSpaceFromTop && !isEnoughSpaceFromBottom) {
              topPosition = elementRect.top - popUpRect.height - elementMargin;
            }
          }
        }
        if (customPosition.autoHorizontalPosition) {
          if (verticalPosition === "left") {
            if (!isEnoughSpaceFromLeft && isEnoughSpaceFromRight) {
              leftPosition = elementRect.left;
            } else if (!isEnoughSpaceFromLeft && !isEnoughSpaceFromRight) {
              leftPosition = popupMargin;
            }
          } else {
            if (isEnoughSpaceFromLeft && !isEnoughSpaceFromRight) {
              leftPosition = elementRect.right - popUpRect.width;
            } else if (!isEnoughSpaceFromLeft && !isEnoughSpaceFromRight) {
              leftPosition = window.innerWidth - popUpRect.width - popupMargin;
            }
          }
        }
        ref.current.style.top = `${topPosition}px`;
        if (style.left && !(customPosition.autoHorizontalPosition && isEnoughSpaceFromRight)) {
          ref.current.style.left = `calc(${leftPosition}px + ${style.left})`;
        } else {
          ref.current.style.left = `${leftPosition}px`;
        }
      }
    }, [customPosition, style.left, ref]);
    useLayoutEffect(() => {
      calculateCustomPopUpPosition();
    }, [calculateCustomPopUpPosition]);
    useEffect(() => {
      if (showPopUp) {
        const throttledCalculatedCustomPopUpPosition = throttle(calculateCustomPopUpPosition, 100, {
          trailing: true,
          leading: true
        });
        const popupObserver = new ResizeObserver(throttledCalculatedCustomPopUpPosition);
        const popupElement = ref.current;
        popupObserver.observe(popupElement);
        window.addEventListener("resize", throttledCalculatedCustomPopUpPosition);
        return () => {
          popupObserver.unobserve(popupElement);
          window.removeEventListener("resize", throttledCalculatedCustomPopUpPosition);
        };
      }
    }, [calculateCustomPopUpPosition, ref, showPopUp]);
    return showPopUp ? createPortal(
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { ref, className: popUpClassNames, style, children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { "data-testid": "pop-up-dialog", className: "pop-up-dialog", children: [
        !headerIsHidden && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "pop-up-dialog__header", children: [
          headerText && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { "data-testid": "pop-up-dialog-header", className: "pop-up-dialog__header-text", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Tooltip, { template: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(TextTooltipTemplate, { text: tooltipText || headerText }, void 0, false, {
            fileName: "/Users/Ilan_Kader/Development/dashboard-react-controls/src/lib/components/PopUpDialog/PopUpDialog.jsx",
            lineNumber: 159,
            columnNumber: 42
          }, void 0), children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { children: headerText }, void 0, false, {
            fileName: "/Users/Ilan_Kader/Development/dashboard-react-controls/src/lib/components/PopUpDialog/PopUpDialog.jsx",
            lineNumber: 160,
            columnNumber: 25
          }, void 0) }, void 0, false, {
            fileName: "/Users/Ilan_Kader/Development/dashboard-react-controls/src/lib/components/PopUpDialog/PopUpDialog.jsx",
            lineNumber: 159,
            columnNumber: 23
          }, void 0) }, void 0, false, {
            fileName: "/Users/Ilan_Kader/Development/dashboard-react-controls/src/lib/components/PopUpDialog/PopUpDialog.jsx",
            lineNumber: 158,
            columnNumber: 21
          }, void 0),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
            RoundedIcon,
            {
              className: "pop-up-dialog__btn_close",
              onClick: handleClosePopUp,
              tooltipText: "Close",
              "data-testid": "pop-up-close-btn",
              children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(SvgClose, {}, void 0, false, {
                fileName: "/Users/Ilan_Kader/Development/dashboard-react-controls/src/lib/components/PopUpDialog/PopUpDialog.jsx",
                lineNumber: 170,
                columnNumber: 21
              }, void 0)
            },
            void 0,
            false,
            {
              fileName: "/Users/Ilan_Kader/Development/dashboard-react-controls/src/lib/components/PopUpDialog/PopUpDialog.jsx",
              lineNumber: 164,
              columnNumber: 19
            },
            void 0
          )
        ] }, void 0, true, {
          fileName: "/Users/Ilan_Kader/Development/dashboard-react-controls/src/lib/components/PopUpDialog/PopUpDialog.jsx",
          lineNumber: 156,
          columnNumber: 17
        }, void 0),
        children
      ] }, void 0, true, {
        fileName: "/Users/Ilan_Kader/Development/dashboard-react-controls/src/lib/components/PopUpDialog/PopUpDialog.jsx",
        lineNumber: 154,
        columnNumber: 13
      }, void 0) }, void 0, false, {
        fileName: "/Users/Ilan_Kader/Development/dashboard-react-controls/src/lib/components/PopUpDialog/PopUpDialog.jsx",
        lineNumber: 153,
        columnNumber: 11
      }, void 0),
      document.getElementById("overlay_container")
    ) : null;
  }
);
PopUpDialog.displayName = "PopUpDialog";
PopUpDialog.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  closePopUp: PropTypes.func,
  customPosition: POP_UP_CUSTOM_POSITION,
  headerIsHidden: PropTypes.bool,
  headerText: PropTypes.string,
  showPopUpDialog: PropTypes.bool,
  style: PropTypes.object,
  tooltipText: PropTypes.string
};
export {
  PopUpDialog as default
};
//# sourceMappingURL=PopUpDialog.mjs.map
