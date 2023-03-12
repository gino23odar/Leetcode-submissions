/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    if(lists === null || lists.length === 0) return null;
    lists = lists.filter(a => a !== null && a.length !== 0).sort((a,b) => { 
                         return b.val - a.val});
    
    let res = lists[0];
    for(let i = 1; i < lists.length; i++) {
        res = merge(res, lists[i]);
    }
    return res || null;
};

var merge = function(a, b) {
    let res = b;
    b = b.next;
    let tem = res;
    while(a!== null && b!== null) {
        if(a.val > b.val) {
            tem.next = b;
            b = b.next;
        } else {
            tem.next = a;
            a = a.next;
        }
        tem = tem.next;
    }
    if(a !== null) tem.next = a;
    if(b !== null) tem.next = b;
    return res;
}