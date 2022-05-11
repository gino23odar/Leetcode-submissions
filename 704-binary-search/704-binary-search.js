/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let low = 0;
    let high = nums.length -1;
    while(low <= high){
        let center = Math.floor((low + high)/2);
        if(nums[center] === target){
            return center;
        }else if(nums[center] < target){
            low = center + 1;
        }else if(nums[center] > target){
            high = center -1;
        }
    }
    return -1;
};