/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {number} a
 * @param {number} b
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeInBetween = function(list1, a, b, list2) {
    let start = list1;
    let end = list1;
    
    for (let i = 0; i <= b && start != null && end != null; i++) {
        if (i < a - 1) start = start.next;
        if (i <= b) end = end.next;
    }
    
    let tail = list2;
    
    while (tail.next != null) {
        tail = tail.next;
    }
    
    start.next = list2;
    tail.next = end;
    
    return list1;

};