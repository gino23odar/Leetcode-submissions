/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubarraySumCircular = function(nums) {
    let maxSum, max, minSum, min, total
    maxSum = max = minSum = min = total = nums[0]

    for(let i = 1; i < nums.length; i++){
        const n = nums[i]
        max = Math.max(n, n + max)
        maxSum = Math.max(max, maxSum)
        min = Math.min(n, n + min)
        minSum = Math.min(min, minSum)
        total += n
      }
      return maxSum > 0 ? Math.max(maxSum, total - minSum) : maxSum
};