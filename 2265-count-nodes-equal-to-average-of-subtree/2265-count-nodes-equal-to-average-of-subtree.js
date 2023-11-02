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
var averageOfSubtree = function(root) {
    let counter = 0;

    const helper = (root) =>{
        if (!root) return [0, 0]
        
        const left = helper(root.left)
        const right = helper(root.right)
        const sum = root.val + left[0] + right[0]
        const count = 1 + left[1] + right[1]
        
        if (Math.floor(sum/count) === root.val) counter++
        return [sum, count]
    }
    
    helper(root)
    return counter;
};