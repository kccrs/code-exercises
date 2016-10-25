'use strict';

const unique = require('./unique');

it('should return true if all letters in the string are unique', () => {
  expect(unique('casey')).toBe(true);
});

it('should return false if some letters in string are duplicates', () => {
  expect(unique('maryjane')).toBe(false);
});
