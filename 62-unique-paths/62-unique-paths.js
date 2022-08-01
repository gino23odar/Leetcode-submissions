/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    let dp = Array(n).fill(1);
    let nextDp = [];
    
    let i = 0;
    while (++i < m) {
        nextDp = [1];
        let j = 0;
        while (++j < n) {
            nextDp.push(dp[j] + nextDp[j - 1]);
        }
        dp = nextDp;
    }
    return dp[n - 1];
};