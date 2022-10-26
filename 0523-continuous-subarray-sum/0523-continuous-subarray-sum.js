/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var checkSubarraySum = function(nums, k) {
    let sum = 0;
    const map = {};
    map[0] = -1;
    
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i]
        if (k != 0) sum %= k;
        if ( map[sum] !== undefined) {
            if(i - map[sum] > 1) return true
        } else {
            map[sum] = i
        }
    }
    return false;
};