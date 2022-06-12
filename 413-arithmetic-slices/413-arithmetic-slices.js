/**
 * @param {number[]} nums
 * @return {number}
 */
var numberOfArithmeticSlices = function(nums) {
    let out = 0, ans = 0;
    let diff;
    
    for(let i = 1; i < nums.length; i++){
        let nextD = nums[i] - nums[i-1];
        if(nextD == diff){
            ans += out++;
        } else {
            diff = nextD;
            out = 1;
        } 
    }
    return ans;
};