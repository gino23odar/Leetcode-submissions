/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    let i = 0;
    while(i < nums.length){
        if(nums[i-1]){
           nums[i] += nums[i-1]; 
        }
        i++;
    }
    return nums;
};