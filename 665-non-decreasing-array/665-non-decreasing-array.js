/**
 * @param {number[]} nums
 * @return {boolean}
 */
var checkPossibility = function(nums) {
    let changed = false;
    for(let i = 0; i < nums.length - 1; i++){
        if(nums[i] > nums[i+1]){
            if(changed) return false;
            if(i != 0 && nums[i - 1] > nums[i + 1]) nums[i + 1] = nums[i];
            changed = true;
        }
    }
    return true;
};