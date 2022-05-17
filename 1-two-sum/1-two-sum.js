/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let map = new Map;
    
    for(let i = 0; i < nums.length; i++){
        let missing = target - nums[i];
        if(map.has(missing)){
            return [map.get(missing), i];
        }
        map.set(nums[i], i);
    }
};