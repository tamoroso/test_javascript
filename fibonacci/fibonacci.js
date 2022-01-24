const fibonacci = function (number) {
  let intNumber = parseInt(number);

  if (intNumber < 0) {
    return "OOPS";
  } else if (intNumber < 2) {
    return intNumber;
  }

  return fibonacci(intNumber - 1) + fibonacci(intNumber - 2);
};

module.exports = fibonacci;
