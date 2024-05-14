let DIRECTIONS = [0,1,0,-1,0]
/**
 * @param {number[][]} grid
 * @return {number}
 */
var getMaximumGold = function(grid) {
    let rows = grid.length;
    let cols = grid[0].length;
    let maxG = 0;
    
    const dfsBacktrack = (grid,rows,cols,row,col) =>{
        if(row < 0 || col < 0 || row == rows || col == cols || grid[row][col] == 0){
            return 0;
        };
        
        maxG = 0;
        let og = grid[row][col];
        grid[row][col] = 0;
        
        for(let dir = 0; dir < 4; dir++){
            maxG = Math.max(maxG, dfsBacktrack(grid,rows,cols,DIRECTIONS[dir] + row, DIRECTIONS[dir+1]+col))
        }
        grid[row][col] = og;
        return maxG + og;
    }
    for(let i = 0; i < rows; i++){
        for(let j = 0; j < cols;j++){
            maxG = Math.max(maxG, dfsBacktrack(grid,rows,cols,i,j))
        }
    }
    return maxG
};