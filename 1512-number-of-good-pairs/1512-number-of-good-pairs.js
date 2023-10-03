/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function(nums) {
    let map = new Map();
    let res = 0;
    for(let i = 0; i < nums.length; i++){
        if(map[nums[i]]){
            map[nums[i]] += 1;
        } else {
            map[nums[i]] = 1;
        }
    }
    
    const values = Object.values(map);
    
    for(let val of values){
        res += Math.floor(val * (val-1) / 2);
    }
    return res
};