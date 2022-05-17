/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    let answer = 0, n = grid.length, m = grid[0].length
    const isle = (i, j) => {
        if (i < 0 || j < 0 || i >= n || j >= m || !grid[i][j]) return 0;
        //avoid finding the same island
        grid[i][j] = 0;
        return 1 + isle(i-1, j) + isle(i, j-1) + isle(i+1, j) + isle(i, j+1);
    }
    for (let i = 0; i < n; i++) 
        for (let j = 0; j < m; j++)
            if (grid[i][j]) answer = Math.max(answer, isle(i, j))
    return answer;
};