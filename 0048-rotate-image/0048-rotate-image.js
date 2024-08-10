/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    const rows = matrix.length, cols = matrix[0].length;
    transpose(matrix);

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols / 2; j++) {
            const temp = matrix[i][j];
            matrix[i][j] = matrix[i][cols - j - 1];
            matrix[i][cols - j - 1] = temp;
        }
    }
};

function transpose(matrix) {
    const rows = matrix.length, cols = matrix[0].length;

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < i + 1; j++) {
            const temp = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i] = temp;
        }
    }
}