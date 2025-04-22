const t = (i, e) => {
  if (i.length > e) {
    let s = `+ ${i.length - e}`;
    const l = i.slice(e);
    return {
      visibleChips: i.slice(0, e),
      hiddenChips: l,
      hiddenChipsNumber: s
    };
  }
  return {
    visibleChips: i,
    hiddenChips: []
  };
};
export {
  t as generateChipsList
};
//# sourceMappingURL=generateChipsList.util.mjs.map
