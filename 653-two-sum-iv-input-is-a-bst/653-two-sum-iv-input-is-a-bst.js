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
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function(root, k) {
    if(root === null) return false;
    
    const set = new Set();
    const stack = [root];
    
    while(stack.length){
        const temp = stack.pop();
        if(set.has(k - temp.val)) return true;
        
        set.add(temp.val);
        
        if(temp.right) stack.push(temp.right);
        if(temp.left) stack.push(temp.left);
    }
    return false;
};

