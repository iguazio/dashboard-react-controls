import { roundFloats as l } from "./common.util.mjs";
const d = [
  {
    type: "labels",
    boldValue: !1,
    background: "purple",
    borderColor: "transparent",
    density: "dense",
    font: "purple",
    borderRadius: "primary"
  },
  {
    type: "metrics",
    boldValue: !1,
    background: "grey",
    borderColor: "transparent",
    borderRadius: "primary",
    density: "dense",
    font: "primary"
  },
  {
    type: "parameters",
    boldValue: !1,
    background: "orange",
    borderColor: "transparent",
    borderRadius: "primary",
    density: "dense",
    font: "orange"
  },
  {
    type: "results",
    boldValue: !1,
    background: "grey",
    borderColor: "transparent",
    borderRadius: "primary",
    density: "dense",
    font: "primary"
  },
  {
    type: "relations",
    boldValue: !1,
    background: "orange",
    borderColor: "transparent",
    borderRadius: "primary",
    density: "dense",
    font: "orange"
  }
], p = (e) => d.find((r) => r.type === e), u = (e = [], r, a) => {
  if (e.length > r) {
    let n = `+ ${e.length - r}`;
    const t = e.slice(r).map((o) => ({ value: o, delimiter: a })), s = e.slice(0, r).map((o) => ({ value: o, delimiter: a }));
    return s.push({
      value: n,
      delimiter: a
    }), {
      visibleChips: s,
      hiddenChips: t
    };
  }
  return {
    visibleChips: e.map((n) => ({ value: n, delimiter: a }))
  };
}, b = (e) => {
  const r = e.value.indexOf(":"), a = e.value.slice(r + 1);
  return {
    chipLabel: r > 0 ? e.value.slice(0, r) : e.value,
    chipValue: r > 0 ? Number.isInteger(a) ? l(a) : a : ""
  };
};
export {
  u as cutChips,
  b as getChipLabelAndValue,
  p as getChipOptions
};
//# sourceMappingURL=chips.util.mjs.map
