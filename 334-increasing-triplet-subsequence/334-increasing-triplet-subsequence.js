/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
    let first = Infinity;
    let second = Infinity;
    for(let i = 0; i < nums.length; i++){
        let cur = nums[i];
        if(cur <= first){
            first = cur;
        } else if(cur <= second){
            second = cur;
        } else {
            return true;
        }
    }
    return false;
};