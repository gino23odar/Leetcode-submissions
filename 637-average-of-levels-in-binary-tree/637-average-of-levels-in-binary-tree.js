/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var averageOfLevels = function(root) {
    let ans  = [], queue = [];
    
    if(root === null) return ans;
    
    queue.push(root);
    
    while(queue.length !== 0){
        let len = queue.length;
        let level = [];
        while(len--){
            let current = queue.shift();
            level.push(current.val);
            if(current.left) queue.push(current.left);
            if(current.right) queue.push(current.right);
        }
    
        let total = 0, count = 0;
        
        level.forEach(function(item, index){
            total+= item;
            count++;
        })
        ans.push(total/count);
    }
    return ans;
};