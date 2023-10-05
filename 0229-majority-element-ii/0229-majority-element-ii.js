/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
    let map = new Map();
    let n = nums.length / 3;
    let res = [];
    for(let i = 0; i < nums.length; i++){
        if(map.has(nums[i])){
            map.set(nums[i], map.get(nums[i]) + 1);
        } else {
            map.set(nums[i], 1);
        }
    }
    for(const [key, value] of map.entries()) {
        if(value > n){
            res.push(key)
        }
    }
    return res
};