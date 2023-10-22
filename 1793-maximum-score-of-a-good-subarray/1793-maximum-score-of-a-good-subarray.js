/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximumScore = function(nums, k) {
    let minimum = nums[k];
    let max_score = nums[k];
    let i = k;
    let j = k;
    let n = nums.length;

    while (i > 0 || j < n - 1) {
        if (i > 0 && j < n - 1) {
            if (nums[i - 1] >= nums[j + 1]) {
                i--;
            } else {
                j++;
            }
        } else if (i === 0 && j < n - 1) {
            j++;
        } else if (j === n - 1 && i > 0) {
            i--;
        }
        minimum = Math.min(minimum, nums[i], nums[j]);
        max_score = Math.max(max_score, minimum * (j - i + 1));
    }
    return max_score;
};