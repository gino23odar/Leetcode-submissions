/**
 * @param {number[]} nums
 * @return {number}
 */
var findClosestNumber = function(nums) {
    let ans = 0;
    let min = Infinity;
    
    for(let i = 0; i < nums.length; i++){
        if(Math.abs(nums[i]) < min){
            min = Math.abs(nums[i])
            ans = nums[i]
        } else if(Math.abs(nums[i]) == min){
            if(nums[i] > ans){
                min = Math.abs(nums[i])
                ans = nums[i]
            }
        }
    }
    return ans
};