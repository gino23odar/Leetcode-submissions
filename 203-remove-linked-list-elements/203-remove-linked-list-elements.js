/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    const copy = {
        next: head,
    }
    
    let current = copy;
    
    while(current && current.next){
        let next = current.next;
        if(next.val === val){
            current.next = next.next;
            next = next.next;
        }
        if(!next || next.val !== val){
            current = next;
        }
    }
    return copy.next;
};