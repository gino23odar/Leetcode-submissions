/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    let memo = Array(n+1).fill(-1);
    const fibo = (n, memo) =>{
        if(n <= 1) return n;
    
        if(memo[n] !== -1) return memo[n];
        
        memo[n] = fibo(n - 1, memo) + fibo(n - 2, memo);

        return memo[n];  
    }
    return fibo(n, memo);
};