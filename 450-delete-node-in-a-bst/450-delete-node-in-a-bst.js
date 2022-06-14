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
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function(root, key) {
    const min = (node) => {
        let current = node;
        while (current && current.left) {
            current = current.left;
        }
        return current;
    }
    
    const deleteN = (node) =>{
        if(!node.left){
            return node.right;
        }
        node.left = deleteN(node.left);
        return node;
    }
    
    const helper = (node) =>{
        if(!node) return null;
        if(node.val > key){
            node.left = helper(node.left);
            return node;
        }
        if(node.val < key){
            node.right = helper(node.right);
            return node;
        }
        if(!node.left || !node.right){
            return node.left || node.right;
        }
        
        const mNode = min(node.right);
        node.val = mNode.val;
        node.right = deleteN(node.right);
        return node;
    }
    return helper(root);
};