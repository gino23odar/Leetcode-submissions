/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    let l = 0;
    let r = 0;
    let max = 0;
    const aCharCode = 'A'.charCodeAt(0);
    const zCharCode = 'Z'.charCodeAt(0);
    const chars = new Array(zCharCode - aCharCode + 1).fill(0);

    for(; r < s.length; r++) {
        let idx = s.charCodeAt(r) - aCharCode;
        chars[idx]++;
        max = Math.max(max, chars[idx]);

        if(r - l + 1 - max > k) {
            chars[s.charCodeAt(l) - aCharCode]--;
            l++;
        }
    }

    return r - l;
};