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
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    const res = [];
    
    preOrder(root, "");
    
    return res;
    
    function preOrder(node, str) {
        if (node == null) return;
        
        str = str + node.val;

        if (node.left == null && node.right == null) {
            res.push(str);
            return;
        }
        str += "->";
        
        if (node.left) preOrder(node.left, str);
        if (node.right) preOrder(node.right, str);
    }
    
};