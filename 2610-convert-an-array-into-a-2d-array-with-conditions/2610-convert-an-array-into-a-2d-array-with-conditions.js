/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findMatrix = function(nums) {
    let map = new Map();
    let res = [];
    
    for(let i = 0; i < nums.length; i++){
        if(map.get(nums[i])){
            map.set(nums[i], map.get(nums[i]) + 1);
        } else {
            map.set(nums[i], 1);
        }
    }
    
    const high = Math.max(...map.values());
    
    for(let i = 0; i < high; i++){
        let sub = [];
        for(const [key, value] of map){
            if(value > 0){
                sub.push(key);
                map.set(key, map.get(key) - 1)
                if(value == 0) map.delete(key)
            }
        }
        res.push(sub)
    }
    
    return res
};