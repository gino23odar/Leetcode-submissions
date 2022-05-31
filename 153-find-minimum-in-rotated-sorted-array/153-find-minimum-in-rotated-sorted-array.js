/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let len = nums.length;
    let left = 0, right = len -1;
    
    while(left < right){
        let center = Math.floor((left+right)/2);
        if(nums[center] > nums[right]){
            left = center + 1;
        } else {
            right = center;
        }
    }
    //let indexOfLowest = low;
    return nums[left];
};