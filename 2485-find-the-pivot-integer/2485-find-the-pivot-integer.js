/**
 * @param {number} n
 * @return {number}
 */
var pivotInteger = function(n) {
    if(n == 1) return 1;
    let res = -1;
    let total = n * (n + 1) / 2;
    
    for(let i = 1; i < n; i++){
        let sum = (i * (i + 1) / 2) - i;
        if(sum == (total - i - sum)){
            res = i;
            break
        }
    }
    return res;
};