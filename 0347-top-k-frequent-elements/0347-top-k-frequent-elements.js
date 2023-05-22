/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    const count = {}
    nums.forEach(n => count[n] = (count[n] || 0) + 1)
    return Object.keys(count).sort((a, b) => count[b] - count[a]).slice(0, k)
};