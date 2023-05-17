/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var pairSum = function(head) {
  let slo = head;
  let prv = null;
  let fst = head;  
  let largest = 0;

  while( fst && fst.next){
      fst = fst.next.next;
      let nxt = slo.next;
      slo.next = prv;
      prv = slo;
      slo = nxt;
  }

  while (slo){
      largest = Math.max(largest, (slo.val + prv.val));
      prv = prv.next;
      slo = slo.next;
  }
    return largest;
};