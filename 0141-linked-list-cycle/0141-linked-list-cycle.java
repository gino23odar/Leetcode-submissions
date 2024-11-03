/**
 * Definition for singly-linked list.
 * class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) {
 *         val = x;
 *         next = null;
 *     }
 * }
 */
public class Solution {
    public boolean hasCycle(ListNode head) {
        if(head == null || head.next == null){
            return false;
        }
        
        ListNode slw = head;
        ListNode fst = head.next;
        
        while(fst != null && fst.next != null){
            fst = fst.next.next;
            slw = slw.next;
            if(fst == slw){
                return true;
            }
        }
        return false;
    }
}