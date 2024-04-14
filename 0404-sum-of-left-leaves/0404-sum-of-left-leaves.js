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
var sumOfLeftLeaves = function(root) {
  const sum = [0];

  const dfs = (node, dir) => {
    if (!node.left && !node.right && dir === "left") {
      sum[0] += node.val;
      return
    }
    node.left && dfs(node.left, "left");
    node.right && dfs(node.right, "right");
  }
  dfs(root, null);
  return sum[0];
};