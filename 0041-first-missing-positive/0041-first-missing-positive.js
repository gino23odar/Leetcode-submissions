/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    let map = new Map();
    for(let i = 0; i < nums.length; i++){
        map.set(nums[i], map.get(nums[i])+1 || 1);
    }
    let i = 1;
    
    while(i <= nums.length){
        if(map.get(i)){
            i++;
        } else {
            break;
        }
    }
    return i;
};