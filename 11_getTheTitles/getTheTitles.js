const books = [
  {
    title: "Book",
    author: "Name",
  },
  {
    title: "Book2",
    author: "Name2",
  },
];

const getTheTitles = function (arr) {
  return arr.map((el) => el.title);
};

// Do not edit below this line
module.exports = getTheTitles;
