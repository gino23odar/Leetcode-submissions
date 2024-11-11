/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
class Solution {
    public ListNode mergeKLists(ListNode[] lists) {
        PriorityQueue<ListNode> pq = new PriorityQueue<>((a, b) -> a.val - b.val);
        
        for (ListNode list : lists) {
            if (list != null) {
                pq.add(list);
            }
        }

        
        ListNode dummy = new ListNode(0);
        ListNode current = dummy;
        
        // Merge nodes from the priority queue
        while (!pq.isEmpty()) {
            ListNode node = pq.poll();
            current.next = node;   // Link the node to the merged list
            current = current.next; // Move the pointer
            
            // If the polled node has a next node, add it to the queue
            if (node.next != null) {
                pq.add(node.next);
            }
        }
        
        return dummy.next;
    }
}