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
    let newNode = new ListNode();
    let prev = newNode;
    prev.next = head;

    while(prev.next !== null && prev.next.next !== null){
        let n1 = prev.next;
        let n2 = prev.next.next;

        n1.next = n2.next;
        n2.next = n1;
        prev.next = n2;

        prev = n1;
    }
    return newNode.next;
};