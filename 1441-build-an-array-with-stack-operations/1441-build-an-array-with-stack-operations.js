/**
 * @param {number[]} target
 * @param {number} n
 * @return {string[]}
 */
var buildArray = function(target, n) {
    const result = [];
    let idx = 0;
    for (let i = 1; i <= n; i++) {
        if (i > target[target.length - 1]) return result;
        if (target[idx] !== i) {
            result.push('Push', 'Pop');
        } else {
            idx++;
            result.push('Push');
        }
    }
    return result;
};