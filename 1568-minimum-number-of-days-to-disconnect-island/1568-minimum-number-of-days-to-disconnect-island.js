/**
 * @param {number[][]} grid
 * @return {number}
 */
const dirs = [-1,0,1,0,-1]    
var minDays = function(grid) {
    let n = grid.length, m = grid[0].length, total = 0, ans = 2, {min} = Math                     
    
    const dfs = (i, j, from=-3, turn=2) => {
        total++, grid[i][j] *= turn                             // Keep track of total land & use grid
        let preRes = 1e9, postRes = 1e9                         //   to keep track of visited lands
        for (let d = 0; d < 4; d++)                             // Navigate four directions,
            if (d !== (from + 2) % 4) {                         //   but ignore previous land,
                let x = i + dirs[d], y = j + dirs[d + 1]        //   since we're looking for a cycle
                if (~x && ~y && x < n && y < m)
                    if (grid[x][y] === 1)
                        postRes = min(postRes,                  // postRes is result *after* next move
                                      dfs(x, y, d, turn + 1))
                    else if (grid[x][y] > 1)
                        preRes = min(preRes, grid[x][y])        // preRes is result *before* next move
            }
        if ((preRes === 1e9 && postRes == 1e9) ||               // Dead end ("leaf node") land
            (turn > 2 && (postRes < 1e9 && postRes >= turn)))   // Articulation point: more lands, but
            ans = 1                                             //   no path back to before this land
        return min(preRes, postRes)
    }
    
    for (let i = 0; i < n; i++)
        for (let j = 0; j < m; j++)
            if (grid[i][j] === 1) {
                if (total)
                    return 0                                    // If this is a second island, return 0
                dfs(i, j)                                       // Otherwise, run DFS helper
            }
    
    return total < 3 ? total : ans  
};