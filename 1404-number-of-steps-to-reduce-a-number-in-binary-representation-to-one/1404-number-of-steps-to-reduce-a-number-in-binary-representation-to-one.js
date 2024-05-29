/**
 * @param {string} s
 * @return {number}
 */
let res;
const numSteps = (s) => {
    res = Number.MAX_SAFE_INTEGER;
    let cur = BigInt('0b' + s);
    dfs(0, cur);
    return res;
};

const dfs = (step, x) => {
    if (x == 1) {
        res = Math.min(res, step);
        return;
    }
    if (x % 2n == 1) {
        dfs(step + 1, x + 1n);
    } else {
        dfs(step + 1, x / 2n);
    }
};