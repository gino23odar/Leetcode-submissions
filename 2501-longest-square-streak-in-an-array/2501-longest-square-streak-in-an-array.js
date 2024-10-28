/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSquareStreak = function(nums) {
    const map = {}
    for (let n of nums) map[n] = true

    let max = -1
    for (let n of nums) {
        let cnt = 1
        while (map[n*n]) {
            n *= n
            cnt++
            max = Math.max(cnt, max)
        }
    }

    return max
};

    