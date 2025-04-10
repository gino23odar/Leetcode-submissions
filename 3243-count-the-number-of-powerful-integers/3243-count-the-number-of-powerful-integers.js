/**
 * @param {number} start
 * @param {number} finish
 * @param {number} limit
 * @param {string} s
 * @return {number}
 */
var numberOfPowerfulInt = function(start, finish, limit, s) {
    let low = start.toString();
    let high = finish.toString();
    const n = high.length;
    low = low.padStart(n, "0"); // align digits
    const pre_len = n - s.length; // prefix length
    const memo = new Array(n).fill(-1);

    function dfs(i, limit_low, limit_high) {
        // recursive boundary
        if (i === n) {
            return 1;
        }
        if (!limit_low && !limit_high && memo[i] !== -1) {
            return memo[i];
        }

        const lo = limit_low ? parseInt(low[i]) : 0;
        const hi = limit_high ? parseInt(high[i]) : 9;
        let res = 0;
        if (i < pre_len) {
            for (let digit = lo; digit <= Math.min(hi, limit); digit++) {
                res += dfs(
                    i + 1,
                    limit_low && digit === lo,
                    limit_high && digit === hi,
                );
            }
        } else {
            const x = parseInt(s[i - pre_len]);
            if (lo <= x && x <= Math.min(hi, limit)) {
                res = dfs(i + 1, limit_low && x === lo, limit_high && x === hi);
            }
        }
        if (!limit_low && !limit_high) {
            memo[i] = res;
        }

        return res;
    }

    return dfs(0, true, true);
};