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
    let ans  = [], stack = [];
    
    if(root === null) return ans;
    
    stack.push(root);
    
    while(stack.length !== 0){
        let current = stack.pop();
        ans.push(current.val);
        if(current.right) stack.push(current.right);
        if(current.left) stack.push(current.left);
    }
    return ans;
};