/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    const n = t.length;
    const m = s.length;
    let i = 0;
    let j = 0;
    while (i < n && j < m) {
        if (t.charAt(i) === s.charAt(j)) {
            j++;
        }
        i++;
    }
    return j == m;
};