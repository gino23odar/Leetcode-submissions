/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var constrainedSubsetSum = function(nums, k) {
    let dp = [...nums];
    let q = [];
    q.push(0);
    for (let i = 1; i < nums.length; i++) {
        while (q[q.length - 1] < i - k) {
            q.pop();
        }
        dp[i] = Math.max(dp[i], dp[q[q.length - 1]] + nums[i]);
        while (q.length > 0 && dp[q[0]] <= dp[i]) {
            q.shift();
        }
        q.unshift(i);
    }
    return Math.max(...dp);
};