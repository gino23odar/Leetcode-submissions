/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  var last = -1;
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] === 0 && last === -1) {
      last = i;
    } else if (nums[i] !== 0 && last !== -1) {
        let temp = nums[i];
        nums[i] = nums[last];
        nums[last] = temp;
        last += 1;
    }
  }
};