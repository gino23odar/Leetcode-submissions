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
 * @return {number}
 */
var getMinimumDifference = function(root) {
    let node = root;
    let vals = [];
    const traverse = (root) =>{
        vals.push(root.val);
        if(root.left) traverse(root.left);
        if(root.right) traverse(root.right);
    }
    traverse(node);
    vals.sort((a,b) => a - b)
    let min = Infinity;
    for(let i = 1; i < vals.length; i++){
        if((vals[i] - vals[i-1]) < min){
            min = vals[i] - vals[i-1]
        }
    }
    return min
};