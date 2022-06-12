/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function(s) {
    let arrS = s.split('');
    let stack = [];
    for(let i = 0; i < s.length; i++){
        if(arrS[i] == ')'){
            if(stack.length != 0){
                stack.pop();
            } else {
                delete arrS[i];
            }
        } else if(arrS[i] == '('){
            stack.push(i);
        }
    }
    for(let i = 0; i < stack.length; i++){
        delete arrS[stack[i]];
    }
    
    return arrS.join('');
};