const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (array) {
  return array.reduce((acc, value) => {
    return acc + value;
  }, 0);
};

const multiply = function (array) {
  return array.reduce((acc, value) => {
    return acc * value;
  }, 1);
};

const power = function (a, b) {
  return a ** b;
};

const factorial = function (n) {
  if (n === 0 || n === 1) {
    return 1;
  } else if (n > 1) {
    for (let i = n - 1; i > 1; i--) {
      n *= i;
    }
    return n;
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
