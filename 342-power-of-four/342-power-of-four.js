/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function(n) {
    if(n === 0) return false
    else if(n === 1) return true
    
    if(!Number.isInteger(n/4)) return false
    return isPowerOfFour(n/4)
};