/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let index1 = a.length;
    let index2 = b.length;
    let result = '';
    let carry = 0;
    while (index1 || index2) {
        let sum = (index1 > 0 ? +a[--index1] : 0) + (index2 > 0 ? +b[--index2] : 0) + carry;
        result = (sum % 2) + result;
        carry = sum > 1 ? 1 : 0;
    };
    return carry ? carry + result : result;
};