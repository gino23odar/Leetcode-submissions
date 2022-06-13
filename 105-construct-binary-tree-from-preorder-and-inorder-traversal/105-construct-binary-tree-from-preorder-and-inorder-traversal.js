/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    if(!preorder.length || !inorder.length) return null;
    
    let root = new TreeNode(preorder[0]);
    let center = inorder.indexOf(root.val);
    
    root.left = buildTree(preorder.slice(1, center + 1), inorder.slice(0, center));
    root.right = buildTree(preorder.slice(center + 1), inorder.slice(center + 1));
    
    return root;
};