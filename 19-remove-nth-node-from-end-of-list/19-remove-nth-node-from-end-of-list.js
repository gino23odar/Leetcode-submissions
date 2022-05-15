/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let linkedListC = new ListNode(0);
    linkedListC.next = head;
    
    let fstPtr = linkedListC;
    let slwPtr = linkedListC;
    
    for(let i = 1; i <= n + 1; i++){
        fstPtr = fstPtr.next;
    }
    
    while(fstPtr != null){
        fstPtr = fstPtr.next;
        slwPtr = slwPtr.next;
    }
    slwPtr.next = slwPtr.next.next;
    
    return linkedListC.next;
};