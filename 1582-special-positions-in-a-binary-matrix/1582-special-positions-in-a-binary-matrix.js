/**
 * @param {number[][]} mat
 * @return {number}
 */
var numSpecial = function(mat) {
    const rowSum = mat.map(row => row.reduce((a,b) => a+b, 0));
    const colSum = Array(mat[0].length).fill(0);
    let ans = 0;
    
    for (let i = 0; i < mat.length; i++){
        for (let j = 0; j < mat[0].length; j++){
            colSum[j] += mat[i][j];
        }
    }
    
    for (let i = 0; i < mat.length; i++){
        for (let j = 0; j < mat[0].length; j++){
            if (mat[i][j] === 1 && colSum[j] === 1 && rowSum[i] === 1) ans++;
        }
    }
    
    return ans; 
};