/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let i = m;  
    let x = 0;
    
    while(x < n) {
        nums1[i] = nums2[x];
        i++;
        x++;
    }
    return nums1.sort((a,b) => a-b);
};