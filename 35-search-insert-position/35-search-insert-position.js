/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let low = 0;
    let high = nums.length;
    
    while(low < high){
        const mid = Math.floor((low + high)/2);
        if(nums[mid] < target){
            low = mid + 1;
        } else{
            high = mid;
        }
    } 
    return low;
};