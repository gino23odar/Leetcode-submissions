/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    let ans = [];
    helper(nums, ans, [], 0);
    return ans;
};

var helper = function(nums, ans, arr, start){
    let len = nums.length;
    ans.push(Array.from(arr));
    
    if(start === len) return;
    
    for(let i = start; i < len; i++){
        arr.push(nums[i]);
        helper(nums, ans, arr, i + 1);
        arr.pop();
    }
}