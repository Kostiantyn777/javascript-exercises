const removeFromArray = function (defaultArg1 = [], ...optionalArg2) {
  
    let newArray = defaultArg1.filter((elem) => !optionalArg2.includes(elem));
  return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
