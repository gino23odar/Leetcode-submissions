/**
 * @param {number[]} nums
 * @param {number[]} multipliers
 * @return {number}
 */
var maximumScore = function(nums, multipliers) {
    let n = nums.length, m = multipliers.length;
    let memo = []
    for (let i = 0; i <= m + 1; i++) {
        memo[i] = []
    }
    let dp = (l, i) => {
        if (i === m) return 0
        if (memo[l][i]) return memo[l][i]
        let left = dp(l + 1, i + 1) + nums[l] * multipliers[i];
        let right = dp(l, i + 1) + nums[n - 1 - i+l] * multipliers[i]
        memo[l][i] = Math.max(left, right)
        return memo[l][i]
    }
    return dp(0, 0)
};