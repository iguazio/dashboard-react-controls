const i = { name: "uniqueness", label: "Key must be unique" }, l = (t) => {
  if (!t)
    return 0;
  const n = "chips-hidden-element";
  let e = document.getElementById(n);
  if (!e) {
    e = document.createElement("span");
    const o = {
      position: "absolute",
      left: "-10000px",
      top: "auto",
      visibility: "hidden"
    };
    for (const [s, d] of Object.entries(o))
      e.style[s] = d;
    e.style.font = window.getComputedStyle(t).font, e.id = n, e.tabIndex = -1, document.body.append(e);
  }
  return e.textContent = t.value, e.offsetWidth ?? 0;
};
export {
  l as getTextWidth,
  i as uniquenessError
};
//# sourceMappingURL=formChipCell.util.mjs.map
