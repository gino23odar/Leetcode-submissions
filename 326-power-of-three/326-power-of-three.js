/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    if(n === 1) return true
    else if(n < 3) return false
    return (Math.log10(n)/Math.log10(3)) % 1 === 0
};