/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    const min = 1, max = nums.length
    for (let i = 0; i < nums.length; i++ ) {
        if (nums[i] < min || max < nums[i]) {
            nums[i] = 0
        }
    }

    for (let i = 0; i < nums.length; i++) {
        let num = nums[i]
        while (num > 0) {
            const temp = nums[num - 1]
            nums[num - 1] = -1
            num = temp
        }
    }

    const index = nums.findIndex( num => num !== -1)
    return index !== -1 ? index + 1 : max + 1
};