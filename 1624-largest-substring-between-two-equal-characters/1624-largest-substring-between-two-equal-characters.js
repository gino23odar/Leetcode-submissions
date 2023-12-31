/**
 * @param {string} s
 * @return {number}
 */
var maxLengthBetweenEqualCharacters = function(s) {
    let idx = [];
    let max = -1;
    
    for(let i = 0; i < s.length; i++){
        if(idx[s[i]] !== undefined){
            max = Math.max(max, i - idx[s[i]] -1)
        } else {
            idx[s[i]] = i
        }
    }
    return max
};