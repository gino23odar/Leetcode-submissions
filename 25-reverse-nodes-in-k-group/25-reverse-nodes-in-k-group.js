/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
    let cur = head, count = 0;
    
    while(cur != null && count != k){
        cur = cur.next;
        count++;
    }
    
    if(count == k){
        cur = reverseKGroup(cur, k);
        
        while(count-- > 0){
            let tmp = head.next;
            head.next = cur;
            cur = head;
            head = tmp;
        }
        head = cur;
    }
    return head;
};