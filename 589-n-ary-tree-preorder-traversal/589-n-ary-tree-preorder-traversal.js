/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var preorder = function(root, out = []){
    if(!root) return out;
    out.push(root.val);
    for(let child of root.children){
        preorder(child, out);
    }
    return out;
};