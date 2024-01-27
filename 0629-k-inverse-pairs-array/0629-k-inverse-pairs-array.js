/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var kInversePairs = function(n, k) {
    var mod = 1e9 + 7;
    var pre = new Uint32Array(k + 1);
    var cur = new Uint32Array(k + 1);
    pre[0] = 1;

    for (var i = 1; i <= n; i++) {
        cur[0] = 1;
        var val = 0;

        for (var j = 1; j <= k; j++) {
            val = pre[j] + cur[j - 1];
            if (j >= i) val -= pre[j - i];
            cur[j] = (val + mod) % mod;
        }

        [pre, cur] = [cur, pre];
    }

    return pre[k];
};