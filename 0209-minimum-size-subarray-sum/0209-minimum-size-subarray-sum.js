/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    let right = 0, left = 0, winSum = 0, minSize = nums.length + 1;
    
    while(right < nums.length && 1 < minSize){
        winSum += nums[right];
        
        if(winSum >= target){
            while(target <= winSum - nums[left]){
                winSum -= nums[left++];
            }
            minSize = Math.min(minSize, right - left + 1);
            winSum -= nums[left++];
        }
        right++;
    }
    return minSize < nums.length + 1 ? minSize : 0;
};