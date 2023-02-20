/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let left = 0
    let right = nums.length - 1

    while (left <= right) {
        let middle = Math.floor((left + right) / 2)
        const current = nums[middle]
        if (current === target) {
            return middle
        } else if (current < target) {
            left = middle + 1
        } else {
            right = middle - 1
        }
    }

    if (left > right) {
        return left
    } else if (left < right) {
        return right
    }
};