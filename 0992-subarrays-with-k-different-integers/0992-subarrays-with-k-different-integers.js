/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraysWithKDistinct = function(nums, k) {
    if (nums == null || nums.length == 0 || k == 0 || nums.length < k) {
        return 0;
    }
    let count = Array(nums.length + 1).fill(0);
    let l = 0, acc = 0, res = 0;
    for (let r = 0; r < nums.length; r++) {
        if (count[nums[r]]++ == 0) {
            k--;
        }
        if (k < 0) {
            count[nums[l++]]--;
            k++;
            acc = 0;
        }
        if (k == 0) {
            while (count[nums[l]] > 1) {
                count[nums[l++]]--;
                acc++;
            }
            res += acc + 1;
        }
    }
    return res;
};