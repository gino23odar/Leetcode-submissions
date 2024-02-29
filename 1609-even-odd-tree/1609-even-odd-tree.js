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
 * @return {boolean}
 */
var isEvenOddTree = function(root) {
  let isEven = true;
  const queue = [root];

  while (queue.length) {
    const len = queue.length;
    let prev = null;
    for (let i = 0; i < len; i++) {
      const node = queue.shift();
      if (isEven && node.val % 2 === 0) return false;
      if (!isEven && node.val % 2 === 1) return false;

      if (prev !== null) {
        if (isEven && node.val <= prev) return false;
        if (!isEven && node.val >= prev) return false;
      }
      prev = node.val;

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    isEven = !isEven;
  }

  return true;
};