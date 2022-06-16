/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
    let ans = [];
    seriHelp(root, ans);
    return ans.join(',');
};

const seriHelp = (root, out) => {
    if(root === null){
        out.push('#');
        return;
    }
    out.push(root.val);
    seriHelp(root.left, out);
    seriHelp(root.right, out);
}

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    data = data.split(',');
    let idx = 0;
    
    function deseriHelp(data){
        if(idx > data.length || data[idx] === '#') return null;
        
        let root = new TreeNode(parseInt(data[idx]));
        idx++;
        root.left = deseriHelp(data);
        idx++;
        root.right = deseriHelp(data);
        return root;
    }
    return deseriHelp(data);
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */