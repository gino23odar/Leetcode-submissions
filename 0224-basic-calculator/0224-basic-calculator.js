/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
    s = s.replace(/\s+/g, '');
    const stack = [1];
    let sign = 1;
    let i = 0;
    let res = 0;
    while (i < s.length) {
        const char = s[i];
        switch(char) {
            case '+':sign = 1; i++; break;
            case '-':sign = -1; i++; break;
            case '(':stack.push(sign * stack[stack.length - 1]);sign = 1;i++;break;
            case ')':stack.pop();i++;break;
            default:
            let num = 0;
            while (i < s.length && /\d/.test(s[i])) {
                num = num * 10 + parseInt(s[i]);
                i++;
            }
            res += sign * stack[stack.length - 1] * num;
        }
    }
    return res;
};