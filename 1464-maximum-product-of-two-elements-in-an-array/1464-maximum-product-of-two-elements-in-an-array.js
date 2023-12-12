/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    nums.sort((a,b) => a - b);
    let ans = (nums[nums.length -1] -1)*(nums[nums.length-2] -1)
    return ans
};