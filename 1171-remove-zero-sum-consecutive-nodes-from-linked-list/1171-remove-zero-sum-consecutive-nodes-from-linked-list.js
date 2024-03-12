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
var removeZeroSumSublists = function(head) {
    let dummy = new ListNode(0);
    dummy.next = head;
    let p = dummy;
    let map = new Map();
    let pre = 0;
    while (p !== null) {
        pre = pre + p.val;
        map.set(pre, p);
        p = p.next;
    }
    pre = 0;
    p = dummy;
    while (p !== null) {
        pre = pre + p.val;
        if (map.has(pre)) {
            p.next = map.get(pre).next;
        }
        p = p.next;
    }
    return dummy.next;
};