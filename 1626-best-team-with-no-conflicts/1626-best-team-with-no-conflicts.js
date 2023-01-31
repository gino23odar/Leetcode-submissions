/**
 * @param {number[]} scores
 * @param {number[]} ages
 * @return {number}
 */
var bestTeamScore = function(scores, ages) {
    let n = scores.length, a = scores.map((x, i) => [x, ages[i]]);
    a.sort((x, y) => { // sort by age first then score
        if (x[1] != y[1]) return x[1] - y[1];
        return x[0] - y[0];
    });
    let dp = Array(n).fill(0);
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (a[j][0] <= a[i][0]) dp[i] = Math.max(dp[i], dp[j]);
        }
        dp[i] += a[i][0];
    }
    return Math.max(...dp);
};