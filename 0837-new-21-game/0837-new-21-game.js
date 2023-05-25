/**
 * @param {number} n
 * @param {number} k
 * @param {number} maxPts
 * @return {number}
 */
var new21Game = function(n, k, maxPts) {
    let dp = new Array(k + maxPts).fill(0)
    let s = 0
    for(let i = k; i < k + maxPts; i++){
        if(i <= n){
            dp[i] = 1
        }else{
            dp[i] = 0
        }
        s += dp[i]
    }
    for(let i = k - 1; i >= 0; i--){
        dp[i] = s/maxPts
        s = s + dp[i] - dp[i+maxPts]
    }
    return dp[0]
};