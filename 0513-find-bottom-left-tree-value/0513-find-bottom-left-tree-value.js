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
var findBottomLeftValue = function(root) {
    let result = root.val;
    let maxHeight = 1;
    
    const dfs = (root, height) =>{
        if(root != null) {
            if(height > maxHeight) {
                maxHeight = height;
                result = root.val;
            }
            dfs(root.left, height + 1);
            dfs(root.right, height + 1);
        }
    }
    
    dfs(root, 1);
    return result;
};