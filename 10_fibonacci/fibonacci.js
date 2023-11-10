const fibonacci = function (index) {
  let fibonacciArray = [];
  fibonacciArray[0] = 0;
  fibonacciArray[1] = 1;

  index = parseInt(index);

  if (index < 0) {
    return "OOPS";
  }

  for (let i = 2; i <= index; i++) {
    fibonacciArray[i] = fibonacciArray[i - 2] + fibonacciArray[i - 1];
  }
  return fibonacciArray[index];
};

// Do not edit below this line
module.exports = fibonacci;
