// module.exports = (string) => {
//   return string.split('').reverse().join('');
// };

module.exports = (string) => {
  var result = '';

  for (var i = string.length -1; i >= 0; i--) {
    result += string[i];
  }
  return result;
};
