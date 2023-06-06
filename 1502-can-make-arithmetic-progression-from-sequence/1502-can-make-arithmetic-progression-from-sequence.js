/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canMakeArithmeticProgression = function(arr) {
    arr.sort((a,b) => a - b);
    var [n1,n2] = arr;
    let inc = n2 - n1;
    return arr.slice(2).every((value, index) => value - arr[index + 1] === inc);
};