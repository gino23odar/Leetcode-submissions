/**
 * @param {number[][]} grid
 * @return {number[][]}
 */
var largestLocal = function(grid) {
    let len = grid.length - 2;
    let res = [];
    const findLargest = (col,row) =>{
        let largest = 0;
        for(let i = col; i < col+3; i++){
            for(let j = row; j < row+3; j++){
                if(grid[i][j] > largest) largest = grid[i][j]
            }
        }
        return largest
    }
    
    for(let i = 0; i < len; i++){
        let row = [];
        for(let j = 0; j < len; j++){
            row.push(findLargest(i,j))
        }
        res.push(row)
    }
    return res
};