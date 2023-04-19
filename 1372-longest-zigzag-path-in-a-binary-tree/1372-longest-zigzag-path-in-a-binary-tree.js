/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var longestZigZag = function(root) {
  let max = 0
  const aux = (node) => {
    if (!node) {
      return [-1, -1]
    }
    const [, right1] = aux(node.left)
    const [left2] = aux(node.right)
    max = Math.max(
      right1 + 1,
      left2 + 1,
      max,
    )
    return [right1 + 1, left2 + 1]
  }
  aux(root)
  return max
};