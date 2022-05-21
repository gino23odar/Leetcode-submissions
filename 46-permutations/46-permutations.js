/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    let result = [];
    let current = [];
    let len = nums.length;
    let used = new Array(len).fill(false);
    
    dfs(nums, len, result, current, used);
    return result;
}    
    
function dfs(nums, len, result, current, used) {
    if (current.length === len) {
        result.push(current.concat());
        return;
    }
    
    for (let i = 0; i < len; i++) {
        // avoid repeating the same number in diferent indexes
        if (used[i]) continue;
        
        used[i] = true;
        current.push(nums[i]);
        dfs(nums, len, result, current, used);
        
        current.pop();
        used[i] = false;
    }
};

