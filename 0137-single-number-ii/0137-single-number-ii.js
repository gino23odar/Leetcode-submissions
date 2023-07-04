/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let map = new Map();
    for(let i = 0; i < nums.length; i++){
        if(map.get(nums[i])){
            map[nums[i]] = map.set(nums[i], map.get(nums[i])+1)
        } else {
            map.set(nums[i], 1)
        }
    }
    for(let [key,val] of map.entries()){
        if (val === 1) return key;
    }
};