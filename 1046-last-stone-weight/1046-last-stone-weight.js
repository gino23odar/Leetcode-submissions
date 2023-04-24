/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
    const sorted = stones.sort((a, b) => b - a);
    let x = null;
    let y = null;
    while (sorted.length > 1) {
        y = sorted.shift();
        x = sorted.shift();
        if (x !== y) {
            y = Math.abs(y - x);
            sorted.unshift(y);
            sorted.sort((a, b) => b - a);
        }
    }
    return sorted[0] ?? 0;
};