/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let list = s.trim().split(' ');
    return list[list.length-1].length
};