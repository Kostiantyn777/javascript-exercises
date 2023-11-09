const palindromes = function (string) {
  let stringToLowerCase = string.toLowerCase();

  //Remove punctuation and word breaks
  let punctuation = /[\.,?!\s]/g;
  let stringNoPunctuation = stringToLowerCase.replace(punctuation, "");
  console.log(stringNoPunctuation);

  let reverseString = stringNoPunctuation.split("").reverse().join("");

  if (stringNoPunctuation === reverseString) {
    return true;
  } else {
    return false;
  }
};

// Do not edit below this line
module.exports = palindromes;
