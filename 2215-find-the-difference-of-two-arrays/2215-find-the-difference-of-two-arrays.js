/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(nums1, nums2) {
    return [ [...new Set(nums1)].filter(n => !nums2.includes(n)),
           [...new Set(nums2)].filter(n => !nums1.includes(n))]
};