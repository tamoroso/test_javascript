const repeatString = function (string, number) {
  if (typeof string === "string" && typeof number === "number" && number >= 0) {
    return string.repeat(number);
  } else {
    return "ERROR";
  }
};

module.exports = repeatString;
