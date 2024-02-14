/**
 * @param {number[]} nums
 * @return {number[]}
 */
var rearrangeArray = function(nums) {
    let pos = [];
    let neg = [];
    let res = [];
    
    for(let i = 0; i < nums.length; i++){
        if(nums[i] > 0){
            pos.push(nums[i])
        } else {
            neg.push(nums[i])
        }
    }
    
    for(let i = 0; i < pos.length; i++){
        res.push(pos[i]);
        res.push(neg[i]);
    }
    
    return res
};