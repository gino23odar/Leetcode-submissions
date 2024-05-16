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
var evaluateTree = function(root) {
    const dfs = (root) => {
        if(!root.left && !root.right){
            if(root.val == 0){
                return false
            } else {
                return true;
            }
        }
        let left = dfs(root.left);
        let right = dfs(root.right);
        let eval = false;
        if(root.val == 2){
            eval = left || right
        } else {
            eval = left && right
        }
        return eval
    }
    return dfs(root)
};