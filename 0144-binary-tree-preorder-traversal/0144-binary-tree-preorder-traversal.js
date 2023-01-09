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
var preorderTraversal = function(root) {
    let ans = [], stack = [];
    if (root == null) return ans;
    stack.push(root);
    while(stack.length){
        let cur = stack.pop();
        ans.push(cur.val);
        if(cur.right) stack.push(cur.right);
        if(cur.left) stack.push(cur.left);
    }
    return ans;
};