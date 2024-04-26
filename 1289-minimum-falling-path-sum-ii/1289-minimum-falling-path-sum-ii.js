/**
 * @param {number[][]} grid
 * @return {number}
 */
var minFallingPathSum = function(grid) {
    var n = grid.length;
    for (let i = 1; i < n; i++) {
        let [m1, m2] = [...grid[i-1]].sort((a,b) => a - b).slice(0, 2);
        //console.log(m1,m2)
        for(let j = 0; j < n; j++) {
            grid[i][j] += grid[i-1][j] !== m1 ? m1 : m2
        }
    }
    return Math.min(...grid[n-1])
};