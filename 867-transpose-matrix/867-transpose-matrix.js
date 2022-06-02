/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var transpose = function(matrix) {
    let m = matrix.length, n = matrix[0].length;
    let output = [];
    for(let i = 0; i < n; i++){
        let temp = [];
        for(let j = 0; j < m; j++){
          temp.push(matrix[j][i]);  
        }
        output.push(temp);
    }
    return output;
};