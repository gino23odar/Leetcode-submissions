/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
    let str = s + s;
    let newStr = str.substring(1, str.length - 1);
    
    if(newStr.includes(s)) {
        return true;
    }else {
        return false;
    }
};