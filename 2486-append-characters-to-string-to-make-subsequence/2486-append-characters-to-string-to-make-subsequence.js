/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var appendCharacters = function(s, t) {
    let sInd = 0;
    let tInd = 0;
    while(sInd < s.length && tInd < t.length){
        if(s[sInd] == t[tInd]){
            tInd++
        }
        sInd++
    }
    return t.length - tInd
};