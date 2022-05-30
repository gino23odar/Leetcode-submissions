/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let first = nums.indexOf(target);
    let last = nums.lastIndexOf(target);
    if(first === null) return [-1,-1];
    let solArr = [first, last];
    return solArr;
};