/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    let maxAvg = Number.MIN_SAFE_INTEGER;
    let sum = 0;
    
    for(let i = 0; i < k; i++){
        sum += nums[i];
    }
    maxAvg = sum/k;
    
    for(let i = 0; i < nums.length-k; i++){
        sum = sum - nums[i] + nums[i+k];
        //console.log(sum);
        //console.log(maxAvg);
        if(sum/k > maxAvg) maxAvg = sum/k;
    }
    return maxAvg    
};