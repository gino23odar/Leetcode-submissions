/**
 * @param {number[]} nums
 * @param {number} x
 * @return {number}
 */
var minOperations = function(nums, x) {
    const sum = nums.reduce((acc, cur) => acc + cur, 0);
    const target = sum - x;
    const map = new Map([[0, -1]]);
    
    if(target < 0) return -1;
    if(!target) return nums.length;
    
    let prefixSum = 0, maxLen = -Infinity;
    
    for(let i = 0; i < nums.length; i++) {
        prefixSum += nums[i];
        map.set(prefixSum, i);
        const startSum = prefixSum - target;
        if(map.has(startSum)) maxLen = Math.max(maxLen, i - map.get(startSum))
    }
    return maxLen === -Infinity ? -1 : nums.length - maxLen;
};