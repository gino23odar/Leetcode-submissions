/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
    var map = {}, sum = 0, ans = 0;
    
    map[0] = 1;
    
    for(let i = 0; i < nums.length; i++){
        sum += nums[i];
        ans += (map[sum - k] || 0);
        map[sum] = (map[sum] || 0) + 1;
    }
    return ans;
};