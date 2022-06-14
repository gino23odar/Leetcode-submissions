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
 * @param {number} targetSum
 * @return {number[][]}
 */
var pathSum = function(root, targetSum) {
    let ans = [];
    helper(root, targetSum, [], ans);
    return ans;
};

const helper = (root, sum, tmp, ans) =>{
    if(!root) return;
    
    tmp.push(root.val);
    if(root.val === sum && !root.left && !root.right) ans.push(tmp);
    
    helper(root.left, sum - root.val, Array.from(tmp), ans);
    helper(root.right, sum - root.val, Array.from(tmp), ans);
}