const sumAll = function (numberA, numberB) {
  if (
    typeof numberA === "number" &&
    numberA >= 0 &&
    typeof numberB === "number" &&
    numberB >= 0
  ) {
    const range = (start, stop, step) =>
      Array.from(
        { length: (stop - start) / step + 1 },
        (_, i) => start + i * step
      );
    if (numberA > numberB) {
      return range(numberB, numberA, 1).reduce((a, b) => a + b, 0);
    } else {
      return range(numberA, numberB, 1).reduce((a, b) => a + b, 0);
    }
  } else {
    return "ERROR";
  }
};

module.exports = sumAll;
