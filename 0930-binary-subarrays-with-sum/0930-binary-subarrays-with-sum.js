/**
 * @param {number[]} nums
 * @param {number} goal
 * @return {number}
 */
var numSubarraysWithSum = function(nums, goal) {
    const map = new Map();
    map.set(0, 1);
    let sum = 0;
    let count = 0;
    
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        
        if (map.has(sum - goal)) count += map.get(sum - goal);
        
        if (!map.has(sum)) map.set(sum, 0);
        map.set(sum, map.get(sum) + 1);
    }
    
    return count;
};