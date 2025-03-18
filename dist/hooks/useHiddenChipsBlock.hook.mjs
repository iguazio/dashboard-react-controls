import { useState, useMemo, useCallback, useEffect } from "react";
import classnames from "classnames";
import { getTransitionEndEventName } from "../utils/common.util.mjs";
const useHiddenChipsBlock = (hiddenChipsCounterRef, hiddenChipsPopUpRef) => {
  const [isTop, setIsTop] = useState(false);
  const [isLeft, setIsLeft] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const transitionEndEventName = useMemo(() => getTransitionEndEventName(), []);
  const hiddenChipsBlockClassNames = classnames(
    "chip-block-hidden",
    isTop ? "chip-block-hidden_top" : "chip-block-hidden_bottom",
    isLeft ? "chip-block-hidden_left" : "chip-block-hidden_right",
    isVisible && "chip-block-hidden_visible"
  );
  const resizePopUp = useCallback(() => {
    if ((hiddenChipsPopUpRef == null ? void 0 : hiddenChipsPopUpRef.current) && (hiddenChipsCounterRef == null ? void 0 : hiddenChipsCounterRef.current)) {
      const offset = 10;
      const offsetMargin = 20;
      const elementRect = hiddenChipsCounterRef.current.getBoundingClientRect();
      const elementRectRight = Math.floor(window.innerWidth - elementRect.left - elementRect.width);
      const elementRectBottom = Math.floor(
        window.innerHeight - elementRect.top - elementRect.height
      );
      let isLeftPosition = false;
      let isTopPosition = false;
      hiddenChipsPopUpRef.current.style.maxWidth = "100%";
      hiddenChipsPopUpRef.current.style.maxHeight = "100%";
      if (elementRect.left > hiddenChipsPopUpRef.current.clientWidth) {
        isLeftPosition = true;
      } else if (elementRectRight > hiddenChipsPopUpRef.current.clientWidth) {
        isLeftPosition = false;
      } else {
        isLeftPosition = elementRect.left > elementRectRight;
        const popUpMaxWidth = Math.max(elementRect.left, elementRectRight);
        hiddenChipsPopUpRef.current.style.maxWidth = `${popUpMaxWidth}px`;
      }
      hiddenChipsPopUpRef.current.style.right = isLeftPosition ? `${elementRectRight}px` : "unset";
      hiddenChipsPopUpRef.current.style.left = isLeftPosition ? "unset" : `${elementRect.left}px`;
      if (elementRect.top > hiddenChipsPopUpRef.current.clientHeight + offset + offsetMargin) {
        isTopPosition = true;
      } else if (elementRectBottom > hiddenChipsPopUpRef.current.clientHeight + offset + offsetMargin) {
        isTopPosition = false;
      } else {
        isTopPosition = elementRect.top > elementRectBottom + offset;
        const popUpMaxHeight = Math.max(elementRect.top, elementRectBottom) - offset - offsetMargin;
        hiddenChipsPopUpRef.current.style.maxHeight = `${popUpMaxHeight}px`;
      }
      hiddenChipsPopUpRef.current.style.bottom = isTopPosition ? `${elementRectBottom + elementRect.height + offset}px` : "unset";
      hiddenChipsPopUpRef.current.style.top = isTopPosition ? "unset" : `${elementRect.bottom + offset}px`;
      setIsTop(isTopPosition);
      setIsLeft(isLeftPosition);
      setIsVisible(true);
    }
  }, [hiddenChipsCounterRef, hiddenChipsPopUpRef]);
  useEffect(() => {
    if ((hiddenChipsPopUpRef == null ? void 0 : hiddenChipsPopUpRef.current) && (hiddenChipsCounterRef == null ? void 0 : hiddenChipsCounterRef.current)) {
      window.addEventListener("resize", resizePopUp);
      window.addEventListener(transitionEndEventName, resizePopUp);
      return () => {
        window.removeEventListener("resize", resizePopUp);
        window.removeEventListener(transitionEndEventName, resizePopUp);
      };
    }
  }, [hiddenChipsPopUpRef, hiddenChipsCounterRef, resizePopUp, transitionEndEventName]);
  useEffect(() => {
    resizePopUp();
  }, [resizePopUp]);
  return {
    hiddenChipsBlockClassNames
  };
};
export {
  useHiddenChipsBlock
};
//# sourceMappingURL=useHiddenChipsBlock.hook.mjs.map
