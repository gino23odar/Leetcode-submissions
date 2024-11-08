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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function(root, subRoot) {
    
    const isIdentical = (s,t) =>{
        if (!s && !t) return true;
        if (!s || !t) return false;
        return s.val == t.val && isIdentical(s.left, t.left) && isIdentical(s.right, t.right);
    }
    
    const traverse = (node) =>{
        if(!node) return false;
        
        if(isIdentical(node, subRoot)) return true;
        
        return traverse(node.left) || traverse(node.right);
    }
    
    return traverse(root);
};