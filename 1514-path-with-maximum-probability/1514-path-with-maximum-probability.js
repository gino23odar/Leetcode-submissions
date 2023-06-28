/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number[]} succProb
 * @param {number} start
 * @param {number} end
 * @return {number}
 */
var maxProbability = function(n, edges, succProb, start, end) {
    const dp = new Array(n).fill(0);
    dp[start] = 1.0;

    for (let i = 0; i < n - 1; i++) {
        let hasUpdate = false;
        for (let j = 0; j < edges.length; j++) {
            const [u, v] = edges[j];
            const prob = succProb[j];
            if (dp[u] * prob > dp[v]) {
                dp[v] = dp[u] * prob;
                hasUpdate = true;
            }
            if (dp[v] * prob > dp[u]) {
                dp[u] = dp[v] * prob;
                hasUpdate = true;
            }
        }
        if (!hasUpdate) {
            break;
        }
    }
    return dp[end];
};