const findTheOldest = function (arr) {
  let sortedArray = arr.sort((person1, person2) => {
    const currentYear = new Date().getFullYear();

    const age1 = person1.yearOfDeath
      ? person1.yearOfDeath - person1.yearOfBirth
      : currentYear - person1.yearOfBirth;

    const age2 = person2.yearOfDeath
      ? person2.yearOfDeath - person2.yearOfBirth
      : currentYear - person2.yearOfBirth;

    return age2 - age1;
  });
  return sortedArray[0];
};
console.log(findTheOldest(people));
// Do not edit below this line
module.exports = findTheOldest;
