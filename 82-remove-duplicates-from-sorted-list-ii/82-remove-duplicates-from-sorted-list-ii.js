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
var deleteDuplicates = function(head) {
    var newH = new ListNode(0);
    var now = newH, temp = head, val = 0;
    
    while(temp){
        val = temp.val;
        if(temp.next &&  temp.next.val === val){
            temp = temp.next;
            while(temp && temp.val === val){
                temp = temp.next
            }
        } else {
            now.next = temp;
            now = temp;
            temp = temp.next;
            now.next = null;
        }
    }
    return newH.next;
};