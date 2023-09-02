/**
 * @param {string} s
 * @param {string[]} dictionary
 * @return {number}
 */
var minExtraChar = function(s, dictionary) {
    const dict = new Set(dictionary);

    const n = s.length;
    const dp = new Array(n + 1).fill(0);

    for (let i = 1; i <= n; i++) {
        dp[i] = dp[i - 1] + 1;

        for (let j = i - 1; j >= 0; j--) {
            const substring = s.substring(j, i);

            if (dict.has(substring)) {
                dp[i] = Math.min(dp[i], dp[j]);
            }
        }
    }
    return dp[n];
};