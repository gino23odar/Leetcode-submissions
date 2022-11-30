/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let endIndex = digits.length - 1
    digits[endIndex]++;
    while (digits[endIndex] > 9) {
        let tmp = digits[endIndex];
        digits[endIndex] = digits[endIndex] - 10;
        if (endIndex-1 < 0) {
            digits.unshift(1);
        } else {
            digits[endIndex-1]++;
            endIndex--;
        } 
    }
    return digits;
};