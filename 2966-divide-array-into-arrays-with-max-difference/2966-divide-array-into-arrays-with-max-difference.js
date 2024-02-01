/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[][]}
 */
var divideArray = function(nums, k) {
    nums.sort((a,b) => a - b);
    let res = [];
    let dif = 0;
    let sub = [nums[0]]
    for(let i = 1; i < nums.length; i++){
        if(sub.length > 0){
            dif += nums[i] - nums[i-1]
            if(dif > k){
                res = [];
                break;
            }
        }
        sub.push(nums[i])
        if(sub.length == 3){
            res.push(sub);
            sub = [];
            dif = 0;
        }
    }
    return res
};