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
var isValidBST = function(root) {
    if(root == null) return true;
    let cur = -Infinity;
    
    const inOrder = (node) =>{
        if (!node) return true;

        if (!inOrder(node.left)) return false;

        if (node.val <= cur) return false;
        cur = node.val;

        return inOrder(node.right);
    }
    return inOrder(root);
};