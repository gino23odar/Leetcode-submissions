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
 * @param {number} val
 * @param {number} depth
 * @return {TreeNode}
 */
var addOneRow = function(root, val, depth) {
    let mockNode = new TreeNode(null, root, null)
    const dfs = (node, currDepth) => {
        if (currDepth === depth - 1) {
            let newLeft = new TreeNode(val, node.left, null)
            let newRight = new TreeNode(val, null, node.right)
            node.left = newLeft
            node.right = newRight
            return node
        }
        node.left && dfs(node.left, currDepth + 1)
        node.right && dfs(node.right, currDepth + 1)
        return node
    }
    dfs(mockNode, 0)
    return mockNode.left
};