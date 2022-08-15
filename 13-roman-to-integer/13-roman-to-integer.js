/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const symbols = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let result = 0;
  for (let index = 0; index < s.length; index++) {
    s[index + 1] && symbols[s[index]] < symbols[s[index + 1]]
      ? (result -= symbols[s[index]])
      : (result += symbols[s[index]]);
  }

  return result;
};