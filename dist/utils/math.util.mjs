const performFloatOperation = (num1, num2, operator) => {
  const precision = Math.max(
    (num1.toString().split(".")[1] || "").length,
    (num2.toString().split(".")[1] || "").length
  );
  const multiplier = Math.pow(10, precision);
  switch (operator) {
    case "+":
      return (Math.round(num1 * multiplier) + Math.round(num2 * multiplier)) / multiplier;
    case "-":
      return (Math.round(num1 * multiplier) - Math.round(num2 * multiplier)) / multiplier;
    default:
      return 0;
  }
};
export {
  performFloatOperation
};
//# sourceMappingURL=math.util.mjs.map
