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
 * @param {number} startValue
 * @param {number} destValue
 * @return {string}
 */
var getDirections = function(root, startValue, destValue) {
    let start = "", end = "";
    
    function getPath (node, path) {
        if(!node) return;
        
        if(node.val === startValue)
            start = path;
        if(node.val === destValue)
            end = path;
            
        getPath(node.left, path + "L");
        getPath(node.right, path + "R");
    }
    
    getPath(root, "");
    
    let index = 0;
    
    while(start[index] === end[index])
        index += 1;
    
    return start.slice(index).split('').map(_ => "U").join("") + end.slice(index);
};