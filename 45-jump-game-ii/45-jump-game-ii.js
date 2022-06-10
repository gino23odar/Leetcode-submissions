/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    let newMax = 0, oldMax = 0, jump = 0;
    for(let i = 0; i < nums.length - 1; i++){
        newMax = Math.max(newMax, nums[i] + i);
        if(i === oldMax){
            jump++;
            oldMax = newMax;
        }
    }
    return jump;
};