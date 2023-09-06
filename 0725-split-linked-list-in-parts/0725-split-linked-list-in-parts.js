/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode[]}
 */
var splitListToParts = function(root, k) {
    const res = new Array(k).fill(null);
    let n = 0; 
    
    let curr = root;

    while (curr != null) {
        n++;
        curr = curr.next;
    }
    
    const width = Math.floor(n / k);
    let rem = n % k;
    
    let head = root;
    let tail = root;
    
    for (let i = 0; head != null; i++) {
        let m = width;
        
        if (rem > 0) {
            m += 1;
            rem--;
        }
        
        let tail = head;
        
        for (let j = 1; j < m; j++) {
            tail = tail.next;
        }
        
        const next = tail.next;
        tail.next = null;
        res[i] = head;
        head = next;
    }
    
    return res;
};