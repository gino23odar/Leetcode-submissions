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
 * @return {TreeNode}
 */
var bstToGst = function(root) {
    let sum = 0
    let inOrder = (root) =>{
        if(root == null) return 
        inOrder(root.right)
        sum += root.val
        root.val = sum
        inOrder(root.left)
    }
    inOrder(root)
    return root
};