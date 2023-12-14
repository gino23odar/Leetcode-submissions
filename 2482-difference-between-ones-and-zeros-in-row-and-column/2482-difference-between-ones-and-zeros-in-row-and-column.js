/**
 * @param {number[][]} grid
 * @return {number[][]}
 */
var onesMinusZeros = function(grid) {
    const rowSum = grid.map(row => row.reduce((a,b) => a + b, 0));
    const colSum = Array(grid[0].length).fill(0);
    let height = grid.length;
    let width = grid[0].length;
    
    
    for (let i = 0; i < grid.length; i++){
        for (let j = 0; j < grid[0].length; j++){
            colSum[j] += grid[i][j];
        }
    }
    
    for(let i = 0; i < grid.length; i++){
        for(let j = 0; j < grid[0].length; j++){
            let curRow = [grid[0].length - rowSum[i], rowSum[i]]
            let curCol = [grid.length - colSum[j] ,colSum[j]]
            grid[i][j] = curRow[1] + curCol[1] - curCol[0] - curRow[0]
        }
    }
    
    
    return grid
};