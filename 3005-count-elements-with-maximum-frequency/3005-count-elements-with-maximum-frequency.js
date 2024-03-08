/**
 * @param {number[]} nums
 * @return {number}
 */
var maxFrequencyElements = function(nums) {
    let highest = Math.max(...nums)
    let freq = new Array(highest+1).fill(0);
    
    for(let i = 0; i < nums.length; i++){
        freq[nums[i]] += 1
    }
    freq = freq.sort((a,b) => a - b);
    
    let res = freq[freq.length-1];
    
    for(let i = freq.length - 2; i >= 0; i--){
        if(freq[i] == freq[i+1]){
            res += freq[i]
        } else {
            break;
        }
    }
    return res
};