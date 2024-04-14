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
var sumOfLeftLeaves = function(root) {
    const queue = [root]
    let sum = 0
    
    while (queue.length > 0) {
        const node = queue.shift()
        if (node.left) {
            if (!node.left.left && !node.left.right) {
                sum += node.left.val
            } else {
                queue.push(node.left)
            }
        }
        if (node.right) {
            queue.push(node.right)
        }
    }
    return sum
};