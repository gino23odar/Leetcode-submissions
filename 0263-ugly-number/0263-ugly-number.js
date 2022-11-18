/**
 * @param {number} n
 * @return {boolean}
 */
var isUgly = function(n) {
  const v = [5, 3, 2];
  for (let i = 0; i < v.length && n > 1; i++) {
    while (n % v[i] === 0) n /= v[i];
  } 
  return n === 1;
};