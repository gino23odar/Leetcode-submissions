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
    let temp1 = head ; 
    let size = 0;
    
    while(temp1){
       size ++;
       temp1 = temp1.next;
    }
    if(size<n) return head;
    if(size===1 && n===1){
        head = null;
        return head;
    }

    let pos = size - n ; 
    if(pos===0){
        let temp3=head;
        head=head.next;
        temp3.next=null;
        return head;
    }
    let temp2 = head;

    for(let i=1 ;i<=pos-1; i++ ){
        temp2 = temp2.next;
    }
    temp1 = temp2.next.next;
    temp2.next.next=null;
    temp2.next = temp1;

    return head;
};