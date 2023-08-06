/**
 * @param {number} n
 * @param {number} goal
 * @param {number} k
 * @return {number}
 */
var numMusicPlaylists = function(n, goal, k) {
    const MAGIC = 10 ** 9 + 7
    let f = new Array(goal + 1).fill(0).map(a => new Array(n + 1).fill(0))
    f[0][0] = 1

    for(let i = 1; i <= goal; i++) {
        for (let j = 1; j <= Math.min(i, n); j++) {
            f[i][j] += f[i - 1][j - 1] * (n - j + 1)
            f[i][j] += f[i - 1][j] * Math.max(j - k, 0)
            f[i][j] = f[i][j] % MAGIC
        }
    }
    return f[goal][n]
};