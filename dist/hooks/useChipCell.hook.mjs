import { useState, useMemo, useRef, useCallback, useEffect, useLayoutEffect } from "react";
import { throttle } from "lodash";
import { getTransitionEndEventName, isEveryObjectValueEmpty } from "../utils/common.util.mjs";
import { getFirstScrollableParent } from "../utils/getFirstScrollableParent.util.mjs";
const useChipCell = (isEditMode, visibleChipsMaxLength) => {
  const [showHiddenChips, setShowHiddenChips] = useState(false);
  const [chipsSizes, setChipsSizes] = useState({});
  const [showChips, setShowChips] = useState(false);
  const [visibleChipsCount, setVisibleChipsCount] = useState(8);
  const transitionEndEventName = useMemo(() => getTransitionEndEventName(), []);
  const chipsCellRef = useRef();
  const chipsWrapperRef = useRef();
  const hiddenChipsCounterRef = useRef();
  const hiddenChipsPopUpRef = useRef();
  const handleShowElements = useCallback(
    (event) => {
      var _a, _b;
      if (!isEditMode || isEditMode && visibleChipsMaxLength) {
        if (((_a = hiddenChipsCounterRef.current) == null ? void 0 : _a.contains(event.target)) && !showHiddenChips) {
          setShowHiddenChips(true);
        } else {
          setShowHiddenChips(false);
        }
      }
      event && ((_b = hiddenChipsCounterRef.current) == null ? void 0 : _b.contains(event.target)) && event.stopPropagation();
    },
    [isEditMode, showHiddenChips, visibleChipsMaxLength]
  );
  useEffect(() => {
    if (showHiddenChips) {
      window.addEventListener("click", handleShowElements, true);
    }
    return () => window.removeEventListener("click", handleShowElements, true);
  }, [showHiddenChips, handleShowElements]);
  const handleScroll = useCallback(
    (event) => {
      if (event.target.parentElement !== (hiddenChipsPopUpRef == null ? void 0 : hiddenChipsPopUpRef.current)) {
        setShowHiddenChips(false);
      }
    },
    [hiddenChipsPopUpRef]
  );
  useEffect(() => {
    if (showHiddenChips) {
      window.addEventListener("scroll", handleScroll, true);
    }
    return () => window.removeEventListener("scroll", handleScroll, true);
  }, [handleScroll, showHiddenChips]);
  const resizeChipCell = useCallback(() => {
    var _a, _b;
    if (hiddenChipsPopUpRef == null ? void 0 : hiddenChipsPopUpRef.current) {
      const scrollableParent = getFirstScrollableParent(hiddenChipsCounterRef.current.offsetParent);
      const scrollableParentRect = scrollableParent.getBoundingClientRect();
      const hiddenChipsCounterRect = (_a = hiddenChipsCounterRef.current) == null ? void 0 : _a.getBoundingClientRect();
      if (hiddenChipsCounterRect.left < scrollableParentRect.left || hiddenChipsCounterRect.top < scrollableParentRect.top || hiddenChipsCounterRect.right > scrollableParentRect.right || hiddenChipsCounterRect.bottom > scrollableParentRect.bottom || hiddenChipsCounterRect.right > window.innerWidth || hiddenChipsCounterRect.bottom > window.innerHeight) {
        setShowHiddenChips(false);
      }
    }
    if (!isEditMode && !isEveryObjectValueEmpty(chipsSizes)) {
      const parentSize = (_b = chipsCellRef.current) == null ? void 0 : _b.getBoundingClientRect().width;
      let maxLength = 0;
      let chipIndex = 0;
      const padding = 65;
      Object.values(chipsSizes).every((chipSize, index) => {
        if (maxLength + chipSize > parentSize || Object.values(chipsSizes).length > 1 && maxLength + chipSize + padding > parentSize) {
          chipIndex = index;
          return false;
        } else {
          maxLength += chipSize;
          if (index === Object.values(chipsSizes).length - 1) {
            chipIndex = 8;
          }
          return true;
        }
      });
      setVisibleChipsCount(chipIndex);
      setShowChips(true);
    }
  }, [chipsSizes, isEditMode]);
  useLayoutEffect(() => {
    resizeChipCell();
  }, [resizeChipCell]);
  useEffect(() => {
    const resizeChipCellDebounced = throttle(resizeChipCell, 500);
    if (!isEditMode) {
      window.addEventListener("resize", resizeChipCellDebounced);
      window.addEventListener(transitionEndEventName, resizeChipCellDebounced);
      return () => {
        window.removeEventListener("resize", resizeChipCellDebounced);
        window.removeEventListener(transitionEndEventName, resizeChipCellDebounced);
      };
    }
  }, [resizeChipCell, isEditMode, transitionEndEventName]);
  return {
    chipsCellRef,
    chipsWrapperRef,
    handleShowElements,
    hiddenChipsCounterRef,
    hiddenChipsPopUpRef,
    setChipsSizes,
    setShowHiddenChips,
    showChips,
    showHiddenChips,
    visibleChipsCount
  };
};
export {
  useChipCell
};
//# sourceMappingURL=useChipCell.hook.mjs.map
