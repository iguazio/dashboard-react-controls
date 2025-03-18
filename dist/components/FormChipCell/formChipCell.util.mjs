const uniquenessError = { name: "uniqueness", label: "Key must be unique" };
const getTextWidth = (elementWithText) => {
  if (!elementWithText) {
    return 0;
  }
  const hiddenElementId = "chips-hidden-element";
  let hiddenElement = document.getElementById(hiddenElementId);
  if (!hiddenElement) {
    hiddenElement = document.createElement("span");
    const styles = {
      position: "absolute",
      left: "-10000px",
      top: "auto",
      visibility: "hidden"
    };
    for (const [styleName, styleValue] of Object.entries(styles)) {
      hiddenElement.style[styleName] = styleValue;
    }
    hiddenElement.style.font = window.getComputedStyle(elementWithText).font;
    hiddenElement.id = hiddenElementId;
    hiddenElement.tabIndex = -1;
    document.body.append(hiddenElement);
  }
  hiddenElement.textContent = elementWithText.value;
  return hiddenElement.offsetWidth ?? 0;
};
export {
  getTextWidth,
  uniquenessError
};
//# sourceMappingURL=formChipCell.util.mjs.map
