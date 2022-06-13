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
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
    if(!root) return [];
    const nodes = [];
    let levels = [], odd = true;
    
    const queue = [root, null];
    
    while(queue.length > 0){
        const n = queue.shift();
        if(n){
            levels.push(n.val);
            if(n.left){
                queue.push(n.left);
            }
            if(n.right){
                queue.push(n.right);
            }
        } else {
            if(!odd) levels = levels.reverse();
            nodes.push(levels);
            levels = [];
            odd = !odd;
            if(queue.length > 0) queue.push(null);
        }
    }
    return nodes;
};