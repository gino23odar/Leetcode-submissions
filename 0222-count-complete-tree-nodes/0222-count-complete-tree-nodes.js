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
var countNodes = function(root) {
    if (root == null) return 0;
    
    let leftNode = root.left;
    let leftHeight = 1;
    
    while (leftNode) {
        leftNode = leftNode.left;
        leftHeight++;
    }
    
    let rightNode = root.right;
    let rightHeight = 1;
    
    while (rightNode) {
        rightNode = rightNode.right;
        rightHeight++;
    }
    
    if (leftHeight == rightHeight) {
        return Math.pow(2, leftHeight) - 1;
    }
    
    const left = countNodes(root.left);
    const right = countNodes(root.right);
        
    return left + right + 1;
};