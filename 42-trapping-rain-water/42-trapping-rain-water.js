/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    var res = 0, left = 0, right = height.length - 1, leftMax = 0, rightMax = 0;
    while (left < right) {
    if (height[left] < height[right]) {
      if (height[left] >= leftMax) {
        leftMax = height[left];
      } else {
        res += leftMax - height[left];
      }
      left++;
    } else {
      if (height[right] >= rightMax) {
        rightMax = height[right];
      } else {
        res += rightMax - height[right];
      }
      right--;
    }
  }

  return res;
};