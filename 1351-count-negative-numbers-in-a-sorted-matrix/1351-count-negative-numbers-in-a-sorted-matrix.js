/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function(grid) {
    let count = 0;
    for(let i = 0; i < grid.length; i++){
        for(let j = grid[0].length-1; j >= 0; j--){
            if(grid[i][j] >= 0){
                break;
            } else {
                count++
            }
        }
    }
    return count
};