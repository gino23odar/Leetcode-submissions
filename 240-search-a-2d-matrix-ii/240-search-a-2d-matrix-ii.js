/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    if(!matrix || matrix.length === 0) return false;
    
    let col = 0, row = matrix.length -1;
    
    while(row > 0 && target < matrix[row][col]) row--;
    
    while(col < matrix[0].length){
        if(target === matrix[row][col]) return true;
        if(target > matrix[row][col]){
            col++;
        } else if(row > 0){
            row--;
        } else {
            return false;
        }
    }
    return false;
};