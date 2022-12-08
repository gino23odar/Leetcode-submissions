/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function(root1, root2) {
    // Helper function to traverse the tree and collect the values of the leaves
    function getLeafValues(node, leafValues) {
        if (!node) {
            return;
        }
        if (!node.left && !node.right) {
            leafValues.push(node.val);
        }
        getLeafValues(node.left, leafValues);
        getLeafValues(node.right, leafValues);
    }
    
    // Collect the values of the leaves in each tree
    let leafValues1 = [];
    getLeafValues(root1, leafValues1);
    let leafValues2 = [];
    getLeafValues(root2, leafValues2);
    
    // Compare the leaf values of each tree
    if (leafValues1.length !== leafValues2.length) {
        return false;
    }
    for (let i = 0; i < leafValues1.length; i++) {
        if (leafValues1[i] !== leafValues2[i]) {
            return false;
        }
    }
    return true;
};