/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let ans = 0, len = nums.length;
    
    for(let i = 0; i < len; i++){
        ans ^= nums[i];
    }
    return ans;
};