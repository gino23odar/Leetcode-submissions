/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    let res = [];
    const backtrack = (start=0, arr=[]) =>{
        res.push([...arr]);
        for(let i = start; i < nums.length; i++){
            arr.push(nums[i]);
            backtrack(i+1, arr);
            arr.pop();
        }
    }
    backtrack();
    return res;
};