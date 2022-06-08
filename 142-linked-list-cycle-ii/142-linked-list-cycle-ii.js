/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    let slw = head, fst = head;
    while(fst && fst.next && fst.next.next){
        slw = slw.next;
        fst = fst.next.next;
        if(slw === fst){
            slw = head;
            while(slw !== fst){
                slw = slw.next;
                fst = fst.next;
            }
            return slw;
        }
    }
    return null;
};