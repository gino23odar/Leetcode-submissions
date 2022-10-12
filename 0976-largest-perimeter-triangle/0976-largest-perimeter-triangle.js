/**
 * @param {number[]} nums
 * @return {number}
 */
var largestPerimeter = function(nums) {
    nums.sort((a,b) => b - a);
    const lst = nums.length - 2;
    for(let i = 0; i < lst; i++){
        if(nums[i] < nums[i + 1] + nums[i + 2]) return nums[i] + nums[i + 1] + nums[i + 2];
    }
    return 0;
};