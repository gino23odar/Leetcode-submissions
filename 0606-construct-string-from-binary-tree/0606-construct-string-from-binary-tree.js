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
 * @return {string}
 */
var tree2str = function(root) {
    let ans = '';
    let dfs = (root) => {
        ans += root.val;
        if(root.left){
            ans += '('
            dfs(root.left);
            ans += ')'
        }
        if(!root.left && root.right) ans += '()';
        if(root.right){
            ans += '('
            dfs(root.right);
            ans += ')'
        }
    }
    dfs(root);
    return ans
};