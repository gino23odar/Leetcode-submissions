/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var minSteps = function(s, t) {
    const count = new Array(26).fill(0);

        for (let i = 0; i < s.length; i++) {
            count[t.charCodeAt(i) - 'a'.charCodeAt(0)]++;
            count[s.charCodeAt(i) - 'a'.charCodeAt(0)]--;
        }

        const ans = count.reduce((acc, val) => acc + Math.max(0, val), 0);

        return ans;
};