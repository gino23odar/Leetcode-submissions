/**
 * // Definition for a _Node.
 * function _Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {_Node|null} root
 * @return {number[]}
 */
var postorder = function(root) {
    const stack = [root];
    const arr = [];
    while (stack.length && root !== null) {
        let node = stack.pop();
        for (let i = 0; i < node.children.length; i++) {
            stack.push(node.children[i]);
        }
        arr.unshift(node.val)
    }
    return arr;
};