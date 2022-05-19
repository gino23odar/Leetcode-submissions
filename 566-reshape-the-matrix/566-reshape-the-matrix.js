/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function(mat, r, c) {
    let tempArr = [];
    let solArr = [];
    for(let i = 0; i < mat.length; i++){
        for(let j = 0; j < mat[0].length; j++){
            tempArr.push(mat[i][j]);
        }
    }
    
    if(r*c == tempArr.length){
        for(let i = 0; i < r; i++){
            let midArr = [];
            for(let j = 0; j < c; j++){
                midArr [j] = tempArr.shift();
            }
            solArr.push(midArr);
        }
    return solArr;
    } else {
        return mat;
    }
    
};