/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let total = 0, sum = 0;
    for(let i = 0; i < nums.length; i++){
        sum += nums[i];
        total += i + 1; 
    }
    return total - sum
};