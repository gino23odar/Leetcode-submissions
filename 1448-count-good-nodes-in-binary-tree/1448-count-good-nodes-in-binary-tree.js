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
var goodNodes = function(root, max = root.val) {
    let out = 0;
    if(root.val >= max) out++;
    max = Math.max(root.val, max);
    if(root.left) out += goodNodes(root.left, max);
    if(root.right) out += goodNodes(root.right, max);
    return out;
};