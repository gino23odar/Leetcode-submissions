/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function(nums) {
    let hash = [...new Set(nums)].sort(((a,b)=>a-b)), count = 0, arr = []
    for ( let n of hash ) {
        while ( n-arr[0] >= nums.length ) arr.shift()
        count = Math.max( arr.push(n), count )
    }
    return nums.length-count
};