/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var pairSum = function(head) {
    let stack = [];
    
    while(head) {
        stack.push(head.val);
        head = head.next;
    }
    
    let n = stack.length;
    let max = 0;
    
    for(let i = 0; i < n; i++) {
        max = Math.max(max, stack[i] + stack[n - 1 - i]);
    }
    return max;
};