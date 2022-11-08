/**
 * @param {string} s
 * @return {string}
 */
var makeGood = function(s) {
    const stack = [];
    const arr = s.split('');
    while(arr.length){
        const cur = arr.shift(), last = stack[stack.length - 1] || '';
        if(cur !== last && cur.toLowerCase() === last.toLowerCase()) {
            stack.pop();
        } else {
            stack.push(cur);
        }
    }
    return stack.join('');
};