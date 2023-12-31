/**
 * @param {string} s
 * @return {number}
 */
var maxLengthBetweenEqualCharacters = function(s) {
    let max = -1;
    for(let i = 0; i < s.length; i++){
        let cur = s.lastIndexOf(s[i]) - s.indexOf(s[i]) - 1;
        if(cur > max) max = cur
        if((s.length - i) <= max) break;
    }
    return max
};