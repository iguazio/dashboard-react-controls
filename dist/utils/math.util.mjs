const n = (r, o, e) => {
  const a = Math.max(
    (r.toString().split(".")[1] || "").length,
    (o.toString().split(".")[1] || "").length
  ), t = Math.pow(10, a);
  switch (e) {
    case "+":
      return (Math.round(r * t) + Math.round(o * t)) / t;
    case "-":
      return (Math.round(r * t) - Math.round(o * t)) / t;
    default:
      return 0;
  }
};
export {
  n as performFloatOperation
};
//# sourceMappingURL=math.util.mjs.map
