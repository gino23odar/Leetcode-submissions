/**
 * @param {number} columnNumber
 * @return {string}
 */

var convertToTitle = function(columnNumber) {
  const digits = [];
  while (columnNumber > 0) {
    digits.unshift((columnNumber - 1) % 26);
    columnNumber = Math.trunc((columnNumber - 1) / 26);
  }
  return String.fromCharCode(...digits.map(d => d + 65));
};