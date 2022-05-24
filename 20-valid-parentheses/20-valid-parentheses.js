/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (inputString) {
    while (inputString.indexOf('()') !== -1 || inputString.indexOf('{}') !== -1 || inputString.indexOf('[]') !== -1) {
        inputString = inputString.replace('()', '').replace('{}', '').replace('[]', '');
    }
    return !inputString.length;
};