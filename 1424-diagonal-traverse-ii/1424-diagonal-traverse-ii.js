/**
 * @param {number[][]} nums
 * @return {number[]}
 */
var findDiagonalOrder = function(nums) {
    let m = nums.length;
    let n = 0;
    for (let arr of nums) {
        n = Math.max(n, arr.length);
    }
    let map = {};
    let arr = Array(m + n - 1).fill().map(() => []);
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums[i].length; j++) {
            arr[i + j].unshift(nums[i][j]);
        }
    }
    return arr.flat();
};