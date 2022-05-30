/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let len = nums.length;
    let low = 0, high = len -1;
    
    while(low < high){
        let center = Math.floor((low+high)/2);
        if(nums[center] > nums[high]){
            low = center + 1;
        } else {
            high = center;
        }
    }
    let indexOfLowest = low;
    
    return searchWithOffset(nums, 0, len - 1, target, indexOfLowest);    
};

function searchWithOffset(nums, low, high, target, offset){
    if(low > high) return -1;
    
    let center = Math.floor((low + high) /2);
    let offCenter = (center + offset) % nums.length;
    
    if(nums[offCenter] == target) return offCenter;
    
    if(target < nums[offCenter]){
        return searchWithOffset(nums, low, center - 1, target, offset);
    } else {
        return searchWithOffset(nums, center + 1, high, target, offset);
    }
    
}