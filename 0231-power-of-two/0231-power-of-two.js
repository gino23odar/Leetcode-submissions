/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    if(n < 1) return false;
    if(n < 3) return true;
    while(n > 1){
        let r = n % 2;
        if(r != 0) return false;
        n /= 2;
    }
    return true
};