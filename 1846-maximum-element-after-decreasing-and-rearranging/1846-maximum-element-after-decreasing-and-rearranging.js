/**
 * @param {number[]} arr
 * @return {number}
 */
var maximumElementAfterDecrementingAndRearranging = function(arr) {
    return arr.sort((a, b) => a - b).reduce((acc, num) => (acc = Math.min(acc + 1, num)), 0);
};