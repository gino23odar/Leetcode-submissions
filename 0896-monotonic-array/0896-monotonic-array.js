/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isMonotonic = function(nums) {
    let dir = nums[0] - nums[nums.length - 1];
    if(dir > 0){
        let check = nums[0];
        for(let i = 1; i < nums.length; i++){
            if((check - nums[i]) >= 0){
                check = nums[i]
            } else {
                return false;
            }
        }
    } else if(dir == 0) {
        const isAllEqual = nums.every((element) => element === nums[0]);
        if(isAllEqual){
            return true
        } else {
            return false
        }
    } else {
        let check = nums[0];
        for(let i = 1; i < nums.length; i++){
            if((check - nums[i]) <= 0){
                check = nums[i]
            } else {
                return false;
            }
        }
    }
    return true
};