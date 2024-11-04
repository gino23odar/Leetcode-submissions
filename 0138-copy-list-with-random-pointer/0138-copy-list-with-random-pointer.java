/*
// Definition for a Node.
class Node {
    int val;
    Node next;
    Node random;

    public Node(int val) {
        this.val = val;
        this.next = null;
        this.random = null;
    }
}
*/

class Solution {
    Map<Node, Node> map = new HashMap<>();
    
    public Node copyRandomList(Node head) {
        rec(head);
        return map.get(head);
    }
    private Node rec(Node head){
            if(head == null){
                return null;
            }
            if(!map.containsKey(head)){
                map.put(head, new Node(head.val));
                map.get(head).next = rec(head.next);
                map.get(head).random = rec(head.random);
            }
            return map.get(head);
        }
}
