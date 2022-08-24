/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function(n) {
    if(n === 1) return true
    else if(n < 4) return false
    
    return (Math.log10(n)/Math.log10(4)) % 1 === 0
};