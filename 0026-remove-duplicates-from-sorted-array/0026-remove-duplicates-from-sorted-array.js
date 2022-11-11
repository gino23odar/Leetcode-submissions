/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let start = 0
    for(i = 0; i < nums.length; i++){
        if(nums[i] != nums[i+1]){
            nums[start] = nums[i]
            start++
        }
    }
    return start
};