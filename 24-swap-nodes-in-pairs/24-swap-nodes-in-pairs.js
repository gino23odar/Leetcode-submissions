/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
    let newList = new ListNode(null, head);
    
    let current = newList;
    
    while(current.next && current.next.next){
        let one = current.next;
        let two = current.next.next;
        
        one.next = two.next;
        two.next = one;
        current.next = two;
        current = current.next.next;
    }
    return newList.next;
};