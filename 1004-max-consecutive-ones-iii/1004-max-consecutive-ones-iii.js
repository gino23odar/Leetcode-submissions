/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function(nums, k) {
    let left = 0
    let max_length = 0
    let zero_count = 0
    for (let right = 0; right < nums.length; right++) {
        if(nums[right] == 0){
            zero_count += 1
        }
        while(zero_count > k) {
            if(nums[left] == 0) {
                zero_count -= 1
            }
            left++
        }
        max_length = Math.max(max_length, right- left + 1)
    }
    return max_length
};