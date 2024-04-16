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
	if (depth === 1) return new TreeNode(val, root);

	const helper = (node, currentDep = 1) => {
		if (!node) return;
		if (currentDep === depth - 1) {
			const { left, right } = node;
			node.left = new TreeNode(val, left);
			node.right = new TreeNode(val, null, right);
		}
		helper(node.left, currentDep + 1);
		helper(node.right, currentDep + 1);
	};
	helper(root);
	return root;
};