/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    if(x === 0) return 0;
    let res = 0;
    for(let i = 1; i * i <= x; i++){
        res = i;
    }
    return res
};