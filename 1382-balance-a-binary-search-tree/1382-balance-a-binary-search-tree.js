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
 * @return {TreeNode}
 */
var balanceBST = function(root) {
    let sorted = []
    const inOrder = (node) =>{
        if(node == null) return 
        inOrder(node.left)
        sorted.push(node.val)
        inOrder(node.right)
    }
    inOrder(root)
    
    const sortedToBst = (root = null, l = 0, r = sorted.length-1) =>{
        let mid = Math.floor((l+r)/2);
        root = new TreeNode(sorted[mid])
        root.left = l < mid ?  sortedToBst(root, l, mid-1) : null;
        root.right = r > mid ? sortedToBst(root, mid+1, r) : null;
        return root;
    }
    return sortedToBst()
};