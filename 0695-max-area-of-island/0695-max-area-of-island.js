/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    let res = 0;
    for (let row=0; row<grid.length; row++) {
        for (let col=0; col<grid[0].length; col++) {
            if (grid[row][col] === 1) {
                res = Math.max(res, dfs(grid, row, col));
            }
        }
    }

    return res;
};

function dfs(grid, r, c) {
    const nr = grid.length;
    const nc = grid[0].length;

    if (r >= nr || c >= nc || r < 0 || c < 0 || grid[r][c] === 0) {
        return 0;
    }
    
    grid[r][c] = 0;
    
    return 1 + dfs(grid, r+1, c) + dfs(grid, r-1, c) + dfs(grid, r, c+1) + dfs(grid, r, c-1); 
}