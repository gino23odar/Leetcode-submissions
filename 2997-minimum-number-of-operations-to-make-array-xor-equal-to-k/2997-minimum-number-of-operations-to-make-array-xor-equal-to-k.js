/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function(nums, k) {
    let count = k;
    for(let i = 0; i < nums.length; i++){
        count ^= nums[i]
    }
    
    let total = 0;
    while(count){
        count = count & count-1;
        total++
    }
    return total
};