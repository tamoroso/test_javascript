function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function sum(array) {
  return array.reduce((a, b) => a + b, 0);
}

function multiply(array) {
  return array.reduce((a, b) => a * b);
}

function power(a, b) {
  return Math.pow(a, b);
}

function factorial(num) {
  if (num < 0) return -1;
  else if (num === 0) return 1;
  else {
    return num * factorial(num - 1);
  }
}

module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
