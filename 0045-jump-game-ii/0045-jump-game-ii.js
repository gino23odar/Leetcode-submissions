/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    let maxj = 0, oldMax = 0, jmp = 0;
    for(let i = 0; i < nums.length - 1; i++){
        maxj = Math.max(maxj, nums[i] + i);
        if(i === oldMax){
            jmp++;
            oldMax = maxj;
        }
    }
    return jmp;
};