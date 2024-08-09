/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let pre = [nums[0]];
    let suf = Array(nums.length).fill(nums[nums.length-1]);
    
    for(let i = 1; i < nums.length; i++){
        pre[i] = pre[i-1] * nums[i]
    }

    for(let i = nums.length -2; i >= 0; i--){
        suf[i] = suf[i+1] * nums[i]
    }

    let ans = Array(nums.length);
    for(let i = 0; i < nums.length; i++){
        if(i == 0){
            ans[i] = suf[i+1]
        } else if(i == nums.length-1){
            ans[i] = pre[i-1]
        } else {
            ans[i] = suf[i+1] * pre[i-1]
        }
    }
    return ans
};