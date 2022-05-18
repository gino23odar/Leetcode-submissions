/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function (root) {
    let temp = root;
    while (temp && temp.left) {
        const next = temp.left;
        while (temp) {
            temp.left.next = temp.right;
            temp.right.next = temp.next && temp.next.left;
            temp = temp.next;
        }
        temp = next;
    }
    return root;
};