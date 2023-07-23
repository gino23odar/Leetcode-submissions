/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var allPossibleFBT = function(n) {
    if (n === 1) return [new TreeNode(0)];
    const arr = [];
    for (let i = 1; i < n; i += 2) {
        const left = allPossibleFBT(i);
        const right = allPossibleFBT(n - i - 1);
        for (let l = 0; l < left.length; l++) {
            for (let r = 0; r < right.length; r++) {
                const root = new TreeNode(0);
                root.left = left[l];
                root.right = right[r];
                arr.push(root);
            }
        }
    }
    return arr;
};