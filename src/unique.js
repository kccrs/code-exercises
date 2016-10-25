'use strict';

module.exports = (string) => {
  // this is a whole hodgepodge of ideas, not necessarily meant to work together

  string = string.toLowerCase().split('').sort();

  string = [...string.toLowerCase()].sort();

  const letters = new Set();
  for (const letter of string) {
    if (letters[letter]) { return false; }
    letters[letter] = true;
  }
  return true;

  let stringArray = [];
  for (i = 0; i <= string.length; i++) {
    if (stringArray.includes(i)) {
      stringArray.push(i);
    }
  }
};

// function isInArray(value, array) {
//   return array.indexOf(value) > -1;
// }
// isInArray(1, [1,2,3]); // true
