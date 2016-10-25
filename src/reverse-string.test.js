const reverseString = require('./reverse-string');

xit('should reverse a string', () => {
  expect(reverseString('hello')).toBe('olleh');
});
