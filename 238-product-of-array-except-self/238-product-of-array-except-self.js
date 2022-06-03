/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let factor = 1;
    const out = Array(nums.length).fill(1);
    
    for(let i = 0; i < nums.length; i++){
        out[i] *= factor;
        factor *= nums[i];
    }
    factor = 1;
    
    for(let i = nums.length-1; i >= 0; i--){
        out[i] *= factor;
        factor *= nums[i];
    }
    return out;
};

