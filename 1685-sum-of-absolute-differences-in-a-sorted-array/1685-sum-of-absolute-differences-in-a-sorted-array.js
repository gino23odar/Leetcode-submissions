/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getSumAbsoluteDifferences = function(nums) {
    let res = []
    let sum = nums.reduce((a, b) => a + b)
    let len = nums.length
    let sumR = 0
    let sumL = 0
    for (let i = 0; i < len; i++) {
        let cur = nums[i]
        sumL += nums[i]
        sumR = sum - sumL
        let n = i + 1
        let A = cur * n - sumL
        let B = sumR - cur * (len - n)
        res.push(A + B)
    }
    return res
};