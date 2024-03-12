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
var removeZeroSumSublists = function(head) {
    let node = head, map = {}, preSum = 0;
    while (node != null) {
        preSum += node.val
        //if preSum = 0, all prev values should be removed, head will point next and map/object will be cleared
        if (preSum === 0) {
            head = node.next;
            map = {};
        }
        //if values are not zero but its in the map. i.e. it was preSum somewhere in the past. 
        //find it from the start and till this node remove this value and assign it to next;
        else if (map[preSum] !== undefined) {
            let start = map[preSum], temp = preSum;
            while (start !== node) {
                start = start.next;
                temp += start.val;
                if (start === node) break;
                delete map[temp];
            }
            let prev = map[preSum];
            prev.next = node.next;
        }
        // it means not present anywhere and we just need it to add in the map
        else {
            map[preSum] = node;
        }
        //moving to next place
        node = node.next;
    }
    return head;
};