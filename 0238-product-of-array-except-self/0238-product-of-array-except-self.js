/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let n = nums.length; 
    let ans = Array(n).fill(1);
    
    for(let i = 1; i < n; i++){
        ans[i] = ans[i-1] * nums[i-1]
    }
    
    let suf = 1;
    
    for(let i = n-1; i >= 0; i--){
        ans[i] *= suf;
        suf *= nums[i];
    }
    return ans
};