/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    const reversed = num => parseFloat(num.toString().split('').reverse().join(''));
    if(x == reversed(x)) return true;
    return false;
};