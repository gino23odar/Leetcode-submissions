/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function(nums, k) {
    if(k <= 1) return 0;
    let windowSum = 1;
    let left = 0, right = 0, ans = 0;
    
    while(right < nums.length){
        windowSum *= nums[right];
        while(windowSum >= k){
            windowSum /= nums[left];
            left += 1;
        }
        ans += (right - left + 1);
        console.log(ans);
        right += 1;
    }
    return ans;
};