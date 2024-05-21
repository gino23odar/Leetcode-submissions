/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    let res = [[]];
    const backtrack = (start, cur) =>{
        for(let i = start; i < nums.length; i++){
            cur.push(nums[i]);
            res.push([...cur])
            backtrack(i+1, cur);
            cur.pop();
        }
    }
    backtrack(0,[]);
    return res;
};