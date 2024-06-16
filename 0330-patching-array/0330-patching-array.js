/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number}
 */
var minPatches = function(nums, n) {
	for (var sum = 0, idx = 0, added = 0; sum < n;) {
		added += idx === nums.length || nums[idx] > sum + 1 ? 1 : 0;
		sum += (nums[idx] || n) > sum + 1 ? sum + 1 : nums[idx++];
	}
	return added;  
};