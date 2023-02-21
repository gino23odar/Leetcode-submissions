/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(nums) {
  let prod = 1;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) prod = prod*-1;
    else {
      const appears = prod % nums[i] === 0;
      if (appears) {
        prod = prod / nums[i];
      }
      else {
        prod = prod * nums[i];
      }
    }
  }
  return prod < 0 ? 0 : prod;
};