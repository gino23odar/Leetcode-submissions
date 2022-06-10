/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    if(nums.length === 1) return nums[0];
    if(nums.length === 2) return Math.max(nums[0], nums[1]);
    
    let path1 = [], path2 = [];
    
    path1[0] = nums[0];
    path1[1] = Math.max(nums[0], nums[1]);
    for(let i = 2; i <= nums.length - 2; i++){
        path1[i] = Math.max(path1[i-1], path1[i-2] + nums[i]);
    }
    
    path2[1] = nums[1];
    path2[2] = Math.max(nums[1], nums[2]);
    for(let i = 3; i <= nums.length - 1; i++){
        path2[i] = Math.max(path2[i-1], path2[i-2] + nums[i]);
    }
    
    
    return Math.max(path1[nums.length-2], path2[nums.length-1]);
};