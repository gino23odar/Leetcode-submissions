/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    if(nums.length < 3) return nums[0]
    let n = Math.floor(nums.length/2)
    let map = new Map();
    
    for(let i = 0; i < nums.length; i++){
        if(map.get(nums[i])){
            if(map.get(nums[i]) == n){
                return nums[i]
            }
            map.set(nums[i], map.get(nums[i])+1)
        } else {
            map.set(nums[i], 1)
        }
    }
};