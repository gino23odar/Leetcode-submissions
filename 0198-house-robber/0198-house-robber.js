/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    if(nums.length === 1) return nums[0];
    
    let way = new Array(nums.length);
    way[1] = nums[0];
    way[2] = Math.max(nums[0], nums[1]);
    
    if(nums.length === 2) return way[2];
    
    for(let i = 3; i <= nums.length; i++){
        way[i] = Math.max(way[i -1], way[i-2] + nums[i-1]);
    }
    return way[nums.length];
};