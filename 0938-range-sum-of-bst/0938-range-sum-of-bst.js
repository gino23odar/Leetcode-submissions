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
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var rangeSumBST = function(root, low, high) {
  let sum = 0
  bfs(root)
  return sum
    
  function bfs(node) {
      if (node === null) {
        return sum;
      }

      const queue = [node];

      while (queue.length > 0) {
        const currentNode = queue.shift();

        if (currentNode.val >= low && currentNode.val <= high) {
          sum = sum + currentNode.val;
        }

        if (currentNode.left !== null) {
          queue.push(currentNode.left);
        }
        if (currentNode.right !== null) {
          queue.push(currentNode.right);
        }
      }
      return sum;
  }
};