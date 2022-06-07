/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    let ans = [];
    nums.sort((a,b) => a - b);
    helper(nums, 0, ans, []);
    return ans;
};

var helper = function(nums,start, ans, arr){
    ans.push(Array.from(arr));
    
    for(let i = start; i < nums.length; i++){
        if(i === start || nums[i] !== nums[i-1]){
            arr.push(nums[i]);
            helper(nums, i + 1, ans, arr);
            arr.pop();
        }
    }
}