/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
    let positive = divisor > 0 && dividend > 0 || divisor < 0 && dividend < 0 ? true : false;
    let sol = 0;
    
    const max = 2147483647;
    const min = - 2147483648;
    
    divisor = Math.abs(divisor);
    dividend = Math.abs(dividend);
    
    if(divisor == 1) sol = dividend;
    
    while(divisor != 1 && dividend >= divisor){
        dividend -= divisor;
        sol++;
    }
    sol = positive? sol: -sol;
    if(sol > max) return max;
    if(sol < min) return min;
    
    return sol;
};