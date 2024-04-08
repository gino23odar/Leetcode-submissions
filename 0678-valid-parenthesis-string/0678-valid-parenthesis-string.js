/**
 * @param {string} s
 * @return {boolean}
 */
var checkValidString = function(s) {
    let stack = [];
    let stackast = [];
    for(let i = 0; i < s.length; i++){
        if(s[i] == ')' && stack.length){
            stack.pop();
            continue;
        } if(s[i] == ')' && stackast.length){
            stackast.pop();
            continue;
        } else if(s[i] == '('){
            stack.push(i)
        } else if(s[i] == '*'){
            stackast.push(i)
        } else if(s[i] == ')'){
            return false;
        }
    }
    
    if(stack.length > stackast.length) return false
    
    for(let i = 1; i <= stack.length; i++){
        if(stack[stack.length-i] > stackast[stackast.length-i]){
            return false
        }
    }
    
    return true
};