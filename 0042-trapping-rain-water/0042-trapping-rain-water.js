/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let left = 0, right = height.length -1, lmax = 0, rmax = 0, water = 0
    while (left < right) {
        if (height[left] <= height[right]) {
            if (height[left] > lmax) {
                lmax = height[left]
            } else {
                water += lmax - height[left]
            }
            left++
        } else {
            if (height[right] > rmax) {
                rmax = height[right]
            } else {
                water += rmax - height[right]
            }
            right--
        }
    }
    return water
};