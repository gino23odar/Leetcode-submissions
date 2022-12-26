/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    let last = nums.length - 1;
    for (let i = last - 1; i >= 0; i--) {
        if (i + nums[i] >= last) {
            last = i;
        };
    };
    return last === 0;
};
