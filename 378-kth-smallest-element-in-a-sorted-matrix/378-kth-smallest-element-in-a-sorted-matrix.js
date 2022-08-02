/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(matrix, k) {
    let len = matrix.length, left = matrix[0][0], right = matrix[len-1][len-1], mid;
    while(left < right){
        mid = Math.floor((left+right)/2);
        let midOrLess = 0;
        matrix.forEach(row => {
            row.forEach(num => {
                if(num <= mid) midOrLess++;
            })
        })
        if(midOrLess >= k) right = mid;
        if(midOrLess < k) left = mid + 1;
    }
    return left;
};