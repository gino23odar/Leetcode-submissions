/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function(nums) {
    let map = new Map();
    let res = 0;
    for(let num of  nums){
        if(map[num]){
            res += map[num];
            map[num] += 1;
        } else {
            map[num] = 1;
        }
    }

    return res
};