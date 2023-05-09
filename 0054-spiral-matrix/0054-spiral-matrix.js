/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    let res = [];

    while(matrix.length) {
        let curr = matrix.shift();
        res.push(...curr);
        for(let row of matrix) {
            let end = row.pop();
            if(end) {
                res.push(end);
                row.reverse();
            }
        }
        matrix.reverse();
    }
    return res;
};