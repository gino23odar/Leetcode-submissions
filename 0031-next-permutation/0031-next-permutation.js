/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
  let firstMinIndex = -1;
  let firstMaxIndex = -1;
  let minDiff = Infinity;
  
  for (let i = nums.length - 1; i > 0; i--) {
    if (nums[i - 1] < nums[i]) { 
      firstMinIndex = i - 1;
      break;
    }
  }

  if (firstMinIndex < 0) {
    nums.sort((a, b) => a - b);
    return;
  }
  
  for (let i = firstMinIndex; i < nums.length; i++) {
      let diff = nums[i] - nums[firstMinIndex];
      if (diff > 0 && diff < minDiff) {
        minDiff = diff;
        firstMaxIndex = i;
      }
  }

  nums[firstMinIndex] ^= nums[firstMaxIndex];
  nums[firstMaxIndex] ^= nums[firstMinIndex];
  nums[firstMinIndex] ^= nums[firstMaxIndex];
  
  const sorted = nums.slice(firstMinIndex + 1, nums.length);
  sorted.sort((a, b) => a - b);
  let i = sorted.length, j = nums.length;
  while (i-- && j--){
    nums[j] = sorted[i];
  }
  return;
};