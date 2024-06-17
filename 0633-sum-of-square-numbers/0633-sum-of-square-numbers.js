/**
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum = function(c) {
    if (c === 0) {
        return true
    }
    for (let a = 0; a*a < c; a++) {
        let b = Math.sqrt(parseFloat(c-a*a));
        if (b - Math.round(b) === 0) {
            return true;
        }
    }
        return false
};