/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let i = m - 1;
    let x = n - 1;
    var index = m + n -1;
    
    while(x >= 0){
        if(nums1[i] > nums2[x] && i >= 0){
            nums1[index] = nums1[i];
            index--;
            i--;
        }else{
            nums1[index] = nums2[x];
            index--;
            x--;
        }
    }
};