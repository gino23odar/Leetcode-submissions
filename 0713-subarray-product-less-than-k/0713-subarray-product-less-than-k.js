/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function(nums, k) {
    let left = 0;
    let right = 0;
    let prod = 1;
    let result = 0;

    while(right < nums.length){
        if(k <= 1) return 0
        prod = prod * nums[right]
        while(prod >= k){
            prod = prod/nums[left];
            left++;
        }
        result += (right - left +1);
        right++;
    }

    return result
};