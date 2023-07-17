/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let stack1 = [], stack2 = [];
    while(l1){
        stack1.push(l1.val);
        l1 = l1.next;
    }
    while(l2){
        stack2.push(l2.val);
        l2 = l2.next;
    }
    
    let list = new ListNode(0)
    let sum = 0;
    
    while (stack1.length !== 0 || stack2.length !== 0 || sum > 0){
        sum = sum + (stack1.length === 0? 0: stack1.pop())
        sum = sum + (stack2.length === 0? 0: stack2.pop())

        list.val = sum % 10
		sum = Math.floor(sum/10);
        let head = new ListNode(sum)
        head.next = list
        list = head
    }
    if (list.val === 0){
        return list.next
    } else {
        return list
    }
};