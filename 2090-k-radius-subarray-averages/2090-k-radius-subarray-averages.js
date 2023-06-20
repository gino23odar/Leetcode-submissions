/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var getAverages = function(nums, k) {
    const rad = 2 * k;
    const ws = rad + 1;
    
    const result = [...nums].fill(-1);
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        if (i >= rad) {
            result[i - k] = Math.floor(sum / ws)
            sum -= nums[i - rad];
        }
    }
    return result;
};