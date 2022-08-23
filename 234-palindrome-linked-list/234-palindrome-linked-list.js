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
    var arrNode = [];
    let currentNode = head;
    while(currentNode){
        arrNode.push(currentNode.val);
        if(currentNode.next){
            currentNode = currentNode.next;
        } else{
            currentNode = null;
        }
    }
    
    let testArr = [...arrNode];
    arrNode.reverse();
    
    let arrNodeToString = arrNode.toString();
    let testArrToString = testArr.toString();
    
    return arrNodeToString === testArrToString
};