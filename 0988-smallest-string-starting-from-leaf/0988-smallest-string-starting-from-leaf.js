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
 * @return {string}
 */
var smallestFromLeaf = function(root, pre='') {
    if (root === null) return pre;
    const char = String.fromCharCode(root.val + 97);
    if (root.right === null) return smallestFromLeaf(root.left, char + pre);
    if (root.left === null) return smallestFromLeaf(root.right, char + pre);
    
    const leftSmallest = smallestFromLeaf(root.left, char + pre);
    const rightSmallest = smallestFromLeaf(root.right, char + pre);
    return leftSmallest < rightSmallest ? leftSmallest : rightSmallest; 
};