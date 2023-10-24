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
 * @return {number[]}
 */
var largestValues = function(root) {
    let result = [];
    
    levelOrderMax(root, result);
    
    return result
};

var levelOrderMax = (node, result, depth = 0) => {
    if (!node) return;
    
    if (result[depth] === undefined || node.val > result[depth]) {
        result[depth] = node.val;
    }
    
    levelOrderMax(node.left, result, depth + 1);
    levelOrderMax(node.right, result, depth + 1);
}