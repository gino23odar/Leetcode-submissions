/**
 * @param {number} n
 * @param {number} k
 * @param {number} target
 * @return {number}
 */
var numRollsToTarget = function(n, k, target) {
    let mod = Math.pow(10,9)+7;
    const dp = Array.from(Array(n + 1), () => Array(target + 1).fill(0));
    
    for (let j = 1; j <= k; j++) {
        if (j <= target) {
            dp[1][j] = 1;
        }
    }
    
    for (let i = 2; i <= n; i++) {
        for (let j = 1; j < target + 1; j++) {
            for (let x = 1; x <= k; x++) {
                if (j - x > 0) {
                    dp[i][j] += dp[i - 1][j - x];
                }
            }
            dp[i][j] %= mod;
        }
    }

    return dp[n][target];
};