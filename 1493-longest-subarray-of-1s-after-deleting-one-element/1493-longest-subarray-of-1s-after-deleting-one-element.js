/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function(nums, k = 1) {
    let len = nums.length;
    let i = 0, j = i;

    while( j < len ) {
        if(nums[j] == 0) --k;
        if(k < 0 && nums[i++] == 0) ++k;
        ++j;
    }
    return j - i - 1;
};