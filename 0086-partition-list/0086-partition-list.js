/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
    const hdSmall = new ListNode(0)
    const hdLarge = new ListNode(0)

    let sNode = hdSmall, lNode = hdLarge

    while(head) {
        if(head.val < x) {
            sNode.next = head
            sNode = sNode.next
        } else {
            lNode.next = head
            lNode = lNode.next
        }
        head = head.next
    }
    sNode.next = hdLarge.next
    lNode.next = null

    return hdSmall.next
};