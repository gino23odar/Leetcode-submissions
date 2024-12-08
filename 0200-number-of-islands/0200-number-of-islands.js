/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let counter = 0;
    
    const dfs = (grid, r, c) =>{
        let nr = grid.length;
        let nc = grid[0].length;
        
        if(r >= nr || r < 0 || c >= nc || c < 0 || grid[r][c] == '0') return;
        
        grid[r][c] = '0';
        
        dfs(grid,r+1,c);
        dfs(grid,r-1,c);
        dfs(grid,r,c+1);
        dfs(grid,r,c-1);
    }
    
    for(let i = 0; i < grid.length; i++){
        for(let j = 0; j < grid[0].length; j++){
            if(grid[i][j] == '1') counter++;
            dfs(grid, i, j);
        }
    }
    return counter
};