/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let red = [], white = [], blue = [];
    
    
    for(let i = 0; i < nums.length; i++){
        if(nums[i] == 0) red.push(nums[i]);
        if(nums[i] == 1) white.push(nums[i]);
        if(nums[i] == 2) blue.push(nums[i]);
    }
    
    nums.splice(0, nums.length);
    
    for(let i = 0; i < red.length; i++){
        nums.push(red[i]);
    }
    for(let i = 0; i < white.length; i++){
        nums.push(white[i]);
    }
    for(let i = 0; i < blue.length; i++){
        nums.push(blue[i]);
    }
     
    return nums;
};