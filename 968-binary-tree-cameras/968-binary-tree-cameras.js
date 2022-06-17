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
var minCameraCover = function(root) {
    let count = 0;
    function dfs(root){
        if(!root) return 2;
        
        const left = dfs(root.left);
        const right = dfs(root.right);
        
        if(left == 2 && right == 2){
            return 0;
        } else if(left == 0 || right == 0){
            count++;
            return 1;
        } else if(left == 1 ||  right == 1){
            return 2;
        }
    }
    
    if(dfs(root) == 0) count++
    
    return count;
};