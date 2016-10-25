'use strict';

module.exports = (first, second) => {

  // first = first.toLowerCase().split('').sort().join('').trim();
  // second = second.toLowerCase().split('').sort().join('').trim();
  //
  // if (first === second) {
  //   return true;
  // } else {
  //   return false;
  // }
  if (first.length !== second.length) {
    return false;
  }

  const firstWordLetters = {};
  const secondWordLetters = {};

  for (let letter of first) {
    firstWordLetters[letter] = firstWordLetters[letter] ? firstWordLetters[letter] + 1 : 1;
  }

  for (let letter of second) {
    secondWordLetters[letter] = secondWordLetters[letter] ? secondWordLetters[letter] + 1 : 1;
  }
  //
  // if (Object.keys(firstWordLetters).length !== Object.keys(secondWordLetters).length) {
  //   return false;
  // }

  for (let letter of Object.keys(firstWordLetters)) {
    if (firstWordLetters[letter] !== secondWordLetters[letter]) {
      return false;
    }
  }

  return true;
};
