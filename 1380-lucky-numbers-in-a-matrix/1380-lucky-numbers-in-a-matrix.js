/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var luckyNumbers  = function(matrix) {
    let lucky = [];
    
    const highCol = (num, col) => {
        for(let i = 0; i < matrix.length; i++){
            if(matrix[i][col] > num) return false
        }
        return true
    }
    
    for(let i = 0; i < matrix.length; i++){
        let min = Math.min(...matrix[i])
        let col = matrix[i].indexOf(min)
        if(highCol(min,col)) lucky.push(min)
    }
    
    return lucky
};