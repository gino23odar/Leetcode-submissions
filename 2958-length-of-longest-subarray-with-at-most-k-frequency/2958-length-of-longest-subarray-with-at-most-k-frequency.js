/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxSubarrayLength = function(nums, k) {
    let map = new Map();

    let left = 0, right = 0; 
    let max = 0;

    while(right < nums.length && left <= right) {
        map.set(nums[right], map.get(nums[right])+1 || 1)

        if(map.get(nums[right]) <= k) {
            max = Math.max((right - left) + 1, max);
        }

        while(map.get(nums[right]) > k && left <= right) {
            map.set(nums[left], map.get(nums[left]) - 1);
            left++;
        }
        right++;
    }
    return max;
};