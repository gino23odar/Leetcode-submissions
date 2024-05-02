/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxK = function(nums) {
    let sorted = nums.sort((a,b) => b - a);
    //console.log(sorted)
    let map = new Map();
    for(let i = 0; i < nums.length; i++){
        map.set(nums[i], map.get(nums[i])+1 || 1);
    }
    //console.log(map)
    let max = -1;
    for(let i = 0; i < nums.length; i++){
        if(map.get(-nums[i])){
            max = nums[i]
            break
        }
    }
    return max;
};