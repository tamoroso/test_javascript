const ftoc = function (temp) {
  let converted = (temp - 32) * (5 / 9);
  return parseFloat(converted.toFixed(1));
};

const ctof = function (temp) {
  let converted = (temp * 9) / 5 + 32;
  return parseFloat(converted.toFixed(1));
};

module.exports = {
  ftoc,
  ctof,
};
