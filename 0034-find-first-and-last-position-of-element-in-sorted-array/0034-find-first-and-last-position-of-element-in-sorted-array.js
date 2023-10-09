/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    //console.log(nums.indexOf(target))
    //if(nums.indexOf(target)){
    //    return [nums.indexOf(target), nums.lastIndexOf(target)]
    //}
    //return [-1, -1]
    return [nums.indexOf(target), nums.lastIndexOf(target)]
};