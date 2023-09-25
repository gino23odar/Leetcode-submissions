/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    let e = 0;
    for(let i = 0; i < t.length; i++){
        e ^= t.charCodeAt(i) ^ s.charCodeAt(i);
    }
    return String.fromCharCode(e)
};