/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {
    let current = root;
    
    while(current != null){
        let start = null;
        let prev = null;
        
        while(current != null){
            if(start === null){
                if(current.left){
                    start = current.left;  
                } else if (current.right){
                    start = current.right;
                }
                prev = start;
            }
            
            if(prev != null){
                if(current.left && prev != current.left){
                    prev = prev.next = current.left;
                }
                if(current.right && prev != current.right){
                    prev = prev.next = current.right;
                }
            }
            current = current.next;
        }
        current = start;
    }
    return root;
};
