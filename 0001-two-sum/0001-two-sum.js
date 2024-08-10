/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let map = new Map();
    
    for(let i = 0; i < nums.length; i++){
        map.set(nums[i], i)
    }
    
    let ans = [0,0]
    for(let i = 0; i < nums.length; i++){
        if(map.get(target-nums[i])){
            ans[0] = i
            ans[1] = map.get(target-nums[i])
            if(ans[0] == ans[1]) continue
            break;
        }
    }
    return ans
};