/**
 * @param {number} n
 * @return {number}
 */
var concatenatedBinary = function(n) {
    let res = 1, len = 4;
    for (let i = 2; i <= n; i++){
        if (i === len) len *= 2;
        res = (res * len + i) % 1000000007;
    }
    return res;
};