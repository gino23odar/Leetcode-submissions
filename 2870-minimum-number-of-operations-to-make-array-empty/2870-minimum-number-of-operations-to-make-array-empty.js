/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function(nums) {
    let map = new Map();
    for(let i = 0; i < nums.length; i++){
        map.set(nums[i], map.get(nums[i]) + 1 || 1)
    }
    let min = 0;
    
    for(let val of map.values()){
        if(val === 1) {
            return -1;
        }
        let vr = Math.floor(val / 3);
        let rem = val % 3;
        if(rem > 0) {
            vr++;
        }
      min += vr;
    }
    return min
};