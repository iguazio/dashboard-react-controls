import { j as jsxDevRuntimeExports } from "../../_virtual/jsx-dev-runtime.mjs";
import React__default, { useState, useRef, useCallback, useEffect } from "react";
import { createPortal } from "react-dom";
import PropTypes from "prop-types";
import { CSSTransition } from "react-transition-group";
import classnames from "classnames";
import { debounce } from "lodash";
import { isEveryObjectValueEmpty } from "../../utils/common.util.mjs";
/* empty css              */
const Tooltip = ({
  children,
  className = "",
  hidden = false,
  id = "",
  renderChildAsHtml = false,
  template,
  textShow = false
}) => {
  const [show, setShow] = useState(false);
  const [style, setStyle] = useState({});
  const tooltipClassNames = classnames("data-ellipsis", "tooltip-wrapper", className);
  const duration = 200;
  const parentRef = useRef();
  const tooltipRef = useRef();
  const offset = 10;
  const handleScroll = () => {
    setShow(false);
  };
  const handleMouseLeave = useCallback(
    (event) => {
      if (!tooltipRef.current || hidden || tooltipRef.current && !tooltipRef.current.contains(event.relatedTarget) && parentRef.current && !parentRef.current.contains(event.relatedTarget)) {
        setShow(false);
      }
    },
    [hidden]
  );
  const handleMouseEnter = useCallback(
    (event) => {
      var _a, _b, _c, _d;
      if (!show) {
        const [child] = parentRef.current.childNodes;
        let show2 = !hidden && (textShow ? true : !child ? false : child.nodeType !== Node.TEXT_NODE && ((_b = (_a = child.childNodes) == null ? void 0 : _a[0]) == null ? void 0 : _b.nodeType) !== Node.TEXT_NODE || /*
          If the child node is a text node and the text of the child node inside the container is greater than the width of the container, then show tooltip.
        */
        (child.nodeType === Node.TEXT_NODE || ((_d = (_c = child.childNodes) == null ? void 0 : _c[0]) == null ? void 0 : _d.nodeType) === Node.TEXT_NODE) && parentRef.current.scrollWidth > parentRef.current.offsetWidth);
        setShow(show2);
        setTimeout(() => {
          var _a2, _b2;
          if (show2) {
            let { height, top, bottom } = ((_a2 = parentRef == null ? void 0 : parentRef.current) == null ? void 0 : _a2.getBoundingClientRect()) ?? {};
            const { height: tooltipHeight, width: tooltipWidth } = ((_b2 = tooltipRef.current) == null ? void 0 : _b2.getBoundingClientRect()) ?? {
              height: 0,
              width: 0
            };
            const leftPosition = event.x - (event.x + tooltipWidth - window.innerWidth + offset);
            const left = event.x + tooltipWidth + offset > window.innerWidth ? leftPosition > offset ? leftPosition : offset : event.x + offset;
            if (top + height + offset + tooltipHeight >= window.innerHeight) {
              const topPosition = bottom - height - offset - tooltipHeight;
              setStyle({
                top: topPosition > 0 ? topPosition : offset,
                left
              });
            } else {
              setStyle({
                top: top + height + offset,
                left
              });
            }
          }
        }, 0);
      }
    },
    [hidden, textShow, show]
  );
  const clearStyles = debounce(() => {
    if (!isEveryObjectValueEmpty(style)) {
      setStyle({});
    }
  }, 100);
  useEffect(() => {
    const parentNode = parentRef.current;
    if (parentNode) {
      parentNode.addEventListener("mouseenter", handleMouseEnter);
      parentNode.addEventListener("mouseleave", handleMouseLeave);
      return () => {
        parentNode.removeEventListener("mouseenter", handleMouseEnter);
        parentNode.removeEventListener("mouseleave", handleMouseLeave);
      };
    }
  }, [parentRef, handleMouseEnter, handleMouseLeave]);
  useEffect(() => {
    const tooltipNode = tooltipRef.current;
    if (tooltipNode && show) {
      tooltipNode.addEventListener("mouseleave", handleMouseLeave);
      return () => {
        tooltipNode.removeEventListener("mouseleave", handleMouseLeave);
      };
    }
  }, [tooltipRef, handleMouseEnter, handleMouseLeave, show]);
  useEffect(() => {
    if (show) {
      window.addEventListener("scroll", handleScroll, true);
    }
    return () => window.removeEventListener("scroll", handleScroll, true);
  }, [show]);
  useEffect(() => {
    window.addEventListener("resize", clearStyles);
    return () => {
      window.removeEventListener("resize", clearStyles);
    };
  }, [clearStyles, style]);
  return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(jsxDevRuntimeExports.Fragment, { children: [
    renderChildAsHtml ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
      "div",
      {
        "data-testid": id ? `${id}-tooltip-wrapper` : "tooltip-wrapper",
        ref: parentRef,
        className: tooltipClassNames,
        dangerouslySetInnerHTML: { __html: children },
        onClick: handleMouseLeave
      },
      void 0,
      false,
      {
        fileName: "/Users/Ilan_Kader/Development/dashboard-react-controls/src/lib/components/Tooltip/Tooltip.jsx",
        lineNumber: 174,
        columnNumber: 9
      },
      void 0
    ) : /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
      "div",
      {
        "data-testid": id ? `${id}-tooltip-wrapper` : "tooltip-wrapper",
        ref: parentRef,
        className: tooltipClassNames,
        onClick: handleMouseLeave,
        children
      },
      void 0,
      false,
      {
        fileName: "/Users/Ilan_Kader/Development/dashboard-react-controls/src/lib/components/Tooltip/Tooltip.jsx",
        lineNumber: 182,
        columnNumber: 9
      },
      void 0
    ),
    !hidden && createPortal(
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
        CSSTransition,
        {
          classNames: "fade",
          in: show,
          timeout: duration,
          unmountOnExit: true,
          nodeRef: tooltipRef,
          children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
            "div",
            {
              "data-testid": id ? `${id}-tooltip` : "tooltip",
              ref: tooltipRef,
              style: {
                ...style
              },
              className: "tooltip",
              children: template
            },
            void 0,
            false,
            {
              fileName: "/Users/Ilan_Kader/Development/dashboard-react-controls/src/lib/components/Tooltip/Tooltip.jsx",
              lineNumber: 200,
              columnNumber: 13
            },
            void 0
          )
        },
        void 0,
        false,
        {
          fileName: "/Users/Ilan_Kader/Development/dashboard-react-controls/src/lib/components/Tooltip/Tooltip.jsx",
          lineNumber: 193,
          columnNumber: 11
        },
        void 0
      ),
      document.getElementById("overlay_container")
    )
  ] }, void 0, true, {
    fileName: "/Users/Ilan_Kader/Development/dashboard-react-controls/src/lib/components/Tooltip/Tooltip.jsx",
    lineNumber: 172,
    columnNumber: 5
  }, void 0);
};
Tooltip.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  hidden: PropTypes.bool,
  id: PropTypes.string,
  renderChildAsHtml: PropTypes.bool,
  template: PropTypes.element.isRequired,
  textShow: PropTypes.bool
};
const Tooltip$1 = React__default.memo(Tooltip);
export {
  Tooltip$1 as default
};
//# sourceMappingURL=Tooltip.mjs.map
