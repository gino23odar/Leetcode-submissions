/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let splitArr = s.split(" ").filter((str) => str.length !== 0);
    let rev = splitArr.reverse().join(' ').trim();
    return rev;
};