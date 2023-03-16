/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
    const map = new Map();
    
    for(let i = 0; i < inorder.length; i++) {
        map.set(inorder[i], i);
    }
    
    function callDFS(start, end) {
        if(start > end) return null;
        const val = postorder.pop();
        const idx = map.get(val);
        const node = new TreeNode(val);
        node.right = callDFS(idx+1, end);
        node.left = callDFS(start, idx-1);
        return node;
    }
    
    return callDFS(0, inorder.length-1);
};