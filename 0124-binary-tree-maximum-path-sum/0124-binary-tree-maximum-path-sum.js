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
var maxPathSum = function(root) {
    if(root == null) {
        return 0
    }    
    let result = Number.MIN_SAFE_INTEGER; 
    const dfs = (node) => {
        if(node == null){
            return 0;
        } 
        const left = Math.max(0, dfs(node.left));
        const right = Math.max(0, dfs(node.right));
        result = Math.max(result, left + right + node.val);
        return Math.max(left, right) + node.val;
     }     
    dfs(root);
    return result; 
};