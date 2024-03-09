/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var getCommon = function(nums1, nums2) {
    let set = new Set(nums1);
    let res = -1;
    
    for(let i = 0; i < nums2.length; i++){
        if(set.has(nums2[i])){
            res = nums2[i];
            break;
        }
    }
    return res
};