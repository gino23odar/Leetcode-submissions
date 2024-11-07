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
var isBalanced = function(root) {
  
    const checkHeight = (node) =>{
        if(node == null) return 0;
        
        let leftH = checkHeight(node.left);
        if(leftH == -1) return -1;
        
        let rightH = checkHeight(node.right);
        if(rightH == -1) return -1;
        
        if(Math.abs(rightH - leftH) > 1){
            return -1
        }
        
        return Math.max(leftH, rightH)+1;
    }
    
    return checkHeight(root) != -1;
};