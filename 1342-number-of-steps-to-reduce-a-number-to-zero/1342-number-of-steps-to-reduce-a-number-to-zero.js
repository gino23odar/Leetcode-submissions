/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function (num) {
  let count = 0;
  let value = num;
  while (value) {
    if (value % 2 === 0) {
      value /= 2;
      count++;
    } else if (value % 2 === 1) {
      value--;
      count++;
    }
  }
  return count;
};
