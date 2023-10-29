const convertToCelsius = function (x) {
  let tempCelsius = Math.round((((x - 32) * 5) / 9) * 10) / 10;
  return tempCelsius;
};

const convertToFahrenheit = function (y) {
  let tempFahr = Math.round(((y * 9) / 5 + 32) * 10) / 10;
  return tempFahr;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
