/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
    let result = [0, 1];
    nums.sort((a,b) => {return a - b});
    
    for(let i = 1; i < nums.length; i++) {
        if(nums[i] === nums[i - 1]) {
            result[0] = nums[i];
        } else if(nums[i] > nums[i - 1] + 1) {
            result[1] = nums[i - 1] + 1;
        }
    }
    
    if(nums[nums.length - 1] !== nums.length) {
        result[1] = nums.length;
    }
    
    return result;
};