var fillLines = function(matrix, x, y, len, start) {
    if (len <= 0) return

    matrix[x][y] = start
    
    for (let i = 0; i < len - 1; i++) {
        matrix[x][y + i] = start
        start++
    }
    
    for (let i = 0; i < len - 1; i++) {
        matrix[x + i][y + len - 1] = start
        start++
    }
    
    for (let i = len - 1; i > 0; i--) {
        matrix[x + len - 1][y + i] = start
        start++
    }
    
    for(let i = len - 1; i > 0; i--) {
        matrix[x + i][y] = start
        start++
    }

    fillLines(matrix, x + 1, y + 1, len - 2, start)
};

/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
    const matrix = Array(n).fill().map(() => Array(n))

    fillLines(matrix, 0, 0, n, 1)

    return matrix
};