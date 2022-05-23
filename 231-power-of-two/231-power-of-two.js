/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    if(n === 0){
        return false;
    } else {
        while(n % 2 === 0) n /= 2;
        return (n === 1);
    }
};