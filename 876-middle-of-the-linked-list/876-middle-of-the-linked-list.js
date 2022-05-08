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
var middleNode = function(head) {
    var arrNode = [];
    let currentNode = head;
    while(currentNode){
        arrNode.push(currentNode);
        if(currentNode.next){
            currentNode = currentNode.next;
        } else{
            currentNode = null;
        }
    }
    return arrNode[Math.floor(arrNode.length/2)];
};