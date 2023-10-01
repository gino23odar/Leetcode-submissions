/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    return s.split(' ').map(el => el.split('').reverse().join('')).join(' ');
};