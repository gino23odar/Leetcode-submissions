/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    for (let i=0;i<s.length;i++){
        let char = s[i]
        if(s.indexOf(char)==i && s.indexOf(char, i + 1) == -1){
            return i
        }
    }
    return -1
};