/**
 * @param {number} n
 * @param {number} time
 * @return {number}
 */
var passThePillow = function(n, time) {
    let d = [];
    for (let i = 1; i <= n; i++) d.push(i);
    for (let i = n - 1; i > 1; i--) d.push(i);
    return d[time % d.length];
};