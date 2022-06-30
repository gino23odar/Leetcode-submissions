/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves2 = function(nums) {
    nums.sort((a,b) => a - b);
    let ans = 0, med = nums[Math.floor(nums.length/2)];
    for(let i = 0; i < nums.length; i++){
        ans += Math.abs(nums[i] - med);
    }
    return ans;
};