/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countSubarrays = function(nums, k) {
    let subarrays = 0, count = 0;
    const max = Math.max(...nums);
    
    for (let l = 0, r = 0; r < nums.length; r++) {
        if (nums[r] === max) count++;
        while (count >= k) {
            subarrays += nums.length - r;
            if (nums[l++] === max) count--;
        }
    }
    return subarrays;
};