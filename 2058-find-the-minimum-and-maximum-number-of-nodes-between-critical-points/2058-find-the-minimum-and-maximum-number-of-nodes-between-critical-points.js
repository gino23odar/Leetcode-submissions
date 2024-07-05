/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
var nodesBetweenCriticalPoints = function(head) {
    const idx = [];
    let i=1;
    let curr = head;
    let prev = undefined;
    while(curr.next) {
        if((curr.val > prev && curr.val > curr.next.val )
           || (curr.val < prev && curr.val < curr.next.val)) {
            idx.push(i)
        }
        i++;
        prev = curr.val;
        curr = curr.next;
    }
    if(idx.length<2)
        return [-1,-1]
    let minDistance = idx[1] - idx[0];
    const maxDistance = idx[idx.length - 1] - idx[0];
    for (let i = 1; i < idx.length-1; i++) {
        minDistance = Math.min(minDistance, idx[i+1] - idx[i]);
    }
    return [minDistance, maxDistance];
};