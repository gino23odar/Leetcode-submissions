/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var transpose = function(matrix) {
    let out = []
    for(var i = 0; i < matrix[0].length; i++){
        let tmp = []
        for(var j = 0; j < matrix.length; j++){
          tmp.push(matrix[j][i])
        }
        out.push(tmp)
    }
    return out
};