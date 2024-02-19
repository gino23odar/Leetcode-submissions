/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    while(n > 1){
        n /= 2
    }
    return n == 1
};