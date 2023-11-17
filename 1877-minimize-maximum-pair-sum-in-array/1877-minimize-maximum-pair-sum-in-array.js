/**
 * @param {number[]} nums
 * @return {number}
 */
var minPairSum = function(nums) {
    let max = 0;
    nums.sort((a,b) => a - b);
    for(let i = 0, j = nums.length-1; i < nums.length/2; i++, j--){
        let sum = nums[i] + nums[j];
        if(sum > max) max = sum;
    }
    return max
};