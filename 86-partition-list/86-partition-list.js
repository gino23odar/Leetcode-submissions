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
    let dummyF = new ListNode(0), dummyB = new ListNode(0), front = dummyF, back = dummyB, cur = head;
    
    while(cur){
        if(cur.val < x){
            front.next = cur;
            front = cur;
        } else {
            back.next = cur;
            back = cur;
        }
        cur = cur.next;
    }
    //console.log(dummyF);
    //console.log(front);
    //console.log(dummyB);
    front.next = dummyB.next;
    back.next = null;
    return dummyF.next;
};