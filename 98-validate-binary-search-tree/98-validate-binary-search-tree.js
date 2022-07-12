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
    return helper(root, null, null);
};

function helper(root, low, high){
    if(root === null) return true;
    let val = root.val;
    if((low !== null && val <= low) || (high !== null && val >= high)) return false;
    return helper(root.right, val, high) && helper(root.left, low, val);
}