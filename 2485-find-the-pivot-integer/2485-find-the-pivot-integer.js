/**
 * @param {number} n
 * @return {number}
 */
var pivotInteger = function(n) {
    if(n == 1) return 1;
    let total = n * (n + 1) / 2;
    let sum = 0;
    
    for(let i = 1; i <= n; i++){
        if(sum == (total - i - sum)){
            return i;
        }
        sum += i;
    }
    return -1;
};