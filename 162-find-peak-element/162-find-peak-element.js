/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    let max = Math.max(...nums);
    return nums.indexOf(max);
};