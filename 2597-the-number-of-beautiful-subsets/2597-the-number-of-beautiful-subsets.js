/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var beautifulSubsets = function(nums, k) {
    const helper = arr => {
        let len = arr.length;
        if (len === 0) return 0;
        let res = 0;
        for(let i = 0; i < len; i++) {
            let next = [];
            for (let j = i + 1; j < len; j++) {
                if (Math.abs(arr[i] - arr[j]) !== k) {
                    next.push(arr[j]);
                }
            }
            res += 1 + helper(next);
        }
        return res;
    }

    return helper(nums)
};