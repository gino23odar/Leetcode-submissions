/**
 * @param {string} source
 * @param {string} target
 * @param {character[]} original
 * @param {character[]} changed
 * @param {number[]} cost
 * @return {number}
 */
var minimumCost = function(source, target, original, changed, cost) {
    const inf = 1e18;
    const c = new Array(26).fill(0).map(() => new Array(26).fill(inf));
    const m = original.length;

    for (let i = 0; i < 26; i++) {
        c[i][i] = 0;
    }

    for (let i = 0; i < m; i++) {
        c[original[i].charCodeAt(0) - 97][changed[i].charCodeAt(0) - 97] = Math.min(c[original[i].charCodeAt(0) - 97][changed[i].charCodeAt(0) - 97], cost[i]);
    }

    for (let k = 0; k < 26; k++) {
        for (let i = 0; i < 26; i++) {
            for (let j = 0; j < 26; j++) {
                c[i][j] = Math.min(c[i][j], c[i][k] + c[k][j]);
            }
        }
    }

    let ans = 0;
    const n = source.length;

    for (let i = 0; i < n; i++) {
        ans += c[source.charCodeAt(i) - 97][target.charCodeAt(i) - 97];
        if (ans >= inf) {
            return -1;
        }
    }

    return ans;
};