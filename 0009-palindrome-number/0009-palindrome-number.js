/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  if (x < 0) return false;
  let left = 10 ** Math.trunc(Math.log10(Math.abs(x)));
  while (0 < x) {
    if (Math.trunc(x / left) !== x % 10) return false;
    x = Math.trunc((x % left) / 10);
    left /= 100;
  }
  return true;
};