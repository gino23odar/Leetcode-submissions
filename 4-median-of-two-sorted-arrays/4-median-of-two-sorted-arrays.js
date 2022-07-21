/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let totLen = nums1.length + nums2.length;
    let half = Math.floor(totLen /2);
    
    let num1Idx = 0, num2Idx = 0, last, secLast; 
    
    for(let i = 0; i <= half; i++){
        secLast = last;
        if(nums2[num2Idx] == undefined || (nums1[num1Idx] != undefined && nums1[num1Idx] <= nums2[num2Idx])){
            last = nums1[num1Idx];
            num1Idx++;
        } else {
            last = nums2[num2Idx];
            num2Idx++;
        }
    }
    return totLen % 2 ?last :(last + secLast)/2;
};