/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function(nums, k) {
    let count = 0;
    for(let start = 0; start < nums.length; start++){
        let windowSum = 1;
        for(let end = start; end < nums.length; end++){
            windowSum *= nums[end];
            if(windowSum < k){
                count++;
            } else {
                break;
            }
        }
    }
    return count;
};