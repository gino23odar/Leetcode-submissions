/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    let ans = [], queue = [];
    
    if(root === null) return queue;
    
    queue.push({level: 0, node: root});
    
    while(queue.length > 0){
        let cur = queue.shift();
        let level = cur.level;
        
        if(ans[level] == null) ans[level] = [];
        
        ans[level].push(cur.node.val);
        
        for(let child of cur.node.children) queue.push({level: level + 1, node: child});
    }
    return ans;
};