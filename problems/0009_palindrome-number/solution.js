/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  if (x < 0) return false;
  const splitted = x.toString().split('');
  for (let i = 0; i < splitted.length / 2; i++) {
      if (splitted[i] !== splitted[splitted.length - i - 1]) {
          return false;
      }
  }
  return true;
};