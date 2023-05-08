/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function(mat) {
    let heigth = mat.length, width = mat[0].length;
    let sum = 0;
    for(let i = 0, j = 0; i < heigth && j < width; i++, j++){
        sum += mat[i][j];
    }
    for(let i = heigth - 1, j = 0; i >= 0 && j < width; i--, j++){
        sum += mat[i][j];
    }
    
    if (heigth % 2 != 0){
        let xy = Math.floor(heigth/2);
        let overlap = mat[xy][xy]
        sum -= overlap
    }
    
    return sum;
};