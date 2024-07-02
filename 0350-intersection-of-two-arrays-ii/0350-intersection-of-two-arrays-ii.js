/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    nums1 = nums1.sort((a,b)=>a-b);
    nums2 = nums2.sort((a,b)=>a-b);
    
    let i = 0 
    let j = 0
    let returnArray = [];
    
    while(j < nums2.length && i < nums1.length){
        if(nums1[i] === nums2[j]){
            returnArray.push(nums1[i]);
            i++;
            j++;
        }
        else if(nums1[i] > nums2[j]){
            j++;
        }
        else{
            i++;
        }
    }
    
    return returnArray;
};