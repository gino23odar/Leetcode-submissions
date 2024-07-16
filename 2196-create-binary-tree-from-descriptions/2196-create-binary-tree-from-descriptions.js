/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[][]} descriptions
 * @return {TreeNode}
 */
var createBinaryTree = function(descriptions) {
  const map = {};
  const childrenSet = new Set();
  for (let desc of descriptions) {
    const [parent, child, side] = desc;
    childrenSet.add(Number(child));
    if (!(parent in map)) map[parent] = [null, null];
    if (side === 1) {
      map[parent][0] = child;
    } else {
      map[parent][1] = child;
    }
  }

  let root;

  for (let parent in map) {
    if (!childrenSet.has(Number(parent))) {
      root = new TreeNode(parent);
    }
  }
  const queue = [root];


  while (queue.length) {
    const curr = queue.shift();
    if (map[curr.val] !== undefined) {
      const [left, right] = map[curr.val];
      curr.left = left === null ? null : new TreeNode(left);
      curr.right = right === null ? null : new TreeNode(right);
      if (curr.left !== null) queue.push(curr.left);
      if (curr.right !== null) queue.push(curr.right);
    }
  }

  return root;
};