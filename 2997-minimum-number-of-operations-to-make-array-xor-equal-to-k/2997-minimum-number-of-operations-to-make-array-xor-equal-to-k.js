/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function(nums, k) {
    for(let i = 0; i < nums.length; i++){
        k ^= nums[i]
    }
    
    let count = 0;
    while(k){
        count += k & 1;
        k >>>= 1;
    }
    return count
};