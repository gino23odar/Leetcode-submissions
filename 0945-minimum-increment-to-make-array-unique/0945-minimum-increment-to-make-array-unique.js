/**
 * @param {number[]} nums
 * @return {number}
 */
var minIncrementForUnique = function(nums) {
    let moves = 0;
    nums.sort((a,b) => a - b)
    
    let cnt = 0;
    for (let i = 1; i < nums.length; ++i) {
        cnt += nums[i] > nums[i - 1] ? 0 : nums[i - 1] + 1 - nums[i];
        nums[i] = Math.max(nums[i], nums[i - 1] + 1);
    }
  return cnt;
};