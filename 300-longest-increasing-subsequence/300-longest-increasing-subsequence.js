/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    if(nums.length === 1) return 1;
    
    let seqLen = Array(nums.length).fill(1);
    
    for(let i = 1; i < nums.length; i++){
        for(let j = 0; j < i; j++){
            if(j < i && nums[j] < nums[i]) seqLen[i] = Math.max(seqLen[j]+1, seqLen[i]);
        }
    }
    return Math.max.apply(Math, seqLen);
};