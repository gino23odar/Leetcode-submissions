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
 * @param {number[]} to_delete
 * @return {TreeNode[]}
 */
var delNodes = function(root, to_delete) {
    if(!root) return [];
    
    const res = [];
    const helper = (node, isRoot) => {
        if(!node) return;
        
        const isNodeDeleted = to_delete.includes(node.val);

        if(node.left) node.left = helper(node.left, isNodeDeleted);
        if(node.right) node.right = helper(node.right, isNodeDeleted);
        if(isRoot && !isNodeDeleted) res.push(node);
        
        return isNodeDeleted ? null : node;
    }

    helper(root, true);
    return res;
};