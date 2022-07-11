/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    let dp = new Array(cost.length + 1);
    dp[0] = dp[1] = 0;
    for(var i = 2; i < dp.length; i++){
        let pathOne = dp[i-1] + cost[i-1];
        let pathTwo = dp[i-2] + cost[i-2];
        dp[i] = Math.min(pathOne, pathTwo);
    }
    return dp[dp.length - 1];
};