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
var levelOrder = function(root) {
    if(root == null) return [];
    
    const queue = [];
    let ans = [];
    
    queue.push(root);
    
    while(queue.length > 0){
        let len = queue.length;
        let level = [];
        while(len--){
            let cur = queue.shift();
            level.push(cur.val);
            if(cur.left) queue.push(cur.left);
            if(cur.right) queue.push(cur.right);
        }
        ans.push(level);
    }
    return ans;
};