/**
 * @param {number[]} nums
 * @return {number}
 */
var largestPerimeter = function(nums) {
    nums.sort((a,b) => a - b);
    let res = -1
    for(let i = nums.length - 1; i > 1; i--){
        let sides = nums.slice(0, i).reduce((acc, val) => acc + val, 0);
        if(nums[i] < sides){
            res = sides + nums[i];
            break
        }
    }
    return res
};