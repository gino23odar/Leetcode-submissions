/**
 * @param {number[]} dist
 * @param {number[]} speed
 * @return {number}
 */
var eliminateMaximum = function(dist, speed) {
    const n = dist.length;
    const timeleft = dist.map((d,i) => d/speed[i]);

    timeleft.sort((a,b) => a - b);

    for (let i = 0; i < n; i++) {
        if (timeleft[i] <= i) {
            return i;
        }
    }
    return n;
};