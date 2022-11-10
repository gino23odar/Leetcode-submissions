/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function(s) {
    let arr = [];
    for(let i = 0; i < s.length; ++i) {
        if(!arr.length)
            arr.push(s[i]);
        else {
            s[i] == arr[arr.length - 1] ? arr.pop() : arr.push(s[i]);
        }
    }
    return arr.join('');
};