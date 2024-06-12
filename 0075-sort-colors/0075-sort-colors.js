/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let isSorted = false;
    while(!isSorted){
        isSorted = true;
        for(let i = 0; i < nums.length - 1; i++){
            if(nums[i] > nums[i + 1]){
                isSorted = false;
                [nums[i], nums[i + 1]] = [nums[i + 1], nums[i]];
            }
        }
    }
};