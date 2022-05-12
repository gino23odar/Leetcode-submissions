/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    const squares = nums.map(n => n*n);
    squares.sort(function(a,b){return a - b});
    return squares;
};