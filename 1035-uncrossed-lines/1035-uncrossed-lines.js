/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var maxUncrossedLines = function(nums1, nums2, dp=[]) {
    for (let i = 1; i <= nums1.length; i++)
        for (let j = 1, xp = dp.slice(); j <= nums2.length; j++)
            if (nums1[i-1] == nums2[j-1]) dp[j] = ~~xp[j-1]+1
            else dp[j] = Math.max( ~~dp[j-1], ~~xp[j] )
    return dp[nums2.length]
};