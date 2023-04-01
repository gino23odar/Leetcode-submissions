/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  var left = 0
  var right = nums.length - 1
  while(right >= left){
      if(nums[right] == target){
          return right
      }
      if(nums[left] == target){
          return left
      }
      left += 1
      right -= 1
  }
  return -1
};