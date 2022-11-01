/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findBall = function(grid) {
    let m = grid.length, n = grid[0].length, ans = []
    for (let s = 0, j = 0; s < n; ans[s] = j, j = ++s)
        for (let i = 0, d = grid[0][j]; i < m; d = grid[++i]?.[j])
            if (d === grid[i][j+d]) j += d
            else i = m, j = -1
    return ans
};