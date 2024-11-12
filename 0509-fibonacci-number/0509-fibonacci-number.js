/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    if(n <= 1) return n;
    
    let cur = 0;
    let prev = 1;
    let prev2 = 0;
    
    for(let i = 2; i <= n; i++){
        cur = prev + prev2;
        
        prev2 = prev;
        prev = cur;
    }
    
    return cur;
};