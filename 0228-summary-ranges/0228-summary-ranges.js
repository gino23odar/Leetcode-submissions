/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    let ranges = [];
    for(let i = 0, j = 0; j < nums.length; j++) {
        if(j + 1 < nums.length && nums[j+1] === nums[j] + 1) continue;
        if(i === j) {
            ranges.push(nums[i] + "");
        } else{
            ranges.push(nums[i] + '->' + nums[j]);
        }
        i = j + 1;
    }
    return ranges;
};