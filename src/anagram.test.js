'use strict';

const anagram = require('./anagram');

xit('should return true if both strings have the same letters', () => {
  expect(anagram('casey', 'acesy')).toBe(true);
});

xit('should return false if two words are not anagrams', () => {
  expect(anagram('taco', 'Casey')).toBe(false);
});

xit('should ignore empty spaces', () => {
  expect(anagram('Steve Kinney', 'teenyknives')).toBe(true);
});

xit('should be case insensitive', () => {
  expect(anagram('Steve', 'evest')).toBe(true);
});

// xit('should return false if the words are different lengths', () => {
//   expect(anagram('taco', 'Casey')).toBe(false);
// });
