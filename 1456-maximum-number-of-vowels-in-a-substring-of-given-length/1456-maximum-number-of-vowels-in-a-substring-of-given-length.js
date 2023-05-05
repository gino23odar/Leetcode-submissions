/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function(s, k) {
    let max = 0, count = 0;
    for (let i = 0; i < s.length; i++) {
        if ("aeiou".includes(s[i])) count++;
        if (i >= k && "aeiou".includes(s[i - k])) count--;
        //console.log(i, count);
        max = Math.max(max, count);
    }
    return max;
};