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
var oddEvenList = function(head) {
  if (!head) return head;

  // Initialize the two pointers.
  let odd = head;
  let even = head.next;

  // Traverse the list and rearrange the nodes.
  while (odd.next && odd.next.next) {
    let tmp = odd.next;
    odd.next = odd.next.next;
    odd = odd.next;
    tmp.next = odd.next;
  }

  // Link the even and odd lists.
  odd.next = even;

  return head;
};

