const leapYears = function (year) {
  return new Date(year, 1, 29).getDate() === 29;
};

module.exports = leapYears;
