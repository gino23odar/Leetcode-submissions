/**
 * @param {number[]} nums
 * @return {number}
 */
var wiggleMaxLength = function(nums) {
    let len = nums.length;
    if(len < 2) return len;
    
    let diff = nums[1] - nums[0];
    let count = diff ? 2 : 1;
    
    for(let i = 2; i < len; i++){
        let nextDiff = nums[i] - nums[i-1];
        if(nextDiff > 0 && diff <= 0 || nextDiff < 0 && diff >=0){
            count++;
            diff = nextDiff;
        }
    }
    return count;
};