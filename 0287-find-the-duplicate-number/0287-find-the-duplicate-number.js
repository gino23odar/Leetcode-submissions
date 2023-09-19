/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    let map = new Map();
    for(let i = 0; i < nums.length; i++){
        if(map[nums[i]]){
            return nums[i]
        } else {
            map[nums[i]] = 1;
        }
    }
};