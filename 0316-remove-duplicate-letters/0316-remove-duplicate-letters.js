/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicateLetters = function(s) {
    if (!s) return "";
    var ch = Array.from(new Set(s)).map(ch => [100 - new Set(s.slice(s.indexOf(ch))).size, ch]).sort()[0][1];
    return ch + removeDuplicateLetters(s.slice(s.indexOf(ch)).split(ch).join(''));
};