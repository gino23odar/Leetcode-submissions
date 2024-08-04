/**
 * @param {number[]} nums
 * @param {number} n
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
MOD =  1e9 + 7
var rangeSum = function(nums, n, left, right) {
    let sums = []
    for(let i = 0; i < nums.length; i++){
        let init = nums[i];
        sums.push(init)
        for(let j = i+1; j < nums.length; j++){
            init += nums[j]
            sums.push(init)
        }
    }
    
    sums.sort((a,b) => a - b)
    
    let ans = 0;
    for(let i = left-1; i < right; i++){
        ans += sums[i]
    }
    return ans % MOD
};