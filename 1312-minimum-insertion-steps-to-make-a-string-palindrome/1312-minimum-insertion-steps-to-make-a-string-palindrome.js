/**
 * @param {string} s
 * @return {number}
 */
var minInsertions = function(s) {
    let n = s.length;
    let t = s.split("").reverse().join("");
    let dp = new Array(n+1).fill(0).map(() => new Array(n+1).fill(0));
        for(let i = 1; i <= n; i++){
        for(let j = 1; j <= n; j++){
            if (s[i-1] === t[j-1]) dp[i][j] = dp[i-1][j-1] + 1;
            else dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1]);
        }
    }
    return n - dp[n][n];
};