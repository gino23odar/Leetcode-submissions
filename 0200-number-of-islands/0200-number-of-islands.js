/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let count = 0;
    const mark = (row, col) =>{
        grid[row][col] = 0;
        if(grid[row+1] && grid[row+1][col] == 1) mark(row+1,col);
        if(grid[row-1] && grid[row-1][col] == 1) mark(row-1, col);
        if(grid[row][col+1] == 1) mark(row, col+1);
        if(grid[row][col-1] == 1) mark(row, col-1);
    }
    for(let i = 0; i < grid.length; i++){
        for(let j = 0; j < grid[i].length; j++){
            if(grid[i][j] == 1){
                count++;
                mark(i,j)
            }
        }
    }
    return count
};