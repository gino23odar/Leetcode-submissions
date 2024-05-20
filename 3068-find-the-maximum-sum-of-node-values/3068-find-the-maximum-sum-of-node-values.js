/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number[][]} edges
 * @return {number}
 */
var maximumValueSum = function(nums, k, edges) {
    // Initialize variables for the total sum, the number of beneficial operations, and tracking min/max changes
    let totalSum = 0;
    let beneficialOpsCount = 0;
    let minPositiveChange = Infinity;
    let maxNegativeChange = -Infinity;

    // Iterate through each node value in nums
    for (let nodeValue of nums) {
        // Calculate the value after performing XOR with k
        let nodeValAfterOperation = nodeValue ^ k;
        // Calculate the net change due to the operation
        let netChange = nodeValAfterOperation - nodeValue;

        // Add the original node value to the total sum
        totalSum += nodeValue;

        // If the change is positive, it's beneficial to apply the operation
        if (netChange > 0) {
            // Track the minimum positive change
            minPositiveChange = Math.min(minPositiveChange, netChange);
            // Add the positive change to the total sum
            totalSum += netChange;
            // Increment the count of beneficial operations
            beneficialOpsCount += 1;
        } else {
            // Track the maximum negative change for potential adjustments
            maxNegativeChange = Math.max(maxNegativeChange, netChange);
        }
    }

    // If the count of beneficial operations is even, return the total sum as is
    if (beneficialOpsCount % 2 === 0) {
        return totalSum;
    }

    // Otherwise, adjust the total sum by removing the smallest positive change or adding the largest negative change
    return Math.max(totalSum - minPositiveChange, totalSum + maxNegativeChange);
};