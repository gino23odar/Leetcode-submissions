/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    const reversed = num => parseFloat(num.toString().split('').reverse().join('')) * Math.sign(num);
    
    let ans = reversed(x);
    
    if(ans > 2147483647 || ans < -2147483648) return 0;
    else return ans;
};