/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    let set = new Set(nums1);
    let setres = new Set();
    let res = [];
    for(let i = 0; i < nums2.length; i++){
        if(set.has(nums2[i])){
            setres.add(nums2[i])
        }
    }
    for(const val of setres){
        res.push(val)
    }
    return res
};