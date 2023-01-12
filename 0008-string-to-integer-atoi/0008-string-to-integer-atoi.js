/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    let i=0, sign = 1, num = 0, MIN = Math.pow(-2,31), MAX = (MIN + 1) * -1;
    s = s.trim();
    if (s[i]=='-' || s[i]=='+') sign = s[i++]=='-'?-1:1;
    while (s[i] && s[i].charCodeAt(0)-48 <= 9 && s[i].charCodeAt(0)-48 >= 0) {
        num = num*10 + (s[i++].charCodeAt(0)-48);
    }
    num = sign*num;
    return num<=MIN?MIN:num>=MAX?MAX:num;
};