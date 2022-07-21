/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function(head, left, right) {
    let newHead = new ListNode(0);
    let cur = newHead, tmp = null, reverseLst = null, reverseHead = null, reverseCur = null, i = 0;
    
    newHead.next = head;
    while(cur){
        tmp = cur.next;
        
        if(i === left - 1) reverseHead = cur;
        if(i === left) reverseLst = cur, reverseCur = cur;
        if(i > left && i <= right) cur.next = reverseCur, reverseCur = cur;
        if(i === right) reverseLst.next = tmp, reverseHead.next = reverseCur;
        
        cur = tmp;
        i++;
    }
    return newHead.next;
};