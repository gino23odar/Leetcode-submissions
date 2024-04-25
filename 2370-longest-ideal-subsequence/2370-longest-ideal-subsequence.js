/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var longestIdealString = function(s, k) {
    let ans = 0;
    const map = {};

    for (let i = 0; i < s.length; i++) {
        let max = 0;
        const idx = s.charCodeAt(i);
        for (let j = idx - k; j <= idx + k; j++) {
            max = Math.max(max, map[j] || 0);
        }
        map[idx] = max + 1;
        ans = Math.max(ans, map[idx]);
    }

  return ans;
};