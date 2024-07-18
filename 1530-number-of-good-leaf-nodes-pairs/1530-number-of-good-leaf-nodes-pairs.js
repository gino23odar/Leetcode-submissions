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
 * @param {number} distance
 * @return {number}
 */
var countPairs = function(root, distance) {
    let output = 0;
    
    function callDFS(node) {
        if(!node) return null;
        if(!node.left && !node.right) return [1];
        
        const left = callDFS(node.left);
        const right = callDFS(node.right);
        
        if(!node.left || !node.right) {
            if(left) return left.map(v => v + 1);
            return right.map(v => v + 1)
        }
        
        for(let l of left) {
            for(let r of right) {
                if(l + r <= distance) output++;
            }
        }
        return [...left, ...right].map(v => v + 1);
    }
    callDFS(root);
    return output;
};