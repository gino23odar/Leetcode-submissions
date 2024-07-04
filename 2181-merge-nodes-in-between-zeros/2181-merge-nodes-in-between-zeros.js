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
var mergeNodes = function(head) {
    let newHead = new ListNode();
    let curr = head.next;
    let ans = newHead;
    let sum = 0;
    
    while(curr){
        if(curr.val != 0){
            sum += curr.val
        } else {
            newHead.next = new ListNode(sum)
            sum = 0
            newHead = newHead.next
        }
        curr = curr.next
    }
    return ans.next
};