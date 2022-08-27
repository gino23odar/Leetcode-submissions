/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var maxSumSubmatrix = function(matrix, k) {
    const R_NUM = matrix.length, C_NUM = matrix[0].length;
    let maxSum = -Infinity;
    
    for(let l = 0; l < R_NUM; l++) {
        const dp = Array(C_NUM).fill(0);
        
        for(let r = l; r < R_NUM; r++) {
            let sum = 0, max = -Infinity;
            
            for(let c = 0; c < C_NUM; c++) {
                dp[c] += matrix[r][c];
                
                if(sum < 0) sum = 0;
                sum += dp[c];
                max = Math.max(max, sum);
            }
            
            if(max <= k){
                maxSum = Math.max(max, maxSum);
            } else {
                max = -Infinity;

                for(let c = 0; c < C_NUM; c++) {
                    sum = 0;

                    for(let d = c; d < C_NUM; d++) {
                        sum += dp[d];
                        if(sum <= k) max = Math.max(sum, max);
                    }
                }
                maxSum = Math.max(max, maxSum);
            }
            if(maxSum === k) return k;
        }
    }
    return maxSum;
};

