/**
 * @param {number} n
 * @param {number[]} batteries
 * @return {number}
 */
var maxRunTime = function(n, batteries) {
    let low = 0, high = 1e14;
    while (low <= high) {
        let mid = parseInt((low + high) / 2), sum = 0;
        for (const x of batteries) sum += Math.min(x, mid);
        if (sum >= n * mid) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return high;
};