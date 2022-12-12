/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if (n == 1) return 1;
    if (n == 2) return 2;

    let ways = [0];
    ways[1] = 1;
    ways[2] = 2;

    for (let i = 3; i <= n; i++) {
        ways[i] = ways[i - 1] + ways[i - 2];
    }

    return ways[n];
};