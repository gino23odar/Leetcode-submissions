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
var rightSideView = function(root) {
    let ans = [];
    helper(root, 0, ans);
    return ans;
};

var helper = function(node, level, ans){
    if(!node) return;
    ans[level] = node.val;
    helper(node.left, level+1, ans);
    helper(node.right, level+1, ans);
}