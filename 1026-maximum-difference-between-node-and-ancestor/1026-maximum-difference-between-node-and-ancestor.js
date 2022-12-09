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
var maxAncestorDiff = function(root) {
    let max = -Infinity
    function helper(node) {
        
        if (!node) {
            return [Infinity,-Infinity]
        }
        let left = helper(node.left)
        let right = helper(node.right)
        let d1 = Math.abs(node.val - left[0])
        let d2 = Math.abs(node.val - left[1])
        let d3 = Math.abs(node.val - right[0])
        let d4 = Math.abs(node.val - right[1])
        if (d1 == Infinity) d1 = -Infinity
        if (d2 == Infinity) d2 = -Infinity
        if (d3 == Infinity) d3 = -Infinity
        if (d4 == Infinity) d4 = -Infinity
        max = Math.max(d1,d2,d3,d4,max)
        return [Math.min(left[0], node.val, right[0]), Math.max(right[1], node.val, left[1])]
    }
    helper(root)
    return max
};