/**
 * @param {number[]} nums
 * @param {number[]} cost
 * @return {number}
 */
var minCost = function(nums, cost) {
    const getCost = x => {
        return nums.reduce((tot, num, i) => (
            tot + Math.abs(num - x) * cost[i]
        ), 0);
    }
    let min = Math.min(...nums)
    let max = Math.max(...nums);
    let result = getCost(min);
    while (min < max) {
        let mid = Math.floor((min + max)/2);
        let left = getCost(mid);
        let right = getCost(mid+1);
        result = Math.min(left, right);
        if(left < right) max = mid
        else min = mid+1
    }
    return result;
};