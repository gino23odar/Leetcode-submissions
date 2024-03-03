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
    if(head == null || head.next == null) return null;
    let nodes = []
    let index = head;

    while(index){
        nodes.push(index);
        index = index.next;
    }
    if(nodes.length == n) return head.next;
   
    let tempNode = nodes.at(-(n+1));
    tempNode.next = tempNode.next.next;
    return head;
};