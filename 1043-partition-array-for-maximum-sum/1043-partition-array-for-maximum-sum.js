/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var maxSumAfterPartitioning = function(arr, k) {
    let l = arr.length;
    let dp = new Array(l + 1).fill(0);
    for (let i = 1 ; i < l + 1; i++) {
        let m = Number.MIN_VALUE;
        for (let j = 1; j < Math.min(i, k) + 1; j++) {
            m = Math.max(m, arr[i - j]);
            dp[i] = Math.max(dp[i], dp[i - j] + m * j);
        }
    }
    return dp[l];
};