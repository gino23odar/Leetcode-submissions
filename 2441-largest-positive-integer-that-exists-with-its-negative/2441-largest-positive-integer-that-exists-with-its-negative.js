/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxK = function(nums) {
    let sorted = nums.sort((a,b) => b - a);
    let map = new Map();
    let max = -1;
    for(let i = 0; i < nums.length; i++){
        map.set(nums[i], map.get(nums[i])+1 || 1);
        if(map.get(-nums[i])){
            max = Math.abs(nums[i]);
        }
    }
    return max;
};