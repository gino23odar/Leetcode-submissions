/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
    const stack = new Array();
    
    for(let i = 0; i < s.length; i++){
        let char = s.charAt(i);
        if(closed(char)){
            let dec = inner(stack);
            let count = getCount(stack);
            let rep = dec.repeat(count);
            
            stack.push(rep);
        } else {
            stack.push(char);
        }
    }
    
    let ans = '';
    
    while(stack.length) ans = `${stack.pop()}${ans}`;
    
    return ans;
};

const getCount = stack =>{
    let ans = '';
    while(isNum(stack[stack.length - 1])) ans = `${stack.pop()}${ans}`;
    return parseInt(ans);
};

const inner = stack =>{
    let ans = '';
    while(!open(stack[stack.length - 1])){
        ans = `${stack.pop()}${ans}`;
    }
    stack.pop();
    return ans;
};

const open = char => char === '[';
const closed = char => char === ']';
const isNum = char => char >= '0' && char <= '9';
