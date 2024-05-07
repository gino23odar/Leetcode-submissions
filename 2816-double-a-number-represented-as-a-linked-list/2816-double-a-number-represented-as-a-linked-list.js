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
var doubleIt = function(head) {
    let prev = new ListNode(0);
    prev.next = head;
    let curr = head;
    head = prev;

    while(curr) {
        let temp = curr.val;
        curr.val = (temp*2)%10;
        prev.val += Math.floor((temp*2)/10);
        prev = curr;
        curr = curr.next;
    }
    return head.val == 0 ? head.next : head;
};