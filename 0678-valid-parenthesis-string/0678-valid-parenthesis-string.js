/**
 * @param {string} s
 * @return {boolean}
 */
var checkValidString = function(s) {
    let open = 0;
    let close = 0;
    
    for(let i = 0; i <= s.length-1; i++){
        if(s[i] == '(' || s[i] == '*'){
            open++
        } else {
            open--
        }
        if(s[s.length-1-i] == ')' || s[s.length-1-i] == '*'){
            close++
        } else {
            close--
        }
        if(open < 0 || close < 0) return false
    }
    return true
};