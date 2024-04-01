/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    if(s.length === 0)
        return 0;
    let len = 0;
    s = s.trim();
    for(let i = 0 ; i < s.length ; i++){
        if(s[i] === " "){
            len = 0;
        }else {
            len++;
        }
    }
    return len;
};