/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    let left = 0, right = 0;
    for(let i = 1; i < nums.length; i++){
        right += nums[i];
    }
    if(right == 0) return 0;
    
    for(let i = 0, j = 1; j < nums.length; i++, j++){
        right -= nums[j];
        left += nums[i];
        if(right == left) return i + 1;
    }
    return -1;
};