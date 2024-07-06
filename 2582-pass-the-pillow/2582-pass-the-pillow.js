/**
 * @param {number} n
 * @param {number} time
 * @return {number}
 */
var passThePillow = function(n, time) {
    let count = 1;
    let direction = 1;
    for (let i = 0; i < time; i++) {
        if (count === 1) direction = 1;
        if (count === n) direction = -1;
        count = direction === 1 ? count + 1 : count - 1;
    }
    return count;
};