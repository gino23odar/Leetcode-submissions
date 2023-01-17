/**
 * @param {string} s
 * @return {number}
 */
var minFlipsMonoIncr = function(s) {
    let dp = [0, 0];
    let idx = s.length;
    while (idx--) {
        let val = +s[idx];
		dp[0] = val+Math.min(dp[0], dp[1]);
        dp[1] += (1-val);
    }
    return Math.min(dp[0], dp[1]);
};