/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    let lenA = linkedListLen(headA), lenB = linkedListLen(headB);
    
    let dif = Math.abs(lenA - lenB);
    
    if(lenA > lenB){
        while(dif--) headA = headA.next;
    } else {
        while(dif--) headB = headB.next;
    }
    
    while(headA !== headB){
        headA = headA.next;
        headB = headB.next;
    }
    return headA;
};

const linkedListLen = (head) =>{
    let len = 0;
    while(head){
        len++;
        head = head.next;
    }
    return len;
}