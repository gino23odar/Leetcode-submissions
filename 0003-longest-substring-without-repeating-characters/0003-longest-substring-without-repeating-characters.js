/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let maxLength = 0;
    let start = 0;
    const chars = new Array(128).fill(-1);
    
    for (let end = 0; end < s.length; end++) {
        const charCode = s.charCodeAt(end);
        start = Math.max(start, chars[charCode] + 1);
        chars[charCode] = end;
        maxLength = Math.max(maxLength, end - start + 1);
    }
    
    return maxLength;
};