/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    const map = new Map();
    let numOddChars = 0;

    for (let char of s) {
        const count = map.get(char) || 0;
        map.set(char, count + 1);
        numOddChars = ((count + 1) % 2 === 1) ? numOddChars + 1 : numOddChars - 1;
    }
    return numOddChars > 0 ? s.length - (numOddChars - 1) : s.length;
};