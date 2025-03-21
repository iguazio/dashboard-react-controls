import { jsxs, jsx } from "react/jsx-runtime";
import { useState, useMemo, useRef, useCallback, useEffect } from "react";
import PropTypes from "prop-types";
import { CSSTransition } from "react-transition-group";
import classnames from "classnames";
import { createPortal } from "react-dom";
import { getScssVariableValue } from "../../utils/common.util.mjs";
import SvgQuestionMark from "../../images/question-mark.svg.mjs";
import SvgExclamationMark from "../../images/exclamation-mark.svg.mjs";
/* empty css          */
const Tip = ({ className = "", text, withExclamationMark = false }) => {
  const [isShow, setIsShow] = useState(false);
  const [tipClassName, setTipClassName] = useState("tip_top tip_left");
  const arrowLength = useMemo(() => parseInt(getScssVariableValue("--tipArrowLength")), []);
  const arrowOffset = useMemo(() => parseInt(getScssVariableValue("--tipArrowOffset")), []);
  const iconLength = useMemo(() => parseInt(getScssVariableValue("--tipIconLength")), []);
  const minTextLength = 40;
  const iconRef = useRef();
  const tipBodyRef = useRef();
  const tipContainerClassNames = classnames(className, "tip-container");
  const tipClassNames = classnames(
    "tip",
    tipClassName,
    text.length <= minTextLength ? "tip_small" : "tip_big"
  );
  const handleMouseEnter = useCallback(() => {
    setIsShow(true);
  }, []);
  useEffect(() => {
    if (isShow) {
      const iconRect = iconRef.current.getBoundingClientRect();
      const tipRect = tipBodyRef.current.getBoundingClientRect();
      const widthPosition = iconRect.left > tipRect.width - arrowOffset ? "tip_left" : "tip_right";
      const heightPosition = iconRect.top > tipRect.height + arrowLength ? "tip_top" : "tip_bottom";
      setTipClassName(`${heightPosition} ${widthPosition}`);
      if (widthPosition === "tip_left") {
        const computedArrowOffset = arrowOffset + (iconLength + arrowLength) / 2;
        tipBodyRef.current.style.left = `${iconRect.left - (tipRect.width - computedArrowOffset)}px`;
      } else {
        const computedArrowOffset = arrowOffset - (iconLength - arrowLength) / 2;
        tipBodyRef.current.style.left = `${iconRect.left - computedArrowOffset}px`;
      }
      tipBodyRef.current.style.top = heightPosition === "tip_top" ? `${iconRect.top - tipRect.height - arrowLength}px` : `${iconRect.bottom + arrowLength}px`;
    }
  }, [arrowLength, arrowOffset, iconLength, isShow]);
  const handleMouseLeave = () => {
    setIsShow(false);
  };
  useEffect(() => {
    const node = iconRef.current;
    if (iconRef.current) {
      node.addEventListener("mouseenter", handleMouseEnter);
      node.addEventListener("mouseleave", handleMouseLeave);
      return () => {
        node.removeEventListener("mouseenter", handleMouseEnter);
        node.removeEventListener("mouseleave", handleMouseLeave);
      };
    }
  }, [handleMouseEnter, isShow]);
  return /* @__PURE__ */ jsxs("div", { "data-testid": "tip", className: tipContainerClassNames, children: [
    /* @__PURE__ */ jsx("div", { ref: iconRef, className: "tip-wrapper", children: withExclamationMark ? /* @__PURE__ */ jsx(SvgExclamationMark, { "data-testid": "tip-icon" }) : /* @__PURE__ */ jsx(SvgQuestionMark, { "data-testid": "tip-icon" }) }),
    createPortal(
      /* @__PURE__ */ jsx(CSSTransition, { in: isShow, timeout: 200, classNames: "fade", unmountOnExit: true, children: /* @__PURE__ */ jsx("div", { ref: tipBodyRef, "data-testid": "tip-text", className: tipClassNames, children: text }) }),
      document.getElementById("overlay_container")
    )
  ] });
};
Tip.propTypes = {
  className: PropTypes.string,
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
  withExclamationMark: PropTypes.bool
};
export {
  Tip as default
};
//# sourceMappingURL=Tip.mjs.map
