/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var updateMatrix = function(mat) {
    let rowSize = mat.length;
    let colSize = mat[0].length;
    let queue = [];
    let directions = [ [1 , 0] , [-1 , 0] , [0 , 1] , [0 , -1] ];
    let dir = new Array(rowSize).fill().map(() => Array(colSize).fill());
    
    for (let row = 0; row < rowSize; row++) {
        for (let col = 0; col < colSize; col++) {
            if (mat[row][col] === 0) {
                dir[row][col] = 0;
                queue.push([row, col]);
            } else {
                dir[row][col] = -1;
            }
        }
    }
    
    while (queue.length !== 0) {
        let index = queue.shift();
        let row = index[0];
        let col = index[1];
        for (let d of directions) {
            let r = row + d[0];
            let c = col + d[1];
            if (r < 0 || c < 0 || r > rowSize - 1 || c > colSize - 1) continue;
            if (dir[r][c] === 0) continue;
            if (dir[r][c] === -1) {
                dir[r][c] = dir[row][col] + 1;
                queue.push([r, c]);
            }
        }
    }
    
    return dir;
};

