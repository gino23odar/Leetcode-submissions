/**
 * @param {number} n
 * @param {number} minProfit
 * @param {number[]} group
 * @param {number[]} profit
 * @return {number}
 */
var profitableSchemes = function(n, minProfit, group, profit) {
    let dp = new Array(n + 1).fill(0).map(() => new Array(minProfit + 1).fill(0));
    dp.forEach(c => c[0] = 1);
    for (let i = 0; i < group.length; i++) {
        for (let j = n; j >= group[i]; j--) {
            for (let k = minProfit; k >= 0; k--) {
                dp[j][k] = (dp[j][k] + dp[j - group[i]][Math.max(0, k - profit[i])]) % (1e9 + 7)
            }
        }
    }
    return dp[n][minProfit];

};