/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function(head) {
    if (!head) {
        return null;
    }
    
    if (!head.next) {
        return new TreeNode(head.val);
    }
    
    var m = head;
    var prev = head;
    var tail = head;
    
    while (tail && tail.next) {
        tail = tail.next.next;
        prev = m;
        m = m.next;
    }
    
    prev.next = null;
    
    var n = new TreeNode(m.val);
    n.left = sortedListToBST(head);
    n.right = sortedListToBST(m.next);
    return n;
};