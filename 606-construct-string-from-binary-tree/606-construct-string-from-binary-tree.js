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
    if(root === null)
        return '';
    
    var result = root.val + '';
    
    var left = tree2str(root.left);
    var right = tree2str(root.right);

    if(left === '' && right === '')  {
       return result;
    } else if(left === '') {
       result += '()' + '(' + right + ')';
    } else if (right === '') {
       result += '(' + left + ')';        
    } else {
      result += '(' + left + ')' + '(' + right + ')';  
    }
    return result;
};