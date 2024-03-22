/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    let slow = head
    let fast = head
    
    while(fast && fast.next){
        slow=slow.next
        fast=fast.next.next
    }
   
   let reversed = null
   let next = null
   let cur = slow
 
   while(cur){
  	    next = cur.next;
		cur.next = reversed;
		reversed = cur;
		cur = next;
   }
  
  while(reversed){
      if(reversed.val !== head.val) return false
      reversed = reversed.next
      head=head.next
  }
    
    return true
};