/**
 * @param {number} sx
 * @param {number} sy
 * @param {number} fx
 * @param {number} fy
 * @param {number} t
 * @return {boolean}
 */
var isReachableAtTime = function(sx, sy, fx, fy, t) {
    if(fx == sx && fy == sy && t == 1) return false; 
    const sDistance = fx - sx >= 0 ? fx - sx : (fx - sx) * - 1;
    const fDistance = fy - sy >= 0 ? fy - sy : (fy - sy) * - 1;

    const longestDistance = sDistance > fDistance ? sDistance : fDistance;

    return t >= longestDistance;
};