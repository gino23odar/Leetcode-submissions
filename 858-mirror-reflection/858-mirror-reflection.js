/**
 * @param {number} p
 * @param {number} q
 * @return {number}
 */
var mirrorReflection = function(p, q) {
    let x = p * q / comD(p, q);
    if(x/q % 2 != 0) return x/p % 2 != 0? 1 :0;
    return 2;
};

const comD = (x, y) => {
    return y == 0? x: comD(y, x % y);
}