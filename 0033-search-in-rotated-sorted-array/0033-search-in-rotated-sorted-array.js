/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {

    let left = 0, right = nums.length -1;
    while(left < right){
        
        let mid = Math.floor((left+right)/2);
        if(nums[mid] == target){
            return mid;
        } else if(nums[mid] > nums[right]){
            left = mid + 1;
        } else {
            right = mid;
        }
    }
    let lowestIdx = left;
    return searchOff(nums, 0, nums.length-1,target, lowestIdx);
}

const searchOff = (nums, low, high, target, offset) =>{
    if(low > high) return -1;
    
    let mid = Math.floor((low + high)/2);
    let off = (mid + offset) % nums.length;
    
    if(nums[off] == target)  return off;
    
    if(target < nums[off]){
        return searchOff(nums, low, mid - 1, target, offset);
    } else {
        return searchOff(nums, mid + 1, high, target, offset);
    }
}