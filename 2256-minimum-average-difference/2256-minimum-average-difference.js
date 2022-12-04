/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumAverageDifference = function(nums) {
    const sum = nums.reduce((acc, cur) => acc + cur, 0)
    const len = nums.length
    let bestIndex = -1, bestDiff = Infinity
    
    
    let sumFL = 0, sumFR = sum
    for (const [i, val] of nums.entries()) {
        sumFL += val
        sumFR -= val
        const avgFL = Math.floor(sumFL / (1 + i))
        
        const avgFR = i < len - 1 ? Math.floor(sumFR / (len - 1 - i)) : 0
        const avgDiff = Math.abs(avgFL - avgFR)
        
        if (avgDiff < bestDiff) {
            [bestIndex, bestDiff] = [i, avgDiff]
        }
    }
    
    
    return bestIndex
};